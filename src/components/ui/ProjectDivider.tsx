import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectDivider() {
  return (
    <div className="relative z-10 w-full flex justify-center items-center py-6 md:py-12 opacity-80">
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute w-16 h-16 bg-white/10 rounded-full blur-xl" />
        <div className="w-2 h-2 bg-white/60 rotate-45" />
      </motion.div>
    </div>
  );
}
