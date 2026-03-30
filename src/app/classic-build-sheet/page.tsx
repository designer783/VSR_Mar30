import { UniversalHero } from "@/components/UniversalHero";
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid";
import { StandardSteps } from "@/components/StandardSteps";
import { StandardMediaSection } from "@/components/StandardMediaSection";
import { StandardCTA } from "@/components/StandardCTA";
import { StandardFAQ } from "@/components/StandardFAQ";
import { ClassicHeroImage } from "@/components/ClassicHeroImage";
import { 
  History, FileText, Zap, ShieldCheck, Search, Database, Info, 
  MapPin, CheckCircle2, DollarSign, Settings, Palette, Disc, Layers, 
  ArrowRight, Shield, AlertTriangle, Users, Scale, Hammer, Globe, Car, ShieldPlus
} from "lucide-react";
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


export const metadata = {
  title: "Classic Build Sheets - Restore Your Vintage Car's History",
  description: "Recreate the original factory build sheet for classic cars made before 1981. View MSRP, options, paint codes, and technical specs.",
};

const CLASSIC_MAKES = [
  "Arrow", "Auburn", "Buick", "Cadillac", "Chandler", "Checker", "Chevrolet", "Chrysler", 
  "Cord", "Cunningham", "Davis", "Desoto", "Dodge", "Duesenberg", "Dupont", "Durant", 
  "Elcar", "Erskine", "Essex", "Ford", "Franklin", "Gardner", "Graham", "Hudson", 
  "Imperial", "Jordan", "Kaiser", "Kissel", "Knight", "Lasalle", "Lincoln", "Locomobile", 
  "Marmon", "Mercury", "Moon", "Mustang", "Nash", "Oakland", "Oldsmobile", "Overland", 
  "Packard", "Paige", "Peerless", "Plymouth", "Pontiac", "Reo", "Roamer", "Rolls Royce", 
  "Stearns", "Studebaker"
];

export default function ClassicBuildSheetPage() {
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
    { title: "Enter the Classic VIN", description: "Carefully type or paste your vintage VIN into the form at the top." },
    { title: "Search and Decode", description: "Verify basic details to ensure you're checking the right car." },
    { title: "Get Your Build Sheet", description: "Instantly view and download the high-resolution reproduction." }
  ];

  const locations = [
    { title: "Dashboard by the Windshield", description: "Look at the bottom corner of the driver’s side windshield where a small metal plate might be attached." },
    { title: "Driver's Side Door Jamb", description: "Check the area where the door latches when closed for a metal tag with numbers and letters." },
    { title: "Engine Block", description: "Check if the VIN is stamped directly onto the engine block, usually on the front or side surface." },
    { title: "Frame Rail", description: "Look underneath the car along the frame rails near the front wheels for stamped numbers in the metal." },
    { title: "Firewall", description: "Check the metal wall separating the engine from the passenger compartment for a stamped or attached plate." },
    { title: "Under the Hood", description: "Open the hood and look on the inner fender wells or radiator support for identification tags." },
    { title: "Trunk Area", description: "Some manufacturers placed identification plates inside the trunk, often near the spare tire or on the lid." },
    { title: "Glove Box", description: "Check inside the glove compartment for a small metal tag that might contain the VIN or serial number." },
    { title: "Vehicle Paperwork", description: "Check titles, registrations, insurance documents, and old service records." }
  ];

  const comparisonData = [
    { label: "Vehicle specifications", classic: true, modern: true },
    { label: "Original MSRP", classic: true, modern: true },
    { label: "Mechanical features", classic: true, modern: true },
    { label: "Exterior color", classic: true, modern: true },
    { label: "Interior color", classic: false, modern: true },
    { label: "Safety and security", classic: false, modern: true },
    { label: "Options & packages", classic: true, modern: true },
    { label: "Fuel economy", classic: false, modern: true },
    { label: "Warranty information", classic: false, modern: true },
    { label: "NHTSA safety ratings", classic: false, modern: true },
    { label: "Price breakdown", classic: false, modern: true },
    { label: "Number produced", classic: true, modern: false },
    { label: "QR code", classic: true, modern: true },
  ];

  const otherTools = [
    { title: "VIN Decoder", description: "Decode any VIN for free to reveal basic details like the year, make, model, engine, and transmission.", icon: <Search className="text-primary-accent" />, link: "/vin-decoder", buttonText: "Decode VIN" },
    { title: "VIN Check", description: "Lookup records for accidents, thefts, mileage, titles, liens, and more from the car's past life.", icon: <ShieldPlus className="text-primary-accent" />, link: "/vin-check", buttonText: "Check VIN" },
    { title: "Window Sticker Lookup", description: "Finds original factory stickers for any post-1981 vehicle with 17-digit VIN numbers.", icon: <FileText className="text-primary-accent" />, link: "/window-stickers", buttonText: "Get Window Sticker" },
    { title: "License Plate Lookup", description: "Enter the plate number to access the full vehicle history when you don't have the VIN available.", icon: <Globe className="text-primary-accent" />, link: "/license-plate", buttonText: "Lookup License Plate" }
  ];

  const faqs = [
    { 
      question: "Are classic window stickers legal?", 
      answer: "Yes, reproduction window stickers are completely legal as long as they’re marked as reproductions and not fake originals. They’re meant for documentation, car shows, and personal records, not to deceive anyone about your vehicle." 
    },
    { 
      question: "Can I get a window sticker without a VIN?", 
      answer: "Yes, our tool offers the option to get classic car window stickers using the year, make, and model. However, you cannot get the official window sticker from the manufacturer or dealership without the VIN (Vehicle Identification Number)." 
    },
    { 
      question: "Does a window sticker increase car value?", 
      answer: "Yes, having original classic car documentation often increases value because it proves authenticity and originality. Buyers pay more for cars with accurate and complete information showing original paint, engine, and options rather than a car with missing or unknown details." 
    },
    { 
      question: "Are reproduction window stickers accepted at car shows?", 
      answer: "Yes, reproduction window stickers work great for car shows and displaying your vehicle. They show factory options and original pricing beautifully. However, judges don’t use them to prove your car is completely original or unmodified." 
    },
    { 
      question: "What's the difference between a build sheet and a window sticker?", 
      answer: "A build sheet is the factory’s assembly guide listing every part and code used during production. The window sticker is a label displaying the MSRP, options, features, fuel economy, and more, to help buyers make informed purchasing decisions." 
    },
    {
      question: "Is a classic window sticker worth it?",
      answer: "Absolutely. For a small investment, you gain permanent access to the original factory specifications of your vintage vehicle, which is invaluable for restoration and resale purposes."
    }
  ];

  return (
    <>
      <UniversalHero
        title="Get Window Stickers for Classic Cars Made Before 1981"
        description="Want to know exactly how your vintage ride looked when it rolled off the factory line? Our classic window sticker service brings back those original details for any car made before 1981, giving you authentic factory build specs."
        rightElement={<ClassicHeroImage />}
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' },
          { id: 'ymm', label: 'By Year, Make & Model' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">What is a Classic Window Sticker?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground mx-auto space-y-6">
              <p>A classic window sticker is a document that shows the original factory information for older cars. It’s like the car’s birth certificate, listing every piece of equipment the car came with when it was brand new.</p>
              <p>These stickers, often called <strong>classic car build sheets</strong>, help you understand what made a car special back in the day. You can see the original base price (MSRP), paint color, and all the features it had from the factory.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <StandardFeatureGrid
        title="What Information Will I Find on a Classic Window Sticker?"
        description="A classic car window sticker contains detailed factory information about any vintage car. Here’s what you’ll typically find in our window sticker for classics:"
        items={infoItems}
        columns={3}
        className="bg-slate-50"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">How Can You Benefit From Getting a Classic Window Sticker?</h2>
            <p className="text-lg text-muted-foreground">A classic window sticker helps both buyers and sellers make smarter decisions about vintage cars today.</p>
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
          <div className="mt-12 text-center">
            <Link href="/sample" className="text-primary-accent font-bold hover:underline inline-flex items-center gap-2">
              View Sample <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <StandardSteps
        title="How to Look Up a Classic Car Window Sticker"
        description="By using your vehicle identification number, follow these easy steps to get your classic window sticker:"
        items={steps}
        className="bg-slate-50"
      />

      <StandardFeatureGrid
        title="Where Can I Find the VIN on a Classic Car?"
        description="Finding your classic car’s VIN can be tricky since older cars placed them in different spots."
        items={locations.map((loc, i) => ({
          title: loc.title,
          description: loc.description,
          icon: <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-accent/10 text-primary-accent flex items-center justify-center font-bold text-sm">{i + 1}</div>
        }))}
        columns={3}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Do Window Stickers for Modern and Classic Cars Differ?</h2>
            <p className="text-lg text-muted-foreground">Modern and classic window stickers contain different information because rules changed over time.</p>
          </div>
          <div className="overflow-hidden bg-white rounded-3xl border border-slate-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-4 font-bold text-primary">Information</th>
                  <th className="px-6 py-4 font-bold text-primary text-center">Classic Car Sticker</th>
                  <th className="px-6 py-4 font-bold text-primary text-center">Modern Car Sticker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 text-slate-700 font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-center">
                      {row.classic ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.modern ? <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-slate-300 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Get Classic Window Sticker by VIN for All Pre-1981 Car Models</h2>
            <p className="text-lg text-muted-foreground">Our tools allow the reproduction of window stickers for any classic vehicles manufactured since 1910. Select a brand below to get started:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {CLASSIC_MAKES.map((make) => (
              <Link 
                key={make}
                href={`/classic-build-sheet/${make.toLowerCase().replace(/ /g, '-')}`}
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

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Additional Tools for More Vehicle Information</h2>
            <p className="text-lg text-muted-foreground">Try out our other services and learn more about any vehicle history and details:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherTools.map((tool, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">{tool.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={tool.link}>{tool.buttonText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StandardCTA
        title="Get a Reproduction Window Sticker for Any Classic Car"
        description="Don’t wait until it’s late before finding out a vintage car’s factory build details. Order your original reproduction window sticker to confirm options, features, MSRP, and more."
        buttonText="Lookup Sticker Now"
        variant="accent"
      />

      <StandardFAQ
        title="Frequently Asked Questions About Classic Window Stickers"
        items={faqs}
        variant="narrow"
        className="bg-slate-50"
      />
    </>
  );
}

const X = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);


