import { UniversalHero } from "@/components/UniversalHero";
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid";
import { StandardSteps } from "@/components/StandardSteps";
import { StandardCTA } from "@/components/StandardCTA";
import { StandardFAQ } from "@/components/StandardFAQ";
import { 
  AlertCircle, AlertTriangle, FileText, CheckCircle2, Shield, Info, 
  Car, Calendar, ShieldCheck, Zap, Mail, Phone, Users, Globe, 
  ArrowRight, Search, LayoutGrid, Database
} from "lucide-react";
import { FadeIn, StaggerContainer, fadeUpVariant, scaleInVariant } from "@/components/ui/FadeIn";
import { MAKES, getSlugByMake, getMakeBySlug } from "@/lib/makes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { capitalize } from "@/lib/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return MAKES.map((make) => ({
    make: getSlugByMake(make),
  }));
}

export default async function RecallMakePage({ params }: { params: { make: string } }) {
  const { make: makeSlug } = await params;
  const make = getMakeBySlug(makeSlug);

  if (!make) {
    notFound();
  }

  const steps = [
    { title: "Find your VIN number", description: "Locate your 17-digit Vehicle Identification Number on your dashboard or door jamb." },
    { title: "Search and Verify", description: "Use our Vehicle Recall tool and search your VIN to identify any open safety issues." }
  ];

  const infoGridItems = [
    { title: "Date of recall issue", description: "Learn precisely when the manufacturer or NHTSA issued the safety alert.", icon: <Calendar className="text-primary-accent" /> },
    { title: "Description of the issue", description: "Detailed information about the specific defect or non-compliance found.", icon: <Info className="text-primary-accent" /> },
    { title: "Remedy and consequences", description: "What needs to be fixed and the potential risks if left unrepaired.", icon: <ShieldCheck className="text-primary-accent" /> }
  ];

  return (
    <>
      <UniversalHero
        title={`${make} recalls`}
        description={`Vehicle recalls are usually issued when a vehicle or equipment does not comply with the Federal Motor Vehicle Safety Standard or a safety related defect is discovered on the vehicle. InstantVINReports offer free ${make} recall checks. You can use this information to know if your ${make} vehicle needs to be repaired as part of a recall.`}
        layout="form-right"
        badge={`${make} Safety Alerts`}
        tabs={[
          { id: 'vin', label: 'By VIN' },
          { id: 'plate', label: 'By US License Plate' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">How Do I Know If My Vehicle Has a Recall?</h2>
              <p className="text-lg text-muted-foreground">To find out if your vehicle has a recall, here is what you need to do:</p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <FadeIn key={i} direction={i === 0 ? "right" : "left"} delay={i * 0.1}>
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-accent text-white flex items-center justify-center font-bold mb-6 text-xl shadow-lg">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <StandardFeatureGrid
        title={`How to Check ${make} Recalls by VIN`}
        description={`Our recall tool allows you to check manufacturer recalls by VIN. Search a VIN and learn about any open recall your vehicle has with other information including:`}
        items={infoGridItems}
        columns={3}
        className="bg-slate-50"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-verification/10 text-verification text-xs font-bold mb-4 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" /> Safety First
              </div>
              <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed">
                It’s imperative to repair the recalls as soon as they are issued for a safe vehicle drive. If not, it can become the cause of accidents and dysfunction of the vehicle also.
              </p>
              <p className="text-muted-foreground text-lg">
                To check a vehicle recall by VIN, simply enter the VIN number and learn if the vehicle needs to be repaired as part of a recall.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-accent/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[3rem]">
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight">
                Are you a dealer interested in recall data for {make} Vehicles?
              </h2>
              <p className="text-white/70 text-lg">
                Book a meeting to get recall data as an API service. We provide high-fidelity recall data feeds for dealerships and auction houses.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Button size="lg" variant="accent" className="h-14 px-10 text-lg rounded-2xl shadow-xl hover:scale-105 transition-transform">
                Book a Meeting <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Lookup Recalls by Manufacturer</h2>
            <p className="text-lg text-muted-foreground">Select a brand below to check specialized recall reports:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {MAKES.map((m) => (
              <Link 
                key={m}
                href={`/recalls/${getSlugByMake(m)}`}
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
        title={`Check For Any ${make} Recall`}
        description={`Instantly check if an open safety recall exists on your ${make} or a vehicle you intend to buy.`}
        buttonText="Check Now"
        variant="glass"
      />
    </>
  );
}
