import portraitImage from '../assets/cartoon-portrait_u3ic2ju3ic2ju3ic.png'
import PageLayout from '../components/layout/PageLayout'


export default function Overview() {
  return (
    <PageLayout>
      <section className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="space-y-4">
              <h1>Hi, I'm Alex 👋</h1>
              <p>I’m a Product manager by trade.</p>
              <p>I currently work in the product team at <a href="https://www.purchaseplus.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">PurchasePlus</a>, a procurement platform. I help build the integrations, core platform, APIs, and AI features that make procurement technology seamless and scalable. </p>
          </div>
          <img
            src={portraitImage}
            alt="Alex portrait"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 self-center md:self-auto shrink-0 rounded-full object-cover border border-zinc-700/50 hover:scale-105 transition-transform duration-200 ease-out"
          />
      </section>
    </PageLayout>
  )
}


