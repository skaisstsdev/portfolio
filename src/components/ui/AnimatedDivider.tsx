import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedDivider() {
  return (
    <div className="w-full h-[1px] bg-white/10 overflow-hidden relative z-20">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '300%' }}
        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
        className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />
    </div>
  );
}
