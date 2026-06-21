import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Intro() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative z-10 w-full py-24 md:py-32 flex justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed text-white/80 tracking-wide">
          {t('intro.text1')} <span className="text-white font-normal">{t('intro.highlight1')}</span>{t('intro.text2')}<span className="text-white font-normal">{t('intro.highlight2')}</span>{t('intro.text3')}
        </p>
      </motion.div>
    </section>
  );
}
