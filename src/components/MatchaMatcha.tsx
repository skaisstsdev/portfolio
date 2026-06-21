import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, ChevronDown, Monitor, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InfiniteGallery } from './ui/3d-gallery-photography';
import { LaptopFrame, MobileFrame } from './ui/DeviceFrames';
import { ContainerScroll } from './ui/container-scroll-animation';

export default function MatchaMatcha() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    "/img/matchamatcha/desktop/1_main_page_hero.webp",
    "/img/matchamatcha/desktop/2_main_page.webp",
    "/img/matchamatcha/desktop/3_menu.webp",
    "/img/matchamatcha/desktop/4_variants.webp",
    "/img/matchamatcha/desktop/5_contacts.webp"
  ];

  const mobileImages = [
    "/img/matchamatcha/mobile/1_main_page_hero.webp",
    "/img/matchamatcha/mobile/2_main_page.webp",
    "/img/matchamatcha/mobile/3_menu.webp",
    "/img/matchamatcha/mobile/4_menu.webp",
    "/img/matchamatcha/mobile/5_variants.webp",
    "/img/matchamatcha/mobile/6_contacts.webp",
    "/img/matchamatcha/mobile/7_menu_bar.webp"
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
      title: "Design & Vision",
      content: "Built entirely from scratch with a mobile-first approach, the project focuses on presenting the brand identity and menu through a striking, highly interactive visual experience that demonstrates cutting-edge web design capabilities."
    },
    {
      title: "Interactive Features",
      content: "The single-page architecture incorporates custom visual experiences and interactive animations to engage users, providing a seamless flow through the brand story, product information, and menu variations."
    },
    {
      title: "Advanced Technologies",
      content: "The frontend leverages React and Vite, enriched with sophisticated animations powered by GSAP and React Spring. Custom 3D elements are seamlessly integrated using React Three Fiber and Three.js, alongside an i18n localization system."
    }
  ];

  return (
    <section className="relative w-full py-28 md:py-36 bg-transparent">
      <div className="container mx-auto px-6">
        
        {/* Container Scroll with Title and Gallery */}
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-5xl md:text-8xl font-light uppercase tracking-widest text-white">
                Matcha Matcha
              </h2>
              <p className="mt-4 text-white/60 uppercase tracking-widest text-sm md:text-base">
                Specialty Cafe Concept
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
            A vibrant, independent concept project created for an existing food and beverage brand in Germany. The platform is designed to showcase strong branding, modern aesthetics, and highly interactive visual experiences.
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
            <p className="font-light">Designer & Dev</p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Type</h4>
            <p className="font-light">Concept Project</p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Industry</h4>
            <p className="font-light">Food & Beverage</p>
          </div>
          <div className="p-6 border border-white/5 rounded-2xl bg-black/60 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Stack</h4>
            <p className="font-light">React, Three.js, i18n</p>
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
                <motion.div layoutId="pill-matcha" className="absolute inset-0 bg-white rounded-full z-[-1]" />
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
                <motion.div layoutId="pill-matcha" className="absolute inset-0 bg-white rounded-full z-[-1]" />
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
