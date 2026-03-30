"use client";




import { GenericPage } from "@/components/GenericPage"

const sections = [
  {
    content:
      "We are the leading providers of vehicle history reports, and also amongst the few in the industry to provide accurate window stickers. You can gain access to a world class vehicle history report by simply running a VIN check or a License plate lookup. Founded in 2018, Vehicles Report has revolutionized vehicle history reporting, and window sticker service by developing a system that can access multiple databases to gather relevant information about any vehicle.",
  },
  {
    title: "Our Mission",
    content:
      "We are technological pioneers in a new digital era aiming to provide accurate and detailed vehicle information to the users seeking data on vehicles – we are revolutionizing the automotive industry by making car buying and selling experiences to be much easier and faster with our detailed vehicle history reports and window stickers.",
  },
  {
    title: "What We Offer",
    content: `Our comprehensive suite of services includes:

• VIN Number Check Report – Get a full history of any vehicle using its 17-character VIN, uncovering accidents, title issues, and more.
• Window Sticker – Retrieve the original window sticker of a vehicle, showing factory-installed options and MSRP.
• VIN Decoder – Decode any VIN to reveal manufacturer details, engine specs, and standard features.
• License Plate Lookup – Run a history check using just a license plate number.
• Classic Build Sheets – Access original window stickers for classic and vintage vehicles.
• Classic Vehicle History – Uncover the history of classic and collector cars.`,
  },
  {
    title: "Why Choose Vehicles Report?",
    content: `Transparency: We believe everyone has the right to know a vehicle's true history before committing to a purchase.

Accuracy: Our system accesses multiple databases simultaneously to ensure the most complete and up-to-date information available.

Affordability: High-quality vehicle information shouldn't break the bank. Our reports are competitively priced to be accessible to everyone.

Innovation: Founded in 2018, we continue to pioneer new technology in the automotive data industry, constantly improving our systems to serve you better.`,
  },
]

export default function AboutPage() {
  return (
    <GenericPage
      title="About Vehicles Report"
      subtitle="Leading providers of vehicle history reports and accurate window stickers since 2018."
      sections={sections}
    />
  )
}
