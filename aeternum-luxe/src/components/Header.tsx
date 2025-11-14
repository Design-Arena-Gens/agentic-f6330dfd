"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/collections", label: "Collections" },
  { href: "/personnalisation", label: "Personnalisation" },
  { href: "/heritage", label: "Heritage" },
  { href: "/sport", label: "Sport" },
  { href: "/astrale", label: "Astrale" },
  { href: "/apropos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm uppercase tracking-[0.32em] text-white/80">
        <Link
          href="/"
          className="font-heading text-xl tracking-[0.6em] text-white hover:text-white"
        >
          Aeternum
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-cyan-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col space-y-1">
            <span className="h-[1px] w-5 bg-white" />
            <span className="h-[1px] w-5 bg-white" />
            <span className="h-[1px] w-5 bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/80 px-6 py-4 text-sm uppercase tracking-[0.32em] text-white/75 md:hidden">
          <nav className="flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-cyan-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
