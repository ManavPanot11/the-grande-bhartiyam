"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Maximize2, Music, UtensilsCrossed, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { MotifDivider, MotifMandala, MotifArch } from "@/components/site/Motif";
import { IMG, EVENT_TYPES, waLink } from "@/lib/site-data";

export default function HallPage() {
  return (
    <>
      <PageHero
        eyebrow="The Featured Hall"
        title={<>The <span className="italic text-gradient-gold">Mandapam</span></>}
        subtitle="A majestic 1,200–1,400 guest banquet — cinematic ceilings, brass chandeliers and traditional jaali screens."
        image={IMG.mandap[0]}
      />

      {/* Intro */}
      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">A Stage for the Grandest Moments</p>
            <h2 className="heading-display text-4xl md:text-5xl mt-6 text-warmbrown-deep">
              Where vows are exchanged,<br />
              <span className="italic text-emerald">and ragas come alive.</span>
            </h2>
            <p className="mt-7 text-warmbrown/85 leading-relaxed">
              The Mandapam is the soul of The Grande Bhartiyam — a soaring
              hall framed by sandstone arches and hand-cast brass lanterns.
              Its courtyard pre-function zone, open to the sky, gathers your
              loved ones for haldi, mehendi and welcome rituals before the
              grand celebration begins inside.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6">
              {[
                { i: Users, l: "Capacity", v: "1200–1400" },
                { i: Maximize2, l: "Floor Area", v: "18,000 sq ft" },
                { i: Music, l: "AV & Sound", v: "Pro-grade" },
                { i: UtensilsCrossed, l: "Live Counters", v: "12+" },
                { i: Sparkles, l: "Pre-Function", v: "Courtyard" },
              ].map(({ i: Icon, l, v }) => (
                <div key={l} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald/10 text-emerald grid place-items-center"><Icon className="w-4 h-4" /></div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-warmbrown/60">{l}</p>
                    <p className="font-serif text-base text-warmbrown-deep">{v}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={waLink("Hello, I would like to book The Mandapam at THE GRANDE BHARTIYAM. Could you share availability and packages?")} target="_blank" rel="noreferrer" className="btn-primary">
                Book The Mandapam <ArrowRight className="w-4 h-4" />
              </a>
              <a href={waLink("Hello, I have a few questions about The Mandapam at THE GRANDE BHARTIYAM.")} target="_blank" rel="noreferrer" className="btn-outline-dark">WhatsApp Inquiry</a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="img-frame aspect-[4/5] shadow-luxe">
                <img src={IMG.mandap[1]} alt="" />
              </div>
              <div className="hidden md:block absolute -bottom-10 -left-8 img-frame aspect-square w-48 lg:w-56 border-4 border-cream shadow-luxe">
                <img src={IMG.mandap[2]} alt="" />
              </div>
              <MotifArch className="absolute -top-12 -right-6 w-28 h-36 text-gold/40" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Atmosphere strip */}
      <section className="relative py-28 bg-warmbrown-deep text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={IMG.mandap[4]} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-warmbrown-deep/70" />
        </div>
        <div className="container-luxe relative text-center">
          <Reveal>
            <p className="eyebrow eyebrow-light justify-center">Atmosphere</p>
            <h2 className="heading-display text-4xl md:text-5xl mt-6 text-cream">
              An atmosphere woven of <span className="italic text-gradient-gold">marigolds, brass and song.</span>
            </h2>
            <MotifDivider className="text-gold" />
            <p className="mt-4 max-w-2xl mx-auto text-cream/80 leading-relaxed">
              From the moment guests step through the heritage gateway, the
              air carries jasmine, the lanterns glow soft amber, and the
              shehnai echoes across the courtyard. This is a venue that
              breathes tradition into every moment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Event types */}
      <section className="py-24">
        <div className="container-luxe">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow justify-center">Events at The Mandapam</p>
              <h2 className="heading-display text-4xl md:text-5xl mt-6 text-warmbrown-deep">A stage for every celebration.</h2>
              <MotifDivider className="text-gold" />
            </div>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENT_TYPES.map((e) => (
              <motion.div key={e.title} variants={itemVariants} className="group card-luxe">
                <div className="img-frame aspect-[4/5]">
                  <img src={e.img} alt={e.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmbrown-deep/85 via-warmbrown-deep/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                    <h3 className="font-serif text-2xl">{e.title}</h3>
                    <p className="mt-2 text-sm text-cream/85 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Courtyard visual story */}
      <section className="py-24 paisley-bg">
        <div className="container-luxe">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow justify-center">The Courtyard</p>
              <h2 className="heading-display text-4xl md:text-5xl mt-6 text-warmbrown-deep">Pre-function under an open sky.</h2>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-12 gap-3 md:gap-5">
            <motion.div variants={itemVariants} className="col-span-12 md:col-span-8 img-frame aspect-[16/10] shadow-soft">
              <img src={IMG.mandap[3]} alt="" />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-6 md:col-span-4 img-frame aspect-square shadow-soft">
              <img src={IMG.mandap[5]} alt="" />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-6 md:col-span-4 img-frame aspect-square shadow-soft">
              <img src={IMG.palace[5]} alt="" />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-12 md:col-span-8 img-frame aspect-[16/10] shadow-soft">
              <img src={IMG.heritage[5]} alt="" />
            </motion.div>
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-emerald-deep text-cream overflow-hidden">
        <div className="absolute -left-32 -top-32 opacity-10"><Image src="/logo.png" alt="" width={500} height={500} className="object-contain" /></div>
        <div className="absolute -right-32 -bottom-32 opacity-10"><Image src="/logo.png" alt="" width={500} height={500} className="object-contain" /></div>
        <div className="container-luxe relative text-center">
          <Reveal>
            <h2 className="heading-display text-4xl md:text-6xl">Reserve The <span className="italic text-gradient-gold">Mandapam.</span></h2>
            <p className="mt-6 max-w-xl mx-auto text-cream/80">Speak to our wedding concierge for a tailored proposal — dates, decor and dining.</p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={waLink("Hello, I would like to book The Mandapam at THE GRANDE BHARTIYAM.")} target="_blank" rel="noreferrer" className="btn-gold">Book via WhatsApp</a>
              <Link href="/contact" className="btn-outline">Contact Concierge</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
