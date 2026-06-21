import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DeviceCarouselProps {
  images: string[];
  type: 'macbook' | 'iphone';
}

export function DeviceCarousel({ images, type }: DeviceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full max-w-[1200px] mx-auto flex flex-col items-center my-16">
      
      {/* Container to scale down nicely on smaller screens */}
      <div className={`relative w-full ${type === 'macbook' ? 'max-w-4xl' : 'max-w-[320px]'} mx-auto`}>
        
        {/* Device Frame */}
        {type === 'macbook' ? (
          <div className="relative w-full pt-[63%]">
            {/* Screen border */}
            <div className="absolute top-0 inset-x-0 bottom-[5%] bg-[#1a1a1a] rounded-t-2xl md:rounded-t-3xl border-[2px] md:border-[4px] border-[#333] shadow-2xl overflow-hidden">
              {/* Camera dot */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#333] z-20"></div>
              {/* Screen Content */}
              <div className="absolute inset-x-1 md:inset-x-2 top-2 md:top-4 bottom-2 bg-black overflow-hidden rounded-sm">
                <img 
                  src={images[currentIndex]} 
                  alt={`Screenshot ${currentIndex + 1}`} 
                  className="w-full h-auto object-contain object-top transition-opacity duration-300"
                />
              </div>
            </div>
            {/* Base (Keyboard area fake) */}
            <div className="absolute bottom-0 inset-x-[-5%] h-[5%] bg-[#333] rounded-b-xl md:rounded-b-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1/4 before:h-1 before:bg-[#222] before:rounded-b-md"></div>
          </div>
        ) : (
          <div className="relative w-full pt-[216%]">
            {/* iPhone Frame */}
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-[2rem] md:rounded-[3rem] border-[4px] md:border-[8px] border-[#333] shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[25px] bg-[#333] rounded-b-2xl z-20"></div>
              {/* Screen Content */}
              <div className="absolute inset-1 md:inset-2 bg-black overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]">
                <img 
                  src={images[currentIndex]} 
                  alt={`Screenshot ${currentIndex + 1}`} 
                  className="w-full h-auto object-cover object-top transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        )}

        {/* Controls Overlay */}
        {images.length > 1 && (
          <div className={`absolute top-1/2 -translate-y-1/2 w-[120%] -left-[10%] flex justify-between pointer-events-none z-30`}>
            <button 
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-white/10 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white pointer-events-auto hover:bg-white/10 transition-colors shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
      
      {/* Pagination Indicators */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-8">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-6' : 'bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
