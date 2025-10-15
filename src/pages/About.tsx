import PageLayout from "../components/layout/PageLayout"
import placeholderSite from '../assets/placeholder-site.png'

export default function About() {
  return (
    <PageLayout>
        <section className="flex md:flex-row md:items-center gap-6">
            <div className="space-y-4">
                <h1>About Me</h1>
                <p>
                  I started my career as a Business Analyst, gathering requirements and mapping systems. Over time I realised I was less interested in documenting what to build and more interested in why we were building it, how it would work, and what impact it would have on the business. This naturally drew me to Product Management.
                </p>
                <p>
                  I also taught myself to code along the way. I’ve found this invaluable for delivery, helping me communicate with developers, understand technical trade-offs and account for them in product decisions, and prototype ideas quickly with little investment.
                </p>
                <p>
                  I’m also interested in design. I think about design in the same way whether it’s an API, a physical space, or the way a process flows. When something feels intuitive, effortless and elegant, it’s well designed.
                </p>
                <p>
                Outside of work, I enjoy reading, training martial arts, language learning and cooking international cuisines.
                </p>
                <p>
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