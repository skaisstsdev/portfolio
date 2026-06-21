import React from 'react'

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent">
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-white">
        <h1 className="text-5xl md:text-7xl lg:text-9xl tracking-[0.05em] uppercase font-light text-center px-4">
          Ignat Nikolayev
        </h1>
        <p className="mt-8 text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] opacity-60">
          Digital Craft & Engineering
        </p>
      </div>

    </div>
  )
}
