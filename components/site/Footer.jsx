import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS, SITE, waLink } from "@/lib/site-data";
import { MotifMandala, MotifDivider } from "./Motif";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-warmbrown-deep text-cream/85 mt-24 overflow-hidden">
      <div className="absolute -bottom-32 -right-32 opacity-[0.05] pointer-events-none">
        <Image src="/logo.png" alt="" width={600} height={600} className="object-contain" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent relative z-10" />
      <div className="container-luxe py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/logo.png"
              alt="The Grande Bhartiyam Logo"
              width={42}
              height={42}
              className="object-contain"
            />
            <div>
              <p className="text-[0.62rem] tracking-[0.4em] text-gold-soft">THE GRANDE</p>
              <p className="font-display text-2xl tracking-[0.18em] text-cream">BHARTIYAM</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-cream/70 max-w-xs">
            {SITE.tagline} A boutique heritage convention center for weddings,
            cultural events and premium stays.
          </p>
          <div className="flex gap-3 mt-6">
            <a href={SITE.social.instagram} aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full border border-gold/30 hover:bg-gold hover:text-warmbrown-deep transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={SITE.social.facebook} aria-label="Facebook" className="w-10 h-10 grid place-items-center rounded-full border border-gold/30 hover:bg-gold hover:text-warmbrown-deep transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={SITE.social.youtube} aria-label="Youtube" className="w-10 h-10 grid place-items-center rounded-full border border-gold/30 hover:bg-gold hover:text-warmbrown-deep transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-gold mb-5">Experience</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li>Boutique Weddings</li>
            <li>The Mandapam Banquet</li>
            <li>Rajvansh Suite Stays</li>
            <li>Cultural Soirées</li>
            <li>Corporate Gatherings</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm uppercase tracking-[0.3em] text-gold mb-5">Concierge</h4>
          <ul className="space-y-4 text-sm text-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
              <span>{SITE.address.line1}<br/>{SITE.address.line2}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a>
            </li>
          </ul>
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold text-xs mt-6">
            Book via WhatsApp
          </a>
        </div>
      </div>

      <MotifDivider className="text-gold opacity-70" />

      <div className="container-luxe py-7 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-cream/55 text-center md:text-left">
        <p className="flex-1">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        <p className="flex-none tracking-widest text-[0.65rem]">
          Developed by <a href="https://www.instagram.com/manav_panot" target="_blank" rel="noreferrer" className="text-gold hover:text-cream transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-cream/50">@manav_panot</a> With 🤍
        </p>
        <p className="flex-1 md:text-right tracking-[0.25em] uppercase">Crafted with Heritage · Hosted with Heart</p>
      </div>
    </footer>
  );
}
