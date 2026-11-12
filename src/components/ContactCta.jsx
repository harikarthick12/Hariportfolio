import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactCta() {
  const { whatsappLink, contactEmail } = portfolioData.personal;

  return (
    <section className="py-28 sm:py-40 bg-[#EBEBEB] border-t border-black/5 text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4 block">
            Let's Collaborate
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#191919] font-display mb-6">
            Great Things <br />
            <span className="text-neutral-500">Begin Together.</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto mb-12">
            From Creative Collaborations to New Opportunities, Let’s make Something Meaningful happen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#191919] text-white px-9 py-4 rounded-full text-base font-medium tracking-wide hover:bg-neutral-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto justify-center"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href={`mailto:${contactEmail}`}
              className="group inline-flex items-center gap-3 bg-white text-[#191919] px-9 py-4 rounded-full text-base font-medium tracking-wide border border-black/10 hover:bg-neutral-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 text-neutral-500" />
              <span>Email Me</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

