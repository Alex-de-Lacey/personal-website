import PageLayout from "../components/layout/PageLayout"
import placeholderSite from '../assets/placeholder-site.png'

export default function About() {
  return (
    <PageLayout>
        <section className="flex flex-col md:flex-row items-start md:items-center text-left gap-6">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About Me</h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    I'm a Product Manager
                </p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    I specialise in this
                </p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    I value this
                </p> s
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    I am also a self-taught programmer. I find it very useful for the delivery side of product management.
                </p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                  I'm currently learning this...
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


