import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            Jafar<span className="text-cyan-400">Store</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            Premium ecommerce experience built for modern shoppers who value
            style, quality, and simplicity.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <Link href="/" className="transition hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="transition hover:text-cyan-400">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-cyan-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-cyan-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <Link href="/faq" className="transition hover:text-cyan-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="transition hover:text-cyan-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-cyan-400">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/returns" className="transition hover:text-cyan-400">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Subscribe to get updates on new arrivals, special offers, and
            exclusive deals.
          </p>

          <form className="mt-5 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-400"
            />
            <button
              type="submit"
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.02]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 JafarStore. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="transition hover:text-cyan-400">
              Facebook
            </Link>
            <Link href="#" className="transition hover:text-cyan-400">
              Instagram
            </Link>
            <Link href="#" className="transition hover:text-cyan-400">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}