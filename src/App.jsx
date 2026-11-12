import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutIntro from './components/AboutIntro';
import Services from './components/Services';
import VisualArchive from './components/VisualArchive';
import CreativeToolkit from './components/CreativeToolkit';
import BeyondVisualsTabs from './components/BeyondVisualsTabs';
import VideoSection from './components/VideoSection';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#EBEBEB] text-[#191919] selection:bg-[#191919] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
        <Services />
        <VisualArchive />
        <CreativeToolkit />
        <BeyondVisualsTabs />
        <VideoSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

