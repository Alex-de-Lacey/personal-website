import Company from './Company'

type CompanyItem = {
  img?: string
  text: string
}

type CompanyContainerProps = {
  items: CompanyItem[]
  className?: string
  start?: number
  end?: number
}


export default function CompanyContainer({ items, className = '', start=2019, end = new Date().getFullYear() }: CompanyContainerProps) {
  return (
    <div className={`flex gap-8 justify-between items-center ${className}`}>
      <p>{start}</p>
      {items.map((item, index) => (
        <Company key={`${item.text}-${index}`} img={item.img} text={item.text} index={index} />
      ))}
      <p>{end}</p>
    </div>
  )
}



