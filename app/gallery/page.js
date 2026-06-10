"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Reveal, itemVariants } from "@/components/site/Reveal";
import { GALLERY, IMG } from "@/lib/site-data";

const CATS = ["All", "Weddings", "Hall", "Rooms", "Decorations", "Events"];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index in filtered list

  const filtered = cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightbox((p) => (p - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, filtered.length]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>A Heritage <span className="italic text-gradient-gold">in Frames</span></>}
        subtitle="Moments from weddings, soirées, courtyards and quiet corners of The Grande Bhartiyam."
        image={IMG.palace[2]}
      />

      {/* Category filters */}
      <section className="pt-12 pb-4">
        <div className="container-luxe">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-5 py-2 rounded-full text-[0.72rem] tracking-[0.25em] uppercase transition-all border ${
                    cat === c
                      ? "bg-emerald text-cream border-emerald shadow-soft"
                      : "bg-transparent text-warmbrown-deep/80 border-gold/30 hover:bg-gold/10 hover:border-gold/60"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-12">
        <div className="container-luxe">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]"
          >
            <AnimatePresence>
              {filtered.map((g, idx) => (
                <motion.button
                  key={g.src + cat}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: (idx % 8) * 0.05 }}
                  onClick={() => setLightbox(idx)}
                  className="group mb-4 block w-full overflow-hidden rounded-2xl shadow-soft hover:shadow-luxe transition-all"
                >
                  <div className="relative">
                    <Image
                      src={g.src}
                      alt={g.cat}
                      width={800}
                      height={800}
                      className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warmbrown-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[0.65rem] tracking-[0.25em] uppercase bg-cream/90 text-emerald font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {g.cat}
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-warmbrown-deep/95 backdrop-blur flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button onClick={(e) => { e.stopPropagation(); setLightbox(null); }} className="absolute top-5 right-5 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 text-cream grid place-items-center transition">
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p - 1 + filtered.length) % filtered.length); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 text-cream grid place-items-center transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p + 1) % filtered.length); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 hover:bg-cream/20 text-cream grid place-items-center transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={filtered[lightbox]?.src}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[86vh] object-contain rounded-xl shadow-luxe"
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/80 text-xs tracking-[0.3em] uppercase">
              {filtered[lightbox]?.cat} · {lightbox + 1} / {filtered.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
