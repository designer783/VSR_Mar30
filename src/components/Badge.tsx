import React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'accent' | 'success' | 'error' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground",
    accent: "bg-primary-accent text-white",
    success: "bg-verification/10 text-verification border border-verification/20",
    error: "bg-error/10 text-error border border-error/20",
    outline: "border border-input bg-background text-muted-foreground"
  }

  return (
    <div className={cn(
      "inline-flex items-center text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </div>
  )
}
