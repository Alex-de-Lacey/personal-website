
type Thought = {
    title: string
    image: string
    date: string
    link: string
  }

export default function Thought({ title, image, date, link }: Thought) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 w-1/2 border border-zinc-700/50 rounded-md p-4 hover:scale-105 transition-transform duration-200 ease-out text-center">
            <h3 className="min-h-[3rem] flex items-start justify-center text-xl font-semibold">{title}</h3>
            <img src={image} alt={title} className="w-24 h-24 md:w-64 md:h-64 rounded-full object-cover border border-zinc-700/50 mx-auto"/>
            <p className="text-right text-zinc-500">{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </a>
    )
}