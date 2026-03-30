"use client";

import { motion } from "framer-motion";

export function ClassicHeroImage() {
  return (
    <div className="relative w-full h-[520px] flex items-center justify-center overflow-visible">
      {/* Central Background: Classic Window Sticker Report */}
      <motion.div
        className="absolute z-10"
        style={{ width: '88%', top: '6%', left: '6%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img
          src="/assets/images/classic-window-sticker/browser/Safari (Big Sur) - Light.png"
          alt="Classic Window Sticker Report"
          className="w-full h-auto drop-shadow-2xl rounded-xl"
          onError={(e) => (e.currentTarget.src = "https://picsum.photos/seed/classic/800/600")}
        />
      </motion.div>

      {/* Floating Badge: Vehicle Description - Pontiac (Top Left) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '38%', top: '-2%', left: '-2%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          opacity: { delay: 0.7, duration: 0.5 }
        }}
      >
        <img src="/assets/images/classic-window-sticker/Frame 1000010556.png" alt="Vehicle Description" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Original Base Price (Top Right) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '30%', top: '0%', right: '-2%' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, 12, 0], opacity: 1 }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          opacity: { delay: 0.9, duration: 0.5 }
        }}
      >
        <img src="/assets/images/classic-window-sticker/Frame 1000010558.png" alt="Original Base Price" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Standard/Optional Equipment (Right Middle) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '34%', top: '32%', right: '-2%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -8, 0], opacity: 1 }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
          opacity: { delay: 1.0, duration: 0.5 }
        }}
      >
        <img src="/assets/images/classic-window-sticker/Frame 1000010567.png" alt="Standard/Optional Equipment" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: No. Produced (Center) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '30%', bottom: '24%', left: '18%' }}
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{
          y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
          opacity: { delay: 1.1, duration: 0.5 }
        }}
      >
        <img src="/assets/images/classic-window-sticker/Frame 1000010566.png" alt="No. Produced" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Exterior Color strip (Bottom) */}
      <motion.div
        className="absolute z-20"
        style={{ width: '70%', bottom: '0%', left: '5%' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -6, 0], opacity: 1 }}
        transition={{
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
          opacity: { delay: 1.2, duration: 0.5 }
        }}
      >
        <img src="/assets/images/classic-window-sticker/Frame 1000010568.png" alt="Exterior Color" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge: Paint Icon (Bottom Left Corner) */}
      <motion.div
        className="absolute z-30"
        style={{ width: '8%', bottom: '10%', left: '3%' }}
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: [0, -12, 0], opacity: 1 }}
        transition={{
          y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
          opacity: { delay: 1.4, duration: 0.5 }
        }}
      >
        <img src="/assets/images/classic-window-sticker/mdi_paint-outline.png" alt="Paint Type" className="w-full h-auto drop-shadow-lg" />
      </motion.div>
    </div>
  );
}
