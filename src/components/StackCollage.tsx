"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: 1, image: '/assets/images/report-header.png', label: 'Vehicle History Report', initialRotation: -2, xOffset: 0, yOffset: 0, scale: 1 },
  { id: 2, image: '/assets/images/auction-history.png', label: 'Auction History', initialRotation: 5, xOffset: 40, yOffset: -30, scale: 0.95 },
  { id: 3, image: '/assets/images/title-brand-check.png', label: 'Title Brand Check', initialRotation: -5, xOffset: -60, yOffset: 40, scale: 0.95 },
  { id: 4, image: '/assets/images/theft-records.png', label: 'Theft Records', initialRotation: 3, xOffset: -30, yOffset: -70, scale: 0.9 },
];

export function StackCollage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center w-full max-w-2xl mx-auto h-[500px] overflow-visible">
      <div 
        className="relative w-full max-w-[450px] aspect-video cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="absolute w-full rounded-xl overflow-hidden"
              initial={false}
              animate={isHovered ? {
                x: (index - 1.5) * 150 + item.xOffset * 0.5,
                y: (index - 1.5) * 40 + item.yOffset * 0.5,
                rotate: (index - 1.5) * 5,
                scale: 1.1,
                zIndex: 50 + index,
              } : {
                x: item.xOffset,
                y: item.yOffset,
                rotate: item.initialRotation,
                scale: item.scale,
                zIndex: index === 0 ? 40 : 30 - index,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 150, 
                damping: 20 
              }}
              whileHover={{ 
                scale: isHovered ? 1.15 : 1.05,
                zIndex: 100,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative group">
                <img 
                  src={item.image} 
                  alt={item.label} 
                  className="w-full h-auto object-contain select-none shadow-xl border border-white/20" 
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
