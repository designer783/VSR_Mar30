"use client";



import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn"
import { cn } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"

interface FeatureItem {
  title: string
  description?: string
  icon?: React.ReactNode
}

interface FeatureGridProps {
  title?: string
  description?: string
  items: FeatureItem[]
  columns?: 2 | 3 | 4 | 5 | 6
  variant?: 'check' | 'card' | 'simple'
  className?: string
}

export function StandardFeatureGrid({
  title,
  description,
  items,
  columns = 3,
  variant = 'card',
  className
}: FeatureGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
  }[columns];

  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="container mx-auto px-4 md:px-6">
        {(title || description) && (
          <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
            {title && <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">{title}</h2>}
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </FadeIn>
        )}

        <StaggerContainer className={cn("grid gap-8", gridCols)}>
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeUpVariant} 
              className={cn(
                variant === 'card' && "bg-slate-50/50 p-8 rounded-2xl border border-border hover:shadow-md transition-all",
                variant === 'simple' && "text-center",
                variant === 'check' && "flex items-center gap-3 bg-slate-50/50 p-4 rounded-xl border border-border"
              )}
            >
              {variant === 'check' ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-primary-accent shrink-0" />
                  <span className="font-medium text-primary">{item.title}</span>
                </>
              ) : (
                <>
                  {item.icon && (
                    <div className={cn(
                      "h-14 w-14 rounded-full bg-primary-accent/10 flex items-center justify-center mb-6",
                      variant === 'simple' && "mx-auto"
                    )}>
                      {item.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  {item.description && <p className="text-muted-foreground">{item.description}</p>}
                </>
              )}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
