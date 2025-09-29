import PageLayout from "../components/layout/PageLayout"
import placeholderSite from '../assets/placeholder-site.png'

export default function About() {
  return (
    <PageLayout>
        <section className="flex flex-col md:flex-row md:justify-between items-start  text-left gap-6 ">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About Me</h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    I'm a Product Manager
                </p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    I am also a self-taught programmer. I don't think I'm excellent at this, but find it very useful for the delivery side of product management, especially for commuunicating with engineers to find compromises and for hacking together prototyes that can validate ideas. 
                </p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    I have a passion for design. Not only user experience in graphical user interfaces, but also the design of everyday things. This also extends to developing things that are hidden to some people like APIs.
                </p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    I value shipping quickly and iterating based on feedback, 
                </p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                  I'm currently learning AWS Cloud Developer certificate.
                </p>
            </div>
            <img
              src={placeholderSite}
              alt="Alex portrait"
              className="w-24 h-24 md:w-64 md:h-64 rounded-full object-cover border border-zinc-700/50"
            />
        </section>
      </PageLayout>
  )
}


