import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import stripImageMetadata from './vite-plugin-strip-image-metadata'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), stripImageMetadata()],
})
