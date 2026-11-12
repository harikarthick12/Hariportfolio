import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutIntro() {
  const { bio, whatsappLink } = portfolioData.personal;

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#EBEBEB] border-t border-black/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Label */}
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">
            Philosophy &amp; Approach
          </span>

          {/* Large Editorial Statement */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#191919] leading-relaxed sm:leading-snug max-w-4xl font-display">
            {bio}
          </h2>

          {/* Action Button */}
          <div className="mt-12">
            <a
              href="/about-me/"
              className="group inline-flex items-center gap-3 bg-[#191919] text-white px-8 py-4 rounded-full text-base font-medium tracking-wide hover:bg-neutral-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
            >
              <span>More About Me</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

