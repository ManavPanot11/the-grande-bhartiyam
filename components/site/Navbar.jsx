"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE, waLink } from "@/lib/site-data";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        scrolled || open
          ? "bg-ivory/85 backdrop-blur-md border-gold/20 shadow-soft"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20 gap-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image
            src="/logo.png"
            alt="The Grande Bhartiyam Logo"
            width={40}
            height={40}
            className="object-contain group-hover:scale-110 transition-transform duration-700"
          />
          <div className="flex flex-col leading-tight">
            <span className={`font-serif text-[0.62rem] tracking-[0.4em] ${scrolled || open ? "text-gold-deep" : "text-gold-soft"}`}>
              THE GRANDE
            </span>
            <span className={`font-display text-xl sm:text-2xl tracking-[0.18em] -mt-0.5 ${scrolled || open ? "text-warmbrown-deep" : "text-cream"}`}>
              BHARTIYAM
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 lg:gap-12 xl:gap-16">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative whitespace-nowrap text-[0.82rem] tracking-[0.12em] uppercase transition-colors ${
                  scrolled ? "text-warmbrown-deep/85 hover:text-emerald" : "text-cream/90 hover:text-gold-soft"
                }`}
              >
                {l.label}
                {active && (
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full ${scrolled ? "bg-gold" : "bg-gold-soft"}`} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className={`flex items-center gap-2 text-xs tracking-widest whitespace-nowrap ${scrolled ? "text-warmbrown-deep/80" : "text-cream/90"} hover:text-gold`}
          >
            <Phone className="w-3.5 h-3.5 shrink-0" /> {SITE.phone}
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold text-xs whitespace-nowrap shrink-0">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Book via WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled || open ? "text-warmbrown-deep" : "text-cream"}`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } bg-ivory border-b border-gold/20`}
      >
        <nav className="container-luxe py-6 flex flex-col gap-2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`py-3 px-2 text-sm tracking-[0.2em] uppercase border-b border-gold/10 ${
                pathname === l.href ? "text-emerald" : "text-warmbrown-deep/85"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold mt-4 text-xs justify-center flex items-center gap-2">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Book via WhatsApp
          </a>
          <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-dark text-xs justify-center mt-2">
            <Phone className="w-3.5 h-3.5" /> {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
