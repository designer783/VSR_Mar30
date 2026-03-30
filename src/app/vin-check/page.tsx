"use client";



import { useState } from "react"
import { UniversalHero } from "@/components/UniversalHero";
import { VinCheckHeroImage } from "@/components/VinCheckHeroImage";
import { StandardFAQ } from "@/components/StandardFAQ"
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid"
import { StandardSteps } from "@/components/StandardSteps"
import { StandardMediaSection } from "@/components/StandardMediaSection"
import { StandardCTA } from "@/components/StandardCTA"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn"
import { Button } from "@/components/ui/button"
import { Search, CheckCircle2, Shield, FileText, Zap, ArrowRight, MessageSquare, Star, ArrowUpRight, Plus, Minus, Info, MapPin, Clock, AlertTriangle, ChevronRight, Users, Banknote, ShieldCheck, Database, MousePointer2, User } from "lucide-react"
import { motion } from "framer-motion"


export default function VinCheckPage() {
  const specs = [
    "Year, Make & Model", "Body Type", "Engine Type & Capacity", 
    "Transmission", "Trim", "Fuel Type", "Doors", 
    "Estimated Market Value", "Base MSRP"
  ].map(s => ({ title: s }));

  const reportSections = [
    { title: "Vehicle Usage History", description: "Discover how previous owners used this vehicle. Rental cars, taxis, and delivery vehicles typical wear.", icon: <Users className="h-6 w-6 text-primary-accent" /> },
    { title: "Ownership Records", description: "Track every registered owner from the original buyer through each subsequent person.", icon: <User className="h-6 w-6 text-primary-accent" /> },
    { title: "Auction/Sales History", description: "View appearances at wholesale dealer auctions, complete with condition reports and photos.", icon: <FileText className="h-6 w-6 text-primary-accent" /> },
    { title: "Title Brand Check", description: "Search government title records across all states to find problematic brands.", icon: <Shield className="h-6 w-6 text-primary-accent" /> },
    { title: "Mileage Verification", description: "Follow odometer readings recorded at registrations, inspections, and auctions.", icon: <Clock className="h-6 w-6 text-primary-accent" /> },
    { title: "Accident Records", description: "Access every reported collision, crash, and impact event filed with insurance or police.", icon: <AlertTriangle className="h-6 w-6 text-primary-accent" /> }
  ];

  const steps = [
    { title: "Enter Your VIN & Search", description: "Enter the VIN into the form at the top of the page and click “Search VIN.”" },
    { title: "Preview & Select a Plan", description: "Preview basic vehicle specifications at no cost to confirm you're checking the right car." },
    { title: "Download & Print Report", description: "Get the full VIN report to access comprehensive accident history and more." }
  ];

  const locations = [
    "Stand outside and peek through the front window on the driver’s side.",
    "Open the driver’s door and check the metal frame where the door clicks shut.",
    "Flip open the hood and look for a sticker or metal tag near the engine.",
    "Check your car’s paperwork, like the registration card or insurance documents."
  ];

  const tools = [
    { title: "VIN Decoder", description: "Decode any VIN number for free. Verify the year, make, model, engine, etc.", icon: <Database className="h-6 w-6 text-primary-accent" /> },
    { title: "Window Sticker", description: "Get a copy of the original window sticker. Verify car options, MSRP, and colors.", icon: <FileText className="h-6 w-6 text-primary-accent" /> },
    { title: "License Plate Lookup", description: "If you don’t have the VIN, switch to our license plate search tool.", icon: <Search className="h-6 w-6 text-primary-accent" /> },
    { title: "Classic Build Sheets", description: "Order classic build sheets for pre-1981 cars.", icon: <ArchiveRestoration className="h-6 w-6 text-primary-accent" /> },
  ];

  const faqs = [
    { question: "What is a VIN number lookup?", answer: "A VIN number lookup searches databases across North America to compile history for a specific vehicle." },
    { question: "Is there a free vehicle history report?", answer: "We offer a free VIN decoder that provides basic specifications. A full report requires a purchase." },
    { question: "What does a VIN number tell you?", answer: "A VIN tells you the manufacturer, year, make, model, engine type, and assembly plant." }
  ];

  return (
    <>
      <UniversalHero 
        title="Check Used Car VIN Number: Instantly Reveal Past Records"
        description="Every used car has a history. Run a VIN check to pull back the curtain on any vehicle’s real history."
        rightElement={<VinCheckHeroImage />}
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' }
        ]}
      />

      <StandardFeatureGrid 
        title="Verifying Vehicle Specs? Start with a Free VIN Check"
        description="Enter the 17-character VIN number to immediately see basic vehicle information at no cost."
        items={specs}
        variant="check"
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What Is a VIN Number Check?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mx-auto">
              <p>A VIN number check is when you look up a vehicle’s 17-character identification code to reveal the car’s history.</p>
              <p>When buying a used car, a VIN check helps avoid fraud by verifying secrets the seller might hide.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <StandardFeatureGrid 
        title="What Information is Included in Our Full VIN Report"
        description="Our comprehensive VIN lookup report goes far beyond basic specifications."
        items={reportSections}
        columns={3}
      />

      <StandardSteps 
        title="How to Run a VIN Check: Step-by-Step Guide"
        description="Getting the complete records on any used vehicle takes under a minute."
        items={steps}
        buttonText="Run a VIN Check"
      />

      <StandardMediaSection 
        title="Where’s the VIN Number on a Car?"
        description="Every vehicle has the VIN stamped and printed in multiple easy-to-access locations."
        imageSrc="https://picsum.photos/seed/vinlocation/800/600"
        imageAlt="VIN Location"
        items={locations}
        buttonText="Run a VIN Check"
      />

      <StandardCTA 
        title="Run a VIN Check Today"
        description="Don’t risk thousands of dollars on a used car with hidden problems lurking in its past."
        buttonText="Check Car History"
        variant="glass"
      />

      <StandardFAQ 
        title="Frequently Asked Questions About VIN Check"
        items={faqs}
        variant="narrow"
        className="bg-slate-50"
      />
    </>
  )
}

function ArchiveRestoration(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="5" x="2" y="3" rx="1"/>
      <path d="M4 8v11a2 2 0 0 0 2 2h2"/>
      <path d="M20 8v11a2 2 0 0 1-2 2h-2"/>
      <path d="m9 15 3-3 3 3"/>
      <path d="M12 12v9"/>
    </svg>
  )
}
