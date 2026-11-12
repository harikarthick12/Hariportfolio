import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { name, socialLinks } = portfolioData.personal;

  return (
    <footer className="bg-[#141414] text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Main Statement */}
          <div className="md:col-span-6">
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight font-display text-white mb-6">
              Creative Mindset.
              <br />
              <span className="text-neutral-400">Digital Skillset.</span>
              <br />
              <span className="text-neutral-600">Marketing Vision.</span>
            </h3>
            <p className="text-neutral-400 text-sm max-w-md">
              Combining high-level aesthetic sensitivity with data-driven strategy to bring brands to life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href="#home"
                  className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                >
                  About Me
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <h5 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6">
              Connect
            </h5>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors text-sm font-medium group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors text-sm font-medium group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {name}. All Rights Reserved.</p>
          <p>Proudly Designed &amp; Crafted for High Performance.</p>
        </div>
      </div>
    </footer>
  );
}

