import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function VisualArchive() {
  const { visualArchive } = portfolioData;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 sm:py-32 bg-[#EBEBEB] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
              Gallery &amp; Explorations
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#191919] font-display">
              Visual <br />
              <span className="text-neutral-500">Archive</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
            A curated collection of social campaigns, poster graphics, branding collaterals, and commercial visual concepts.
          </p>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visualArchive.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md border border-black/5 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Media Container */}
              <div className="aspect-[4/5] sm:aspect-auto overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="self-end bg-white/20 backdrop-blur-md p-2 rounded-full">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-white/80 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold tracking-tight font-display">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 sm:p-10 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              <div className="p-4 bg-neutral-900 text-white flex justify-between items-center">
                <span className="font-medium text-sm">{selectedImage.title}</span>
                <span className="text-xs text-neutral-400">{selectedImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

