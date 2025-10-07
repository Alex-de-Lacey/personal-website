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
  return (
    <div className={`w-full flex items-center${className}`}>
      <Year year={startYear} />
      <Line />
      {items.map((item, index) => (
        <>
          <Company key={`${item.companyName}-${index}`} img={item.img} companyName={item.companyName} roleDescription={item.roleDescription} index={index} whiteBackground={item.whiteBackground} />
          <Line />
        </>
      ))}
      <Year year={endYear} />
    </div>
  )
}



