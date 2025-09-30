import { useLayoutEffect, useRef, useState } from 'react'

type CompanyProps = {
  img?: string
  text: string
  index?: number
}

export default function Company({ img, text, index = 0 }: CompanyProps) {
  const isEven = typeof index === 'number' && index % 2 === 0
  const textContainerRef = useRef<HTMLDivElement | null>(null)
  const [textHeight, setTextHeight] = useState(0)

  useLayoutEffect(() => {
    const element = textContainerRef.current
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
  }, [])

  return (
    <div className={`flex flex-col gap-2 ${isEven ? '' : 'flex-col-reverse'} items-center`}>
      <div ref={textContainerRef}>
        <p>{text}</p>
      </div>
      <img
        src={img}
        alt="company image"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border border-zinc-700/50"
      />
      <div aria-hidden="true" style={{ height: textHeight }} />
    </div>
  )
}



