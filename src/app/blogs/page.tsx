"use client";




import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { BlogCard } from "@/components/BlogCard"
import { SearchTools } from "@/components/SearchTools"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant, scaleInVariant } from "@/components/ui/FadeIn"

const blogPosts = [
  {
    id: 1,
    title: "Best Used Volvo to Buy in 2025",
    author: "Gracia Anindita",
    date: "May 26, 2025",
    excerpt: "If you’re considering buying a used car, you’ve likely faced the common dilemma: reliability versus cost. Many worry about inheriting...",
    image: "https://picsum.photos/seed/volvo/800/500"
  },
  {
    id: 2,
    title: "Car With a Lien: What It Means and Why It Matters?",
    author: "Gracia Anindita",
    date: "April 23, 2025",
    excerpt: "Buying a used car can be an exciting way to save money, but it’s challenging. One of the most important...",
    image: "https://picsum.photos/seed/lien/800/500"
  },
  {
    id: 3,
    title: "Red Flags When Buying a Used Truck: What to Watch Out For",
    author: "Gracia Anindita",
    date: "April 21, 2025",
    excerpt: "Buying a used truck can be an exciting experience—whether you’re looking for a reliable workhorse or a capable weekend warrior.",
    image: "https://picsum.photos/seed/truck/800/500"
  },
  {
    id: 4,
    title: "What is a Lien on a Car and Why Does it Matter?",
    author: "Gracia Anindita",
    date: "April 19, 2025",
    excerpt: "Buying a secondhand car using the bank’s lien service can be straightforward; however, it could become complicated if you fail...",
    image: "https://picsum.photos/seed/carlien/800/500"
  },
  {
    id: 5,
    title: "Plan to Buy a Used Car? Here’s How to Check for Accident History",
    author: "Gracia Anindita",
    date: "April 17, 2025",
    excerpt: "Imagine you are looking for a secondhand car that matches your budget and your style, and you want to purchase...",
    image: "https://picsum.photos/seed/accident/800/500"
  },
  {
    id: 6,
    title: "Common Problems with Flooded Cars You Should Know",
    author: "Gracia Anindita",
    date: "April 15, 2025",
    excerpt: "Flood-damaged cars can present serious challenges for owners, even years after the floodwaters have receded. These vehicles may appear fine...",
    image: "https://picsum.photos/seed/flood/800/500"
  },
  {
    id: 7,
    title: "What Are The Symptoms Of A Bad Engine Control Module?",
    author: "Gracia Anindita",
    date: "August 11, 2024",
    excerpt: "The engine Control Module is the master key, which controls engine and transmission functions. Hence, if this computer goes bad,",
    image: "https://picsum.photos/seed/ecm/800/500"
  },
  {
    id: 8,
    title: "What Makes A Car Street Legal?",
    author: "Gracia Anindita",
    date: "August 9, 2024",
    excerpt: "Street-legal, road-legal, or road-going pertains to a vehicle like a car, motorcycle, or light truck that meets the requirements and",
    image: "https://picsum.photos/seed/streetlegal/800/500"
  },
  {
    id: 9,
    title: "Most Reliable Volvo Cars of All Time: A Volvo Reliability Guide",
    author: "Gracia Anindita",
    date: "April 20, 2024",
    excerpt: "When it comes to the automotive industry, one brand that has been synonymous with reliability for many years is Volvo.",
    image: "https://picsum.photos/seed/volvoguide/800/500"
  },
  {
    id: 10,
    title: "BMW X3 vs Lexus RX 350 | Luxury SUV Comparison at its Finest",
    author: "Gracia Anindita",
    date: "April 19, 2024",
    excerpt: "When it comes to luxury SUVs, the BMW X3 and Lexus RX 350 stand out as popular choices in the",
    image: "https://picsum.photos/seed/suvcomp/800/500"
  }
]

const categories = ["Car Legal", "used car", "Vehicle Guide", "Vehicle History", "Window Sticker"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-navy py-16 md:py-24 text-white text-center">
        <FadeIn direction="down" className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Welcome to Vehicles Report Blog! | Your source for all things Automotive
          </h1>
          <p className="text-xl text-white/80 mb-4">
            Bite-sized information, tips, news, and everything in between in the automotive industry.
          </p>
          <p className="text-lg text-white/60">
            From how to read VIN to preventing used car scams, we have everything for you.
          </p>
        </FadeIn>
      </section>

      {/* Categories Bar */}
      <div className="border-b border-slate-100 sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 overflow-x-auto no-scrollbar gap-8">
            <StaggerContainer className="flex items-center gap-6 whitespace-nowrap">
              {categories.map((cat) => (
                <motion.button variants={scaleInVariant} key={cat} className="text-sm font-bold text-text-secondary hover:text-primary-accent transition-colors">
                  {cat}
                </motion.button>
              ))}
            </StaggerContainer>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-slate-100 text-text-secondary">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-slate-100 text-text-secondary">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 space-y-12">
            <StaggerContainer className="grid gap-10">
              {blogPosts.map((post) => (
                <motion.div key={post.id} variants={fadeUpVariant}>
                  <BlogCard 
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    excerpt={post.excerpt}
                    image={post.image}
                  />
                </motion.div>
              ))}
            </StaggerContainer>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 pt-8">
              <button className="px-4 py-2 rounded-lg border border-slate-200 text-text-secondary hover:bg-slate-50 transition-colors">« Previous</button>
              <button className="w-10 h-10 rounded-lg bg-primary-accent text-white font-bold">1</button>
              <button className="w-10 h-10 rounded-lg border border-slate-200 text-text-secondary hover:bg-slate-50 transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg border border-slate-200 text-text-secondary hover:bg-slate-50 transition-colors">3</button>
              <span className="px-2">…</span>
              <button className="w-10 h-10 rounded-lg border border-slate-200 text-text-secondary hover:bg-slate-50 transition-colors">6</button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 text-text-secondary hover:bg-slate-50 transition-colors">Next »</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[380px] space-y-10">
            <SearchTools variant="sidebar" />

            <div className="space-y-6">
              <FadeIn direction="right">
                <h3 className="text-xl font-bold text-primary-navy border-b border-slate-100 pb-4">Popular Articles</h3>
              </FadeIn>
              <StaggerContainer className="space-y-6">
                {blogPosts.slice(0, 6).map((post) => (
                  <motion.div variants={fadeUpVariant} key={post.id}>
                    <BlogCard 
                      id={post.id}
                      title={post.title}
                      author={post.author}
                      date={post.date}
                      excerpt={post.excerpt}
                      image={post.image}
                      variant="mini" 
                    />
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>

            <FadeIn direction="up" className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-primary-navy mb-6">Recommended VIN Lookup Tools</h3>
              <StaggerContainer className="grid gap-3">
                {[
                  { name: "Get window sticker", path: "/window-stickers" },
                  { name: "Vin Check", path: "/vin-check" },
                  { name: "VIN Decoder", path: "/vin-decoder" },
                  { name: "License Plate Lookup", path: "/license-plate" },
                  { name: "Classic Build Sheet", path: "/classic-build-sheet" }
                ].map((tool) => (
                  <motion.div variants={scaleInVariant} key={tool.name}>
                    <Link 
                      href={tool.path}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-primary-accent hover:shadow-md transition-all group"
                    >
                      <span className="text-sm font-bold text-primary-navy">{tool.name}</span>
                      <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary-accent" />
                    </Link>
                  </motion.div>
                ))}
              </StaggerContainer>
            </FadeIn>
          </aside>
        </div>
      </div>
    </div>
  )
}
