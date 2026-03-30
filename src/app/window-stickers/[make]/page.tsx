import { notFound } from "next/navigation";
import { getMakeBySlug, MAKES, getSlugByMake } from "@/lib/makes";
import { UniversalHero } from "@/components/UniversalHero";
import { WindowStickerHeroImage } from "@/components/WindowStickerHeroImage";
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid";
import { StandardSteps } from "@/components/StandardSteps";
import { StandardCTA } from "@/components/StandardCTA";
import { StandardFAQ } from "@/components/StandardFAQ";

import { FileText, Search, Zap, Shield, Info, Database, MapPin, Car, HelpCircle } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{
    make: string;
  }>;
}

const MODELS_DATA: Record<string, string[]> = {
  "Acura": ["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "TLX", "TSX", "ZDX"],
  "Ford": ["F-150", "Mustang", "Explorer", "Escape", "Edge", "Ranger", "Expedition", "Bronco", "Econoline", "Transit"],
  "Tesla": ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck", "Roadster"],
  "BMW": ["3 Series", "5 Series", "X3", "X5", "M3", "M5", "7 Series", "X1", "4 Series", "iX"],
};

export async function generateStaticParams() {
  return MAKES.map((make) => ({
    make: getSlugByMake(make),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { make: makeSlug } = await params;
  const make = getMakeBySlug(makeSlug);
  if (!make) return {};

  return {
    title: `${make} Window Sticker by VIN: View Original Features & More`,
    description: `Get your ${make} window sticker by VIN in seconds. View original MSRP, standard equipment, options, colors, fuel economy, and safety ratings for any ${make}.`,
  };
}

export default async function ManufacturerWindowStickerPage({ params }: Props) {
  const { make: makeSlug } = await params;
  const makeName = getMakeBySlug(makeSlug);

  if (!makeName) {
    notFound();
  }

  const highlights = [
    { label: `Original ${makeName} MSRP`, icon: <FileText className="h-4 w-4" /> },
    { label: "Full Factory Options List", icon: <Zap className="h-4 w-4" /> },
    { label: "EPA & Safety Ratings", icon: <Shield className="h-4 w-4" /> },
    { label: "Instant PDF Download", icon: <Zap className="h-4 w-4" /> }
  ];

  const faqs = [
    { question: `Can I get a window sticker for my ${makeName}?`, answer: `Yes, by entering your 17-digit VIN, you can retrieve a digital copy of the original factory window sticker for your ${makeName}.` },
    { question: "What information is included?", answer: "The sticker includes the original MSRP, standard equipment, factory options, interior/exterior colors, and more." }
  ];

  const models = MODELS_DATA[makeName] || [];

  return (
    <>
      <UniversalHero 
        title={`Get a Copy of Your ${makeName} Window Sticker in Seconds`}
        description={`Retrieve any ${makeName} window sticker by VIN with all the options, equipment, and features. View original MSRP, colors, and more.`}
        highlights={highlights}
        layout="form-right"
        badge={`${makeName} Factory Data`}
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' },
          { id: 'ymm', label: 'By Year, Make & Model' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What is {makeName === 'Acura' || makeName === 'Audi' ? 'an' : 'a'} {makeName} Window Sticker?</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>A {makeName} window sticker is the official label that every new vehicle gets from the factory. It identifies exactly how your {makeName} was built, including every package and option selected when it was new.</p>
          </div>
        </div>
      </section>

      {models.length > 0 && (
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-heading text-primary mb-12">What {makeName} Models Do We Cover?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {models.map((model) => (
                <div key={model} className="bg-white px-6 py-4 rounded-xl border border-slate-100 shadow-sm font-bold text-slate-700">
                  {model}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <StandardFeatureGrid 
        title={`What Information Is on ${makeName === 'Acura' || makeName === 'Audi' ? 'an' : 'a'} ${makeName} Sticker?`}
        description={`A ${makeName} window sticker tells you everything about a vehicle when it was brand new at the dealership.`}
        items={[
          { title: "Vehicle Description", description: "Year, model, and specific trim level detail.", icon: <Info /> },
          { title: "Factory Options", description: "Packages and individual add-on features.", icon: <Database /> },
          { title: "MSRP Details", description: "Original suggested retail price and delivery fees.", icon: <FileText /> }
        ]}
        columns={3}
      />

      <StandardSteps 
        title="How to Get Yours"
        items={[
          { title: "Enter VIN", description: `Enter your 17-digit ${makeName} VIN.` },
          { title: "Preview Data", description: "Confirm the vehicle year and model." },
          { title: "Download PDF", description: "Get the high-resolution sticker instantly." }
        ]}
        className="bg-slate-50 py-24"
      />

      <StandardFeatureGrid 
        title={`Where to Find Your ${makeName} VIN`}
        description={`The VIN is a 17-digit code unique to your vehicle. You can find it in several places on your ${makeName}.`}
        items={[
          { title: "Driver’s Side Dashboard", description: `Where the dashboard meets the windshield.`, icon: <MapPin /> },
          { title: "Driver’s Side Door Jamb", description: `On the sticker inside the door frame.`, icon: <MapPin /> },
          { title: "Vehicle Documents", description: `On your insurance, registration, or title.`, icon: <FileText /> }
        ]}
        columns={3}
      />

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Other Supported Manufacturers</h2>
            <p className="text-lg text-muted-foreground">Looking for another make? We support almost all major brands.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {MAKES.map((m) => (
              <Link 
                key={m}
                href={`/window-stickers/${getSlugByMake(m)}`}
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
        title={`Lookup ${makeName} Options and Build Specs`}
        description="Don't guess what's on your vehicle. Get the official build sheet and window sticker facts."
        buttonText="Get Your Sticker Now"
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
