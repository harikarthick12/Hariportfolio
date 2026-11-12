import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function VideoSection() {
  const { videos } = portfolioData;

  return (
    <section className="py-24 sm:py-32 bg-[#EBEBEB] border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
            Motion &amp; Reels
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#191919] font-display">
            Video <br />
            <span className="text-neutral-500">Editing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-black shadow-xl aspect-[9/16] flex flex-col justify-between"
            >
              {/* Hosted Video Player */}
              <video
                src={vid.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Top Link Pill */}
              <div className="relative z-10 p-5 flex justify-end">
                <a
                  href={vid.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-md p-2.5 rounded-full text-white hover:bg-white hover:text-black transition-all"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Bottom Info */}
              <div className="relative z-10 p-5 text-white">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white/70 mb-1">
                  <Play className="w-3 h-3 fill-current" /> Short-form Reel
                </span>
                <h4 className="text-base font-bold font-display">{vid.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

