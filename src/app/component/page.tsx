"use client";



import { Badge } from "@/components/Badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UniversalHero } from "@/components/UniversalHero"
import { StandardFAQ } from "@/components/StandardFAQ"
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid"
import { StandardSteps } from "@/components/StandardSteps"
import { StandardMediaSection } from "@/components/StandardMediaSection"
import { StandardCTA } from "@/components/StandardCTA"
import { HeroImageDecoration } from "@/components/HeroImageDecoration"
import { CheckCircle2, ShieldCheck, Zap, Database, Search, FileText } from "lucide-react"

export default function ComponentShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Showcase Header */}
      <div className="bg-primary-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent)]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Badge variant="error" className="mb-6">System v4.0 Canonical</Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">Brand Guidelines</h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">A lean, scalable, and token-driven component system for Vehicles Report.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="grid gap-32">
          
          {/* Brand Identity */}
          <section id="identity">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-accent mb-4">01. Identity</h2>
                <h3 className="text-3xl font-bold text-primary-navy mb-6">Color Palette</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Our colors are strictly token-driven to ensure consistency across all themes.</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="h-24 rounded-2xl bg-primary-navy shadow-inner" />
                  <div><p className="font-bold text-sm">Primary Navy</p><p className="text-xs text-slate-400 font-mono">var(--primary-navy)</p></div>
                </div>
                <div className="space-y-3">
                  <div className="h-24 rounded-2xl bg-primary-accent shadow-sm" />
                  <div><p className="font-bold text-sm">Primary Accent</p><p className="text-xs text-slate-400 font-mono">var(--primary-accent)</p></div>
                </div>
                <div className="space-y-3">
                  <div className="h-24 rounded-2xl bg-slate-100" />
                  <div><p className="font-bold text-sm">Light Gray</p><p className="text-xs text-slate-400 font-mono">var(--bg-secondary)</p></div>
                </div>
                <div className="space-y-3">
                  <div className="h-24 rounded-2xl bg-white border border-slate-100" />
                  <div><p className="font-bold text-sm">Core White</p><p className="text-xs text-slate-400 font-mono">var(--background)</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* Canonical Blocks */}
          <section id="canonical-blocks">
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-accent mb-4">02. Canonical Blocks</h2>
              <h3 className="text-3xl font-bold text-primary-navy mb-4">The Building Primitives</h3>
              <p className="text-slate-500 max-w-2xl">All product pages are now constructed using these 6 standardized components to eliminate technical debt.</p>
            </div>

            <div className="space-y-24">
              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">1. Universal Hero</h4>
                <div className="border border-dashed border-slate-200 rounded-3xl p-4 overflow-hidden">
                  <UniversalHero 
                    title="Unified Hero Component" 
                    description="One component to rule all search entry points. Modular, accessible, and high-converting."
                    badge="Standard Product Header"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">2. Hero Image Decoration (Client)</h4>
                <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-50 p-12 rounded-3xl border border-border">
                  <div>
                    <h5 className="text-xl font-bold text-primary mb-4">Interactive Hero Visuals</h5>
                    <p className="text-muted-foreground mb-6">A dedicated client component for safe Framer Motion animations in Server Component pages. Supports floating badges, rotating images, and price tags.</p>
                  </div>
                  <div className="max-w-sm mx-auto w-full">
                    <HeroImageDecoration 
                      imageSrc="https://picsum.photos/seed/showcase/600/400"
                      imageAlt="Decoration Showcase"
                      badgeText="Verified Data"
                      priceBadge="$14.99 per report"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">2. Standard Feature Grid</h4>
                <StandardFeatureGrid 
                  title="Variant: Card (Default)"
                  items={[
                    { title: "Comprehensive Data", description: "600M+ records indexed.", icon: <Database /> },
                    { title: "Instant Results", description: "Milliseconds processing.", icon: <Zap /> },
                    { title: "Verified Sources", description: "Direct DMV/NMVTIS links.", icon: <ShieldCheck /> }
                  ]}
                  columns={3}
                />
                <StandardFeatureGrid 
                  title="Variant: Simple"
                  items={[{ title: "Alabama" }, { title: "Alaska" }, { title: "Arizona" }, { title: "Arkansas" }, { title: "California" }]}
                  variant="simple"
                  columns={5}
                />
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">3. Standard Steps</h4>
                <StandardSteps 
                  title="Process & Guides"
                  items={[
                    { title: "Enter Details", description: "VIN or Plate Number." },
                    { title: "Instant Search", description: "Backend aggregation." },
                    { title: "Download Report", description: "Verified PDF delivery." }
                  ]}
                />
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">4. Standard Media Section</h4>
                <StandardMediaSection 
                  title="Hybrid Layouts"
                  description="Standardized alternating text/image sections for storytelling."
                  imageSrc="https://picsum.photos/seed/media/800/600"
                  imageAlt="Media Section Prototype"
                  items={["Responsive Image Scaling", "Custom Image Positioning", "Staggered Text Animation"]}
                />
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">5. Standard CTA</h4>
                <StandardCTA 
                  title="Ready to Start Your Search?"
                  description="Global conversion component with unified styling."
                  buttonText="Get Started"
                  variant="glass"
                />
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">6. Standard FAQ</h4>
                <StandardFAQ 
                  title="System FAQ"
                  items={[
                    { question: "Why consolidate components?", answer: "To reduce bundle size, improve maintainability, and enforce brand consistency." },
                    { question: "How to use these blocks?", answer: "Import them directly into your page.tsx and pass data via props. No custom CSS needed." }
                  ]}
                  variant="narrow"
                />
              </div>
            </div>
          </section>

          {/* Primitives */}
          <section id="primitives">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-accent mb-4">03. Primitives</h2>
                <h3 className="text-3xl font-bold text-primary-navy mb-6">UI Elements</h3>
              </div>
              <div className="md:w-2/3 space-y-12">
                <div className="grid gap-8">
                  <div className="flex flex-wrap gap-4">
                    <Button variant="accent">Accent Primary</Button>
                    <Button variant="default">Navy Primary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="accent">Badge Primary</Badge>
                    <Badge variant="error">Badge Warning</Badge>
                    <Badge variant="success">Badge Success</Badge>
                    <Badge variant="outline">Badge Outline</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Standard Input Example" />
                    <Input placeholder="Active State" className="border-primary-accent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
