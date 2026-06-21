import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, ChevronDown, Monitor, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InfiniteGallery } from './ui/3d-gallery-photography';
import { LaptopFrame, MobileFrame } from './ui/DeviceFrames';
import { ContainerScroll } from './ui/container-scroll-animation';

export default function KSKFarmos() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    if (window.innerWidth < 768) {
      setTimeout(() => {
        if (showcaseRef.current) {
          showcaseRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
    }
  }, [device]);

  const desktopImages = [
    "/img/ksk/desktop/1_main_page_hero.webp",
    "/img/ksk/desktop/3_main_page.webp",
    "/img/ksk/desktop/4_services.webp",
    "/img/ksk/desktop/6_about_us_hero.webp",
    "/img/ksk/desktop/7_jobs.webp",
    "/img/ksk/desktop/8_jobs.webp",
    "/img/ksk/desktop/10_faq.webp",
    "/img/ksk/desktop/11_form.webp",
    "/img/ksk/desktop/15_jobs_form.webp"
  ];

  const mobileImages = [
    "/img/ksk/mobile/1_main_page_hero.webp",
    "/img/ksk/mobile/2_main_hero.webp",
    "/img/ksk/mobile/3_main_hero.webp",
    "/img/ksk/mobile/4_services.webp",
    "/img/ksk/mobile/5_about_us.webp",
    "/img/ksk/mobile/6_cta.webp",
    "/img/ksk/mobile/7_menu.webp",
    "/img/ksk/mobile/8_services.webp",
    "/img/ksk/mobile/12_jobs.webp",
    "/img/ksk/mobile/13_chat_bot.webp"
  ];

  const galleryImages = [
    { src: '/img/ksk/desktop/1_main_page_hero.webp', alt: 'Hero' },
    { src: '/img/ksk/desktop/4_services.webp', alt: 'Services' },
    { src: '/img/ksk/desktop/6_about_us_hero.webp', alt: 'About' },
    { src: '/img/ksk/desktop/1_main_page_hero.webp', alt: 'Hero' },
    { src: '/img/ksk/desktop/4_services.webp', alt: 'Services' },
    { src: '/img/ksk/desktop/6_about_us_hero.webp', alt: 'About' },
  ];

  const handleNextDesktop = () => {
    setCurrentDesktopIndex((prev) => (prev + 1) % desktopImages.length);
  };
  const handlePrevDesktop = () => {
    setCurrentDesktopIndex((prev) => (prev - 1 + desktopImages.length) % desktopImages.length);
  };

  const handleNextMobile = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % mobileImages.length);
  };
  const handlePrevMobile = () => {
    setCurrentMobileIndex((prev) => (prev - 1 + mobileImages.length) % mobileImages.length);
  };

  const sections = [
    {
      title: "The Challenge",
      content: "The company operated with an outdated website that suffered from poor user experience and difficult navigation. It failed to effectively attract new clients or recruit employees, necessitating a complete overhaul to build a strong, trustworthy online presence."
    },
    {
      title: "Key Features",
      content: "The new platform includes an Administrative Dashboard for HR to manage the recruitment workflow (accept/reject candidates), a custom AI Assistant trained on company data to answer queries in 10 languages, and seamless multilingual support."
    },
    {
      title: "Technical Architecture",
      content: "Built using a robust stack featuring HTML/CSS/JS on the frontend, powered by Supabase for database operations, the OpenAI API for the intelligent assistant, and EmailJS for automated notifications."
    }
  ];

  return (
    <section id="projects" className="relative w-full py-28 md:py-36 bg-transparent">
      <div className="container mx-auto px-6">
        
        {/* Container Scroll with Title and Gallery */}
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-5xl md:text-8xl font-light uppercase tracking-widest text-white">
                KSK Farmos
              </h2>
              <p className="mt-4 text-white/60 uppercase tracking-widest text-sm md:text-base">
                Elderly Care Services
              </p>
            </>
          }
        >
          {desktopImages.map((src: string, i: number) => (
            <img key={i} src={src} alt={`Desktop screenshot ${i}`} className="w-full h-full object-cover object-top shrink-0" />
          ))}
        </ContainerScroll>

        {/* Project Details & Link */}
        <div className="mt-12 md:mt-24 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
          <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 max-w-2xl">
            A complete digital transformation for a German elderly care provider with over 13 years of history. The project involved a full redesign to establish a modern visual identity, improve lead generation, and streamline employee recruitment through an advanced digital platform.
          </p>
          <a 
            href="https://www.ksk-farmos.de" 
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
            <p className="font-light">Designer & Dev</p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Type</h4>
            <p className="font-light">B2B & B2C Platform</p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Industry</h4>
            <p className="font-light">Elderly Care</p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Stack</h4>
            <p className="font-light">HTML, CSS, JS, i18n</p>
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
        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-[#111]/80 backdrop-blur-xl rounded-full border border-white/10 flex-row-reverse md:flex-row relative">
            <button
              onClick={() => setDevice('desktop')}
              className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-colors ${
                device === 'desktop' ? 'text-black' : 'text-white/50 hover:text-white'
              }`}
            >
              {device === 'desktop' && (
                <motion.div layoutId="pill-ksk" className="absolute inset-0 bg-white rounded-full z-[-1]" />
              )}
              <Monitor size={16} /> Desktop
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-colors ${
                device === 'mobile' ? 'text-black' : 'text-white/50 hover:text-white'
              }`}
            >
              {device === 'mobile' && (
                <motion.div layoutId="pill-ksk" className="absolute inset-0 bg-white rounded-full z-[-1]" />
              )}
              <Smartphone size={16} /> Mobile
            </button>
          </div>
        </div>

        {/* Device Showcase */}
        <div ref={showcaseRef} className="max-w-6xl mx-auto flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={device}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              {device === 'desktop' ? (
            <div className="w-full relative flex flex-col items-center">
              <LaptopFrame>
                <div className="relative w-full h-full bg-black">
                  {desktopImages.map((src, i) => (
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
          ) : (
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
          )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
