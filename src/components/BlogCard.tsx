"use client";



import React from "react"

import { Calendar, User, ArrowRight, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface BlogCardProps {
  id: number | string
  title: string
  author: string
  date: string
  excerpt: string
  image: string
  variant?: 'horizontal' | 'vertical' | 'mini'
  className?: string
}

export const BlogCard: React.FC<BlogCardProps> = ({ 
  id, 
  title, 
  author, 
  date, 
  excerpt, 
  image, 
  variant = 'horizontal',
  className 
}) => {
  if (variant === 'mini') {
    return (
      <div className={cn("group flex gap-4 items-center", className)}>
        <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-primary-navy group-hover:text-primary-accent transition-colors line-clamp-2">
            <Link href={`/blog/${id}`}>{title}</Link>
          </h4>
          <div className="text-[10px] text-text-secondary uppercase tracking-wider font-bold">{author}</div>
        </div>
      </div>
    )
  }

  if (variant === 'vertical') {
    return (
      <article className={cn("group flex flex-col gap-4 items-start", className)}>
        <div className="w-full overflow-hidden rounded-2xl aspect-[16/10]">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold font-heading text-primary-navy group-hover:text-primary-accent transition-colors">
            <Link href={`/blog/${id}`}>{title}</Link>
          </h2>
          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <div className="flex items-center gap-1.5">
              <User className="h-3 w-3" />
              {author}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              {date}
            </div>
          </div>
          <p className="text-sm text-text-secondary line-clamp-2">
            {excerpt}
          </p>
        </div>
      </article>
    )
  }

  return (
    <article className={cn("group flex flex-col md:flex-row gap-8 items-start", className)}>
      <div className="w-full md:w-[350px] shrink-0 overflow-hidden rounded-2xl aspect-[16/10]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-navy group-hover:text-primary-accent transition-colors">
          <Link href={`/blog/${id}`}>{title}</Link>
        </h2>
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {author}
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {date}
          </div>
        </div>
        <p className="text-text-secondary leading-relaxed">
          {excerpt}
        </p>
        <Link href={`/blog/${id}`} className="inline-flex items-center gap-2 text-primary-accent font-bold hover:gap-3 transition-all">
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
};
