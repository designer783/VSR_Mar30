import { UniversalHero } from "@/components/UniversalHero";
import { WindowStickerHeroImage } from "@/components/WindowStickerHeroImage";
import { StandardSteps } from "@/components/StandardSteps";
import { StandardCTA } from "@/components/StandardCTA";
import { StandardFAQ } from "@/components/StandardFAQ";
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid";

import { FileText, Search, Zap, CheckCircle2, Shield, Info, Database, AlertTriangle, Car } from "lucide-react";
import { MAKES, getSlugByMake } from "@/lib/makes";
import Link from "next/link";

export const metadata = {
  title: "Vehicle Window Sticker - Get Your Digital Monroney Label",
  description: "Get a digital copy of your vehicle's original window sticker. Find technical specifications, standard features, and MSRP.",
};

export default function WindowStickerPage() {
  const highlights = [
    { label: "Original Manufacturer MSRP", icon: <FileText className="h-4 w-4" /> },
    { label: "Full Factory Options List", icon: <Zap className="h-4 w-4" /> },
    { label: "EPA & Safety Ratings", icon: <Shield className="h-4 w-4" /> },
    { label: "Instant PDF Download", icon: <Zap className="h-4 w-4" /> }
  ];

  const infoItems = [
    { title: "Vehicle Description", description: "Year, Make, Model, Body Style and Trim Level.", icon: <Info /> },
    { title: "Options & Packages", description: "All extra features and upgrades added to the car.", icon: <Database /> },
    { title: "MSRP Breakdown", description: "Standard equipment cost vs factory options.", icon: <FileText /> },
    { title: "Safety Ratings", description: "NHTSA crash test results and safety scores.", icon: <Shield /> },
    { title: "Mechanical Specs", description: "Engine, transmission, and drivetrain details.", icon: <Zap /> },
    { title: "Fuel Economy", description: "City, Highway, and Combined MPG ratings.", icon: <Zap /> }
  ];

  const steps = [
    { title: "Enter the VIN", description: "Type the 17-digit VIN number or search by license plate." },
    { title: "Instant Search", description: "Our system scans the database for your vehicle's specs." },
    { title: "Download PDF", description: "Get your digital Monroney label instantly." }
  ];

  const faqs = [
    { question: "Can you look up a window sticker with VIN?", answer: "Yes, you can look up a window sticker with the 17-digit VIN number. It shows the original MSRP, options, and more." },
    { question: "Is this the same label as when new?", answer: "Yes, our tool provides a digital recreation of the exact Monroney label that was on the vehicle when sold new." },
    { question: "Does this work for all makes?", answer: "We support window sticker lookups for almost all major vehicle manufacturers in North America." }
  ];

  return (
    <>
      <UniversalHero 
        title="Get a Copy of Your Vehicle’s Window Sticker in Seconds"
        description="Retrieve any vehicle’s window sticker by VIN with all options, equipment, and features. See the original MSRP, colors, and more from when it was new."
        highlights={highlights}
        rightElement={<WindowStickerHeroImage />}
        badge="Official Monroney Label Recreation"
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' },
          { id: 'ymm', label: 'By Year, Make, and Model' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What is a Window Sticker?</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>A window sticker (or Monroney label) is the official label that every new car gets from the factory. It provides essential transparency for buyers about the vehicle's original specifications and pricing.</p>
          </div>
        </div>
      </section>

      <StandardFeatureGrid 
        title="What's Information Is on the Sticker?"
        description="Every detail from the factory is included in our comprehensive lookup."
        items={infoItems}
        columns={3}
        className="bg-slate-50"
      />

      <StandardSteps 
        title="How to Get Your Sticker"
        description="Follow these simple steps to retrieve your vehicle's original build data."
        items={steps}
      />

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Supported Manufacturers</h2>
            <p className="text-lg text-muted-foreground">We provide comprehensive window sticker data for all major automotive brands.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {MAKES.map((make) => (
              <Link 
                key={make}
                href={`/window-stickers/${getSlugByMake(make)}`}
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
        title="Ready to See the Original Build Specs?"
        description="Don't guess what's under the hood. Get the facts with an official window sticker lookup."
        buttonText="Get Window Sticker Now"
        variant="glass"
      />

      <StandardFAQ 
        title="Frequently Asked Questions"
        items={faqs}
        variant="narrow"
        className="bg-slate-50"
      />
    </>
  );
}
