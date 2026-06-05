"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#C8A27A]/10 bg-[#0B0908]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg tracking-[0.25em] text-[#F5E9DC]">
          DESTELLOS
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/explorar"
            className="text-sm uppercase tracking-[0.15em] text-[#DDD0C2] transition hover:text-[#C8A27A]"
          >
            Explorar
          </Link>

          <Link
            href="/destello"
            className="text-sm uppercase tracking-[0.15em] text-[#DDD0C2] transition hover:text-[#C8A27A]"
          >
            {"\u00bfQu\u00e9 es?"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
