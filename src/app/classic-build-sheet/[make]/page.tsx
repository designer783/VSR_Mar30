import { UniversalHero } from "@/components/UniversalHero";
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid";
import { StandardSteps } from "@/components/StandardSteps";
import { StandardCTA } from "@/components/StandardCTA";
import { StandardFAQ } from "@/components/StandardFAQ";
import { ClassicHeroImage } from "@/components/ClassicHeroImage";
import { 
  History, FileText, Zap, ShieldCheck, Search, Database, Info, 
  MapPin, CheckCircle2, DollarSign, Settings, Palette, Disc, Layers, 
  ArrowRight, Shield, AlertTriangle, Users, Scale, Hammer, Globe, Car, ShieldPlus
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { capitalize } from "@/lib/utils";

const CLASSIC_MAKES = [
  "Alfa Romeo", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", 
  "Citroën", "DeSoto", "Datsun", "Dodge", "Honda", "IH", "Jaguar", "Jeep"
];

const ALL_CLASSIC_MAKES = [
  "Arrow", "Auburn", "Buick", "Cadillac", "Chandler", "Checker", "Chevrolet", "Chrysler", 
  "Cord", "Cunningham", "Davis", "Desoto", "Dodge", "Duesenberg", "Dupont", "Durant", 
  "Elcar", "Erskine", "Essex", "Ford", "Franklin", "Gardner", "Graham", "Hudson", 
  "Imperial", "Jordan", "Kaiser", "Kissel", "Knight", "Lasalle", "Lincoln", "Locomobile", 
  "Marmon", "Mercury", "Moon", "Mustang", "Nash", "Oakland", "Oldsmobile", "Overland", 
  "Packard", "Paige", "Peerless", "Plymouth", "Pontiac", "Reo", "Roamer", "Rolls Royce", 
  "Stearns", "Studebaker"
];

export async function generateStaticParams() {
  return ALL_CLASSIC_MAKES.map((make) => ({
    make: make.toLowerCase().replace(/ /g, '-'),
  }));
}

export default async function ClassicMakePage({ params }: { params: { make: string } }) {
  const { make: makeSlug } = await params;
  const make = makeSlug.split('-').map(capitalize).join(' ');

  const infoItems = [
    { title: "Vehicle Specifications", description: "Year, make, model, body style and official trim level name.", icon: <Info className="text-primary-accent" /> },
    { title: "Standard/Optional Equipment", description: "Factory-installed features and buyer-selected upgrades.", icon: <Layers className="text-primary-accent" /> },
    { title: "Engine Specifications", description: "Displacement, horsepower, and fuel system details.", icon: <Zap className="text-primary-accent" /> },
    { title: "Capacities", description: "Fuel tank size, oil capacity, and coolant volume.", icon: <Database className="text-primary-accent" /> },
    { title: "Original Base Price", description: "Manufacturer's suggested retail price and option costs.", icon: <DollarSign className="text-primary-accent" /> },
    { title: "System Specifications", description: "Gearing, transmission type, brake and suspension setup.", icon: <Settings className="text-primary-accent" /> },
    { title: "Exterior Colors", description: "Original paint name, code, and factory finish type.", icon: <Palette className="text-primary-accent" /> },
    { title: "Wheels, Rims, and Tires", description: "Wheel size, style and original tire specifications.", icon: <Disc className="text-primary-accent" /> },
    { title: "Dimensions", description: "Length, width, height, wheelbase and ground clearance.", icon: <MapPin className="text-primary-accent" /> }
  ];

  const benefitItems = [
    { title: "For Buyers", description: "Verify authenticity, check original engine/paint, and understand market rarity.", icon: <Users className="text-primary-accent" /> },
    { title: "For Sellers/Dealers", description: "Prove original condition, justify asking price, and build buyer confidence.", icon: <Scale className="text-primary-accent" /> },
    { title: "For Restorers", description: "Find the right original parts and confirm factory-correct options.", icon: <Hammer className="text-primary-accent" /> }
  ].map(b => ({ ...b, icon: <div className="p-3 bg-slate-50 rounded-xl mb-4">{b.icon}</div> }));

  const steps = [
    { title: "Step 1", description: "Enter your classic VIN, email address, and phone number on the form fields provided, click on Get build sheet." },
    { title: "Step 2", description: "Proceed to payment, after which you will be redirected to your dashboard." },
    { title: "Step 3", description: "On your dashboard, your generated build sheet will be available for online view and also downloadable as a PDF file." }
  ];

  const faqs = [
    { question: `Are ${make} classic build sheets legal?`, answer: `Yes, reproduction build sheets for ${make} vehicles are completely legal as long as they’re marked as reproductions and used for documentation and personal records.` },
    { question: `Does a ${make} build sheet increase car value?`, answer: "Yes, having original factory documentation often increases value by proving authenticity and original specifications." },
    { question: `What’s the difference between a ${make} build sheet and a modern window sticker?`, answer: "A classic build sheet lists every factory part code and assembly guide used during production, while a modern window sticker displays the MSRP, options, and features for the buyer's information at the time of sale." }
  ];

  const samples = [
    { name: `Classic-Build-Sheet-${make}`, image: "https://picsum.photos/seed/classic1/800/1000" },
    { name: `Classic-Build-Sheet-Ford`, image: "https://picsum.photos/seed/classic2/800/1000" },
    { name: `Classic-Build-Sheet-Chevy`, image: "https://picsum.photos/seed/classic3/800/1000" },
  ];

  return (
    <>
      <UniversalHero
        title={`Looking for ${make} Classic Build Sheet?`}
        description={`Get accurate and affordable build sheet for your ${make} classic car. Our technology ensures every detail originates from trusted and reliable data sources.`}
        layout="form-right"
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' },
          { id: 'ymm', label: 'By Year, Make & Model' }
        ]}
      />

      {/* Industry First & Sample Slider */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <FadeIn direction="right">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-accent/10 text-primary-accent text-sm font-bold mb-4">
                  <ShieldCheck className="h-4 w-4" /> Industry First
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary leading-tight">
                  Classic Build Sheets from 1910 - 1975
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-6">
                  <p>
                    We are the industry-first to offer build sheets for classic cars from 1910 - 1975. Access more information about any {make} classic car by getting the original factory documentation.
                  </p>
                  <p>
                    A Vehicles Report build sheet lists all the options your classic car had when it left the production plant. Our cutting-edge technology and extensive research guarantee that every information in our build sheet originates from trusted and reliable data sources.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">
                {samples.map((sample, i) => (
                  <div key={i} className="flex-shrink-0 w-72 md:w-80 snap-center">
                    <div className="bg-slate-50 rounded-3xl p-4 border border-slate-100 shadow-sm transition-transform hover:scale-[1.02] duration-300">
                      <img src={sample.image} alt={sample.name} className="rounded-2xl shadow-inner mb-4" />
                      <p className="text-center font-bold text-slate-600 text-sm">{sample.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-primary transition-all">
                  <ArrowRight className="h-5 w-5 rotate-180" />
                </button>
                <button className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-primary transition-all">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What is a Classic Build Sheet?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mx-auto">
              <p>A classic build sheet provides detailed information of the specifications and factory options of your classic car. It serves as the definitive historical record for your vintage vehicle.</p>
            </div>
            {/* Logo Placeholder */}
            <div className="mt-12 opacity-20 flex justify-center">
              <Car className="h-24 w-24" />
            </div>
          </FadeIn>
        </div>
      </section>

      <StandardFeatureGrid
        title={`What Information Can I Find in a ${make} Classic Build Sheet?`}
        description={`A classic car build sheet contains detailed factory information about any vintage ${make} car.`}
        items={infoItems}
        columns={3}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">{`Benefits of a ${make} Classic Build Sheet`}</h2>
            <p className="text-lg text-muted-foreground">{`Whether you are buying, selling, or restoring an old ${make}, original documentation is your best friend.`}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefitItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                {item.icon}
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StandardSteps
        title={`How to Get a ${make} Classic Build Sheet?`}
        description="Follow these easy steps to unlock your vintage vehicle's history."
        items={steps}
      />

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Classic Build Sheet by Manufacturer</h2>
            <p className="text-lg text-muted-foreground">Select a brand below to get started with your classic research:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {ALL_CLASSIC_MAKES.map((m) => (
              <Link 
                key={m}
                href={`/classic-build-sheet/${m.toLowerCase().replace(/ /g, '-')}`}
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
        title={`Get the Original Details for Your ${make}`}
        description={`Confirm every factory option and original detail about your ${make} today. High-resolution reproduction build sheets available now.`}
        buttonText="Get Build Sheet Now"
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
