"use client";

import { motion } from "framer-motion";

export function LicensePlateHeroImage() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">
      {/* Central Background: California License Plate */}
      <motion.div
        className="absolute z-10"
        style={{ width: '80%', top: '20%', left: '10%' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          src="/assets/images/license-plate/Frame 1000010570.png"
          alt="California License Plate"
          className="w-full h-auto drop-shadow-2xl"
          onError={(e) => (e.currentTarget.src = "https://picsum.photos/seed/licenseplate/800/600")}
        />
      </motion.div>

      {/* Center Overlay: Magnifying Glass Icon (floating) */}
      <motion.div
        className="absolute z-20"
        style={{ width: '26%', top: '28%', left: '34%' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ y: [0, -14, 0], opacity: 1, scale: 1 }}
        transition={{
          y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
          opacity: { delay: 0.6, duration: 0.5 },
          scale: { delay: 0.6, duration: 0.5 }
        }}
      >
        <img
          src="/assets/images/license-plate/image 471.png"
          alt="Lookup Icon"
          className="w-full h-auto drop-shadow-xl"
        />
      </motion.div>

      {/* Floating Badge: Accident (Top Left) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '28%', top: '0%', left: '0%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          opacity: { delay: 0.8, duration: 0.5 }
        }}
      >
        <img src="/assets/images/license-plate/Card 2.png" alt="Accident" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Number of Owners (Top Right) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '34%', top: '5%', right: '-2%' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, 12, 0], opacity: 1 }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
          opacity: { delay: 1.0, duration: 0.5 }
        }}
      >
        <img src="/assets/images/license-plate/Container.png" alt="Number of Owners" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Theft (Bottom Left) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '30%', bottom: '2%', left: '-2%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -8, 0], opacity: 1 }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          opacity: { delay: 1.2, duration: 0.5 }
        }}
      >
        <img src="/assets/images/license-plate/Card 10.png" alt="Theft" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Damage (Bottom Right) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '28%', bottom: '4%', right: '0%' }}
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{
          y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
          opacity: { delay: 1.4, duration: 0.5 }
        }}
      >
        <img src="/assets/images/license-plate/Card 6.png" alt="Damage" className="w-full h-auto drop-shadow-lg" />
      </motion.div>
    </div>
  );
}
