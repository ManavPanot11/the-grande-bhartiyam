"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Sparkles, Bed, Trees, Utensils, Car, Wifi, ChevronRight, MapPin } from "lucide-react";
import { IMG, SITE, ROOMS, AMENITIES, EVENT_TYPES, TESTIMONIALS, GALLERY, waLink } from "@/lib/site-data";
import { MotifDivider, MotifMandala, MotifArch } from "@/components/site/Motif";
import { Reveal, FadeIn, Stagger, itemVariants } from "@/components/site/Reveal";

const iconMap = { sparkles: Sparkles, trees: Trees, bed: Bed, utensils: Utensils, car: Car, wifi: Wifi, "map-pin": MapPin };

function Hero() {
  const slides = IMG.hero;
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.6 }, scale: { duration: 7, ease: "easeOut" } }}
          className="absolute inset-0"
        >
          <Image src={slides[i]} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-warmbrown-deep/55 via-warmbrown-deep/30 to-warmbrown-deep/85" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container-luxe flex flex-col items-center justify-center text-center text-cream">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="eyebrow eyebrow-light mb-6 justify-center">
          Where Heritage Meets Celebration
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl leading-[1.05]"
        >
          THE GRANDE <span className="italic text-gradient-gold">BHARTIYAM</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}>
          <MotifDivider className="text-gold mt-7" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-cream/85 font-light leading-relaxed"
        >
          An intimate, culturally rich convention center for boutique weddings,
          cultural soirées and premium heritage stays.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Link href="/hall" className="btn-gold">Book The Hall <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/rooms" className="btn-outline">Explore Rooms</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </motion.div>
      </div>

      {/* slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === i ? "w-10 bg-gold" : "w-4 bg-cream/40"
            }`}
          />
        ))}
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-4 right-6 hidden md:flex flex-col items-center gap-2 text-cream/60 text-[0.65rem] tracking-[0.3em] uppercase"
      >
        <span>Scroll</span>
        <span className="w-px h-12 bg-cream/40 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-gold animate-[float-slow_2s_ease-in-out_infinite]" />
        </span>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="img-frame aspect-[4/5] shadow-luxe">
              <Image src={IMG.heritage[0]} alt="Heritage interior" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden md:block img-frame aspect-square w-48 lg:w-60 border-4 border-cream shadow-luxe">
              <Image src={IMG.palace[1]} alt="Palace detail" fill className="object-cover" />
            </div>
            <MotifArch className="absolute -top-10 -left-6 w-24 h-32 text-gold/40" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About · The Grande Bhartiyam</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6 text-warmbrown-deep">
              A regal sanctuary,<br />
              <span className="italic text-emerald">crafted for celebrations.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-warmbrown/85 leading-relaxed text-[1.02rem]">
              Located right in the heart of the city, The Grande Bhartiyam seamlessly blends modern aesthetics with rich Indian heritage to create an exceptional venue for your most important gatherings. Designed as a grand, standalone venue, it features an expansive, state-of-the-art hall called The Mandapam, which is a comfortable space for our guests.
            </p>
            <p className="mt-4 text-warmbrown/85 leading-relaxed text-[1.02rem]">
              Whether you are hosting high-profile corporate events or celebrating cherished family functions, this premium multi-purpose space delivers the perfect atmosphere of sophistication and cultural pride.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: "12", l: "Boutique Rooms" },
                { n: "1800", l: "Sq Feet" },
                { n: "24×7", l: "Concierge" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="heading-display text-3xl md:text-4xl text-gold-deep">{s.n}</p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.25em] text-warmbrown/70">{s.l}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary mt-10">
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeritageStrip() {
  return (
    <section className="relative py-24 paisley-bg">
      <div className="container-luxe">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow justify-center">Heritage-Inspired Experience</p>
            <h2 className="heading-display text-4xl md:text-5xl mt-6 text-warmbrown-deep">
              Five senses, awakened by tradition.
            </h2>
            <MotifDivider className="text-gold" />
          </div>
        </Reveal>
        <Stagger className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { t: "Arrival Rituals", d: "Conch shells, flower-shower, tilak — every guest welcomed as royalty.", img: IMG.palace[2] },
            { t: "Courtyard Soirées", d: "Lantern-lit chowk for haldi, mehendi and pre-function rituals.", img: IMG.mandap[3] },
            { t: "Brass & Boutique", d: "Hand-loomed textiles, antique brass and modern hospitality, woven together.", img: IMG.heritage[3] },
          ].map((c) => (
            <motion.div key={c.t} variants={itemVariants} className="card-luxe group">
              <div className="img-frame aspect-[4/3]">
                <Image src={c.img} alt={c.t} fill className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-warmbrown-deep">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmbrown/75">{c.d}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FeaturedHall() {
  return (
    <section className="relative py-28 bg-warmbrown-deep text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image src={IMG.mandap[0]} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-warmbrown-deep via-warmbrown-deep/85 to-warmbrown-deep/40" />
      </div>
      <div className="container-luxe relative grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <p className="eyebrow eyebrow-light">The Featured Hall</p>
            <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-cream mt-6">
              <span className="italic text-gradient-gold">The Mandapam</span>
            </h2>
            <p className="mt-6 text-cream/80 text-lg max-w-xl leading-relaxed">
              A majestic banquet hall with soaring ceilings, traditional jaali
              screens and a stage that has hosted vows, ragas and grand
              receptions alike. An 1800 sq feet space welcoming guests in heritage style.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "1800", l: "Sq Feet" },
                { n: "4K", l: "AV & Sound" },
                { n: "24×7", l: "Service" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="heading-display text-3xl text-gold">{s.n}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-cream/60">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/hall" className="btn-gold">Discover The Mandapam <ArrowRight className="w-4 h-4" /></Link>
              <a href={waLink("Hello, I would like to inquire about booking The Mandapam at THE GRANDE BHARTIYAM.")} target="_blank" rel="noreferrer" className="btn-outline">WhatsApp Inquiry</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div className="img-frame aspect-[3/4] shadow-luxe">
              <Image src={IMG.mandap[1]} alt="" fill className="object-cover" />
            </div>
            <div className="img-frame aspect-[3/4] mt-12 shadow-luxe">
              <Image src={IMG.mandap[2]} alt="" fill className="object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RoomsPreview() {
  return (
    <section className="py-28">
      <div className="container-luxe">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Premium Rooms</p>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mt-6 text-warmbrown-deep">
              Twelve sanctuaries,<br /><span className="italic text-emerald">two heritage tiers.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {ROOMS.map((r, idx) => (
            <Reveal key={r.slug} delay={idx * 0.1}>
              <div className="card-luxe group h-full">
                <div className="img-frame aspect-[16/10]">
                  <Image src={r.images[0]} alt={r.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ivory/95 text-[0.7rem] tracking-[0.2em] uppercase text-emerald font-medium">
                    {r.tier}
                  </div>
                </div>
                <div className="p-7 lg:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-3xl text-warmbrown-deep">{r.name}</h3>
                    <div className="text-right">
                      <p className="text-[0.65rem] uppercase tracking-[0.25em] text-warmbrown/60">From</p>
                      <p className="font-serif text-2xl text-gold-deep">₹{r.priceFrom.toLocaleString()}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-warmbrown/75 leading-relaxed">{r.description.slice(0, 160)}…</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/rooms#${r.slug}`} className="btn-primary text-xs">View Details <ChevronRight className="w-3.5 h-3.5" /></Link>
                    <a href={waLink(`Hello, I would like to inquire about the ${r.name} at THE GRANDE BHARTIYAM.`)} target="_blank" rel="noreferrer" className="btn-outline-dark text-xs">Book via WhatsApp</a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section className="relative py-28 bg-ivory border-y border-gold/10">
      <div className="container-luxe">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow justify-center">Amenities</p>
            <h2 className="heading-display text-4xl md:text-5xl mt-6 text-warmbrown-deep">Premium hospitality, woven with tradition.</h2>
            <MotifDivider className="text-gold" />
          </div>
        </Reveal>
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {AMENITIES.map((a) => {
            const Icon = iconMap[a.icon] || Sparkles;
            return (
              <motion.div key={a.title} variants={itemVariants} className="group p-8 rounded-2xl bg-cream/60 border border-gold/15 hover:bg-ivory hover:border-gold/40 transition-all hover:-translate-y-1 hover:shadow-luxe">
                <div className="w-12 h-12 rounded-full bg-emerald/10 text-emerald grid place-items-center mb-5 group-hover:bg-gold group-hover:text-cream transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-warmbrown-deep">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmbrown/75">{a.desc}</p>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const subset = GALLERY.slice(0, 8);
  return (
    <section className="py-28">
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Gallery Preview</p>
              <h2 className="heading-display text-4xl md:text-5xl mt-6 text-warmbrown-deep">
                Moments,<br /><span className="italic text-emerald">framed in heritage.</span>
              </h2>
            </div>
            <Link href="/gallery" className="btn-outline-dark text-xs self-start md:self-end">
              Explore Full Gallery <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {subset.map((g, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`img-frame ${idx % 5 === 0 ? "aspect-[3/4] md:row-span-2 md:aspect-auto" : "aspect-square"}`}
            >
              <Image src={g.src} alt={g.cat} fill className="object-cover" />
              <div className="absolute inset-0 bg-warmbrown-deep/0 hover:bg-warmbrown-deep/30 transition-colors" />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28 bg-warmbrown-deep text-cream relative overflow-hidden">
      <div className="absolute -top-20 -left-20 opacity-[0.07]">
        <Image src="/logo.png" alt="" width={400} height={400} className="object-contain" />
      </div>
      <div className="absolute -bottom-20 -right-20 opacity-[0.07]">
        <Image src="/logo.png" alt="" width={400} height={400} className="object-contain" />
      </div>
      <div className="container-luxe relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow eyebrow-light justify-center">Whispers from Guests</p>
            <h2 className="heading-display text-4xl md:text-5xl mt-6 text-cream">Stories woven in our walls.</h2>
            <MotifDivider className="text-gold" />
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="p-8 lg:p-10 rounded-2xl bg-cream/[0.04] border border-gold/15 backdrop-blur-sm hover:bg-cream/[0.07] transition-colors h-full">
                <div className="flex gap-1 text-gold mb-5">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-gold" />)}
                </div>
                <p className="font-display text-xl md:text-2xl text-cream/95 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-5 border-t border-gold/20">
                  <p className="font-serif text-lg text-gold">{t.name}</p>
                  <p className="text-[0.7rem] tracking-[0.25em] uppercase text-cream/55 mt-1">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={IMG.heritage[4]} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warmbrown-deep/70 via-warmbrown-deep/55 to-warmbrown-deep/85" />
      </div>
      <div className="relative container-luxe text-center text-cream">
        <Reveal>
          <p className="eyebrow eyebrow-light justify-center">Begin Your Celebration</p>
          <h2 className="heading-display text-4xl md:text-6xl mt-6 max-w-3xl mx-auto">
            Reserve a private viewing of <span className="italic text-gradient-gold">The Grande Bhartiyam.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-cream/80 text-lg">
            Our concierge will craft a heritage tour tailored to your celebration — weddings, soirées or stays.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waLink("Hello, I would like to book a heritage tour at THE GRANDE BHARTIYAM.")} target="_blank" rel="noreferrer" className="btn-gold">Book via WhatsApp <ArrowRight className="w-4 h-4" /></a>
            <Link href="/contact" className="btn-outline">Contact Concierge</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HeritageStrip />
      <FeaturedHall />
      <RoomsPreview />
      <Amenities />
      <GalleryPreview />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
