import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-purple-500/10 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Limited Offer
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Get 30% Off on Selected Premium Products
              </h2>
              <p className="mt-4 text-slate-300">
                Upgrade your lifestyle with our curated picks. Shop exclusive
                deals before the offer ends.
              </p>
            </div>

            <Link
              href="/shop"
              className="inline-flex w-fit items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-105"
            >
              Shop the Offer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}