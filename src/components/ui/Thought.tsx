
type Thought = {
    title: string
    image: string
    date: string
    link: string
  }

export default function Thought({ title, image, date, link }: Thought) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 w-1/2 border border-secondary/20 rounded-md p-4 hover:scale-105 transition-transform duration-200 ease-out text-center shadow-m hover:shadow-l">
            <h5 className="min-h-[3rem] text-secondary flex justify-center">{title}</h5>
            <img src={image} alt={title} className="w-24 h-24 md:w-64 md:h-64 rounded-full object-cover border border-secondary/20 mx-auto"/>
            <p className="text-right text-secondary/60">{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </a>
    )
}