
type CompanyProps = {
  img?: string
  text: string
  index?: number
}

export default function Company({ img, text, index = 0 }: CompanyProps) {
  const isEven = typeof index === 'number' && index % 2 === 0

  return (
    <div className={`flex flex-col gap-2 ${isEven ? '' : 'flex-col-reverse'}`}>
      <p>{text}</p>
      <img
        src={img}
        alt="company image"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border border-zinc-700/50"
      />
    </div>
  )
}



