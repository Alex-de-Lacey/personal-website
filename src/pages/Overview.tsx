import portraitImage from '../assets/cartoon-portrait_u3ic2ju3ic2ju3ic.png'
import PageLayout from '../components/layout/PageLayout'


export default function Overview() {
  return (
    <PageLayout>
      <section className="flex md:flex-row md:items-center gap-6">
          <div className="space-y-4">
              <h1>Hi, I'm Alex 👋</h1>
              <p>I’m a Product manager by trade.</p>
              <p>I currently work at PurchasePlus where I spend most of my time making our platform streamlined and scalable with software integrations.</p>
          </div>
          <img
            src={portraitImage}
            alt="Alex portrait"
            className="w-24 h-24 md:w-64 md:h-64 rounded-full object-cover border border-zinc-700/50 hover:scale-105 transition-transform duration-200 ease-out"
          />
      </section>
    </PageLayout>
  )
}


