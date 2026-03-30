"use client";



import { motion } from "framer-motion";

interface HeroImageDecorationProps {
  imageSrc: string;
  imageAlt: string;
  badgeText?: string;
  priceBadge?: string;
}

export function HeroImageDecoration({ 
  imageSrc, 
  imageAlt, 
  badgeText,
  priceBadge 
}: HeroImageDecorationProps) {
  return (
    <div className="relative aspect-[4/3] w-full flex items-center justify-center">
      <motion.div 
        className="relative z-10 w-[85%]"
        style={{ rotate: -2 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-lg shadow-2xl border border-slate-200"
        />
      </motion.div>
      
      {badgeText && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute -top-6 -left-6 z-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 italic font-bold text-primary text-xs"
        >
          {badgeText}
        </motion.div>
      )}

      {priceBadge && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -bottom-6 -right-6 z-20 bg-primary-accent p-3 rounded-xl shadow-lg text-white font-bold text-xs"
        >
          {priceBadge}
        </motion.div>
      )}
    </div>
  );
}
