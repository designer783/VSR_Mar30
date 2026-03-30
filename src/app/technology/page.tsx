"use client";

import { 
  Fingerprint, 
  Database, 
  ShieldCheck, 
  Car, 
  Wrench, 
  CheckCircle2, 
  ListChecks, 
  FileText,
  AlertTriangle,
  BarChart3,
  TrendingUp,
  Search,
  ShieldAlert,
  Info,
  History,
  Shield,
  ClipboardList,
  Library,
  Zap
} from "lucide-react"
import { FadeIn } from "@/components/ui/FadeIn"
import { StandardFeatureGrid } from "@/components/StandardFeatureGrid"

export default function TechnologyPage() {
  const vinBreakdown = [
    { char: "01", desc: "This number represents the country of origin for your vehicle. i.e where it was made." },
    { char: "02", desc: "This character indicates the character identification assigned to the manufacturer of this vehicle." },
    { char: "04-08", desc: "This part of the VIN serial number contains security-sensitive information like vehicle's brand, body style, engine size, engine type, chassis, series, and model." },
    { char: "09", desc: "This is the manufacturer's security check digit." },
    { char: "10", desc: "This is the vehicle's model year." },
    { char: "11", desc: "This digit is the indicator of the plant or factory where the vehicle CKD units were assembled." },
    { char: "12-17", desc: "This part of the VIN has information about the vehicle production number, also known as vehicle serial number sometimes." }
  ];

  const importanceBenefits = [
    "Mandatory legal requirement",
    "Avoiding the breach of federal law",
    "Avoiding the repossession and state penalty",
    "Safety from the involvement of terrorist or criminal activities",
    "Registration for ownership of a vehicle",
    "Approval for vehicle Bank Loans",
    "Registration for DMV",
    "License for buying and selling of a vehicle",
    "Distribution by an authorized dealership",
    "Verification for vehicle Lien & Lease applications",
    "Verification for vehicle insurance coverage",
    "Lawful sales or resale of a vehicle",
    "Best returns on the sales of a vehicle",
    "Recording of vehicle history information.",
    "Records of lien, loans, and lease payoffs.",
    "Records of mileage and odometer reading",
    "Records of recalls, warranty, and insurance claims.",
    "Records of salvage, junked, and accident history (if any).",
    "Records of maintenance and regular repair history.",
    "Records of title brands, lemon brand, and manufacturer defects.",
    "History of all owners and the duration of each ownership.",
    "History of commercial or personal use.",
    "History of the number of accidents (if any).",
    "History of auctions sales.",
    "List of specifications by the vehicle manufacturer",
    "List of structural damage (if any).",
    "List of weather damage (if any).",
    "List of water or flood damage (if any)",
    "List of fire or arson damage (if any).",
    "List of vandalism damage (if any).",
    "Listing with vehicle verification databases like NADA, NMVTIS, and Edmunds.",
    "Creating a valid and verified vehicle history report."
  ];

  const dataSources = [
    { title: "NMVTIS" }, { title: "MTO" }, { title: "DMV" }, 
    { title: "NADA" }, { title: "KBB" }, { title: "Edmunds" }, 
    { title: "Manufacturers and dealerships" }, 
    { title: "Insurance companies, banks, lien & loan corporations" }, 
    { title: "State, Police, Auction houses" }
  ];

  const evaluationFactors = [
    "VIN Duplication", "Ownership History", "Recalls Records", "Title brands", 
    "Lease & Lien History", "Salvage/Junked Status", "Mileage Records", 
    "Accidents/Maintenance Reports", "Weather Damage", "Theft/Police Compound Records"
  ];

  const vehicleTypes = [
    "SUVs (Sports Utility Vehicles)", "Jeep/Safari rovers", "Buses", "Trucks", 
    "Motorbikes", "Mini-vans", "Convertibles", "Station wagons", 
    "Hatchbacks", "Sedan", "Pick-up trucks", "Commercial vehicles",
    "Light trucks", "Limousines", "Family cars", "Off-road vehicles",
    "Service Vans", "Trailers", "Classic vehicles", "ATVs", "Motorhomes",
    "Hybrid Vehicles", "Sub-compact cars", "Sports cars", "MPVs (Multi-purpose Vehicles)"
  ].map(t => ({ title: t }));

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary-navy mb-6">
              Our Technology
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              Advanced VIN verification and history reporting powered by the most up-to-date technologies and comprehensive automotive databases.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WHAT IS A VIN NUMBER? Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 flex items-center gap-3">
              <Fingerprint className="h-8 w-8 text-primary-accent" />
              WHAT IS A VIN NUMBER?
            </h2>
            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-6">
              <p>
                Every vehicle is assigned a unique identification in the form of a serial number by the manufacturer. This unique identification number is called "Vehicle Identification Number" or VIN.
              </p>
              <p>
                No two vehicles even of the same make, model, and model year can have the same VIN for legal purposes. Every VIN number is made up of a 17-digit serial code, where information about where the vehicle was manufactured, year, make, engine specifications furthermore are encoded. 
              </p>
              <p>
                Several vehicle manufacturers have been using VIN in America since the 50s for keeping production records but the National Highway Traffic Safety Administration (NHTSA) made it a quality regulation in 1981. Now all vehicles and vehicle manufacturers encrypt the body of every vehicle with a 17-digit one of a kind VIN for tracking and identification purposes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What is Vehicle VIN Number? Breakdown Section */}
      <section className="py-24 bg-primary-navy text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn direction="down" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Vehicle VIN Number?</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              A VIN is a 17-digit unique serial number used for identification and registration of a vehicle. Without a verified and unique VIN, the ownership of the vehicle cannot be proved legally. Here is a quick brief of what information is stored in your VIN number:
            </p>
          </FadeIn>
          
          <div className="grid gap-4">
            {vinBreakdown.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="text-2xl font-bold text-primary-accent min-w-[150px]">
                    Character {item.char}
                  </div>
                  <div className="text-lg text-slate-300">
                    {item.desc}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why a Vehicle VIN is Important? Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn direction="up">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-8">Why a Vehicle VIN is Important?</h3>
            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-6 mb-16">
              <p>
                A vehicle identification number or VIN is a unique identifier for every vehicle. Without this number, two vehicles with the same color and make/model and year cannot be identified legally. The vehicle identification number (VIN) is primarily used by the manufacturers of the vehicles for decades for keeping organized records of their production units and manufacturing lines. However, for a car dealer or an individual buyer, it is impossible to be able to legally assume the ownership of a vehicle without its unique VIN information listed on the vehicles title & registration papers.
              </p>
              <p>
                In simple terms, a vehicle cannot be identified without a valid VIN number. Though the factor of legitimate ownership is not a small one despite that VIN serves the owner of the vehicle in many ways. With the help of a VIN, the owners of the vehicle can become a registered driver and pass yearly DMV checks. Several criminal investigation departments like NICB, IAATI, INTERPOL, NCIC/FBI, and others keep track of all registered VIN numbers for screening criminal activities and national security.
              </p>
              <p>
                Without the identification or verification of a vehicle identification number, a vehicle cannot be leased, loaned, credited, approved for insurance coverage, cleared for a bank loan, be sold, purchased by an authorized vehicle dealership, recalled for service maintenance, claimed for manufacturer/dealer's warranty or be legally driven on roads. According to the "California Vehicle Code Sections 10802, 10803, and 10750", illegal sales, possession, or alterations of Vehicle Identification Numbers (VINs) is a federal crime.
              </p>
              <p>
                Furthermore, with the help of a VIN all the vehicle registration databases Like NMVTIS, NADA, and KBB keep records of history related to each and every vehicle across North America. These records contain the most vital information related to the history of a vehicle, Like previous owner details, odometers readings, vehicle maintenance data, lease clearance data, insurance information, title brands, salvage, lemon brands, and much more.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importanceBenefits.map((item, i) => (
                <div key={i} className="flex h-full p-4 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                  <CheckCircle2 className="h-5 w-5 text-primary-accent flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm font-medium text-primary-navy leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What is a VIN Verification Database? Section */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 flex items-center gap-3">
                <Library className="h-8 w-8 text-primary-accent" />
                What is a VIN Verification Database?
              </h2>
              <div className="prose prose-lg text-text-secondary leading-relaxed space-y-6">
                <p>
                  A VIN or vehicle identification number is a unique identifier of any vehicle without which it is impossible to recognize or pinpoint one particular vehicle from the other. This number is usually engraved on the chassis of a vehicle by the manufacturers of the vehicle. However, a VIN can be removed, duplicated, or forged at any time by car thieves and criminals.
                </p>
                <p>
                  Therefore it is necessary to put in place a database where all the history related to a vehicle from the first generation of its VIN to the total loss status can be stored. These databases are like evidence libraries for every vehicle. In case a vehicle's real VIN is erased, it can be recovered by database recovery protocols. In case there is a VIN duplication the real one can be identified with the help of these databases. In case of a VIN fraud or vehicle history forgery, the correct history can be pulled out from these databases. In case of a missing VIN, the real worth of a car can be looked up through these database records.
                </p>
                <p>
                   On account of their validity and quality of VIN history data, the most reliable and trustworthy databases are listed as under. All of these databases are employed for every single vehicle history report generation by Vehicles Report:
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {dataSources.map((source, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-primary-navy">
                    <span className="text-primary-accent">{(i + 1)})</span> {source.title}
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right" className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-primary-accent/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary-navy">NADA Spotlight</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                National Automobile Dealer's Association is an American trade association, founded in 1917. NADA is the largest and most reliable network of vehicle dealership across America, representing more than 16,000 dealerships. NADA database accounts for all commercial and personal vehicles sold and bought under its vast network. It has the most reliable and updated account relating to the ownership and sales history of a vehicle. NADA also deals with conducting training programs for new dealership owners and legislative affairs to dealerships like tax, interest rates, and cost efficiency for vehicles.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How to Create a Vehicle History Report? Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn direction="up" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-8 flex items-center gap-3">
              <ClipboardList className="h-8 w-8 text-primary-accent" />
              How to Create a Vehicle History Report?
            </h2>
            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-6">
              <p>
                Vehicle history reports are generated with the assistance of each unique VIN through many sources like dealers, lease organizations, maintenance stations, Insurance companies, state, and federal authorities. These history reports are vital to evaluate how much your car is worth. 
              </p>
              <p>
                We use as many as processing <span className="text-primary-accent font-bold">60 vehicle evaluation factors</span> for creating a solid vehicle history report for each and every unique VIN. Our vehicle history reports are accepted throughout the region of North America and have lifetime validity. What most used car sellers do not realize is that missing even one of these 60 vital vehicle report checks can not only decrease the value of their used car sales returns but also increases the chance of loss in thousand of dollars, safety risks, legal troubles, and even repossession of the vehicle.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
              {evaluationFactors.map((factor, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-primary-accent font-bold mb-2">{(i + 1)})</div>
                  <div className="text-xs font-bold text-primary-navy uppercase tracking-tight">{factor}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-200">
               <h4 className="text-2xl font-bold text-primary-navy mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                VIN Duplication Awareness
              </h4>
              <div className="prose prose-lg text-text-secondary leading-relaxed space-y-4">
                <p>
                  VIN is your 17 digits unique vehicle identification number. Without a valid VIN, you cannot evaluate the true worth of your car or claim ownership. There are billions of cars across North America and despite strict checks, some parties remove, forge, or duplicate VINs for profit. 
                </p>
                <p>
                   There are hundreds and thousands of cases where the VIN from already salvaged or junked vehicles are reused to mask the identity of vehicles used for criminal activities. A lot of times existing owners are not aware of their unique VIN being duplicated without their knowledge which can put their vehicle value in question and reduce its market value. It is important for all car owners to check for VIN duplications from time to time.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Can I Verify VIN for my Vehicle? Section */}
      <StandardFeatureGrid 
        title="Can I Verify VIN for my Vehicle?"
        description="We are living in the golden age of automobile technology. Car enthusiasts and vehicle owners have multiple varieties for the same variant of a vehicle. Here is a quick list of vehicles www.vehiclesreport.com can assist you with:"
        items={vehicleTypes}
        variant="simple"
        columns={5}
        className="bg-slate-50 pb-32"
      />
    </div>
  )
}
