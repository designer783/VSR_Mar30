import { UniversalHero } from "@/components/UniversalHero"
import { StandardFAQ } from "@/components/StandardFAQ"
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid"
import { StandardCTA } from "@/components/StandardCTA"
import { HeroImageDecoration } from "@/components/HeroImageDecoration"
import { FileText, Banknote, ShieldAlert, History, ShieldCheck, Scale, FileKey, Search } from "lucide-react"

export const metadata = {
  title: "Classic Vehicle History - Trace Your Vintage Car's Past",
  description: "Get a comprehensive history report for classic vehicles manufactured before 1981. Track titles, accidents, mileage, and more.",
};

export default function ClassicVehicleHistoryPage() {
  const benefits = [
    {
      title: "Historical Title Data",
      description: "Based on data mostly retrieved from the Department of Motor Vehicles (DMVs) & National Motor Vehicle Title Information Systems (NMVTIS).",
      icon: <FileText className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Open Lien Records",
      description: "Information on open liens that have not been fully paid, usually provided by major auto lenders.",
      icon: <Banknote className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Accident History",
      description: "Data from insurance companies, junk yards, dismantlers, and salvage auctions to provide the accident history of any classic vehicle.",
      icon: <ShieldAlert className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Odometer Readings",
      description: "Access the current historical odometer readings for most classical vehicles, with a timeline of the mileage.",
      icon: <History className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Theft Records",
      description: "Information of when the classic vehicle was stolen & if it’s recovered by law enforcement or not.",
      icon: <ShieldCheck className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Total Loss & Auction Sales",
      description: "Get information on total loss records and auction sales history, if available for the specific vehicle.",
      icon: <Scale className="h-6 w-6 text-primary-accent" />
    }
  ];

  const brands = [
    "Arrow", "Auburn", "Buick", "Cadillac", "Chandler", "Checker", "Chevrolet", "Chrysler", "Cord", "Cunningham", "Davis", "Desoto", "Dodge", "Duesenberg", "Dupont", "Durant", "Elcar", "Erskine", "Essex", "Ford", "Franklin", "Gardner", "Graham", "Hudson", "Imperial", "Jordan", "Kaiser", "Kissel", "Knight", "Lasalle", "Lincoln", "Locomobile", "Marmon", "Mercury", "Moon", "Mustang", "Nash", "Oakland", "Oldsmobile", "Overland", "Packard", "Paige", "Peerless", "Plymouth", "Pontiac", "Reo", "Roamer", "Rolls Royce", "Stearns", "Studebaker"
  ].map(brand => ({ title: brand }));

  const tools = [
    {
      title: "VIN Decoder",
      description: "Decode any VIN for free to reveal basic details like the year, make, model, engine, and transmission.",
      icon: <FileKey className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Classic Build Sheet",
      description: "Want to know exactly how your vintage ride looked when it rolled off the factory line? Get original factory build specs.",
      icon: <FileText className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "VIN Check",
      description: "Lookup records for accidents, thefts, mileage, titles, liens, and more from the car’s past life.",
      icon: <ShieldCheck className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "License Plate Lookup",
      description: "Enter the plate number to access the full vehicle history when you don’t have the VIN available.",
      icon: <Search className="h-6 w-6 text-primary-accent" />
    }
  ];

  const faqs = [
    {
      question: "Can I get a history report for a car made before 1981?",
      answer: "Yes! While many services only support the standard 17-digit VIN (introduced in 1981), Vehicles Report specializes in classic vehicle history for VINs under 17 digits, covering cars manufactured as far back as 1910."
    },
    {
      question: "What information is included in a classic history report?",
      answer: "A classic report typically includes historical title data (DMV/NMVTIS), open lien records, accident history (from salvage auctions and insurance), odometer readings, and theft/recovery records."
    },
    {
      question: "How do I find the VIN on my classic car?",
      answer: "Common locations for classic VINs include the dashboard corner (near the windshield), driver’s side door jamb, engine block, frame rail, firewall, or under the hood."
    },
    {
      question: "Is the data for classic cars as complete as modern ones?",
      answer: "While we access the best available data from DMVs, NMVTIS, and auction houses, records for very old vehicles can sometimes be less comprehensive than modern 17-digit VIN vehicles."
    },
    {
      question: "How long does it take to get the report?",
      answer: "Most reports are generated instantly once you complete the search and payment process. You can view them online and download a PDF version for your records."
    }
  ];

  return (
    <>
      <UniversalHero 
        title="Get Detailed and Accurate Classic Vehicle History Reports"
        description="Tracing the history of your classic car with Vehicles Report Classic VIN Check. We provide reliable data for classic VINs under 17 digits."
        rightElement={
          <HeroImageDecoration 
            imageSrc="/assets/images/classic-window-sticker/browser/Safari (Big Sur) - Light.png"
            imageAlt="Classic Vehicle History Report"
            badgeText="Classic Records Verified"
          />
        }
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' },
          { id: 'ymm', label: 'By Year, Make & Model' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">Why Classic Vehicle History Matters?</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Since vehicle history reports have been mostly limited to cars and light trucks with 17 digit VINs, many VIN check services have failed to recognise the VIN numbers of classic, vintage and antique vehicles – leaving out any vehicle that was manufactured before 1981.
            </p>
            <p>
              As a result, classic car buyers have been relying on the information provided by their sellers or information left by mistake on the dashboard compartment. This is poised to lead to accidental omissions or worse, fraud.
            </p>
          </div>
        </div>
      </section>

      <StandardFeatureGrid 
        title="Benefits of Getting a Classic Vehicle History Report"
        description="Our classic vehicle history reports provide essential details to help you make informed decisions when buying or selling vintage cars."
        items={benefits}
      />

      <StandardFeatureGrid 
        title="Classic Vehicle History Reports for all Manufacturers"
        description="Our records cover a wide range of antique and classic manufacturers. Here are some of the brands we support:"
        items={brands}
        variant="simple"
        columns={4}
        className="bg-slate-50"
      />

      <StandardFeatureGrid 
        title="Additional Tools for Your Classic Vehicle"
        description="Explore our other services to get a complete picture of your classic car's heritage and current status:"
        items={tools}
        columns={4}
      />

      <StandardCTA 
        title="Trace the History of Your Classic Car Today"
        description="Don’t let the past be a mystery. Get a comprehensive history report for your vintage or antique vehicle and proceed with confidence."
        buttonText="Check Classic VIN Now"
        variant="glass"
      />

      <StandardFAQ 
        title="Classic Vehicle History FAQs"
        items={faqs}
        variant="narrow"
        className="bg-slate-50"
      />
    </>
  )
}
