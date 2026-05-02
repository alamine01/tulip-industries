'use client';

import Link from "next/link";
import Logo from "./logo";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const paddingY = useTransform(scrollY, [0, 50], ["24px", "8px"]);
  const shadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 10px 30px -10px rgba(0,0,0,0.1)"]
  );

  return (
    <motion.header 
      style={{ backgroundColor, paddingTop: paddingY, paddingBottom: paddingY, boxShadow: shadow }}
      className="fixed top-0 z-50 w-full transition-all duration-300 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-3">
          {/* Site branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Logo />
            </motion.div>
            <span className="font-black text-gray-900 hidden sm:inline-block uppercase tracking-tighter text-xl group-hover:text-blue-600 transition-colors">
              TULIP INDUSTRIES
            </span>
          </Link>

          {/* Navigation links */}
          <nav className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8">
              {["Products", "Ecosystem"].map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
            >
              <Link
                href="#contact"
                className="btn bg-gray-900 text-white hover:bg-blue-600 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </motion.div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
