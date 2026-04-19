const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Verified Buyer",
    text: "Absolutely love the quality and the design. The shopping experience felt smooth and premium from start to finish.",
  },
  {
    name: "Michael Hasan",
    role: "Returning Customer",
    text: "Fast delivery, beautiful packaging, and the product quality exceeded my expectations.",
  },
  {
    name: "Nadia Khan",
    role: "Happy Client",
    text: "This is one of the cleanest and most trustworthy online stores I have shopped from recently.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-slate-300">
            Real feedback from customers who trust our products, service, and
            overall shopping experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex text-cyan-400">★★★★★</div>
              <p className="text-sm leading-7 text-slate-300">“{item.text}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}