import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function BeyondVisualsTabs() {
  const { beyondVisualsTabs } = portfolioData;
  const [activeTabId, setActiveTabId] = useState(beyondVisualsTabs[0].id);

  const activeTab = beyondVisualsTabs.find((t) => t.id === activeTabId);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#EBEBEB] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
              In-Depth Case Studies
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#191919] font-display">
              Beyond the <br />
              <span className="text-neutral-500">Visuals</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
            Delivering strategic results through digital marketing architectures, comprehensive brand decks, e-commerce stores, and packaging designs.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {beyondVisualsTabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-[#191919] text-white shadow-md'
                    : 'bg-white/70 text-neutral-600 hover:bg-white hover:text-[#191919]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {activeTab.projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl p-5 shadow-lg border border-black/5 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-5 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                    <ArrowUpRight className="w-4 h-4 text-[#191919] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                    {project.category}
                  </span>
                  <h4 className="text-lg font-bold tracking-tight text-[#191919] font-display group-hover:text-neutral-600 transition-colors">
                    {project.title}
                  </h4>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

