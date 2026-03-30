"use client";




import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search, MapPin, Car, History, FileText, Shield, Zap, Info, ArrowRight, MessageSquare, Star, ArrowUpRight, Plus, Minus, Clock, AlertTriangle, ChevronRight, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { US_STATES } from "@/constants"
import Link from "next/link"
import { FadeIn, StaggerContainer, fadeUpVariant, scaleInVariant } from "@/components/ui/FadeIn"
import { StateSelect } from "@/components/ui/StateSelect"
import { VinInfoModal, WhereToFindVinModal } from "@/components/VinInfoModal"

interface SearchToolsProps {
  className?: string
  variant?: 'sidebar' | 'hero'
}

export function SearchTools({ className, variant = 'sidebar' }: SearchToolsProps) {
  const [searchType, setSearchType] = useState<'vin' | 'plate' | 'ymm'>('vin')
  const [isVinInfoModalOpen, setIsVinInfoModalOpen] = useState(false);
  const [isWhereToFindVinModalOpen, setIsWhereToFindVinModalOpen] = useState(false);

  return (
    <div className={cn(
      "rounded-3xl p-8 border",
      variant === 'sidebar' ? "bg-slate-50 border-slate-100" : "bg-white border-slate-200 shadow-xl",
      className
    )}>
      <h3 className="text-xl font-bold text-primary-navy mb-6">Lookup Tools</h3>
      <div className="flex gap-2 mb-6 overflow-x-auto p-2 -mx-2 scrollbar-hide">
        <button 
          onClick={() => setSearchType('vin')}
          className={`px-4 py-2 font-bold rounded-lg text-xs transition-all duration-300 ${searchType === 'vin' ? 'bg-primary-navy text-white' : 'bg-slate-50 text-primary-navy hover:bg-slate-100'}`}
        >
          by VIN
        </button>
        <button 
          onClick={() => setSearchType('plate')}
          className={`px-4 py-2 font-bold rounded-lg text-xs transition-all duration-300 ${searchType === 'plate' ? 'bg-primary-navy text-white outline outline-2 outline-offset-1 outline-primary-navy' : 'bg-slate-50 text-primary-navy hover:bg-slate-100'}`}
        >
          by License Plate
        </button>
        <button 
          onClick={() => setSearchType('ymm')}
          className={`px-4 py-2 font-bold rounded-lg text-xs transition-all duration-300 ${searchType === 'ymm' ? 'bg-primary-navy text-white outline outline-2 outline-offset-1 outline-primary-navy' : 'bg-slate-50 text-primary-navy hover:bg-slate-100'}`}
        >
          by YMM
        </button>
      </div>

      <div className="space-y-4">
        {searchType !== 'ymm' ? (
          <div className="space-y-3">
            <div className="flex items-center bg-white rounded-xl shadow-sm border border-slate-200/60 focus-within:border-primary-accent/60 transition-all duration-300 p-1">
              <div className="relative flex-1">
                <Input 
                  placeholder={searchType === 'vin' ? "Enter VIN" : "Enter Plate"} 
                  className="border-0 bg-transparent px-4 h-[52px] text-text-primary text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-400 w-full" 
                />
                {searchType === 'vin' && (
                  <div 
                    onClick={() => setIsVinInfoModalOpen(true)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-primary-accent transition-colors"
                  >
                    <HelpCircle className="h-5 w-5" />
                  </div>
                )}
              </div>
              {searchType === 'plate' && (
                <>
                  <div className="w-px bg-slate-200 h-8"></div>
                  <StateSelect className="w-28 shrink-0" textClassName="text-sm px-3" />
                </>
              )}
            </div>
            <Button className="w-full h-[52px] bg-primary-navy hover:bg-[#111c33] text-white font-medium text-[15px] rounded-lg shadow-md transition-all">
              {searchType === 'vin' ? 'Search VIN' : 'Search License Plate'}
            </Button>
            {searchType === 'vin' && (
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => setIsWhereToFindVinModalOpen(true)}
                  className="text-[13px] text-slate-500 hover:text-primary-accent transition-colors underline decoration-dotted underline-offset-4"
                >
                  Where can I find the VIN?
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {/* Year / Make / Model — side-by-side in one row */}
            <div className="flex items-center bg-white rounded-xl shadow-sm border border-slate-200/60 transition-all duration-300 overflow-hidden">
              <div className="relative flex-1 min-w-0">
                <select className="w-full h-[52px] bg-transparent border-0 text-text-primary text-sm focus:ring-0 cursor-pointer outline-none px-4 appearance-none">
                  <option value="">Year</option>
                  {Array.from({ length: 36 }, (_, i) => 2025 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>
              <div className="w-px bg-slate-200 h-8 shrink-0"></div>
              <div className="relative flex-1 min-w-0">
                <select className="w-full h-[52px] bg-transparent border-0 text-text-primary text-sm focus:ring-0 cursor-pointer outline-none px-4 appearance-none">
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
              <div className="w-px bg-slate-200 h-8 shrink-0"></div>
              <div className="relative flex-1 min-w-0">
                <select className="w-full h-[52px] bg-transparent border-0 text-text-primary text-sm focus:ring-0 cursor-pointer outline-none px-4 appearance-none">
                  <option value="">Model</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>
            </div>

            {/* Email + Phone row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center bg-white rounded-xl shadow-sm border border-slate-200/60 focus-within:border-primary-accent/60 transition-all duration-300 p-1">
                <Input type="email" placeholder="Enter Email" className="border-0 bg-transparent px-4 h-[52px] text-text-primary text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-400 w-full" />
              </div>
              <div className="flex items-center bg-white rounded-xl shadow-sm border border-slate-200/60 focus-within:border-primary-accent/60 transition-all duration-300 p-1">
                <Input type="tel" placeholder="Enter Phone for" className="border-0 bg-transparent px-4 h-[52px] text-text-primary text-sm focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-400 flex-1 min-w-0" />
                <span className="inline-flex items-center rounded-full border border-green-300 bg-green-50 px-3 py-1 text-xs font-bold text-green-700 whitespace-nowrap mr-2">10% OFF</span>
              </div>
            </div>



            <Button className="w-full h-[52px] bg-primary-navy hover:bg-[#111c33] text-white font-medium text-[15px] rounded-lg shadow-md transition-all">
              Search
            </Button>
          </div>
        )}
      </div>
      <VinInfoModal isOpen={isVinInfoModalOpen} onClose={() => setIsVinInfoModalOpen(false)} />
      <WhereToFindVinModal isOpen={isWhereToFindVinModalOpen} onClose={() => setIsWhereToFindVinModalOpen(false)} />
    </div>
  )
}

