"use client";

import { motion } from "framer-motion";

export function VinDecoderHeroImage() {
  return (
    <div className="relative w-full h-[520px] flex items-center justify-center overflow-visible">
      {/* Background: Vehicle Summary Grid */}
      <motion.div
        className="absolute z-10"
        style={{ width: '72%', top: '8%', right: '0%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          src="/assets/images/vin-decoder/Frame 1000010522.png"
          alt="Vehicle Summary"
          className="w-full h-auto drop-shadow-2xl rounded-xl"
          onError={(e) => (e.currentTarget.src = "https://picsum.photos/seed/vindecoder/800/600")}
        />
      </motion.div>

      {/* Left: Vehicle Specs Card */}
      <motion.div
        className="absolute z-20"
        style={{ width: '42%', top: '10%', left: '0%', rotate: -2 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <img
          src="/assets/images/vin-decoder/Frame 1000008828.png"
          alt="Vehicle Specs"
          className="w-full h-auto drop-shadow-xl"
        />
      </motion.div>

      {/* Floating Badge: Odometer (Top Center) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '26%', top: '-2%', left: '32%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -12, 0], opacity: 1 }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          opacity: { delay: 0.8, duration: 0.5 }
        }}
      >
        <img src="/assets/images/vin-decoder/Card 5.png" alt="Odometer" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Damage (Top Right) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '26%', top: '2%', right: '-2%' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          opacity: { delay: 1.0, duration: 0.5 }
        }}
      >
        <img src="/assets/images/vin-decoder/Card 6.png" alt="Damage" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Title Brand (Bottom Left) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '26%', bottom: '8%', left: '10%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -8, 0], opacity: 1 }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          opacity: { delay: 1.2, duration: 0.5 }
        }}
      >
        <img src="/assets/images/vin-decoder/Card 1.png" alt="Title Brand" className="w-full h-auto drop-shadow-lg" />
      </motion.div>
    </div>
  );
}
