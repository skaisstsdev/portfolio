import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import KSKFarmos from './components/KSKFarmos';
import MatchaMatcha from './components/MatchaMatcha';
import BeautyGlanz from './components/BeautyGlanz';
import Intro from './components/Intro';
import AnimatedDivider from './components/ui/AnimatedDivider';
import { MeshGradient } from '@paper-design/shaders-react';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen text-[var(--foreground)] selection:bg-white/20 selection:text-white">
      {/* Fixed Full-Site 3D Background */}
      <MeshGradient
        className="fixed inset-0 w-full h-full z-[-1] bg-black"
        colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
        speed={1.0}
      />

      <Header />
      <Hero />
      <AnimatedDivider />
      <Intro />
      <AnimatedDivider reverse />
      <div className="flex flex-col relative z-10">
        <KSKFarmos />
        <AnimatedDivider />
        <BeautyGlanz />
        <AnimatedDivider reverse />
        <MatchaMatcha />
      </div>
      
      {/* Footer */}
      <footer id="contact" className="relative z-10 w-full py-32 border-t border-white/5 text-center bg-black/50 backdrop-blur-md">
        <h2 className="text-4xl md:text-7xl font-light uppercase tracking-widest mb-12">
          Let's Work Together
        </h2>
        <div className="flex justify-center gap-8 text-sm uppercase tracking-widest opacity-70">
          <a href="mailto:nikolayevignat.work@gmail.com" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Email</a>
          <a href="https://github.com/skaisstsdev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">GitHub</a>
          <a href="#" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
