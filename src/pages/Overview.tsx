import placeholderImage from '../assets/placeholder.jpg'
import Company from '../components/ui/Company'

export default function Overview() {
  return (
    <main className="max-w-5xl mx-auto">
        <section className="flex flex-col md:flex-row md:items-center ">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Hi, I'm Alex 👋</h1>
                <p>
                    I’m a Product manager by trade.
                </p>
                <p>
                I currently work at PurchasePlus where I spend most of my time making our platform more streamlined and scalable with software integrations. 
                </p>
            </div>
            <img
              src={placeholderImage}
              alt="Alex portrait"
              className="w-24 h-24 md:w-64 md:h-64 rounded-full object-cover border border-zinc-700/50"
            />
        </section>
    </main>
  )
}


