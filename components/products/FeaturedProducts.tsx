const products = [
  {
    name: "Luxury Smart Watch",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Wireless Headphone",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Minimal Backpack",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Premium Sunglasses",
    price: "$69",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Best Sellers
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-slate-300">
              Handpicked products that combine quality, design, and customer
              satisfaction in one place.
            </p>
          </div>

          <button className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400">
            View All Products
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-cyan-400">{product.price}</p>

                <button className="mt-5 w-full rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.02]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}