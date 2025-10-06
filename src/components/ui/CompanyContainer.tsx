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
  return <div aria-hidden="true" className="h-1 bg-green-800/100 flex-1 rounded-md" />
}

function Year({ year }: { year: number }) {
  return <p className="text-xl font-medium text-green-500/100 m-2">{year}</p>
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



