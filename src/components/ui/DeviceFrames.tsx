import React, { type ReactNode } from 'react';

export const LaptopFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 md:px-0">
      {/* Screen */}
      <div className="relative border-[#444] border-[10px] md:border-[16px] rounded-t-2xl md:rounded-t-3xl overflow-hidden bg-black aspect-[16/10] shadow-2xl">
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar">
          {children}
        </div>
      </div>
      {/* Base */}
      <div className="relative w-[105%] md:w-[110%] -ml-[2.5%] md:-ml-[5%] h-3 md:h-5 bg-[#555] rounded-b-xl md:rounded-b-2xl shadow-xl flex justify-center border-t border-[#666]">
        {/* Finger notch */}
        <div className="w-16 md:w-24 h-1 md:h-2 bg-[#444] rounded-b-md"></div>
      </div>
    </div>
  );
};

export const TabletFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative mx-auto border-[#444] border-[8px] rounded-[2rem] h-[400px] md:h-[600px] w-full max-w-md overflow-hidden bg-black">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#222] z-10"></div>
      <div className="absolute inset-0 overflow-y-auto overflow-x-hidden no-scrollbar pt-6">
        {children}
      </div>
    </div>
  );
};

export const MobileFrame = ({ images, currentIndex }: { images: string[], currentIndex: number }) => {
  return (
    <div className="relative mx-auto border-[#444] border-[10px] md:border-[14px] rounded-[2.5rem] md:rounded-[3rem] w-full bg-black shadow-2xl overflow-hidden" style={{ aspectRatio: '1170/1988' }}>
      
      {/* Screen Content */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Mobile Screenshot ${i + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out ${
            i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
};
