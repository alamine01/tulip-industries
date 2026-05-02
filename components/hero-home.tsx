'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import HeroImage from "@/public/tenors_2x.jpeg";
import { motion, Variants } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function HeroHome() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Industrial Technology";
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) clearInterval(interval);
      }, 40); // Faster typing speed
      return () => clearInterval(interval);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } },
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <motion.div 
            className="pb-12 text-center md:pb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-300),transparent)1]"
              variants={itemVariants}
            >
              <div className="py-2 text-sm font-bold uppercase tracking-widest text-blue-600">
                Innovation Engineered in Africa
              </div>
            </motion.div>
            <motion.h1
              className="mb-6 border-y text-5xl font-extrabold [border-image:linear-gradient(to_right,transparent,var(--color-slate-300),transparent)1] md:text-7xl tracking-tighter"
              variants={itemVariants}
            >
              Pioneering the era <br className="max-lg:hidden" />
              <span className="relative inline-block min-w-[300px] md:min-w-[600px]">
                <span className="text-gray-900">of&nbsp;</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-400">
                  {displayText}
                </span>
                <motion.span
                  animate={{ 
                    x: [0, 5, 0],
                    y: [0, -5, 0] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block ml-2 align-middle"
                >
                  <MousePointer2 className="w-8 h-8 text-blue-600 fill-blue-600 shadow-xl" />
                </motion.span>
              </span>
            </motion.h1>
            <div className="mx-auto max-w-3xl">
              <motion.p
                className="mb-8 text-xl text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Tulip Industries Ltd is building the infrastructure for a smarter Africa, from advanced interactive kiosks to life-saving telemedicine terminals.
              </motion.p>
              <motion.div 
                className="relative flex flex-col sm:flex-row items-center justify-center gap-4"
                variants={itemVariants}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn group w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all"
                  href="#products"
                >
                  Explore Products
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: '#f9fafb' }}
                  whileTap={{ scale: 0.95 }}
                  className="btn w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold shadow-sm transition-all"
                  href="#services"
                >
                  Our Ecosystem
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
            className="mx-auto max-w-4xl relative"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] group"
            >
               <Image
                  src={HeroImage}
                  alt="Tulip Kiosk"
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  priority
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 text-white">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-sm font-bold uppercase tracking-[0.3em] mb-2 text-blue-400"
                >
                  Masterpiece of Engineering
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: 1.4 }}
                   className="text-4xl font-bold tracking-tight"
                >
                  Tenor Kiosk Series
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
