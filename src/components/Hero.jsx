import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { greeting, name, tagline } = portfolioData.personal;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center items-center overflow-hidden bg-[#EBEBEB]"
    >
      {/* Background Subtle Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[25vw] font-black tracking-tighter leading-none text-black">
          {name.toUpperCase()}
        </h1>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        {/* Sub-heading Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="text-xl sm:text-2xl font-light text-neutral-600 tracking-wide uppercase">
            {greeting}
          </span>
        </motion.div>

        {/* Big Name Display */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#191919] leading-none mb-6 font-display"
        >
          {name}
        </motion.h1>

        {/* Floating Badges */}
        <div className="relative w-full max-w-xl my-4 flex justify-center items-center gap-4 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-md border border-black/5 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-sm font-semibold text-[#191919]">Available for High-Impact Projects</p>
          </motion.div>
        </div>

        {/* Tagline Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mt-4"
        >
          <p className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#191919] leading-tight font-display">
            I Design to Get Noticed.
            <br />
            <span className="text-neutral-500">And Market to be Chosen.</span>
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-14 inline-flex flex-col items-center gap-2 text-xs font-medium tracking-widest text-neutral-500 uppercase hover:text-[#191919] transition-colors"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

