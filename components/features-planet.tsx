'use client';

import Image from "next/image";
import TenorImg from "@/public/tenors_2x.jpeg";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import { Monitor, HeartPulse, Zap } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function FeaturesPlanet() {
  const features = [
    {
      title: "Tenor Kiosk",
      description: "The standard-bearer for interactive hardware in Africa. Industrial-grade reliability meets elegant design.",
      icon: <Monitor className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Octopus Medical",
      description: "Revolutionizing tele-medicine with real-time diagnostic transmission for cardiology and beyond.",
      icon: <HeartPulse className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Energy Efficient",
      description: "Designed for the African context with solar-ready power options and low consumption hardware.",
      icon: <Zap className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <section id="products" className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
      {/* Background glow effects */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" 
      />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative z-10">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white md:text-5xl tracking-tight mb-6"
            >
              Hardware built for the African context
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400"
            >
              Our terminals are engineered to withstand industrial environments while providing a seamless digital experience.
            </motion.p>
          </div>

          {/* Hardware Visual */}
          <div className="pb-24 md:pb-32 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.95] }}
              className="relative"
            >
              <div className="relative inline-flex rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.2)]">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
                >
                  <Image
                    className="rounded-3xl bg-gray-900 border border-white/10"
                    src={TenorImg}
                    width={600}
                    height={600}
                    alt="Tenor Kiosk"
                  />
                </motion.div>
                
                <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                  <Image
                    className="absolute -right-40 -top-20 z-10 max-w-none opacity-30 animate-pulse"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Hardware decoration"
                  />
                </div>
              </div>
              
              {/* Floating tags or info cards could go here */}
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all cursor-default group"
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <div className="mt-6 w-12 h-1 bg-blue-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
