"use client";
import { ArrowRight, Sparkles, Heart, Crown, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/site/PageHero";
import { Reveal, Stagger, itemVariants } from "@/components/site/Reveal";
import { MotifDivider, MotifArch, MotifMandala } from "@/components/site/Motif";
import { IMG, waLink } from "@/lib/site-data";
import { motion } from "framer-motion";

const PILLARS = [
  { icon: Crown, t: "Heritage Architecture", d: "Hand-carved jaali screens, sandstone columns and brass lanterns inspired by the royal courts of Rajputana." },
  { icon: Heart, t: "Warm Hospitality", d: "A team that greets you as family — with arrival rituals, personalised stories and a 24×7 concierge." },
  { icon: Sparkles, t: "Boutique Weddings", d: "Intimate ceremonies, cinematic mandaps and curated rituals tailored to your family’s traditions." },
  { icon: Leaf, t: "Cultural Elegance", d: "Classical performances, regional cuisine and design that honour India’s timeless arts." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>A Heritage Reborn <span className="italic text-gradient-gold">in Hospitality</span></>}
        subtitle="Where the sandstone whispers of royal pasts and the marigolds bloom for every new celebration."
        image={IMG.palace[3]}
      />

      {/* Storytelling section */}
      <section className="py-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">The Founding Spirit</p>
            <h2 className="heading-display text-4xl md:text-5xl mt-6 text-warmbrown-deep">
              A boutique sanctuary, born of <span className="italic text-emerald">heritage and heart.</span>
            </h2>
            <p className="mt-7 text-warmbrown/85 leading-relaxed">
              The Grande Bhartiyam was conceived as a love letter to the
              vanishing arts of India — a place where master craftsmen, brass
              workers, weavers and chefs could share their gifts with the
              celebrations of our time.
            </p>
            <p className="mt-4 text-warmbrown/85 leading-relaxed">
              Every arch, every lamp, every tile is here for a reason. We
              believe celebrations should feel rooted, intimate and timeless
              — never rushed, never staged.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/hall" className="btn-primary">Explore The Mandapam <ArrowRight className="w-4 h-4" /></Link>
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-outline-dark">WhatsApp Concierge</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="img-frame aspect-[4/5] shadow-luxe">
                <img src={IMG.palace[0]} alt="" />
              </div>
              <MotifArch className="absolute -bottom-8 -left-6 w-32 h-40 text-gold/40" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-ivory border-y border-gold/10">
        <div className="container-luxe">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="eyebrow justify-center">Our Pillars</p>
              <h2 className="heading-display text-4xl md:text-5xl mt-6 text-warmbrown-deep">Four traditions, one celebration.</h2>
              <MotifDivider className="text-gold" />
            </div>
          </Reveal>
          <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon: Icon, t, d }) => (
              <motion.div key={t} variants={itemVariants} className="group p-8 rounded-2xl bg-cream/60 border border-gold/15 hover:bg-ivory hover:border-gold/40 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-emerald/10 text-emerald grid place-items-center mb-5 group-hover:bg-gold group-hover:text-cream transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-warmbrown-deep">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmbrown/75">{d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Visual narrative */}
      <section className="py-24">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow">Heritage Walk</p>
            <h2 className="heading-display text-4xl md:text-5xl mt-6 text-warmbrown-deep">A tour, through textures.</h2>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-12 gap-3 md:gap-5">
            <motion.div variants={itemVariants} className="col-span-12 md:col-span-7 img-frame aspect-[16/10] shadow-soft">
              <img src={IMG.heritage[1]} alt="" />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-6 md:col-span-5 img-frame aspect-[4/5] shadow-soft">
              <img src={IMG.heritage[2]} alt="" />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-6 md:col-span-5 img-frame aspect-square shadow-soft">
              <img src={IMG.palace[4]} alt="" />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-12 md:col-span-7 img-frame aspect-[16/10] shadow-soft">
              <img src={IMG.mandap[4]} alt="" />
            </motion.div>
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-emerald-deep text-cream overflow-hidden">
        <div className="absolute -right-20 -bottom-20 opacity-10"><Image src="/logo.png" alt="" width={500} height={500} className="object-contain" /></div>
        <div className="container-luxe relative text-center">
          <Reveal>
            <h2 className="heading-display text-4xl md:text-6xl">Step into <span className="italic text-gradient-gold">our story.</span></h2>
            <p className="mt-6 max-w-xl mx-auto text-cream/80">Schedule a private heritage tour with our concierge.</p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold">Book a Tour</a>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
