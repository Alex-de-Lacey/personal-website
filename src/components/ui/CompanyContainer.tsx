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

function Line() {
  return <div aria-hidden="true" className="h-1 bg-green-800/100 flex-1 rounded-md" />
}

export default function CompanyContainer({ items, className = '', start=2019, end = new Date().getFullYear() }: CompanyContainerProps) {
  return (
    <div className={`w-full flex items-center${className}`}>
      <p>{start}</p>
      <Line />
      {items.map((item, index) => (
        <>
          <Company key={`${item.text}-${index}`} img={item.img} text={item.text} index={index} />
          <Line />
        </>
      ))}
      <p>{end}</p>
    </div>
  )
}



