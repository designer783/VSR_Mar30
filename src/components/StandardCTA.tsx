"use client";



import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StandardCTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink?: string
  onButtonClick?: () => void
  variant?: 'navy' | 'accent' | 'glass'
  className?: string
}

export function StandardCTA({
  title,
  description,
  buttonText,
  buttonLink = "#",
  onButtonClick,
  variant = 'navy',
  className
}: StandardCTAProps) {
  const variants = {
    navy: "bg-primary border-primary-accent/10",
    accent: "bg-primary-accent border-primary-accent/10",
    glass: "bg-slate-900 border-primary-accent/10 shadow-2xl"
  }

  return (
    <section className={cn("py-24 bg-white", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up" className={cn(
          "p-12 md:p-20 text-center relative overflow-hidden rounded-3xl",
          variants[variant]
        )}>
          {/* Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-accent/20 to-purple-600/20 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              {description}
            </p>
            <Button 
              size="lg" 
              variant="accent" 
              className="h-14 px-10 text-lg shadow-xl hover:-translate-y-1 transition-all"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
