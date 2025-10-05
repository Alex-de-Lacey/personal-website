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

export default function CompanyContainer({ items, className = '', startYear=2019, endYear = new Date().getFullYear() }: CompanyContainerProps) {
  return (
    <div className={`w-full flex items-center${className}`}>
      <p>{startYear}</p>
      <Line />
      {items.map((item, index) => (
        <>
          <Company key={`${item.companyName}-${index}`} img={item.img} companyName={item.companyName} roleDescription={item.roleDescription} index={index} whiteBackground={item.whiteBackground} />
          <Line />
        </>
      ))}
      <p>{endYear}</p>
    </div>
  )
}



