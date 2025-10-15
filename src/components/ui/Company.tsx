import { useRef } from 'react'

type CompanyProps = {
  img?: string
  companyName: string
  roleDescription: string
  index?: number
  whiteBackground?: boolean
  isEven?: boolean
  nameHeight?: number
  onHover: () => void
  onLeave: () => void
}

export default function Company({ img, companyName, whiteBackground = false, isEven = false, nameHeight = 0, onHover, onLeave }: CompanyProps) {
  const companyNameRef = useRef<HTMLDivElement | null>(null)

  return (
    <div 
      className="company-card flex flex-col gap-2 items-center group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Even: Name above image, spacer below */}
      {/* Odd: Spacer above, name below image */}
      {isEven ? (
        <>
          <div ref={companyNameRef} className="w-24 md:w-36 text-center">
            <p className="break-words">{companyName}</p>
          </div>
          <img
            src={img}
            alt="company image"
            className={`w-24 h-24 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary transition-transform duration-200 ease-out hover:scale-110 ${whiteBackground ? 'bg-white' : ''}`}
          />
          <div style={{ height: nameHeight > 0 ? `${nameHeight}px` : '0' }} aria-hidden="true"/>
        </>
      ) : (
        <>
          <div style={{ height: nameHeight > 0 ? `${nameHeight}px` : '0' }} aria-hidden="true"/>
          <img
            src={img}
            alt="company image"
            className={`w-24 h-24 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary transition-transform duration-200 ease-out hover:scale-110 ${whiteBackground ? 'bg-white' : ''}`}
          />
          <div ref={companyNameRef} className="w-24 md:w-36 text-center">
            <p className="break-words">{companyName}</p>
          </div>
        </>
      )}
    </div>
  )
}



