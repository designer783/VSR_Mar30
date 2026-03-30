"use client";




import { Button } from "@/components/ui/button"
import { Car, MapPin, Settings, FileText, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/components/ui/FadeIn"

const samples = [
  {
    year: "2015",
    make: "Toyota",
    model: "Corolla",
    vin: "2T1BURHE0FC320645",
    body: "Sedan 4D",
    engine: "1.8L I4 EFI",
    country: "Canada",
    image: "https://picsum.photos/seed/toyota/400/250"
  },
  {
    year: "2004",
    make: "Honda",
    model: "Civic",
    vin: "JHMES966X4S012004",
    body: "Sedan 4D",
    engine: "1.3L I4 MPI",
    country: "Japan",
    image: "https://picsum.photos/seed/honda/400/250"
  },
  {
    year: "2011",
    make: "Mercedes-Benz",
    model: "C-Class",
    vin: "WDDGF5EB3BR183192",
    body: "Luxury Sedan / Sedan 4D",
    engine: "3.0L V6 FI / SFI",
    country: "Germany",
    image: "https://picsum.photos/seed/mercedes/400/250"
  },
  {
    year: "2015",
    make: "Jeep",
    model: "Wrangler",
    vin: "1C4BJWEG9FL564784",
    body: "SUV 4D",
    engine: "3.6L V6 MPI",
    country: "United States",
    image: "https://picsum.photos/seed/jeep/400/250"
  }
]

export default function SampleReportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50/50 pt-20 pb-20 border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-accent/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full animate-pulse delay-700" />
        </div>
        
        <FadeIn direction="down" className="container relative mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading text-primary-navy mb-4 uppercase">
            SAMPLE REPORT
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Checkout our sample VIN report below
          </p>
        </FadeIn>
      </section>

      {/* Samples Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {samples.map((sample, index) => (
              <motion.div variants={fadeUpVariant} key={index} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col sm:flex-row group">
                <div className="sm:w-1/3 relative overflow-hidden">
                  <img 
                    src={sample.image} 
                    alt={`${sample.year} ${sample.make} ${sample.model}`}
                    className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-primary-navy text-white text-xs font-bold px-2 py-1 rounded">
                    {sample.year}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-navy mb-4 group-hover:text-primary-accent transition-colors">
                      {sample.year} {sample.make} {sample.model}
                    </h3>
                    <div className="space-y-3 text-sm text-text-secondary">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-primary-accent" />
                        <span className="font-semibold text-primary-navy">VIN:</span> {sample.vin}
                      </div>
                      <div className="flex items-center gap-3">
                        <Car className="h-4 w-4 text-primary-accent" />
                        <span className="font-semibold text-primary-navy">Style / Body:</span> {sample.body}
                      </div>
                      <div className="flex items-center gap-3">
                        <Settings className="h-4 w-4 text-primary-accent" />
                        <span className="font-semibold text-primary-navy">Engine:</span> {sample.engine}
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-primary-accent" />
                        <span className="font-semibold text-primary-navy">Country of Assembly:</span> {sample.country}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2 transition-all hover:gap-3">
                      Get {sample.make} Report
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="down">
            <h2 className="text-2xl font-bold text-primary-navy mb-8">Why Choose Our Reports?</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div variants={fadeUpVariant} className="p-6">
              <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center text-primary-accent mx-auto mb-4">
                <FileText size={24} />
              </div>
              <h4 className="font-bold text-primary-navy mb-2">Comprehensive Data</h4>
              <p className="text-sm text-text-secondary">Accidents, title issues, and service records in one place.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="p-6">
              <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center text-primary-accent mx-auto mb-4">
                <Settings size={24} />
              </div>
              <h4 className="font-bold text-primary-navy mb-2">Real-time Updates</h4>
              <p className="text-sm text-text-secondary">Direct access to the latest NMVTIS and auction records.</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="p-6">
              <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center text-primary-accent mx-auto mb-4">
                <Car size={24} />
              </div>
              <h4 className="font-bold text-primary-navy mb-2">Verified VINs</h4>
              <p className="text-sm text-text-secondary">Every VIN is validated against manufacturer databases.</p>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
