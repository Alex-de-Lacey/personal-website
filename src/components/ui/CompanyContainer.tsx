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
  return <h3 className="m-2 text-primary">{year}</h3>
}

export default function CompanyContainer({ items, className = '', startYear=2019, endYear = new Date().getFullYear() }: CompanyContainerProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const [companyNameHeights, setCompanyNameHeights] = useState<number[]>([])
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([])
  const companyNameRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Measure each description individually and find the tallest one
    const heights = descriptionRefs.current
      .filter(ref => ref !== null)
      .map(ref => ref!.offsetHeight)
    
    const maxHeight = Math.max(...heights, 0)
    setContainerHeight(maxHeight)

    // Measure each company name height for compensating spacers
    const nameHeights = companyNameRefs.current
      .filter(ref => ref !== null)
      .map(ref => ref!.offsetHeight)
    
    setCompanyNameHeights(nameHeights)
  }, [items])

  return (
    <>
      {/* Hidden descriptions to calculate max height */}
      <div className="invisible absolute -top-[9999px]">
        {items.map((item, index) => (
          <p 
            key={`hidden-description-${index}`}
            ref={(el) => { descriptionRefs.current[index] = el }}
            className="text-primary text-center"
          >
            {item.roleDescription}
          </p>
        ))}
      </div>

      {/* Hidden company names to measure heights */}
      <div className="invisible absolute -top-[9999px]">
        {items.map((item, index) => (
          <div 
            key={`hidden-name-${index}`}
            ref={(el) => { companyNameRefs.current[index] = el }}
            className="w-24 md:w-36 text-center"
          >
            <p className="break-words">{item.companyName}</p>
          </div>
        ))}
      </div>

      {/* Description above timeline (for odd indices) */}
      <div 
        className="relative my-4" 
        style={{ height: containerHeight > 0 ? `${containerHeight}px` : 'auto' }}
      >
        {items.map((item, index) => (
          <p 
            key={`description-above-${index}`}
            className={`absolute inset-0 text-primary text-center transition-opacity duration-300 ease-in-out ${
              hoveredIndex === index && index % 2 !== 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
              nameHeight={companyNameHeights[index] || 0}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
            <Line />
          </>
        ))}
        <Year year={endYear} />
      </div>

      {/* Description below timeline (for even indices) */}
      <div 
        className="relative my-4" 
        style={{ height: containerHeight > 0 ? `${containerHeight}px` : 'auto' }}
      >
        {items.map((item, index) => (
          <p 
            key={`description-below-${index}`}
            className={`absolute inset-0 text-primary text-center transition-opacity duration-300 ease-in-out ${
              hoveredIndex === index && index % 2 === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {item.roleDescription}
          </p>
        ))}
      </div>
    </>
  )
}



