import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%)]" />
      <div className="absolute left-[-120px] top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-80px] -z-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300 backdrop-blur">
            Smart Shopping Experience
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Discover Premium Products for Your
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Modern Lifestyle
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Explore curated collections, premium quality essentials, and stylish
            products designed to elevate your everyday life. Clean design,
            trusted quality, and a shopping experience made to feel effortless.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              Shop Now
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-white">10K+</h3>
              <p className="mt-1 text-sm text-slate-400">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">500+</h3>
              <p className="mt-1 text-sm text-slate-400">Premium Products</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">99%</h3>
              <p className="mt-1 text-sm text-slate-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 blur-2xl" />

          <div className="relative mx-auto max-w-xl rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
                alt="Premium product"
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Trending
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  Smart Essentials
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Premium picks designed for style, comfort, and performance.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  New Arrival
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  Limited Edition
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Shop exclusive items with modern aesthetics and top quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}