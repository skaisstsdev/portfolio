import React, { useState } from 'react';
import { ExternalLink, ChevronDown, Monitor, Smartphone } from 'lucide-react';
import { InfiniteGallery } from './ui/3d-gallery-photography';
import { LaptopFrame, MobileFrame } from './ui/DeviceFrames';
import { ContainerScroll } from './ui/container-scroll-animation';

export default function MatchaMatcha() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const images = [
    '/img/matchamatcha/desktop/1_main_page_hero.webp',
    '/img/matchamatcha/desktop/2_main_page.webp',
    '/img/matchamatcha/desktop/3_menu.webp',
    '/img/matchamatcha/desktop/4_variants.webp',
    '/img/matchamatcha/desktop/5_contacts.webp',
  ];

  const mobileImages = [
    '/img/matchamatcha/mobile/1_main_page_hero.webp',
    '/img/matchamatcha/mobile/2_main_page.webp',
    '/img/matchamatcha/mobile/3_menu.webp',
    '/img/matchamatcha/mobile/5_variants.webp',
  ];

  const galleryImages = [
    { src: '/img/matchamatcha/desktop/1_main_page_hero.webp', alt: 'Hero' },
    { src: '/img/matchamatcha/desktop/3_menu.webp', alt: 'Menu' },
    { src: '/img/matchamatcha/desktop/4_variants.webp', alt: 'Variants' },
    { src: '/img/matchamatcha/desktop/1_main_page_hero.webp', alt: 'Hero' },
    { src: '/img/matchamatcha/desktop/3_menu.webp', alt: 'Menu' },
    { src: '/img/matchamatcha/desktop/4_variants.webp', alt: 'Variants' },
  ];

  const handleNextDesktop = () => {
    setCurrentDesktopIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrevDesktop = () => {
    setCurrentDesktopIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextMobile = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % mobileImages.length);
  };
  const handlePrevMobile = () => {
    setCurrentMobileIndex((prev) => (prev - 1 + mobileImages.length) % mobileImages.length);
  };

  const sections = [
    {
      title: "Project Background",
      content: "Matcha Matcha is a specialty cafe chain in Germany with a focus on high-quality, authentic Japanese matcha beverages. They needed a fresh, energetic online platform to showcase their modern menu and highlight their multiple physical locations. The brand blends traditional Japanese tea culture with modern, fast-paced European cafe aesthetics."
    },
    {
      title: "Goals & Challenges",
      content: "The objective was to create a highly visual, fast, and responsive website that accurately reflects the vibrant, green aesthetic of the brand. A major challenge was ensuring that the menu was highly readable and appetizing on mobile devices, as their primary audience consists of on-the-go professionals and students checking the menu from their phones."
    },
    {
      title: "Features & Architecture",
      content: "Built using modern web technologies to ensure lightning-fast load times. The UI incorporates subtle micro-interactions and scroll animations that make exploring the menu an engaging experience. A dynamic location finder was implemented, and the entire architecture is heavily optimized for SEO and mobile responsiveness."
    }
  ];

  const desktopView = (
    <div className="w-full relative flex flex-col items-center">
      <LaptopFrame>
        <div className="relative w-full h-full bg-black">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                i === currentDesktopIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>
      </LaptopFrame>
      <button 
        onClick={handlePrevDesktop} 
        className="hidden md:block absolute left-[-20px] md:left-[-40px] xl:left-[-60px] top-1/2 -translate-y-1/2 z-20 p-4 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
      >
        ←
      </button>
      <button 
        onClick={handleNextDesktop} 
        className="hidden md:block absolute right-[-20px] md:right-[-40px] xl:right-[-60px] top-1/2 -translate-y-1/2 z-20 p-4 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
      >
        →
      </button>
      
      <div className="flex gap-4 mt-8 md:hidden">
        <button onClick={handlePrevDesktop} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-white">←</button>
        <button onClick={handleNextDesktop} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-white">→</button>
      </div>
    </div>
  );

  const mobileView = (
    <div className="w-full max-w-[260px] md:max-w-[380px] relative flex flex-col items-center mx-auto">
      <MobileFrame images={mobileImages} currentIndex={currentMobileIndex} />
      
      <button 
        onClick={handlePrevMobile} 
        className="hidden md:block absolute left-[-20px] md:left-[-60px] xl:left-[-80px] top-1/2 -translate-y-1/2 z-20 p-4 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
      >
        ←
      </button>
      <button 
        onClick={handleNextMobile} 
        className="hidden md:block absolute right-[-20px] md:right-[-60px] xl:right-[-80px] top-1/2 -translate-y-1/2 z-20 p-4 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
      >
        →
      </button>
      
      <div className="flex gap-4 mt-8 md:hidden">
        <button onClick={handlePrevMobile} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-white">←</button>
        <button onClick={handleNextMobile} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-white">→</button>
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-24 bg-transparent border-t border-white/5 pb-48">
      <div className="container mx-auto px-6">
        
        {/* Container Scroll with Title and Gallery */}
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-5xl md:text-8xl font-light uppercase tracking-widest text-white">
                Matcha Matcha
              </h2>
              <p className="mt-4 text-white/60 uppercase tracking-widest text-sm md:text-base">
                Specialty Cafe Chain
              </p>
            </>
          }
        >
          <img src={images[0]} alt="Matcha Matcha Desktop Hero" className="w-full h-full object-cover object-top rounded-lg md:rounded-2xl" />
        </ContainerScroll>

        {/* Project Details & Link */}
        <div className="mt-12 md:mt-24 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
          <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 max-w-2xl">
            A vibrant, highly visual online platform designed for a modern specialty matcha cafe chain in Germany.
          </p>
          <a 
            href="https://www.matchamatcha.site" 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap uppercase tracking-widest text-xs"
          >
            Visit Live Site
            <ExternalLink size={16} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        {/* Bento Grid Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Role</h4>
            <p className="font-light">Design & Dev</p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Duration</h4>
            <p className="font-light">2 Months</p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Industry</h4>
            <p className="font-light">F&B / Hospitality</p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Stack</h4>
            <p className="font-light">React / Tailwind</p>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-4xl mx-auto mb-24 flex flex-col gap-2">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className="border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-xl font-light uppercase tracking-widest">{section.title}</h3>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-white/60 leading-relaxed font-light text-sm md:text-base">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Device Toggle */}
        {/* Device Switcher - Desktop Only */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="flex p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <button
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${
                device === 'desktop' ? 'bg-white text-black' : 'text-white/50 hover:text-white'
              }`}
            >
              <Monitor size={16} /> Desktop
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all ${
                device === 'mobile' ? 'bg-white text-black' : 'text-white/50 hover:text-white'
              }`}
            >
              <Smartphone size={16} /> Mobile
            </button>
          </div>
        </div>

        {/* Device Showcase */}
        <div className="max-w-6xl mx-auto flex-col items-center">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-center w-full">
            {device === 'desktop' ? desktopView : mobileView}
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col gap-24 w-full items-center px-4 mt-12">
            <div className="w-full flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-white mb-8 tracking-wide uppercase">Mobile</h3>
              {mobileView}
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-white mb-8 tracking-wide uppercase">Desktop</h3>
              {desktopView}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
