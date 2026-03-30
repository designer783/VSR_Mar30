"use client";


import { use } from "react";
import { UniversalHero } from "@/components/UniversalHero";
import { VinDecoderHeroImage } from "@/components/VinDecoderHeroImage";
import { StandardFAQ } from "@/components/StandardFAQ";
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid";
import { StandardCTA } from "@/components/StandardCTA";
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn";
import { CheckCircle2, ShieldCheck, Zap, Clock, FileText, Search } from "lucide-react";
import { motion } from "framer-motion";
import { HeroImageDecoration } from "@/components/HeroImageDecoration";
import Link from "next/link";
import { MAKES, getSlugByMake } from "@/lib/makes";


interface PageProps {
  params: Promise<{ make: string }>;
}

export default function MakeVinDecoderPage({ params }: PageProps) {
  const { make: makeSlug } = use(params);

  // Convert slug to Display Name (e.g., alfa-romeo -> Alfa Romeo)
  const make = makeSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const features = [
    { title: "Country of Origin", description: "Verify where the vehicle was manufactured and its factory location.", icon: <CheckCircle2 className="h-5 w-5 text-primary-accent" /> },
    { title: "Vehicle Specifications", description: "Detailed engine type, transmission, body style, and standard equipment.", icon: <CheckCircle2 className="h-5 w-5 text-primary-accent" /> },
    { title: "Model Year & Serial", description: "Confirm the actual manufacturing year and unique production sequence.", icon: <CheckCircle2 className="h-5 w-5 text-primary-accent" /> }
  ];



  const faqs = [
    { question: `What is a ${make} VIN decoder?`, answer: `A ${make} VIN decoder is an online tool that translates the 17-character ${make} VIN into detailed manufacturer information.` },
    { question: `How accurate is the ${make} VIN decoding?`, answer: `Our tool uses official ${make} manufacturer data to ensure precise specifications for every model.` }
  ];

  return (
    <>
      <UniversalHero 
        title={`Decode any ${make} VIN in Seconds: Get Accurate Vehicle Information`}
        description={`Enter your ${make} VIN into our decoder to verify specs like year, model, trim, and engine size for free. Prevent fraud and make an informed decision.`}
        placeholder={`Enter ${make} VIN`}
        layout="form-right"
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' }
        ]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn direction="up" className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">What is a VIN Number?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                A VIN number is a 17-digit character code that uniquely identifies every vehicle. 
                Checking a {make} VIN number is usually the first step in buying a used {make} vehicle. 
                Not only will it give you the specifications, but it will also offer valuable insights into the vehicle's past, helping you avoid stolen vehicles or unnecessary repairs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <StandardFeatureGrid 
        title={`What to Expect From a ${make} VIN Decoder`}
        description="Our tool breaks down the complex codes into easy-to-read vehicle summaries."
        items={features}
        columns={3}
        className="bg-slate-50"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What Each Digit Means</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The first digit shows the country of origin. The second and third digits show the manufacturer and car type. 
                Digits 4-8 represent attributes like brand and size, while the tenth digit represents the model year. 
                The last six characters are the unique serial number for that specific {make}.
              </p>
            </FadeIn>
            <FadeIn direction="right" className="bg-slate-50 p-8 rounded-2xl border border-border">
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2"><span className="font-bold text-primary">1-3</span><span className="text-muted-foreground">Manufacturer Origin</span></div>
                <div className="flex justify-between border-b pb-2"><span className="font-bold text-primary">4-8</span><span className="text-muted-foreground">Vehicle Attributes</span></div>
                <div className="flex justify-between border-b pb-2"><span className="font-bold text-primary">10</span><span className="text-muted-foreground">Model Year</span></div>
                <div className="flex justify-between border-b pb-2"><span className="font-bold text-primary">12-17</span><span className="text-muted-foreground">Unique Serial No.</span></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Decode VIN By Other Makes</h2>
            <p className="text-lg text-muted-foreground">Looking for another manufacturer? We support almost all major brands.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {MAKES.filter(m => m !== make).map((m) => (
              <Link 
                key={m}
                href={`/vin-decoder/${getSlugByMake(m)}`}
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-primary-accent hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
              >
                <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors text-center w-full truncate">
                  {m}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StandardCTA 
        title={`Check any ${make} History Today`}
        description="Verify the records before you buy. Get a complete history report in seconds."
        buttonText="Decode VIN Now"
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
