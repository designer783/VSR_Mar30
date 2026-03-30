"use client";



import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  fullWidth?: boolean
  className?: string
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  fullWidth = false,
  className = "",
  duration = 0.7
}: FadeInProps & { duration?: number }) {
  
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
} as const

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
} as const

export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
} as const

export function StaggerContainer({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={staggerContainerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
