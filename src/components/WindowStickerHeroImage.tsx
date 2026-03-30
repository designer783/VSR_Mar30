"use client";

import { motion } from "framer-motion";

export function WindowStickerHeroImage() {
  return (
    <div className="relative aspect-[4/3] w-full flex items-center justify-center">
      {/* Main Sticker */}
      <motion.div 
        className="relative z-10 w-[85%]"
        style={{ rotate: -2 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <img
          src="/assets/images/ws-main-sticker.png"
          alt="Window Sticker Main"
          className="w-full h-auto drop-shadow-2xl rounded-lg"
          onError={(e) => (e.currentTarget.src = "https://picsum.photos/seed/windowsticker/800/600")}
        />
      </motion.div>

      {/* Floating Badge: Vehicle Info */}
      <motion.div 
        className="absolute -top-12 -left-8 z-20 w-[45%]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: [0, -8, 0],
          opacity: 1
        }}
        transition={{ 
          y: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: { delay: 0.7, duration: 0.5 }
        }}
      >
        <img src="/assets/images/ws-badge-vehicle.png" alt="Vehicle Info Badge" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Fuel (Top Right) */}
      <motion.div 
        className="absolute -top-12 -right-12 z-20 w-[45%]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: [0, 10, 0],
          opacity: 1
        }}
        transition={{ 
          y: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: { delay: 1, duration: 0.5 }
        }}
      >
        <img src="/assets/images/ws-badge-fuel.png" alt="Fuel Economy Badge" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: MSRP (Middle Left) */}
      <motion.div 
        className="absolute top-[35%] -left-16 z-20 w-[40%]"
        initial={{ x: -20, opacity: 0 }}
        animate={{ 
          x: [0, 8, 0],
          opacity: 1
        }}
        transition={{ 
          x: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          },
          opacity: { delay: 0.8, duration: 0.5 }
        }}
      >
        <img src="/assets/images/ws-badge-msrp.png" alt="MSRP Badge" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Total Price (Bottom Left) */}
      <motion.div 
        className="absolute -bottom-10 -left-6 z-20 w-[48%]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: [0, 12, 0],
          opacity: 1
        }}
        transition={{ 
          y: {
            duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5
          },
          opacity: { delay: 1.4, duration: 0.5 }
        }}
      >
        <img src="/assets/images/ws-badge-price.png" alt="Total Price Badge" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Safety (Bottom Right) */}
      <motion.div 
        className="absolute -bottom-12 -right-8 z-20 w-[50%]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: [0, -10, 0],
          opacity: 1
        }}
        transition={{ 
          y: {
            duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2
          },
          opacity: { delay: 1.2, duration: 0.5 }
        }}
      >
        <img src="/assets/images/ws-badge-safety.png" alt="Safety Ratings Badge" className="w-full h-auto drop-shadow-lg" />
      </motion.div>
    </div>
  );
}
