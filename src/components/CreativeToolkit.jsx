import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CreativeToolkit() {
  const { creativeToolkit } = portfolioData;
  const [activeTool, setActiveTool] = useState(creativeToolkit[0]);

  return (
    <section className="py-24 sm:py-32 bg-[#EBEBEB] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
            Software &amp; Stack
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#191919] font-display">
            My Creative <br />
            <span className="text-neutral-500">Toolkit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Tool Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/10">
            {creativeToolkit.map((tool, index) => {
              const isSelected = activeTool.name === tool.name;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setActiveTool(tool)}
                  className={`group py-5 px-4 cursor-pointer transition-all duration-300 flex items-center justify-between rounded-2xl ${
                    isSelected ? 'bg-white shadow-md' : 'hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-mono text-neutral-400">
                      0{index + 1}
                    </span>
                    <div>
                      <h4
                        className={`text-xl sm:text-2xl font-bold tracking-tight font-display transition-colors ${
                          isSelected ? 'text-[#191919]' : 'text-neutral-700'
                        }`}
                      >
                        {tool.name}
                      </h4>
                      <p className="text-xs text-neutral-500 font-medium">
                        {tool.category}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#191919] text-white rotate-45'
                        : 'bg-neutral-200 text-neutral-600 group-hover:bg-[#191919] group-hover:text-white'
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Preview Card on the right */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <div className="w-full max-w-sm aspect-square bg-white rounded-3xl p-8 shadow-2xl border border-black/5 flex flex-col justify-between items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-100 rounded-bl-full pointer-events-none" />

              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                Tool Preview
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-32 rounded-2xl p-4 bg-neutral-50 shadow-inner flex items-center justify-center my-4"
                >
                  <img
                    src={activeTool.image}
                    alt={activeTool.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              <div>
                <h3 className="text-2xl font-bold text-[#191919] font-display">
                  {activeTool.name}
                </h3>
                <p className="text-sm text-neutral-500 mt-1">{activeTool.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

