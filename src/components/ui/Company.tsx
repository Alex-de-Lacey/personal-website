import { useLayoutEffect, useRef, useState } from 'react'

type CompanyProps = {
  img?: string
  companyName: string
  roleDescription: string
  index?: number
  whiteBackground?: boolean
}

export default function Company({ img, companyName, roleDescription, index = 0, whiteBackground = false }: CompanyProps) {
  const isEven = typeof index === 'number' && index % 2 === 0
  const companyNameRef = useRef<HTMLDivElement | null>(null)
  const roleDescriptionRef = useRef<HTMLDivElement | null>(null)
  const [textHeight, setTextHeight] = useState(0)
  const [companyNameHeight, setCompanyNameHeight] = useState(0)

  useLayoutEffect(() => {
    const element = roleDescriptionRef.current
    if (!element) return

    const updateHeight = () => {
      setTextHeight(element.offsetHeight || 0)
    }

    updateHeight()

    const resizeObserver = new ResizeObserver(() => updateHeight())
    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [roleDescription])

  useLayoutEffect(() => {
    const element = companyNameRef.current
    if (!element) return

    const updateCompanyNameHeight = () => {
      setCompanyNameHeight(element.offsetHeight || 0)
    }

    updateCompanyNameHeight()

    const resizeObserver = new ResizeObserver(() => updateCompanyNameHeight())
    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [companyName])

  return (
    <div className={`company-card flex flex-col gap-2 ${isEven ? '' : 'flex-col-reverse'} items-center group`}>
      <div aria-hidden="true" style={{ height: Math.max(0, textHeight - companyNameHeight) }} />
      <div ref={companyNameRef} className="w-24 md:w-36 text-center">
        <p className="break-words">{companyName}</p>
      </div>
      <img
        src={img}
        alt="company image"
        className={`w-24 h-24 md:w-36 md:h-36 rounded-full object-cover border-4 border-secondary transition-transform duration-200 ease-out hover:scale-110 ${whiteBackground ? 'bg-white' : ''}`}
      />
      <div ref={roleDescriptionRef} className="w-24 md:w-36 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <p className="break-words">{roleDescription}</p>
      </div>
    </div>
  )
}



