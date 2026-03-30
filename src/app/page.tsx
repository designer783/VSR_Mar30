import { UniversalHero } from "@/components/UniversalHero";
import { StackCollage } from "@/components/StackCollage";
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid";
import { StandardSteps } from "@/components/StandardSteps";
import { StandardMediaSection } from "@/components/StandardMediaSection";
import { StandardCTA } from "@/components/StandardCTA";
import { StandardFAQ } from "@/components/StandardFAQ";

import {
  Database,
  Zap,
  ShieldCheck,
  Users,
  FileText,
  AlertTriangle,
  Search,
  History,
  Lock,
  CreditCard,
  Map,
  ArrowRight,
  Shield,
  Clock,
  Banknote,
  Scale
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const highlights = [
    { label: "End-to-End Encryption", icon: <Lock className="h-4 w-4" /> },
    { label: "Guaranteed Secure Payments", icon: <CreditCard className="h-4 w-4" /> },
    { label: "5M+ Reports Generated", icon: <FileText className="h-4 w-4" /> },
    { label: "Instant Digital Access", icon: <Zap className="h-4 w-4" /> }
  ];

  const coreFeatures = [
    { title: "Title History", description: "Salvage, rebuilt, and flood title records.", icon: <FileText /> },
    { title: "Accident History", description: "Reported collisions and repair logs.", icon: <AlertTriangle /> },
    { title: "Odometer Check", description: "Track mileage timeline and rollback fraud.", icon: <History /> },
    { title: "Theft Records", description: "Active theft status and recovery records.", icon: <ShieldCheck /> },
    { title: "Recall Info", description: "Pending manufacturer safety recalls.", icon: <AlertTriangle /> },
    { title: "Lien Records", description: "Active bank liens and loan status.", icon: <Database /> }
  ];

  const steps = [
    { title: "Enter Details", description: "Enter your 17-character VIN or License Plate." },
    { title: "Instant Search", description: "Our system scans records across North America." },
    { title: "Get Your Report", description: "Download your comprehensive history instantly." }
  ];

  const tools = [
    { title: "Window Sticker Lookup", description: "Get the original factory label with MSRP.", icon: <FileText /> },
    { title: "Free VIN Decoder", description: "Instantly reveal basic vehicle specs.", icon: <Zap /> },
    { title: "License Plate Lookup", description: "Search history when VIN is unavailable.", icon: <Search /> },
    { title: "Classic Build Sheets", description: "Recreate labels for vintage cars.", icon: <History /> }
  ];

  const vehicleTypes = ["Cars", "SUVs", "Trucks", "Vans", "Motorcycles", "RVs", "Classic Cars", "Electric Vehicles"].map(t => ({ title: t }));

  const faqs = [
    { question: "What is a vehicle history report?", answer: "A comprehensive document showing a car’s complete past, including accidents, ownership changes, and more." },
    { question: "Can I use a license plate instead of a VIN?", answer: "Yes, our tool allows you to search by US License Plate and state if you don't have the VIN handy." },
    { question: "Is your data official?", answer: "We pull data from NMVTIS, insurance companies, and other trusted sources across North America." }
  ];

  return (
    <>
      <UniversalHero
        title="Check the Complete Vehicle History: Buy With Confidence"
        description="Don’t gamble with your money on a used car. Get a complete vehicle history report that shows accidents, title problems, odometer fraud, and more for any vehicle in the USA or Canada."
        highlights={highlights}
        rightElement={<StackCollage />}
        badge="Does the vehicle have a hidden past? Find out today!"
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What Is a VIN Number Check?</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>A VIN number check is when you look up a vehicle’s 17-character identification code to reveal the car’s history, which includes any reported records of accidents, thefts, ownership, and more.</p>
            <p>When buying a used car, a VIN check helps avoid fraud by verifying that the seller is telling the truth and ensuring the vehicle is safe to buy.</p>
          </div>
        </div>
      </section>

      <StandardFeatureGrid 
        title="What's Included in Your Report?"
        description="Comprehensive vehicle history pulling information from dozens of trusted sources across North America."
        items={coreFeatures}
        columns={3}
        className="bg-slate-50"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Protect Your Investment</h2>
            <p className="text-lg text-muted-foreground">Whether you're buying or selling, transparency is key to a smooth transaction.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-primary-accent" />
                For Buyers
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>• Avoid hidden problems and costly surprises.</li>
                <li>• Check if a car has been in a serious accident.</li>
                <li>• Verify odometer readings and prevent fraud.</li>
                <li>• Protect your family's safety with recall data.</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Banknote className="h-6 w-6 text-primary" />
                For Sellers
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>• Build instant trust with potential buyers.</li>
                <li>• Sell faster with complete transparency.</li>
                <li>• Justify your asking price with data.</li>
                <li>• Reduce liability and future complaints.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StandardSteps 
        title="How It Works"
        description="Three simple steps to your complete vehicle history."
        items={steps}
        className="bg-slate-50"
      />

      <StandardMediaSection 
        title="Where is the VIN Number?"
        description="Your car’s VIN appears in several easy-to-find spots both on the vehicle itself and on your important paperwork."
        imageSrc="https://picsum.photos/seed/vin-location/800/600"
        imageAlt="VIN Location Map"
        items={[
          "Dashboard Near Windshield (Driver's Side)",
          "Driver's Door Frame Sticker",
          "Under the Hood on the Engine Block",
          "Vehicle Registration & Title Documents",
          "Insurance Policy Papers"
        ]}
      />

      <StandardFeatureGrid 
        title="Covered Vehicle Types"
        items={vehicleTypes}
        variant="simple"
        columns={4}
        className="bg-slate-50"
      />

      <StandardFeatureGrid 
        title="Additional Tools"
        description="Beyond history reports, we offer other helpful research tools."
        items={tools}
        columns={2}
      />

      <StandardCTA 
        title="Get Used Vehicle Reports: Don’t Take Chances"
        description="Our reports help thousands of people avoid bad cars and find great deals they can trust. Protect yourself today."
        buttonText="Search Vehicle History Now"
        variant="glass"
      />

      <StandardFAQ 
        title="Frequently Asked Questions"
        description="Common questions about our vehicle history reports."
        items={faqs}
        variant="narrow"
        className="bg-slate-50"
      />
    </>
  );
}
