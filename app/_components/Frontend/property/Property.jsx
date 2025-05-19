"use client"
import React from 'react'
import Hero from './parts/Hero'
import PropertyComp from './parts/PropertyComp'
import MarqueeSection from '../meettheteam/parts/marque'
import InterestSection from '../meettheteam/parts/GotQues'
import FAQSection from '../meettheteam/parts/Faq\'s'
import News from '../home/parts/News'
import Popular from '../news/parts/Popular'
import { PropertyCard } from './parts/PropertyCard'
import villah from "./assets/villah.png";
import int from "./assets/int.png";
import { useProperties } from '../../admin/properties/useProperties'
const properties = [
  {
    price: "AED 29,950,000",
    title: "Upgraded | Three Bedroom | Exclusive",
    location: "The Sundials, Jumeirah Golf Estates, Dubai",
    villaType: "🏡 Villa",
    car: "🚗 6",
    bath: "🛁 6",
    bua: "7,535 sq.ft",
    plot: "6,900 sq.ft",
    description:
      'Escape to the luxurious lifestyle of Jumeirah Golf Estates with this stunning 6-bedroom home located in "The Sundials".',
    agent: "Ghizlane Haddi",
    images: [villah, int, int, int, int],
  },
  {
    price: "AED 18,400,000",
    title: "Modern | Five Bedroom | Golf View",
    location: "Flame Tree Ridge, Jumeirah Golf Estates, Dubai",
    villaType: "🏡 Villa",
    car: "🚗 4",
    bath: "🛁 5",
    bua: "6,500 sq.ft",
    plot: "6,000 sq.ft",
    description:
      "Experience serene golf course living in this upgraded 5-bedroom villa with contemporary interiors.",
    agent: "Adel Karam",
    images: [villah, int, int, int, int],
  },
  {
    price: "AED 11,900,000",
    title: "Classic | Four Bedroom | Park-Facing",
    location: "Wildflower, Jumeirah Golf Estates, Dubai",
    villaType: "🏡 Villa",
    car: "🚗 3",
    bath: "🛁 4",
    bua: "5,200 sq.ft",
    plot: "5,500 sq.ft",
    description:
      "A beautifully designed 4-bedroom villa overlooking lush greenery and scenic pathways.",
    agent: "Maya Rahim",
    images: [villah, int, int, int, int],
  },
];
const faqs = [
  {
    question: "Can foreigners/expats buy property in Dubai?",
    answer: `Yes, foreigners and expats can purchase property on a freehold basis in designated areas of Dubai.`,
  },
  {
    question: "Can I get a mortgage as a foreign investor/expat?",
    answer:
      "Yes, foreign investors/expats can apply for mortgages in Dubai, typically covering up to 80% of the property value, depending on financial eligibility and bank policies.",
  },
  {
    question: "Do property owners in Dubai get a residency visa?",
    answer: `Yes, property investors can apply for a UAE residency visa if they invest at least:
- AED 750,000 – Eligible for a 2-year visa
- AED 2 million – Eligible for a 10-year Golden Visa
`,
  },
  {
    question: "Are there any property taxes in Dubai?",
    answer:
      "No, Dubai has no annual property taxes. However, there are service charges for property maintenance and one-time fees such as the DLD transfer fee.",
  },
  {
    question: "What legal protections do property buyers have in Dubai?",
    answer:
      "Dubai’s real estate market is regulated by the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA), ensuring transparency, buyer protection, and fair dealings.",
  },
  {
    question: "What are the best areas to invest in Dubai?",
    answer:
      "Top investment areas include: Downtown Dubai, Dubai Marina, Jumeirah Village Circle (JVC), Business Bay, and Dubai Creek Harbour. Each area offers different benefits in terms of rental yield, lifestyle, and price appreciation.",
  },
  {
    question: "What rental yield can I expect in Dubai?",
    answer:
      "Dubai offers high rental yields, ranging from 5% to 9% annually, depending on location, property type, and market demand.",
  },
  {
    question: "Can I rent out my property in Dubai?",
    answer:
      "Yes, property owners can lease their units for long-term or short-term rentals. Short-term rentals require permits from the Dubai Department of Economy and Tourism (DET).",
  },
  {
    question:
      "What is an off-plan property, and can I sell it before completion?",
    answer:
      "An off-plan property is an unconstructed or preliminary-stage property. Yes, you can sell an off-plan property before the completion date.",
  },
  {
    question: "Is it possible to get a mortgage for an off-plan property?",
    answer:
    "Yes, it's possible to obtain a mortgage for off-plan property purchases, subject to meeting the financial institution's requirements."
  },
  {
    question:
      "How can I get started with your agency?",
    answer:
    "Simply contact us via phone, WhatsApp, or email, and one of our experienced agents will assist you. Whether you're buying, selling, or investing, we’ll provide expert advice and guide you through the process from start to finish."
  },
];
const locations = [
 "Dubai Penthouse for Sale",
"Dubai Apartment for Sale",
"Houses for Sale in Dubai",
"Townhouse for Sale in Dubai",
"Dubai Apartment for Rent",
"Dubai Villa for Rent",
"Office in Dubai for Rent",
"Furnished Apartments for Rent",
"Furnished Studio For Sale",
"Furnished 1 Bed Apartment For Sale",
"Furnished Studio For Rent",
"Furnished 1 Bed Apartment For Rent",
];
const Property = () => {
  const {data, isLoading} = useProperties();
  console.log("data",data)
  return (
    <>
      <Hero />
      {data?.map((property, i) => (
        <PropertyCard key={i} data={property} />
      ))}

      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <FAQSection faqs={faqs} />
        <Popular locations ={locations}/>
        <MarqueeSection />
        <InterestSection />
        <News />
      </div>
    </>
  );
}

export default Property