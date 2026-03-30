"use client";

import { motion } from "framer-motion";

export function VinCheckHeroImage() {
  return (
    <div className="relative w-full h-[520px] flex items-center justify-center overflow-visible">
      {/* Central: Browser/Report Screenshot */}
      <motion.div
        className="absolute z-10"
        style={{ width: '75%', top: '5%', left: '18%', rotate: 2 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          src="/assets/images/vin-check/Safari (Big Sur) - Light.png"
          alt="VIN Check Report"
          className="w-full h-auto drop-shadow-2xl rounded-xl"
          onError={(e) => (e.currentTarget.src = "https://picsum.photos/seed/vincheck/800/600")}
        />
      </motion.div>

      {/* Left: Vehicle Info Card */}
      <motion.div
        className="absolute z-20"
        style={{ width: '40%', bottom: '5%', left: '0%', rotate: -3 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <img
          src="/assets/images/vin-check/Frame 1000010507.png"
          alt="Vehicle Specs Card"
          className="w-full h-auto drop-shadow-xl"
        />
      </motion.div>

      {/* Right: Market Price Fan Cards */}
      <motion.div
        className="absolute z-20"
        style={{ width: '52%', bottom: '0%', right: '-2%' }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <img
          src="/assets/images/vin-check/Frame 1000010519.png"
          alt="Estimated Market Price"
          className="w-full h-auto drop-shadow-xl"
        />
      </motion.div>

      {/* Floating Badge: Title Issues (Top Center) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '30%', top: '-2%', left: '28%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          opacity: { delay: 0.8, duration: 0.5 }
        }}
      >
        <img src="/assets/images/vin-check/Container.png" alt="Title Issues" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Number of Accidents (Top Right) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '34%', top: '2%', right: '-4%' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, 12, 0], opacity: 1 }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          opacity: { delay: 1.0, duration: 0.5 }
        }}
      >
        <img src="/assets/images/vin-check/Container-1.png" alt="Number of Accidents" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Number of Owners (Bottom Left) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '32%', bottom: '12%', left: '-2%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -8, 0], opacity: 1 }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          opacity: { delay: 1.2, duration: 0.5 }
        }}
      >
        <img src="/assets/images/vin-check/Container-2.png" alt="Number of Owners" className="w-full h-auto drop-shadow-lg" />
      </motion.div>
    </div>
  );
}
