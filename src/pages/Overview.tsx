import placeholderImage from '../assets/placeholder.jpg'

export default function Overview() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        <section className="flex flex-col md:flex-row items-start md:items-center text-left gap-6">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Hi, I'm Alex 👋</h1>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    I’m a Product manager by trade. I’m also  product design enthusiast, software developer, but only to the extent it helps me research & ship great products.
                </p>
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
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


