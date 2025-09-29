import Company from './Company'

type CompanyItem = {
  img?: string
  text: string
}

type CompanyContainerProps = {
  items: CompanyItem[]
  className?: string
}

export default function CompanyContainer({ items, className = '' }: CompanyContainerProps) {
  return (
    <div className={`flex gap-8 justify-between ${className}`}>
      {items.map((item, index) => (
        <Company key={`${item.text}-${index}`} img={item.img} text={item.text} index={index} />
      ))}
    </div>
  )
}



