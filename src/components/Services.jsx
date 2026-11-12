import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Services() {
  const { services } = portfolioData;

  return (
    <section className="py-24 sm:py-32 bg-[#EBEBEB] border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
            Capabilities
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#191919] font-display">
            What I can <br />
            <span className="text-neutral-500">Help you with?</span>
          </h2>
        </div>

        {/* 4 Service Cards Grid with Tilts and Smooth Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-black/5 flex flex-col justify-between transition-all duration-300 transform ${service.rotation}`}
            >
              {/* Image Container */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-neutral-100/60 flex items-center justify-center p-4 mb-6 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md group-hover:drop-shadow-xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-[#191919]" />
                </div>
              </div>

              {/* Service Info */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
                  {service.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#191919] font-display leading-tight">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

