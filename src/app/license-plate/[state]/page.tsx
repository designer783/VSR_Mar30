import { UniversalHero } from "@/components/UniversalHero";
import { LicensePlateHeroImage } from "@/components/LicensePlateHeroImage";
import { StandardFAQ } from "@/components/StandardFAQ";
import { HeroImageDecoration } from "@/components/HeroImageDecoration";
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid";
import { StandardSteps } from "@/components/StandardSteps";
import { StandardCTA } from "@/components/StandardCTA";
import { US_STATES } from "@/constants";
import { Metadata } from "next";
import { Shield, Info, Banknote, Car, Check, Clock, FileText, Users, AlertTriangle, ShieldCheck, Zap, History, Scale, Search } from "lucide-react";
import Link from "next/link";


export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateData = US_STATES.find(s => s.label.toLowerCase().replace(/ /g, '-') === stateSlug);
  const stateName = stateData ? stateData.label : stateSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${stateName} License Plate Lookup – Check Any ${stateData?.value || ''} Car Online Now`,
    description: `Lookup any ${stateName} license plate for free and get a comprehensive vehicle history report. Check titles, accidents, and ownership in ${stateName}.`,
  };
}

export default async function StateLicensePlatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const stateData = US_STATES.find(s => s.label.toLowerCase().replace(/ /g, '-') === stateSlug);
  const stateName = stateData ? stateData.label : stateSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const reasons = [
    { title: "Stay Protected", description: `Avoid buying vehicles in ${stateName} with hidden flood damage or odometer fraud.`, icon: <Shield className="h-6 w-6 text-primary-accent" /> },
    { title: "Informed Buying", description: `Know exactly how many owners the car had in ${stateName} before you buy.`, icon: <Info className="h-6 w-6 text-primary-accent" /> },
    { title: "Save Time", description: "Stop wasting time on cars that aren't what they claim to be with instant reports.", icon: <Banknote className="h-6 w-6 text-primary-accent" /> }
  ];

  const features = [
    { title: "Vehicle Specs", description: "Year, make, model and engine details.", icon: <Car className="h-5 w-5 text-primary-accent" /> },
    { title: "Title Check", description: "Salvage, junk, or lien status in real-time.", icon: <FileText className="h-5 w-5 text-primary-accent" /> },
    { title: "Accident Records", description: "Reported collisions and repair history logs.", icon: <AlertTriangle className="h-5 w-5 text-primary-accent" /> },
    { title: "Ownership", description: "Registration dates and state transfer records.", icon: <Users className="h-5 w-5 text-primary-accent" /> }
  ];

  const steps = [
    { title: `Locate ${stateName} Plate`, description: "Find the plate number on the front or rear of the vehicle." },
    { title: "Fill the Form", description: `Enter the plate and select ${stateName} from our search tool.` },
    { title: "Get Your Report", description: "Access your comprehensive vehicle history report instantly." }
  ];

  const vehicleTypes = ["Passenger Cars", "SUVs", "Light Trucks", "Commercial Vehicles", "Motorcycles", "RVs"].map(t => ({ title: t }));

  const states = US_STATES.map(s => ({ title: s.label }));

  const faqs = [
    { question: `Is it legal to lookup a ${stateName} plate?`, answer: `Yes, it is completely legal in ${stateName} for consumer protection and vehicle history research.` },
    { question: `How fast are ${stateName} reports?`, answer: "Our system processes data instantly, delivering your report in seconds." }
  ];

  return (
    <>
      <UniversalHero 
        title={`${stateName} License Plate Lookup: Get the History Behind Any ${stateName} Car`}
        description={`Enter any ${stateName} license plate and get detailed vehicle information. Discover title history, ownership, and more instantly.`}
        placeholder={`Enter ${stateName} Plate`}
        layout="form-right"
        tabs={[
          { id: 'plate', label: 'By US License Plate' }
        ]}
      />

      <StandardFeatureGrid 
        title={`Why Use Our ${stateName} Lookup?`}
        description="Our service provides comprehensive data from trusted sources across the state."
        items={reasons}
        columns={3}
      />

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">For Individual Buyers & Dealers</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2"><Users className="h-5 w-5 text-primary-accent" /> For Buyers</h3>
              <p className="text-muted-foreground">Verify if a vehicle is worth the asking price and avoid scams from private sellers or dealerships.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2"><Scale className="h-5 w-5 text-primary-accent" /> For Sellers</h3>
              <p className="text-muted-foreground">Build trust by providing transparency. A clean record helps justify your price and sell faster.</p>
            </div>
          </div>
        </div>
      </section>

      <StandardFeatureGrid 
        title={`What You'll Discover`}
        description={`Comprehensive reports from diverse ${stateName} and national sources.`}
        items={features}
        columns={4}
      />

      <StandardSteps 
        title="How It Works"
        description="Three simple steps to your complete vehicle history."
        items={steps}
        className="bg-slate-50"
      />

      <StandardFeatureGrid 
        title={`Supported ${stateName} Vehicles`}
        items={vehicleTypes}
        variant="simple"
        columns={3}
      />

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Lookup By Other States</h2>
            <p className="text-lg text-muted-foreground">Select another state below to check specific vehicle history and title records.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {US_STATES.filter(s => s.label !== stateName).map((s) => (
              <Link 
                key={s.value}
                href={`/license-plate/${s.label.toLowerCase().replace(/ /g, '-')}`}
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-primary-accent hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
              >
                <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors text-center w-full truncate">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StandardCTA 
        title={`Get Your ${stateName} Vehicle Report`}
        description="Drive with confidence knowing the full history of your next vehicle."
        buttonText="Search Vehicle Now"
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

export async function generateStaticParams() {
  return US_STATES.map((state) => ({
    state: state.label.toLowerCase().replace(/ /g, '-'),
  }));
}
