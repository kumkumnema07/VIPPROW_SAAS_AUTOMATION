import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            X
          </span>
        </div>

        {/* Center: Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest text-zinc-400">
          {["GROK", "API", "COMPANY", "COLOSSUS", "CAREERS", "NEWS"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Right: CTA */}
        <div>
          <Link
            href="#"
            className="rounded-full border border-zinc-600 px-5 py-2 text-sm font-medium tracking-wide text-white hover:border-white transition"
          >
            TRY GROK
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </header>
  );
}
