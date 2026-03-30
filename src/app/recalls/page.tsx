import { UniversalHero } from "@/components/UniversalHero";
import { VinCheckHeroImage } from "@/components/VinCheckHeroImage";
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid";
import { StandardSteps } from "@/components/StandardSteps";
import { StandardCTA } from "@/components/StandardCTA";
import { StandardFAQ } from "@/components/StandardFAQ";
import { AlertCircle, AlertTriangle, FileText, CheckCircle2, Shield, Info, Car } from "lucide-react";
import { MAKES, getSlugByMake } from "@/lib/makes";
import Link from "next/link";

export const metadata = {
  title: "Check For Open Recalls - Vehicles Report",
  description: "Check for open recalls instantly to see previous safety issues. Get a detailed report on previous safety issues and vehicle recalls from manufacturers.",
};

export default function RecallsPage() {
  const recallTypes = [
    { 
      title: "Voluntary Recalls", 
      description: "Issued by auto manufacturers as they are aware of safety-related issues. These free repairs never expire and will be made at any dealership.", 
      icon: <Info className="h-4 w-4" /> 
    },
    { 
      title: "Mandatory Recalls", 
      description: "When the NHTSA determines safety-related defects, mandatory recalls are legally enforced and paid by automakers for a free repair.", 
      icon: <AlertTriangle className="h-4 w-4" /> 
    },
    { 
      title: "Technical Service Bulletins", 
      description: "Alerts from auto-manufacturers to dealerships regarding a known issue. Includes info on suggested repair, modified parts, or service updates.", 
      icon: <FileText className="h-4 w-4" /> 
    }
  ];

  const reasonsItems = [
    { title: "Airbag problems", description: "Defective airbag systems that fail to deploy or deploy improperly.", icon: <Shield className="h-4 w-4" /> },
    { title: "Glass roofs", description: "Detachment and shattering of glass roofs while driving.", icon: <AlertCircle className="h-4 w-4" /> },
    { title: "Fuel leakage", description: "Issues with the fuel system that can lead to hazardous leaks or fire.", icon: <AlertTriangle className="h-4 w-4" /> },
    { title: "Pedal issues", description: "Detachment or sticking of acceleration and brake pedals.", icon: <Car className="h-4 w-4" /> },
    { title: "Electrical shorts", description: "Electrical short circuits that can cause sudden loss of power or fire.", icon: <AlertCircle className="h-4 w-4" /> },
    { title: "Brake failures", description: "Total or partial loss of braking capabilities.", icon: <AlertTriangle className="h-4 w-4" /> },
  ];

  const steps = [
    { title: "Enter the VIN", description: "Simply enter your 17 digit VIN into our recall Lookup Tool." },
    { title: "Instant Scan", description: "Our system cross-references against NHTSA and manufacturer databases for any open safety recalls." },
    { title: "Get Your Results", description: "Review any active recalls and take action to ensure the safety of yourself and your loved ones." }
  ];

  const faqs = [
    { question: "What does an open safety recall mean?", answer: "A Vehicle recall is issued when an automaker or National Highway Traffic Safety Administration (NHTSA) determines that vehicle equipment fails to meet minimum safety standards, posing a danger to vehicle safety." },
    { question: "Why do you need to do a Recall Check?", answer: "To ensure a proper fixing of electromechanical faults, understand the manufacturer’s stand on matters concerning safety, and ensure safety of yourself and your loved ones." },
    { question: "Am I notified if my car is recalled?", answer: "If your vehicle is currently under recall, you should have been notified by your vehicle’s manufacturer within sixty days. However, you can still check manually using our tool." }
  ];

  return (
    <>
      <UniversalHero 
        title="Check For Open Recalls"
        description="Check for open recalls instantly to see previous safety issues. Get a detailed report on previous safety issues and vehicle recalls from manufacturers."
        rightElement={<VinCheckHeroImage />}
        badge="Safety & Recalls Check"
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What is a Vehicle Recall?</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>A Vehicle recall is issued when an automaker or National Highway Traffic Safety Administration (NHTSA) determines that vehicle equipment like tires, airbags, etc. fails to meet minimum safety standards. A defect may be noticed in a group of vehicles of the same make or model or items of equipment of the same type and manufacture posing a danger to vehicle safety.</p>
          </div>
        </div>
      </section>

      <StandardFeatureGrid 
        title="Types of Vehicle Recalls"
        description="There are three main types of vehicle safety recalls that are issued by auto-manufacturers and safety authorities."
        items={recallTypes}
        columns={3}
        className="bg-slate-50"
      />

      <StandardFeatureGrid 
        title="Common Explanations for Recalls"
        description="Vehicles are most commonly recalled for critical component failures."
        items={reasonsItems}
        columns={3}
        className="bg-white"
      />

      <StandardSteps 
        title="How to Check For Any Recall"
        description="To know if your vehicle is included in any recalls, follow these simple steps."
        items={steps}
      />

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Recalls Check by Manufacturer</h2>
            <p className="text-lg text-muted-foreground">Select your vehicle&apos;s manufacturer below to check for specific safety recalls and service bulletins.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {MAKES.map((make) => (
              <Link 
                key={make}
                href={`/recalls/${getSlugByMake(make)}`}
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
        title="Be Sure the Vehicle is Safe"
        description="Check if an open safety recall exists on your car or a vehicle you intend to buy."
        buttonText="Check for Recalls"
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
