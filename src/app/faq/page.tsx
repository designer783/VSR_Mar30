import { StandardFAQ } from "@/components/StandardFAQ";
import { FadeIn } from "@/components/ui/FadeIn";

const faqItems = [
  {
    question: "How does Vehicles Report verify vehicle inquiry reports?",
    answer: "We have been in the used car business for years and verify all records for checking all the credentials against each VIN Number history directly from Federal & State databases, documents, Department of Motor Vehicle records contain up to date information to the second the report is generated. Verify that credible report sources include and further run by the regularly updating federal and state records, level services like DMV, MTO, Insurance agencies corporations, Auction records, Dealerships, Financial institutions for liens and loan, car dealers, police compounds and different auctions."
  },
  {
    question: "Is a detailed vehicle history report necessary?",
    answer: "Yes, a detailed vehicle history report is essential for identifying hidden issues like past accidents, title brands, and odometer rollbacks that could affect both the safety and the resale value of a used car."
  },
  {
    question: "How long is a vehicle history report valid for?",
    answer: "A vehicle history report is a snapshot of all recorded information at the exact moment it is generated. While the historical data remains constant, new records (like recent services or accidents) can be added to the database at any time."
  },
  {
    question: "Is it safe to share my vehicle history report?",
    answer: "Yes, it is perfectly safe and actually recommended to share your vehicle history report with potential buyers or sellers. It builds trust and provides transparency during the negotiation process."
  },
  {
    question: "What does a sample report look like?",
    answer: "Our sample reports are comprehensive documents that include title history, accident records, mileage verification, and more. You can view a full example on our 'Sample Report' page."
  },
  {
    question: "Why not switch to CarFax instead of going with www.vehiclesreport.com?",
    answer: "While CarFax is a well-known name, we provide similar comprehensive data pulled from many of the same national and state databases, but often at a much more affordable price point, offering you the same peace of mind for less."
  },
  {
    question: "What are your package details and how many reports can I obtain per package?",
    answer: "We offer various packages to suit different needs, from single reports for individual buyers to bulk packages for power users and dealers. Please visit our Pricing page for the most up-to-date package details."
  },
  {
    question: "Does www.vehiclesreport.com work with dealers and auctions?",
    answer: "Yes, we work closely with dealerships and auction houses, providing them with reliable vehicle history data to help them manage their inventory and provide transparency to their customers."
  },
  {
    question: "What will a VIN number tell you?",
    answer: "A VIN (Vehicle Identification Number) tells you the vehicle's unique identity, including its manufacturer, model year, assembly plant, engine type, and its entire documented history of ownership, accidents, and repairs."
  },
  {
    question: "Why is VIN verification necessary?",
    answer: "VIN verification is necessary to ensure that the vehicle's physical identity matches its official records, protecting you from vehicle cloning, theft, and other types of automotive fraud."
  },
  {
    question: "How to find a VIN number?",
    answer: "The most common places to find a VIN are on the driver's side dashboard (visible through the windshield) and on the driver's side door jamb. It is also listed on your vehicle's registration, title, and insurance documents."
  },
  {
    question: "What VIN digit is the transmission type?",
    answer: "The transmission type is usually encoded within the vehicle descriptor section (digits 4 through 8) of the VIN. The exact digit varies by manufacturer."
  },
  {
    question: "Can I change my VIN number?",
    answer: "No, it is illegal to change, alter, or remove a VIN number. The VIN is a permanent identifier assigned by the manufacturer and is used by law enforcement and DMVs to track the vehicle."
  },
  {
    question: "Are VIN and chassis numbers the same?",
    answer: "In most modern vehicles, the VIN and the chassis number are the same. However, some manufacturers or older vehicles might use a separate chassis number for internal tracking."
  },
  {
    question: "Which vehicle history report is the best?",
    answer: "The best report is one that is accurate, comprehensive, and up-to-date. Vehicles Report prides itself on pulling data from the most reliable federal, state, and private sources to provide top-tier reports."
  },
  {
    question: "How to find my vehicle history report?",
    answer: "Simply enter your 17-digit VIN into the search bar on our homepage. Our system will instantly scan millions of records to generate your detailed report."
  },
  {
    question: "Why get a vehicle history report?",
    answer: "Getting a report is the smartest step you can take when buying a used car. It helps you avoid 'lemons,' ensures you're paying a fair price, and gives you confidence that the vehicle is safe for you and your family."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Common Inquiries</h1>
            <p className="text-xl text-muted-foreground">Find answers to the most common questions about VIN checks and vehicle history.</p>
          </FadeIn>
        </div>
      </section>

      <StandardFAQ 
        items={faqItems}
        variant="narrow"
        className="py-24"
      />

      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up" className="p-12 bg-slate-900 rounded-3xl text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 font-heading">Still have questions?</h3>
            <p className="text-slate-400 text-lg mb-10">Our support team is here to help you with any specific concerns or technical issues.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:8007096297" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl transition-all hover:-translate-y-1 font-bold border border-white/10">
                (800)-709-6297
              </a>
              <a href="mailto:sales@verifymyvin.report" className="flex items-center gap-3 bg-primary-accent hover:bg-hover-accent px-8 py-4 rounded-xl transition-all hover:-translate-y-1 font-bold shadow-lg shadow-primary-accent/20">
                Contact Support
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
