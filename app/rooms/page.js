"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Users, Maximize2, ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MotifDivider } from "@/components/site/Motif";
import { IMG, ROOMS, waLink } from "@/lib/site-data";

function RoomShowcase({ room, reverse }) {
  const [i, setI] = useState(0);
  const total = room.images.length;
  const prev = () => setI((p) => (p - 1 + total) % total);
  const next = () => setI((p) => (p + 1) % total);

  return (
    <section id={room.slug} className="py-20 scroll-mt-28">
      <div className={`container-luxe grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {/* Gallery */}
        <Reveal>
          <div className="relative">
            <div className="img-frame aspect-[4/3] shadow-luxe">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image src={room.images[i]} alt={room.name} fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
              <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/90 hover:bg-cream grid place-items-center text-warmbrown-deep shadow-soft transition">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/90 hover:bg-cream grid place-items-center text-warmbrown-deep shadow-soft transition">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {room.images.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    className={`h-1 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-3 bg-cream/70"}`}
                    aria-label={`View ${k+1}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {room.images.map((src, k) => (
                <button key={k} onClick={() => setI(k)} className={`img-frame aspect-square ring-2 transition ${k === i ? "ring-gold" : "ring-transparent"}`}>
                  <Image src={src} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Details */}
        <Reveal delay={0.1}>
          <p className="eyebrow">{room.tier}</p>
          <h2 className="heading-display text-4xl md:text-5xl mt-5 text-warmbrown-deep">{room.name}</h2>
          <p className="mt-5 text-warmbrown/80 leading-relaxed">{room.description}</p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-warmbrown/80">
            <span className="inline-flex items-center gap-2"><Users className="w-4 h-4 text-gold" /> {room.capacity}</span>
            <span className="inline-flex items-center gap-2"><Maximize2 className="w-4 h-4 text-gold" /> {room.size}</span>
            <span className="inline-flex items-center gap-2 font-serif text-lg text-gold-deep">₹{room.priceFrom.toLocaleString()} – ₹{room.priceTo.toLocaleString()} <span className="text-xs text-warmbrown/60 ml-1">per night</span></span>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 gap-2.5">
            {room.amenities.map((a) => (
              <div key={a} className="flex items-start gap-2.5 text-sm text-warmbrown/80">
                <Check className="w-4 h-4 mt-0.5 text-emerald flex-shrink-0" />
                <span>{a}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={waLink(`Hello, I would like to book the ${room.name} at THE GRANDE BHARTIYAM. Could you please share availability?`)} target="_blank" rel="noreferrer" className="btn-primary">
              Book via WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="btn-outline-dark">Inquiry Form</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Boutique Stays"
        title={<>Twelve Sanctuaries <span className="italic text-gradient-gold">of Heritage</span></>}
        subtitle="Two heritage tiers, twelve curated rooms — each a love letter to Indian craft and modern comfort."
        image={IMG.heritage[0]}
      />

      <section className="py-16 text-center">
        <div className="container-luxe max-w-3xl">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl text-warmbrown-deep leading-relaxed italic">
              “Choose your retreat — a Rajvansh Suite for guests of honour,
              or a Suvarna Room for warm, intimate stays.”
            </p>
            <MotifDivider className="text-gold" />
          </Reveal>
        </div>
      </section>

      {ROOMS.map((r, idx) => (
        <RoomShowcase key={r.slug} room={r} reverse={idx % 2 === 1} />
      ))}

      {/* House summary */}
      <section className="py-20 bg-ivory border-y border-gold/10">
        <div className="container-luxe grid md:grid-cols-3 gap-8 text-center">
          {[
            { n: "12", l: "Total Rooms" },
            { n: "2", l: "Heritage Tiers" },
            { n: "24×7", l: "Concierge & Butler" },
          ].map((s) => (
            <div key={s.l}>
              <p className="heading-display text-5xl md:text-6xl text-gold-deep">{s.n}</p>
              <p className="mt-2 text-[0.75rem] uppercase tracking-[0.3em] text-warmbrown/70">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
