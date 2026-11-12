import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#EBEBEB]/90 backdrop-blur-md py-4 border-b border-black/5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-[#191919] hover:opacity-80 transition-opacity"
        >
          {portfolioData.personal.name}
          <span className="text-neutral-500 font-light">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#home"
            className="text-sm font-medium tracking-wide text-[#191919] hover:text-neutral-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-sm font-medium tracking-wide text-neutral-600 hover:text-[#191919] transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-sm font-medium tracking-wide text-neutral-600 hover:text-[#191919] transition-colors"
          >
            About Me
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={portfolioData.personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#191919] text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-neutral-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#191919] hover:opacity-70 transition-opacity"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#EBEBEB] border-b border-black/10 px-6 py-6 flex flex-col gap-5 shadow-lg animate-fadeIn">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-[#191919]"
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-neutral-600"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium text-neutral-600"
          >
            About Me
          </a>
          <a
            href={portfolioData.personal.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#191919] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}

