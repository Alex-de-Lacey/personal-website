import type { Plugin } from 'vite'

/**
 * Strips identifying metadata from emitted image assets at build time.
 *
 * Removes — losslessly, with no re-encoding:
 *   - PNG ancillary text/EXIF/time chunks: eXIf, iTXt, tEXt, zTXt, tIME
 *   - JPEG metadata segments: APP1 (EXIF/XMP), APP13 (IPTC/Photoshop), COM (comments)
 *
 * Keeps color-critical data (PNG iCCP/sRGB/gAMA/cHRM, JPEG APP0 JFIF / APP2 ICC /
 * APP14 Adobe) so images render identically.
 *
 * Implemented with web-standard Uint8Array/DataView only — no Node types or deps.
 *
 * Note: only covers images that pass through the bundle (i.e. imported from src/).
 * Files dropped in a `public/` dir are copied verbatim and are NOT processed.
 */

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]
const PNG_STRIP_CHUNKS = new Set(['eXIf', 'iTXt', 'tEXt', 'zTXt', 'tIME'])

function concat(parts: Uint8Array[]): Uint8Array {
  const total = parts.reduce((n, p) => n + p.length, 0)
  const out = new Uint8Array(total)
  let offset = 0
  for (const p of parts) {
    out.set(p, offset)
    offset += p.length
  }
  return out
}

function isPngSignature(buf: Uint8Array): boolean {
  return PNG_SIGNATURE.every((b, i) => buf[i] === b)
}

function stripPng(buf: Uint8Array): Uint8Array {
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength)
  const out: Uint8Array[] = [buf.subarray(0, 8)]
  let i = 8
  while (i + 8 <= buf.length) {
    const len = view.getUint32(i)
    const type = String.fromCharCode(buf[i + 4], buf[i + 5], buf[i + 6], buf[i + 7])
    const next = i + 12 + len
    if (next > buf.length) break // truncated/corrupt — bail out, leave rest intact
    if (!PNG_STRIP_CHUNKS.has(type)) out.push(buf.subarray(i, next))
    if (type === 'IEND') {
      i = next
      break
    }
    i = next
  }
  if (i < buf.length) out.push(buf.subarray(i))
  return concat(out)
}

function stripJpeg(buf: Uint8Array): Uint8Array {
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength)
  if (view.getUint16(0) !== 0xffd8) return buf
  const out: Uint8Array[] = [buf.subarray(0, 2)] // SOI
  let i = 2
  while (i + 1 < buf.length) {
    if (buf[i] !== 0xff) break // not a marker — entropy-coded data, copy the rest
    const marker = buf[i + 1]
    // Standalone markers (no length): SOI, EOI, RSTn
    if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7)) {
      out.push(buf.subarray(i, i + 2))
      i += 2
      continue
    }
    if (marker === 0xda) break // Start of Scan — image data follows
    const segLen = view.getUint16(i + 2)
    const next = i + 2 + segLen
    if (next > buf.length) break
    // 0xE1 = APP1 (EXIF/XMP), 0xED = APP13 (IPTC), 0xFE = COM
    const drop = marker === 0xe1 || marker === 0xed || marker === 0xfe
    if (!drop) out.push(buf.subarray(i, next))
    i = next
  }
  if (i < buf.length) out.push(buf.subarray(i)) // scan data + EOI
  return concat(out)
}

export default function stripImageMetadata(): Plugin {
  return {
    name: 'strip-image-metadata',
    apply: 'build',
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset') continue
        const name = file.fileName.toLowerCase()
        const isPng = name.endsWith('.png')
        const isJpeg = name.endsWith('.jpg') || name.endsWith('.jpeg')
        if (!isPng && !isJpeg) continue
        if (typeof file.source === 'string') continue

        const source = file.source as Uint8Array
        if (isPng && isPngSignature(source)) {
          file.source = stripPng(source)
        } else if (isJpeg) {
          file.source = stripJpeg(source)
        }
      }
    },
  }
}
