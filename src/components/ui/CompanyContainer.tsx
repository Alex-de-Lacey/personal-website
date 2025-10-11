import { useState, useRef, useEffect } from 'react'
import Company from './Company'

type CompanyItem = {
  img?: string
  companyName: string
  roleDescription: string
  whiteBackground?: boolean
}

type CompanyContainerProps = {
  items: CompanyItem[]
  className?: string
  startYear?: number
  endYear?: number
}

function Line() {
  return <div aria-hidden="true" className="h-1 bg-secondary flex-1 rounded-md" />
}

function Year({ year }: { year: number }) {
  return <h3 className="m-2 text-quaternary">{year}</h3>
}

export default function CompanyContainer({ items, className = '', startYear=2019, endYear = new Date().getFullYear() }: CompanyContainerProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const hiddenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hiddenRef.current) {
      setContainerHeight(hiddenRef.current.offsetHeight)
    }
  }, [items])

  return (
    <>
      {/* Hidden descriptions to calculate max height */}
      <div ref={hiddenRef} className="invisible absolute -top-[9999px]">
        {items.map((item, index) => (
          <p key={`hidden-${index}`} className="text-primary text-center">
            {item.roleDescription}
          </p>
        ))}
      </div>

      {/* Description above timeline (for even indices) */}
      <div 
        className="relative mb-4" 
        style={{ height: containerHeight > 0 ? `${containerHeight}px` : 'auto' }}
      >
        {items.map((item, index) => (
          <p 
            key={`description-above-${index}`}
            className={`absolute inset-0 text-primary text-center transition-opacity duration-300 ease-in-out ${
              hoveredIndex === index && index % 2 === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {item.roleDescription}
          </p>
        ))}
      </div>

      <div className={`w-full flex items-center ${className}`}>
        <Year year={startYear} />
        <Line />
        {items.map((item, index) => (
          <>
            <Company 
              key={`${item.companyName}-${index}`} 
              img={item.img} 
              companyName={item.companyName} 
              roleDescription={item.roleDescription} 
              index={index} 
              whiteBackground={item.whiteBackground}
              isEven={index % 2 === 0}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
            <Line />
          </>
        ))}
        <Year year={endYear} />
      </div>

      {/* Description below timeline (for odd indices) */}
      <div 
        className="relative mt-4" 
        style={{ height: containerHeight > 0 ? `${containerHeight}px` : 'auto' }}
      >
        {items.map((item, index) => (
          <p 
            key={`description-below-${index}`}
            className={`absolute inset-0 text-primary text-center transition-opacity duration-300 ease-in-out ${
              hoveredIndex === index && index % 2 !== 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {item.roleDescription}
          </p>
        ))}
      </div>
    </>
  )
}



