const categories = [
  {
    title: "Smart Watches",
    description: "Premium designs with powerful features for your daily lifestyle.",
  },
  {
    title: "Headphones",
    description: "Crystal-clear sound, deep bass, and modern wireless comfort.",
  },
  {
    title: "Fashion Essentials",
    description: "Minimal, stylish, and timeless picks for modern shoppers.",
  },
  {
    title: "Accessories",
    description: "Curated add-ons that complete your premium everyday look.",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Categories
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Shop by Premium Collections
          </h2>
          <p className="mt-4 text-slate-300">
            Discover thoughtfully selected categories designed for modern style,
            comfort, and everyday performance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl font-bold text-cyan-400">
                {category.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {category.description}
              </p>
              <button className="mt-6 text-sm font-semibold text-cyan-400 transition group-hover:translate-x-1">
                Explore More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}