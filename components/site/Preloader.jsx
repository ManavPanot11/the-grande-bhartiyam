"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = "hidden";
    
    // Hide the preloader after a beautifully timed delay
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2800);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-warmbrown-deep text-cream overflow-hidden"
        >
          {/* Subtle giant background watermark */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
            <Image src="/logo.png" alt="" width={1200} height={1200} className="object-contain scale-150" />
          </div>

          <style>{`
            @keyframes pulseLogo {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.08); }
            }
            @keyframes expandLine {
              0% { width: 0; opacity: 0; }
              100% { width: 80px; opacity: 1; }
            }
            .animate-logo-pulse {
              animation: pulseLogo 2s ease-in-out infinite;
            }
            .animate-line-expand {
              width: 0; /* start at 0 before animation */
              animation: expandLine 1.5s ease-in-out 0.3s forwards;
            }
          `}</style>

          <div className="relative z-10 flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={110}
              height={110}
              className="object-contain mb-8 drop-shadow-2xl animate-logo-pulse"
              priority
            />
            
            <p className="text-[0.65rem] tracking-[0.5em] text-gold-soft mb-3 uppercase">
              The Grande
            </p>
            <h1 className="heading-display text-4xl md:text-5xl tracking-[0.2em] text-cream">
              BHARTIYAM
            </h1>
            
            <div className="h-[1px] bg-gold mt-10 animate-line-expand" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
