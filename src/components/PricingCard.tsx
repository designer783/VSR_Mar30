"use client";




import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface PricingCardProps {
  name: string
  save: string
  price: string
  unit: string
  total: string
  popular?: boolean
  buttonText: string
  onAction?: () => void
  className?: string
}

export function PricingCard({ 
  name, 
  save, 
  price, 
  unit, 
  total, 
  popular, 
  buttonText, 
  onAction,
  className 
}: PricingCardProps) {
  return (
    <div className={cn(
      "relative bg-white rounded-[32px] border p-10 transition-all flex flex-col group",
      popular ? 'border-primary-accent ring-1 ring-primary-accent/20 shadow-2xl' : 'border-slate-100 shadow-sm hover:shadow-md',
      className
    )}>
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-accent text-white text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-[0.15em] z-10 shadow-sm">
          Most Popular
        </div>
      )}
      <div className="text-center mb-10">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{name}</h3>
        <div className={cn(
          "text-[11px] font-bold uppercase tracking-widest mb-6 px-3 py-1 rounded-full inline-block",
          save.includes('<') ? 'bg-blue-50 text-primary-accent' : 'bg-green-50 text-green-600'
        )}>
          {save}
        </div>
        <div className="flex items-baseline justify-center gap-1 mb-2">
          <span className="text-5xl font-bold text-slate-900 tracking-tight">{price}</span>
          <span className="text-slate-400 font-medium text-sm">{unit}</span>
        </div>
        <div className="text-[13px] font-medium text-slate-500">
          {total}
        </div>
      </div>
      
      <div className="mt-auto pt-8 border-t border-slate-50">
        <Button 
          variant={popular ? 'accent' : 'default'}
          size="lg"
          onClick={onAction}
          className="w-full"
        >
          {buttonText}
        </Button>
        <p className="text-center text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-6">Buy now, use later!</p>
      </div>
    </div>
  )
}
