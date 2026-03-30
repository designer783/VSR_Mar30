"use client";



import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface StepItem {
  title: string
  description: string
  step?: string | number
}

interface StandardStepsProps {
  title?: string
  description?: string
  items: StepItem[]
  buttonText?: string
  onButtonClick?: () => void
  className?: string
  variant?: 'number' | 'dot'
}

export function StandardSteps({
  title,
  description,
  items,
  buttonText,
  onButtonClick,
  className,
  variant = 'number'
}: StandardStepsProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-slate-50", className)}>
      <div className="container mx-auto px-4 md:px-6">
        {(title || description) && (
          <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
            {title && <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">{title}</h2>}
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </FadeIn>
        )}

        <StaggerContainer className="grid gap-8 md:grid-cols-3 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border -z-0"></div>
          
          {items.map((item, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center mb-6 border-4 border-slate-50 shadow-sm text-3xl font-bold text-primary font-heading">
                {item.step || index + 1}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">{item.title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {buttonText && (
          <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
            <Button size="lg" variant="accent" onClick={onButtonClick}>
              {buttonText}
            </Button>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
