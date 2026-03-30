"use client";



import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MediaSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
  items?: string[]
  buttonText?: string
  buttonLink?: string
  onButtonClick?: () => void
  className?: string
  variant?: 'white' | 'slate'
}

export function StandardMediaSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  items,
  buttonText,
  buttonLink = "#",
  onButtonClick,
  className,
  variant = 'white'
}: MediaSectionProps) {
  return (
    <section className={cn(
      "py-16 md:py-24",
      variant === 'slate' ? "bg-slate-50" : "bg-white",
      className
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "grid md:grid-cols-2 gap-12 lg:gap-20 items-center",
          imagePosition === 'left' && "md:flex-row-reverse"
        )}>
          <FadeIn direction={imagePosition === 'right' ? 'left' : 'right'} className={cn(
            imagePosition === 'left' && "md:order-2"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            
            {items && (
              <ul className="space-y-4 mb-8">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary-accent/10 text-primary-accent flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                      {i + 1}
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {buttonText && (
              <Button size="lg" variant="accent" onClick={onButtonClick}>
                {buttonText}
              </Button>
            )}
          </FadeIn>

          <FadeIn direction={imagePosition === 'right' ? 'right' : 'left'} className={cn(
            "relative",
            imagePosition === 'left' && "md:order-1"
          )}>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-slate-100">
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
