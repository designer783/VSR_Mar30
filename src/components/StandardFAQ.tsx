"use client";



import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface StandardFAQProps {
  title?: string
  description?: string
  items: FAQItem[]
  className?: string
  variant?: 'default' | 'narrow' | 'centered'
}

export function StandardFAQ({ 
  title, 
  description, 
  items, 
  className,
  variant = 'default' 
}: StandardFAQProps) {
  const containerClasses = cn(
    "py-16 md:py-24",
    variant === 'centered' && "text-center",
    className
  )

  const contentClasses = cn(
    "container mx-auto px-4 md:px-6",
    variant === 'narrow' ? "max-w-3xl" : "max-w-4xl"
  )

  return (
    <section className={containerClasses}>
      <div className={contentClasses}>
        {(title || description) && (
          <FadeIn direction="up" className="mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </FadeIn>
        )}
        
        <StaggerContainer className="w-full space-y-4">
          {items.map((faq, index) => (
            <motion.div variants={fadeUpVariant} key={index}>
              <Accordion type="solid" collapsible className="w-full">
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-background border border-border rounded-lg px-6 overflow-hidden transition-all hover:border-primary/20"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary-accent py-5 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
