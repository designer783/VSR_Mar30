"use client";




import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"

interface ContentSection {
  title?: string
  content: React.ReactNode | string
}

interface GenericPageProps {
  title: string
  subtitle?: string
  effectiveDate?: string
  sections: ContentSection[]
}

export function GenericPage({ title, subtitle, effectiveDate, sections }: GenericPageProps) {
  return (
    <div className="bg-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn direction="down">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-navy mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-text-secondary mb-4">{subtitle}</p>}
          {effectiveDate && (
            <p className="text-text-tertiary font-bold mb-12 uppercase tracking-widest">
              EFFECTIVE DATE: {effectiveDate}
            </p>
          )}
        </FadeIn>
        
        <div className="prose prose-slate max-w-none space-y-12 text-text-secondary leading-relaxed">
          {sections.map((section, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <section className={section.title ? "border-l-4 border-primary-accent/20 pl-6 py-2" : ""}>
                {section.title && (
                  <h2 className="text-2xl font-bold text-primary-navy mb-6 font-heading">{section.title}</h2>
                )}
                <div className="whitespace-pre-line text-text-secondary leading-relaxed">
                  {section.content}
                </div>
              </section>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
