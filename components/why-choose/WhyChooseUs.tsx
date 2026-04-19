const features = [
  {
    title: "Premium Quality",
    description: "Every product is selected for quality, durability, and design.",
  },
  {
    title: "Fast Delivery",
    description: "Quick and reliable shipping to keep your shopping effortless.",
  },
  {
    title: "Secure Payment",
    description: "Safe checkout experience with trusted and secure payment methods.",
  },
  {
    title: "Customer Support",
    description: "Friendly support team ready to help you whenever you need it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            We Make Premium Shopping Feel Easy
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-slate-300">
            From product quality to customer support, every detail is designed
            to give you a trusted and premium shopping experience from start to
            finish.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 font-bold text-cyan-400">
                ✓
              </div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}