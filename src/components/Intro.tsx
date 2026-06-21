import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="relative z-10 w-full py-24 md:py-32 flex justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed text-white/80 tracking-wide">
          Crafting digital experiences that merge <span className="text-white font-normal">stunning aesthetics</span> with <span className="text-white font-normal">robust engineering</span>. Explore a curated selection of my recent work.
        </p>
      </motion.div>
    </section>
  );
}
