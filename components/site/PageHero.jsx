"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MotifDivider } from "./Motif";

export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image src={image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-warmbrown-deep/55 via-warmbrown-deep/35 to-warmbrown-deep/80" />
      </motion.div>

      <div className="relative h-full container-luxe flex flex-col items-center justify-center text-center text-cream">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow eyebrow-light mb-6 justify-center">{eyebrow}</p>
          <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl text-cream drop-shadow-lg">
            {title}
          </h1>
          <MotifDivider className="text-gold mt-7" />
          {subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-cream/85 font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
