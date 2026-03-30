"use client";




import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ToggleProps {
  options: { label: string; value: string }[]
  value: string
  onChange: (value: string) => void
  variant?: 'pill' | 'switch'
  className?: string
  badge?: string
}

export function Toggle({ options, value, onChange, variant = 'pill', className, badge }: ToggleProps) {
  if (variant === 'switch') {
    return (
      <div className={cn("inline-flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm", className)}>
        <span className={cn("text-sm font-bold transition-colors", value === options[0].value ? 'text-primary-navy' : 'text-text-secondary')}>
          {options[0].label}
        </span>
        <button 
          onClick={() => onChange(value === options[0].value ? options[1].value : options[0].value)}
          className="relative w-12 h-6 bg-slate-200 rounded-full transition-colors focus:outline-none"
        >
          <div className={cn(
            "absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform",
            value === options[1].value ? 'translate-x-6' : 'translate-x-0'
          )} />
        </button>
        <span className={cn("text-sm font-bold transition-colors", value === options[1].value ? 'text-primary-navy' : 'text-text-secondary')}>
          {options[1].label}
        </span>
      </div>
    )
  }

  return (
    <div className={cn("inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 shadow-sm relative", className)}>
      {options.map((option) => (
        <div key={option.value} className="relative z-10">
          <button 
            onClick={() => onChange(option.value)}
            className={cn(
              "px-8 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
              value === option.value ? 'bg-white text-primary-navy shadow-sm' : 'text-text-secondary hover:text-primary-navy'
            )}
          >
            {option.label}
          </button>
          {badge && option.value === options[1].value && value !== options[1].value && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border border-orange-300 text-orange-500 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm font-bold">
              {badge}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
