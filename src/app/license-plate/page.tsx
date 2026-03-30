"use client";



import { useState } from "react"
import { UniversalHero } from "@/components/UniversalHero";
import { LicensePlateHeroImage } from "@/components/LicensePlateHeroImage";
import { StandardFAQ } from "@/components/StandardFAQ"
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid"
import { StandardSteps } from "@/components/StandardSteps"
import { StandardMediaSection } from "@/components/StandardMediaSection"
import { StandardCTA } from "@/components/StandardCTA"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn"
import { Button } from "@/components/ui/button"
import { Search, CheckCircle2, ShieldCheck, Database, Zap, Clock, FileText, AlertCircle, Shield, Globe, Map, FileKey, Info, Gavel } from "lucide-react"
import { motion } from "framer-motion"
import { HeroImageDecoration } from "@/components/HeroImageDecoration"
import { US_STATES } from "@/constants"
import Link from "next/link"


export default function LicensePlatePage() {
  const reasons = [
    { title: "Trusted Sources", description: "Records from over 600 million vehicle records across all states.", icon: <Database className="h-6 w-6 text-primary-accent" /> },
    { title: "Instant Results", description: "Complete reports generated in split seconds for immediate viewing.", icon: <Zap className="h-6 w-6 text-primary-accent" /> },
    { title: "Verified Data", description: "Accuracy confirmed through national databases and law enforcement records.", icon: <ShieldCheck className="h-6 w-6 text-primary-accent" /> }
  ];

  const infoSections = [
    { title: "Vehicle Specs", description: "Manufacturer, model name, year, engine type, and transmission features." },
    { title: "Usage History", description: "Personal vs. commercial use, taxi, rental, or fleet history." },
    { title: "Ownership Records", description: "Number of previous owners, duration, and transfer dates." },
    { title: "Sales & Auctions", description: "Condition photos, sale dates, locations, and recorded prices." },
    { title: "Title Brand Check", description: "Salvage, rebuilt, flood, or fire damage indicators." },
    { title: "Mileage & Accidents", description: "Odometer readings, collision reports, and airbag deployments." }
  ].map(s => ({ ...s, icon: <CheckCircle2 className="h-5 w-5 text-primary-accent" /> }));

  const steps = [
    { title: "Enter Plate & State", description: "Type the plate number and choose the state that issued it." },
    { title: "Search and Preview", description: "View the vehicle's basic specifications for free instantly." },
    { title: "Get Full History", description: "Securely purchase and download the comprehensive PDF report." }
  ];

  const events = [
    { title: "Before buying a used car", description: "Reveal hidden issues before handing over any money." },
    { title: "After a minor accident", description: "Identify vehicles for insurance claims and police reports." },
    { title: "Considering private sales", description: "Know the real story before meeting a private seller." },
    { title: "Before selling your car", description: "Build trust with buyers by providing a clean report." }
  ].map(e => ({ ...e, icon: <AlertCircle className="h-5 w-5 text-primary-accent" /> }));

  const plateTypes = [
    "Standard Passenger Plates", "Commercial Vehicle Plates", "Motorcycle Plates", 
    "Temporary Plates", "Disabled/Handicapped Plates", "Veteran Plates"
  ].map(p => ({ title: p }));

  const legalUses = [
    "Making vehicle purchasing decisions",
    "Insurance and title verification",
    "Business transactions and safety",
    "Identifying suspicious vehicles"
  ];

  const tools = [
    { title: "VIN Decoder", description: "Decode any 17-character VIN number instantly.", icon: <FileKey className="h-6 w-6 text-primary-accent" /> },
    { title: "VIN Check", description: "Complete history reports for accident and titles.", icon: <ShieldCheck className="h-6 w-6 text-primary-accent" /> },
    { title: "Window Sticker", description: "Original factory specs and MSRP lookup.", icon: <FileText className="h-6 w-6 text-primary-accent" /> }
  ];

  const faqs = [
    { question: "Can I find the owner's name?", answer: "No, personal info like names and addresses are protected by the DPPA law." },
    { question: "Can I get a VIN from a license plate?", answer: "Yes, a plate lookup typically reveals the associated 17-character VIN." },
    { question: "Is it legal to lookup a plate?", answer: "Yes, it is legal in all 50 states for legitimate vehicle history research." }
  ];

  return (
    <>
      <UniversalHero 
        title="Lookup License Plate Numbers in All US States"
        description="Enter any US plate and get detailed vehicle information. Discover title history, ownership, mileage, accident records, and more instantly."
        rightElement={<LicensePlateHeroImage />}
        tabs={[
          { id: 'plate', label: 'By US License Plate' }
        ]}
      />

      <StandardFeatureGrid 
        title="Why Thousands Choose Vehicle Report"
        description="Our license plate check provides comprehensive data from trusted national sources instantly."
        items={reasons}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What is a License Plate Search?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mx-auto">
              <p>A license plate search uses a vehicle’s number plate to look up information held on state and federal databases. It reveals the car’s build specs and history in seconds.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <StandardFeatureGrid 
        title="What Information is Provided?"
        description="A license plate lookup shows everything important about a vehicle’s past and present."
        items={infoSections}
        columns={3}
      />

      <StandardSteps 
        title="How to Run a License Plate Lookup"
        description="Get a complete history report in just three simple steps."
        items={steps}
        className="bg-slate-50"
      />

      <StandardFeatureGrid 
        title="When Should You Check a Plate?"
        description="Whether buying or selling, a plate check protects your interests and builds trust."
        items={events}
        columns={4}
      />

      <StandardMediaSection 
        title="License Plate Design and Formats"
        description="License plates look different in every state, but they all serve the same legal purpose. Our tool supports all standard and custom formats."
        imageSrc="https://picsum.photos/seed/platedesign/800/600"
        imageAlt="State Plate Design Examples"
        items={plateTypes.map(p => p.title)}
        className="bg-slate-50"
      />

      <StandardMediaSection 
        title="Is It Legal to Look Up a Plate?"
        description="Yes, it’s completely legal across all 50 states for consumer protection. We follow DPPA guidelines to protect personal identity while providing vehicle records."
        imageSrc="https://picsum.photos/seed/legal/800/600"
        imageAlt="Legal Documentation"
        imagePosition="left"
        items={legalUses}
      />

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Lookup License Plates by State</h2>
            <p className="text-lg text-muted-foreground">We cover all 50 United States and the District of Columbia.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {US_STATES.map((state) => (
              <Link 
                key={state.value}
                href={`/license-plate/${state.label.toLowerCase().replace(/ /g, '-')}`}
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-primary-accent hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
              >
                <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors text-center w-full truncate">
                  {state.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StandardFeatureGrid 
        title="Other Helpful Vehicle Lookup Tools"
        description="Explore our full suite of research tools."
        items={tools}
        columns={3}
      />

      <StandardCTA 
        title="Get Instant License Plate History"
        description="Don't risk buying a problem vehicle. Get your complete report right now."
        buttonText="Search Vehicle History"
        variant="glass"
      />

      <StandardFAQ 
        title="License Plate Search FAQs"
        items={faqs}
        variant="narrow"
        className="bg-slate-50"
      />
    </>
  )
}
