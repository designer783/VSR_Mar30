"use client";

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StateSelect } from "@/components/ui/StateSelect"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn"
import { cn } from "@/lib/utils"

import { VinInfoModal, WhereToFindVinModal } from "@/components/VinInfoModal"

export type HeroTabType = 'vin' | 'plate' | 'ymm';

interface HeroTab {
  id: HeroTabType
  label: string
}

interface UniversalHeroProps {
  title: string
  description: string
  badge?: string
  tabs?: HeroTab[]
  defaultTab?: HeroTabType
  rightElement?: React.ReactNode
  className?: string
  placeholder?: string
  highlights?: { label: string; icon: React.ReactNode }[]
  layout?: 'default' | 'form-right'
}

export function UniversalHero({
  title,
  description,
  badge,
  tabs = [{ id: 'vin', label: 'Search by VIN' }, { id: 'plate', label: 'Search by License Plate' }],
  defaultTab,
  rightElement,
  className,
  placeholder,
  highlights = [],
  layout = 'default'
}: UniversalHeroProps) {
  const [activeTab, setActiveTab] = useState<HeroTabType>(defaultTab || (tabs.length > 0 ? tabs[0].id : 'vin'))
  const [isVinInfoOpen, setIsVinInfoOpen] = useState(false)
  const [isWhereToFindOpen, setIsWhereToFindOpen] = useState(false)

  const renderForm = () => (
    <FadeIn delay={0.4} className={cn("w-full space-y-4", layout === 'form-right' ? "bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white mx-auto max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)]" : "max-w-xl")}>
      {tabs.length > 1 && (
        <div className="flex items-center gap-1.5 pb-1 overflow-x-auto no-scrollbar sm:overflow-visible">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-3 md:px-4 py-2.5 font-bold rounded-lg text-[13px] transition-all duration-300 whitespace-nowrap flex-1",
                activeTab === tab.id 
                  ? "bg-primary text-white shadow-sm" 
                  : "bg-white text-primary hover:bg-slate-50 border border-slate-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {activeTab !== 'ymm' ? (
        <div className="space-y-3">
          <div className="flex items-center bg-white rounded-xl shadow-sm border border-input focus-within:border-primary-accent/60 transition-all duration-300 p-1">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder={placeholder || (activeTab === 'vin' ? "Enter VIN" : "Enter Plate")}
                className="border-0 bg-transparent px-4 h-[52px] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 pr-12"
              />
              {activeTab === 'vin' && (
                <button
                  type="button"
                  onClick={() => setIsVinInfoOpen(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-primary-accent transition-colors p-1"
                  title="What is a VIN?"
                >
                  <HelpCircle className="h-5 w-5" />
                </button>
              )}
            </div>
            {activeTab === 'plate' && (
              <>
                <div className="w-px bg-border h-8"></div>
                <StateSelect />
              </>
            )}
          </div>
          <Button size="lg" variant="accent" className="w-full">
            {activeTab === 'vin' ? 'Search VIN' : 'Search License Plate'}
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Year / Make / Model — side-by-side in one row */}
          <div className="flex items-center bg-white rounded-xl shadow-sm border border-input transition-all duration-300 overflow-hidden">
            <div className="relative flex-1 min-w-0">
              <select className="w-full h-[52px] bg-transparent border-0 text-sm focus:ring-0 cursor-pointer outline-none px-4 appearance-none">
                <option value="">Year</option>
                {Array.from({ length: 36 }, (_, i) => 2025 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m6 9 6 6 6-6" /></svg>
              </div>
            </div>
            <div className="w-px bg-border h-8 shrink-0"></div>
            <div className="relative flex-1 min-w-0">
              <select className="w-full h-[52px] bg-transparent border-0 text-sm focus:ring-0 cursor-pointer outline-none px-4 appearance-none">
                <option value="">Make</option>
                <option value="acura">Acura</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="buick">Buick</option>
                <option value="cadillac">Cadillac</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="chrysler">Chrysler</option>
                <option value="dodge">Dodge</option>
                <option value="ford">Ford</option>
                <option value="gmc">GMC</option>
                <option value="honda">Honda</option>
                <option value="hyundai">Hyundai</option>
                <option value="jeep">Jeep</option>
                <option value="kia">Kia</option>
                <option value="lexus">Lexus</option>
                <option value="mazda">Mazda</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="nissan">Nissan</option>
                <option value="subaru">Subaru</option>
                <option value="tesla">Tesla</option>
                <option value="toyota">Toyota</option>
                <option value="volkswagen">Volkswagen</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m6 9 6 6 6-6" /></svg>
              </div>
            </div>
            <div className="w-px bg-border h-8 shrink-0"></div>
            <div className="relative flex-1 min-w-0">
              <select className="w-full h-[52px] bg-transparent border-0 text-sm focus:ring-0 cursor-pointer outline-none px-4 appearance-none">
                <option value="">Model</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m6 9 6 6 6-6" /></svg>
              </div>
            </div>
          </div>

          {/* Email + Phone row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center bg-white rounded-xl shadow-sm border border-input focus-within:border-primary-accent/60 transition-all duration-300 p-1">
              <Input type="email" placeholder="Enter Email" className="border-0 bg-transparent px-4 h-[52px] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0" />
            </div>
            <div className="flex items-center bg-white rounded-xl shadow-sm border border-input focus-within:border-primary-accent/60 transition-all duration-300 p-1">
              <Input type="tel" placeholder="Enter Phone for" className="border-0 bg-transparent px-4 h-[52px] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 min-w-0" />
              <span className="inline-flex items-center rounded-full border border-green-300 bg-green-50 px-3 py-1 text-xs font-bold text-green-700 whitespace-nowrap mr-2">10% OFF</span>
            </div>
          </div>

          <Button size="lg" variant="accent" className="w-full">
            Search
          </Button>
        </div>
      )}

      <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-2 text-[13px] font-normal text-muted-foreground mt-4 px-1">
        {activeTab === 'vin' && (
          <button
            onClick={() => setIsWhereToFindOpen(true)}
            className="hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
          >
            Where can I find the VIN?
          </button>
        )}
        <div className="w-px h-3 bg-border hidden sm:block"></div>
        <Link href="/sample" className="hover:text-primary transition-colors">View Sample</Link>
        <div className="w-px h-3 bg-border hidden sm:block"></div>
        <Link href="/pricing" className="hover:text-primary transition-colors">Continue without VIN</Link>
      </div>
    </FadeIn>
  )

  return (
    <section className={cn("relative overflow-hidden bg-slate-50/50 pt-20 pb-32 lg:pt-32 lg:pb-40 border-b border-slate-100", className)}>
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-accent/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <StaggerContainer className="space-y-4">
              {badge && (
                <motion.div variants={fadeUpVariant} className="inline-flex items-center rounded-full border border-primary-accent/20 bg-primary-accent/5 px-3 py-1 text-sm font-semibold text-primary-accent w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-primary-accent mr-2"></span>
                  {badge}
                </motion.div>
              )}
              <motion.h1 
                variants={fadeUpVariant} 
                className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-heading text-primary"
              >
                {title}
              </motion.h1>
              <motion.p 
                variants={fadeUpVariant} 
                className="max-w-[600px] text-lg text-muted-foreground font-sans leading-relaxed"
              >
                {description}
              </motion.p>

              {highlights.length > 0 && (
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4">
                  {highlights.map((item, i) => (
                    <motion.div 
                      key={i}
                      variants={fadeUpVariant} 
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <div className="text-verification shrink-0">{item.icon}</div>
                      <span className="leading-tight">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </StaggerContainer>

            {layout === 'default' && renderForm()}
          </div>

          <div className={cn(
            "relative w-full flex justify-center items-center lg:justify-end",
            layout === 'form-right' ? "lg:justify-end" : ""
          )}>
             {layout === 'form-right' ? renderForm() : rightElement}
          </div>
        </div>
      </div>

      <VinInfoModal isOpen={isVinInfoOpen} onClose={() => setIsVinInfoOpen(false)} />
      <WhereToFindVinModal isOpen={isWhereToFindOpen} onClose={() => setIsWhereToFindOpen(false)} />
    </section>
  )
}
