"use client";



import { useState } from "react"
import { UniversalHero } from "@/components/UniversalHero";
import { VinDecoderHeroImage } from "@/components/VinDecoderHeroImage";
import { StandardFAQ } from "@/components/StandardFAQ"
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid"
import { StandardSteps } from "@/components/StandardSteps"
import { StandardMediaSection } from "@/components/StandardMediaSection"
import { StandardCTA } from "@/components/StandardCTA"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MAKES, getSlugByMake } from "@/lib/makes";
import Link from "next/link"
import { CheckCircle2, ShieldCheck, Zap, Clock, FileText, Search, ArchiveRestore } from "lucide-react"

export default function VinDecoderPage() {
  const features = [
    { title: "Year, Make, and Model", description: "Know if that “2020 Honda Accord” is really a 2020 or if the seller got the year wrong." },
    { title: "Body Type", description: "Is it a sedan, coupe, SUV, or truck? Body type affects insurance and utility." },
    { title: "Engine Type and Capacity", description: "Find out if it has a 4-cylinder, V6, or V8 engine, plus the exact displacement." },
    { title: "Transmission", description: "Confirm whether it’s an automatic or manual transmission, and gear count." },
    { title: "Trim Level", description: "LX, EX, or Touring? The trim determines the value and features." },
    { title: "Fuel Type", description: "Gasoline, diesel, or electric? Budget for fuel correctly." }
  ].map(f => ({ ...f, icon: <CheckCircle2 className="h-5 w-5 text-primary-accent" /> }));

  const meaningItems = [
    { title: "The VIN Never Lies", description: "Sellers might misremember the year or model, but the VIN is the definitive record of the car's origin.", icon: <ShieldCheck className="h-6 w-6 text-primary-accent" /> },
    { title: "The VIN Remains with the Car", description: "Badges can be swapped, but the VIN is legally tied to the chassis forever.", icon: <ShieldCheck className="h-6 w-6 text-primary-accent" /> }
  ];

  const decodeSteps = [
    { title: "Enter the VIN", description: "Type or paste your 17-character VIN into the decoder box at the top of the page." },
    { title: "Click \"Search\" to View Specs", description: "Our tool checks the VIN and reveals vehicle specs like engine, trim, and MSRP for free." },
    { title: "Upgrade for History", description: "If you need accident history or title records, upgrade to a full report in one click." }
  ];

  const locations = [
    "Bottom corner of the dashboard (view through windshield)",
    "Driver’s side door jamb (check the sticker)",
    "Engine block or firewall under the hood",
    "Vehicle registration, title, or insurance cards"
  ];

  const reasons = [
    { title: "Instant & Accurate", description: "Get precise specs in seconds from OEM and government databases.", icon: <Zap className="h-6 w-6 text-primary-accent" /> },
    { title: "All Vehicle Types", description: "Supports cars, trucks, motorcycles, and RVs from any manufacturer.", icon: <ShieldCheck className="h-6 w-6 text-primary-accent" /> },
    { title: "Classic Support", description: "Specialized decoding for pre-1981 vehicles with 5-14 digit VINs.", icon: <Clock className="h-6 w-6 text-primary-accent" /> },
    { title: "Easy Upgrades", description: "One click to move from basic specs to complete history reports.", icon: <FileText className="h-6 w-6 text-primary-accent" /> }
  ];

  const tools = [
    { title: "License Plate Lookup", description: "Search any vehicle specs and history using only the license plate number.", icon: <Search className="h-6 w-6 text-primary-accent" /> },
    { title: "Window Sticker", description: "Get a digital copy of the original factory window sticker with all options.", icon: <FileText className="h-6 w-6 text-primary-accent" /> },
    { title: "Classic Build Sheet", description: "Verify original equipment and pricing for vintage cars made before 1981.", icon: <ArchiveRestore className="h-6 w-6 text-primary-accent" /> }
  ];



  const faqs = [
    { question: "What is a VIN decoder?", answer: "A VIN decoder is an online tool that translates a 17-character VIN into detailed manufacturer information." },
    { question: "Is a VIN decoder really free?", answer: "Yes, our basic VIN decoding service is completely free for essential vehicle specifications." },
    { question: "Can I decode a VIN from any country?", answer: "We primarily support vehicles for the North American market (USA and Canada)." }
  ];

  return (
    <>
      <UniversalHero 
        title="Decode any VIN in Seconds: Get Accurate Vehicle Information"
        description="Verify vehicle specs like year, make, model, trim, and engine size for free. Prevent fraud and make informed decisions."
        rightElement={<VinDecoderHeroImage />}
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' }
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What is a VIN Decoder?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mx-auto">
              <p>A VIN decoder is a tool that reads the unique 17-character VIN assigned to every vehicle. Each section of the VIN holds specific information about the car, like where it was built and what it came with.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <StandardFeatureGrid 
        title="What Does Our Free VIN Decoder Tell You?"
        description="Get important details that help you understand exactly what you’re looking at in seconds."
        items={features}
        columns={3}
        className="bg-slate-50"
      />

      <StandardFeatureGrid 
        title="VIN Number: Meaning and Importance"
        description="The VIN is a 17-character code that uniquely identifies every vehicle built after 1981."
        items={meaningItems}
        columns={2}
      />

      <StandardMediaSection 
        title="Where to Find the VIN Number?"
        description="You can find the VIN in several spots on every vehicle, as well as on your registration and title documents."
        imageSrc="https://picsum.photos/seed/vinwhere/800/600"
        imageAlt="VIN Location Map"
        items={locations}
        buttonText="Decode VIN Now"
        className="bg-slate-50"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn direction="up" className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary text-center">How to Read a VIN Number</h2>
            <div className="bg-slate-50 p-6 rounded-xl font-mono text-center text-xl font-bold text-primary border border-border">
              Sample VIN: 1G1ZD5ST8JF123456
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h3 className="text-xl font-bold text-primary mt-6">Characters 1-3: World Manufacturer Identifier</h3>
              <p>The first character shows the country of origin (1 = USA). The second identifies the manufacturer (G = GM), and the third shows the vehicle type (1 = Chevrolet).</p>
              <h3 className="text-xl font-bold text-primary mt-6">Characters 10-17: Vehicle Identifier Section</h3>
              <p>The 10th character indicates the model year (J = 2018). The 11th shows the assembly plant, and the last six are the unique serial number.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <StandardSteps 
        title="How to Decode VIN Numbers Using Our Tool"
        description="Using our free VIN lookup tool is simple. Just follow these three steps:"
        items={decodeSteps}
        className="bg-slate-50"
      />

      <StandardFeatureGrid 
        title="Why Choose Our VIN Decoding Service"
        description="Fast, reliable information for modern and classic vehicles alike."
        items={reasons}
        columns={4}
      />

      <StandardFeatureGrid 
        title="Don't Stop Here - Get More With These Tools"
        description="Explore our other research tools to confirm any vehicle details thoroughly."
        items={tools}
        columns={3}
        className="bg-slate-50"
      />

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Decode VIN By Makes</h2>
            <p className="text-lg text-muted-foreground">Search for specific manufacturers to get tailored decoding guides.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {MAKES.map((make) => (
              <Link 
                key={make}
                href={`/vin-decoder/${getSlugByMake(make)}`}
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-primary-accent hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
              >
                <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors text-center w-full truncate">
                  {make}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StandardCTA 
        title="Every Smart Buyer Checks the VIN"
        description="Don't buy a used car blind. Decode the VIN first, then make a smart decision with real records."
        buttonText="Check VIN Now"
        variant="glass"
      />

      <StandardFAQ 
        title="VIN Decoder FAQs"
        items={faqs}
        variant="narrow"
        className="bg-slate-50"
      />
    </>
  )
}
