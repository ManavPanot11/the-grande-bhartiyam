"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MotifDivider } from "@/components/site/Motif";
import { IMG, SITE, waLink } from "@/lib/site-data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Hall", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello, this is ${form.name || "a guest"} (${form.email}${form.phone ? ", " + form.phone : ""}).\nInquiry: ${form.subject}.\n\n${form.message}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <>
      <PageHero
        eyebrow="Concierge"
        title={<>Begin Your <span className="italic text-gradient-gold">Celebration</span></>}
        subtitle="Speak to our concierge for tours, dates, packages and bespoke heritage weddings."
        image={IMG.heritage[2]}
      />

      {/* Contact + Form */}
      <section className="py-20">
        <div className="container-luxe grid lg:grid-cols-5 gap-10">
          {/* Info cards */}
          <Reveal className="lg:col-span-2">
            <p className="eyebrow">Reach Us</p>
            <h2 className="heading-display text-3xl md:text-4xl mt-5 text-warmbrown-deep">We answer like family.</h2>
            <p className="mt-4 text-warmbrown/80 leading-relaxed">
              Our concierge is available around the clock. Whatsapp, call, email — whichever feels closest, we welcome you.
            </p>

            <div className="mt-8 space-y-4">
              <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-5 rounded-xl bg-emerald/5 border border-emerald/20 hover:bg-emerald/10 transition group">
                <div className="w-11 h-11 rounded-full bg-emerald text-cream grid place-items-center flex-shrink-0"><MessageCircle className="w-5 h-5" /></div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-emerald font-medium">WhatsApp · Fastest</p>
                  <p className="font-serif text-lg text-warmbrown-deep group-hover:text-emerald transition">{SITE.whatsappDisplay}</p>
                </div>
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-4 p-5 rounded-xl bg-ivory border border-gold/20 hover:border-gold/50 transition group">
                <div className="w-11 h-11 rounded-full bg-gold text-warmbrown-deep grid place-items-center flex-shrink-0"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gold-deep font-medium">Click to Call</p>
                  <p className="font-serif text-lg text-warmbrown-deep">{SITE.phone}</p>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 p-5 rounded-xl bg-ivory border border-gold/20 hover:border-gold/50 transition group">
                <div className="w-11 h-11 rounded-full bg-warmbrown-deep text-cream grid place-items-center flex-shrink-0"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-warmbrown-deep/70 font-medium">Email</p>
                  <p className="font-serif text-lg text-warmbrown-deep">{SITE.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-ivory border border-gold/20">
                <div className="w-11 h-11 rounded-full bg-cream border border-gold/40 text-gold-deep grid place-items-center flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-warmbrown/70 font-medium">Address</p>
                  <p className="font-serif text-base text-warmbrown-deep leading-snug">{SITE.address.line1}<br/>{SITE.address.line2}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-ivory border border-gold/20">
                <div className="w-11 h-11 rounded-full bg-cream border border-gold/40 text-gold-deep grid place-items-center flex-shrink-0"><Clock className="w-5 h-5" /></div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-warmbrown/70 font-medium">Hours</p>
                  <p className="font-serif text-base text-warmbrown-deep">{SITE.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="relative p-8 md:p-10 rounded-2xl bg-ivory border border-gold/20 shadow-soft overflow-hidden">
              <div className="absolute -bottom-24 -right-24 opacity-[0.05] pointer-events-none">
                <Image src="/logo.png" alt="" width={450} height={450} className="object-contain" />
              </div>
              <div className="relative z-10">
                <p className="eyebrow">Inquiry Form</p>
              <h3 className="heading-display text-3xl md:text-4xl mt-5 text-warmbrown-deep">Tell us about your celebration.</h3>
              <p className="mt-3 text-sm text-warmbrown/70">Submitting opens WhatsApp with your message ready to send.</p>
              <MotifDivider className="text-gold !my-6 justify-start [&>span]:hidden first:[&>svg]:ml-0" />

              <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5 mt-2">
                <div className="sm:col-span-1">
                  <label className="text-[0.7rem] uppercase tracking-[0.25em] text-warmbrown/70">Name</label>
                  <input required name="name" value={form.name} onChange={onChange} className="mt-2 w-full px-4 py-3 rounded-lg bg-cream/40 border border-gold/20 focus:border-emerald focus:ring-2 focus:ring-emerald/30 outline-none transition" placeholder="Your full name" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-[0.7rem] uppercase tracking-[0.25em] text-warmbrown/70">Email</label>
                  <input required type="email" name="email" value={form.email} onChange={onChange} className="mt-2 w-full px-4 py-3 rounded-lg bg-cream/40 border border-gold/20 focus:border-emerald focus:ring-2 focus:ring-emerald/30 outline-none transition" placeholder="name@email.com" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-[0.7rem] uppercase tracking-[0.25em] text-warmbrown/70">Phone</label>
                  <input name="phone" value={form.phone} onChange={onChange} className="mt-2 w-full px-4 py-3 rounded-lg bg-cream/40 border border-gold/20 focus:border-emerald focus:ring-2 focus:ring-emerald/30 outline-none transition" placeholder="+91 …" />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-[0.7rem] uppercase tracking-[0.25em] text-warmbrown/70">Inquiry Type</label>
                  <select name="subject" value={form.subject} onChange={onChange} className="mt-2 w-full px-4 py-3 rounded-lg bg-cream/40 border border-gold/20 focus:border-emerald focus:ring-2 focus:ring-emerald/30 outline-none transition">
                    <option>Hall · The Mandapam</option>
                    <option>Room · Rajvansh Suite</option>
                    <option>Room · Suvarna Room</option>
                    <option>Event · Cultural Soirée</option>
                    <option>Event · Corporate</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[0.7rem] uppercase tracking-[0.25em] text-warmbrown/70">Message</label>
                  <textarea required name="message" value={form.message} onChange={onChange} rows={5} className="mt-2 w-full px-4 py-3 rounded-lg bg-cream/40 border border-gold/20 focus:border-emerald focus:ring-2 focus:ring-emerald/30 outline-none transition" placeholder="Tell us about your celebration, expected dates and guest count…" />
                </div>
                <div className="sm:col-span-2 flex flex-wrap gap-3 mt-2">
                  <button type="submit" className="btn-primary"><Send className="w-4 h-4" /> Send via WhatsApp</button>
                  <a href={`mailto:${SITE.email}?subject=Inquiry%20·%20The%20Grande%20Bhartiyam`} className="btn-outline-dark"><Mail className="w-4 h-4" /> Email Instead</a>
                </div>
              </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pt-8 pb-24">
        <div className="container-luxe">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
              <div>
                <p className="eyebrow">Find Us</p>
                <h2 className="heading-display text-3xl md:text-4xl mt-5 text-warmbrown-deep">Within the heritage quarter.</h2>
              </div>
              <a href={SITE.mapsLink} target="_blank" rel="noreferrer" className="btn-outline-dark text-xs self-start md:self-end">
                Open in Google Maps
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-luxe border border-gold/20">
              <iframe
                src={SITE.mapsEmbed}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map · The Grande Bhartiyam"
                className="w-full h-[420px] md:h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
