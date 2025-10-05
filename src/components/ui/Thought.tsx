
type Thought = {
    title: string
    image: string
    date: string
    link: string
  }

export default function Thought({ title, image, date, link }: Thought) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 w-1/2 border border-zinc-700/50 rounded-md p-4 hover:scale-105 transition-transform duration-200 ease-out">
            <h3 className="min-h-[3rem] flex items-start">{title}</h3>
            <img src={image} alt={title} className="w-24 h-24 md:w-64 md:h-64 rounded-full object-cover border border-zinc-700/50"/>
            <p>{date}</p>
        </a>
    )
}