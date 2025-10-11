import { useRef } from 'react'

type CompanyProps = {
  img?: string
  companyName: string
  roleDescription: string
  index?: number
  whiteBackground?: boolean
  isEven?: boolean
  onHover: () => void
  onLeave: () => void
}

export default function Company({ img, companyName, whiteBackground = false, isEven = false, onHover, onLeave }: CompanyProps) {
  const companyNameRef = useRef<HTMLDivElement | null>(null)

  return (
    <div 
      className={`company-card flex flex-col gap-2 ${isEven ? '' : 'flex-col-reverse'} items-center group`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div aria-hidden="true"/>
      <div ref={companyNameRef} className="w-24 md:w-36 text-center">
        <p className="break-words">{companyName}</p>
      </div>
      <img
        src={img}
        alt="company image"
        className={`w-24 h-24 md:w-36 md:h-36 rounded-full object-cover border-4 border-secondary transition-transform duration-200 ease-out hover:scale-110 ${whiteBackground ? 'bg-white' : ''}`}
      />
    </div>
  )
}



