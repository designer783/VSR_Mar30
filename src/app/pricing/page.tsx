"use client";



import { Button } from "@/components/ui/button"
import { Check, ShieldCheck, RefreshCcw, CreditCard, ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Toggle } from "@/components/Toggle"
import { PricingCard } from "@/components/PricingCard"
import { StandardFAQ } from "@/components/StandardFAQ"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant, scaleInVariant } from "@/components/ui/FadeIn"

const faqs = [
  { question: "What is included in a vehicle history report?", answer: "A comprehensive vehicle history report includes detailed specifications, accident history, title records, mileage verification, service records, and more." },
  { question: "What is a window sticker, and what does it include?", answer: "A window sticker (Monroney sticker) provides the original factory specifications, MSRP, standard equipment, optional packages, and fuel economy ratings." },
  { question: "How much does a vehicle history report and window sticker cost?", answer: "Our reports start at $19.99 for a single report, with significant discounts for bulk purchases (up to 60% off)." },
  { question: "Are subscription plans available?", answer: "Yes, we offer an Unlimited VIN Check subscription for $19.99/month which includes basic reports and 50% off premium reports." },
  { question: "Can I get a discount for purchasing in bulk?", answer: "Absolutely! We have 5-report and 10-report bundles that offer the best value for frequent users." },
  { question: "What if the standard plans don't meet my business requirements?", answer: "We offer custom enterprise solutions. Please contact our support team for a tailored quote." },
  { question: "Do you offer enterprise-level packages?", answer: "Yes, for high-volume users like dealerships and auctions, we have specialized enterprise packages." },
  { question: "Do you offer unlimited usage plans?", answer: "Our monthly subscription provides unlimited basic VIN checks. For unlimited premium reports, please contact sales." },
  { question: "Is there a trial option for businesses?", answer: "We can provide sample reports and limited trials for verified business accounts." },
  { question: "Are there hidden fees?", answer: "No. The price you see is the price you pay. All credits purchased never expire." },
  { question: "Do you offer dedicated support for businesses?", answer: "Yes, business and enterprise accounts get priority support and dedicated account management." },
  { question: "What payment methods do you accept?", answer: "We accept Visa, Mastercard, American Express, Discover, PayPal, PayStack, and Bank Transfers." }
]

const pricingData: any = {
  history: {
    personal: {
      packages: [
        { name: "10 Reports", save: "Save 60%", price: "$8.00", unit: "/reports", total: "Total: $199.90 $79.99", popular: true, buttonText: "Get reports" },
        { name: "5 Reports", save: "Save 40%", price: "$12.00", unit: "/reports", total: "Total: $99.95 $59.99", popular: false, buttonText: "Get reports" },
        { name: "1 Report", save: "67% < Carfax", price: "$19.99", unit: "/report", total: "Total: $19.99 Full price", popular: false, buttonText: "Get report" }
      ],
      unlimited: {
        title: "Unlimited VIN Check",
        desc: "Uncover the hidden history of any vehicle with unlimited access to basic VIN check reports.",
        price: "$19.99",
        features: ["Detailed Vehicle Specifications", "Vehicle Usage", "Auction Records with photos", "Accident & Damage Records", "Past Sales History with Photos", "Lemon & Flood Check"],
        whyChoose: [
          "Unlimited access to basic reports",
          "Special 50% discount on full premium reports",
          "Free VIN decoding, recall check and upcoming maintenance checks",
          "Free access to a dashboard to manage your reports",
          "Early access for upcoming features and more!"
        ],
        footer: "Get 50% off full, detailed reports when you subscribe to the Unlimited VIN Check Service. Full reports include ownership history, accident details, maintenance records, title checks, theft, lien records, and photos of past listings.",
        cta: "Don't wait! Get unlimited checks for just $19.99/month."
      }
    },
    business: {
      packages: [
        { name: "50 Reports", save: "Save 65%", price: "$7.00", unit: "/reports", total: "Total: $999.50 $350.00", popular: true, buttonText: "Get reports" },
        { name: "25 Reports", save: "Save 60%", price: "$8.00", unit: "/reports", total: "Total: $499.75 $200.00", popular: false, buttonText: "Get reports" },
        { name: "10 Reports", save: "Save 50%", price: "$10.00", unit: "/reports", total: "Total: $199.90 $100.00", popular: false, buttonText: "Get reports" }
      ],
      unlimited: null
    }
  },
  sticker: {
    personal: {
      packages: [
        { name: "10 Stickers", save: "Save 60%", price: "$8.00", unit: "/stickers", total: "Total: $199.90 $79.99", popular: true, buttonText: "Get stickers" },
        { name: "5 Stickers", save: "Save 40%", price: "$12.00", unit: "/stickers", total: "Total: $99.95 $59.99", popular: false, buttonText: "Get stickers" },
        { name: "1 Sticker", save: "67% < Carfax", price: "$19.99", unit: "/sticker", total: "Total: $19.99 Full price", popular: false, buttonText: "Get sticker" }
      ],
      unlimited: {
        title: "Unlimited Window Stickers",
        desc: "Discover the original window sticker and factory specifications along with options & packages for any vehicle with unlimited access to window sticker reports.",
        price: "$89.99",
        features: ["Original Window Sticker Details", "Manufacturer’s Suggested Retail Price (MSRP)", "Standard and Optional Equipment", "Exterior and Interior Features", "Fuel Economy Ratings", "Warranty Information"],
        whyChoose: [
          "Unlimited access to window sticker reports",
          "Free access to VIN decoding, recall checks, and vehicle maintenance insights",
          "Exclusive dashboard to manage your window sticker reports",
          "Priority access to new features and updates",
          "Early access for upcoming features and more!"
        ],
        footer: "",
        cta: "Don't wait! Get unlimited checks for just $89.99/month."
      }
    },
    business: {
      packages: [
        { name: "50 Stickers", save: "Save 65%", price: "$7.00", unit: "/stickers", total: "Total: $999.50 $350.00", popular: true, buttonText: "Get stickers" },
        { name: "25 Stickers", save: "Save 60%", price: "$8.00", unit: "/stickers", total: "Total: $499.75 $200.00", popular: false, buttonText: "Get stickers" },
        { name: "10 Stickers", save: "Save 50%", price: "$10.00", unit: "/stickers", total: "Total: $199.90 $100.00", popular: false, buttonText: "Get stickers" }
      ],
      unlimited: null
    }
  }
}

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal')
  const [reportType, setReportType] = useState<'history' | 'sticker'>('history')

  const currentData = pricingData[reportType][activeTab]
  const currentPackages = currentData.packages
  const currentUnlimited = currentData.unlimited

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
        <FadeIn direction="down" className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-navy mb-6">
            Cost-effective pricing for you
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            Say goodbye to overpaying with Carfax or AutoCheck! Get a more detailed report for nearly half the cost, and unlock a window sticker to know options, packages, features MSRP and more. Buy credits now, and use them later for reports or stickers!
          </p>
        </FadeIn>
          
        <FadeIn direction="up" delay={0.2} className="flex flex-col items-center gap-6 mb-12 relative z-10 container mx-auto px-4 max-w-4xl">
            <Toggle 
              variant="switch"
              options={[
                { label: 'Vehicle History Report', value: 'history' },
                { label: 'Window Sticker', value: 'sticker' }
              ]} 
              value={reportType} 
              onChange={(v) => setReportType(v as 'history' | 'sticker')}
            />

            <Toggle 
              options={[
                { label: 'Personal', value: 'personal' },
                { label: 'Business', value: 'business' }
              ]} 
              value={activeTab} 
              onChange={(v) => setActiveTab(v as 'personal' | 'business')}
              badge="Save 66%"
            />
          </FadeIn>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-20">
            {currentPackages.map((pkg: any, idx: number) => (
              <motion.div variants={fadeUpVariant} key={idx}>
                <PricingCard 
                  {...pkg}
                />
              </motion.div>
            ))}
          </StaggerContainer>

          {currentUnlimited && (
            <FadeIn direction="up">
              <div className="max-w-5xl mx-auto bg-primary-navy rounded-[2rem] overflow-hidden shadow-2xl text-white">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="inline-block bg-primary-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                    Best Value!
                  </div>
                  <h3 className="text-3xl font-bold font-heading mb-4">{currentUnlimited.title}</h3>
                  <p className="text-white/70 mb-8">
                    {currentUnlimited.desc}
                  </p>
                  <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-white/50">{reportType === 'history' ? 'Vehicle history report includes:' : 'Window sticker includes:'}</h4>
                    <ul className="space-y-3">
                      {currentUnlimited.features.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-primary-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-8 md:p-12 bg-white/5 flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <div className="text-5xl font-extrabold mb-2">{currentUnlimited.price}</div>
                    <div className="text-white/60">/Plan includes</div>
                    <div className="mt-4 text-sm text-primary-accent font-bold">Billed monthly Cancel anytime!</div>
                  </div>
                  <Button className="w-full bg-primary-accent hover:bg-hover-accent text-white font-bold py-8 rounded-2xl text-xl shadow-lg mb-4">
                    Subscribe
                  </Button>
                  <Link href="/sample" className="text-center text-white/60 hover:text-white transition-colors text-sm flex items-center justify-center gap-2">
                    {reportType === 'history' ? 'View a sample report' : 'View a Sample Window Sticker Report'} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 p-8 md:p-12">
                <h4 className="text-xl font-bold mb-6">Why choose this plan?</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <ul className="space-y-4">
                    {currentUnlimited.whyChoose.slice(0, 3).map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {currentUnlimited.whyChoose.slice(3).map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {currentUnlimited.footer && (
                  <p className="mt-8 text-white/70 text-sm leading-relaxed">
                    {currentUnlimited.footer}
                  </p>
                )}
                <div className="mt-6 font-bold text-primary-accent">
                  {currentUnlimited.cta}
                </div>
              </div>
            </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <StaggerContainer className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Credits support for Vehicle History Reports & Window Stickers.",
              "Decode VIN numbers and Lookup US License Plates for FREE.",
              "Credits, reports and stickers generated NEVER expire.",
              "Access recalls & maintenance information for FREE.",
              "Free access to vehicle market value.",
              "Download your Vehicle History Report or Window Sticker in PDF for FREE.",
              "Free mobile app access to run or view your reports. Scan and lookup VINs and US License Plates for FREE.",
              "Add and manage vehicles to garage for FREE.",
              "100% satisfaction guaranteed.",
              "24/7 customer service and live chat support."
            ].map((feature, i) => (
              <motion.div variants={fadeUpVariant} key={i} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-text-secondary text-sm">{feature}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust & Guarantee */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div variants={scaleInVariant} className="flex gap-6 items-start">
              <div className="h-16 w-16 rounded-2xl bg-primary-accent/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-8 w-8 text-primary-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-navy mb-4">Get 100% real-time information instantly!</h3>
                <p className="text-text-secondary leading-relaxed">
                  We provide up-to-date information from the Department of Motor Vehicles, Police records, private data companies and NMVTIS databases. Save over 67% Compared to Carfax ($39.99) and 40% compared to AutoCheck ($29.99).
                </p>
              </div>
            </motion.div>
            <motion.div variants={scaleInVariant} className="flex gap-6 items-start">
              <div className="h-16 w-16 rounded-2xl bg-primary-accent/10 flex items-center justify-center shrink-0">
                <RefreshCcw className="h-8 w-8 text-primary-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-navy mb-4">100 % money back guaranteed!</h3>
                <p className="text-text-secondary leading-relaxed">
                  Not satisfied? Get a full refund with our 100% money-back guarantee! Buy credits with confidence. Your satisfaction is our priority.
                </p>
              </div>
            </motion.div>
          </StaggerContainer>

          {/* Payment Methods */}
          <FadeIn direction="up" className="mt-20 text-center">
            <p className="text-sm text-text-secondary mb-8 uppercase tracking-widest font-bold">Secure Payment Methods</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {["Visa", "PayPal", "Mastercard", "Discover", "American Express", "PayStack", "BankTransfer"].map((method) => (
                <div key={method} className="flex flex-col items-center gap-2">
                  <CreditCard className="h-8 w-8" />
                  <span className="text-[10px] font-bold uppercase">{method}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <StandardFAQ 
        title="Frequently Asked Questions"
        description="Everything you need to know about our reports and pricing."
        items={faqs}
        variant="narrow"
        className="bg-slate-50 py-24"
      />
    </div>
  )
}
