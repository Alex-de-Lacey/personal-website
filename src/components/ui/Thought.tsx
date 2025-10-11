
type Thought = {
    title: string
    image: string
    date: string
    link: string
  }

export default function Thought({ title, image, date, link }: Thought) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-4 w-full max-w-sm md:max-w-none border border-secondary/50 rounded-md p-4 hover:scale-105 transition-transform duration-200 ease-out text-center shadow-m hover:shadow-l h-full">
            <h5 className="text-secondary flex justify-center items-center flex-1">{title}</h5>
            <img src={image} alt={title} className="w-1/2 aspect-square rounded-full object-cover border border-secondary/50 mx-auto"/>
            <p className="text-right text-secondary/60">{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </a>
    )
}