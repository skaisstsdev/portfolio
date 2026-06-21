import React, { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('header.about'), href: '#about' },
    { name: t('header.projects'), href: '#projects' },
    { name: t('header.contact'), href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl tracking-widest font-light uppercase text-white/90 hover:text-white transition-colors relative z-50">
          I.N.
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/60">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
          ))}
          <button onClick={toggleLanguage} className="flex items-center gap-2 hover:text-white transition-colors ml-4">
            <Globe size={16} />
            {i18n.language === 'en' ? 'EN' : 'DE'}
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-6 relative z-50">
          <button onClick={toggleLanguage} className="text-white/60 hover:text-white transition-colors text-sm font-light tracking-widest">
            {i18n.language === 'en' ? 'EN' : 'DE'}
          </button>
          <button 
            className="text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90 md:hidden h-screen w-screen"
          >
            <nav className="flex flex-col items-center gap-12 text-xl font-light uppercase tracking-widest text-white/80">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
