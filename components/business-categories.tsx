'use client';

import { LayoutGrid, Cpu, Cloud, Headphones, Globe, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BusinessCategories() {
  const categories = [
    { name: "3D CAD Design", icon: <LayoutGrid className="w-8 h-8 text-blue-600" /> },
    { name: "Precision Build", icon: <Cpu className="w-8 h-8 text-blue-600" /> },
    { name: "Cloud Sync", icon: <Cloud className="w-8 h-8 text-blue-600" /> },
    { name: "Remote Support", icon: <Headphones className="w-8 h-8 text-blue-600" /> },
    { name: "Global Management", icon: <Globe className="w-8 h-8 text-blue-600" /> },
    { name: "Solar Ready", icon: <Sun className="w-8 h-8 text-blue-600" /> },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 md:text-5xl mb-4 tracking-tight"
        >
          A Complete Digital Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Beyond hardware, we provide the software and support infrastructure to manage your assets anywhere in the world.
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
              }}
              className="flex flex-col items-center p-8 rounded-[2rem] bg-gray-50 border border-gray-100 transition-colors cursor-pointer group hover:bg-white"
            >
              <div className="mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                {cat.icon}
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-tight">{cat.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 p-10 md:p-16 rounded-[3rem] bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-3xl relative overflow-hidden group"
        >
          {/* Animated background glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px] -z-10" 
          />
          
          <div className="text-left max-w-xl">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Ready to digitize your operations?</h3>
            <p className="text-lg text-gray-400">Our ecosystem includes everything from initial concept design to 24/7 global hardware management.</p>
          </div>
          
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#contact" 
            className="btn bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-500/30"
          >
            Schedule a Demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
