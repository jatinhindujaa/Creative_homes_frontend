"use client"
import React from 'react'
import Hero from './parts/Hero'
import TeamSection from './parts/teamMembers'
import MarqueeSection from './parts/marque'
import InterestSection from './parts/GotQues'
import FAQSection from './parts/Faq\'s'
import MortgageCalculator from '../mortgage/parts/Mortgage'
import TeamSectionMobile from './parts/teamMembersMobile'
import ExploreDubai from './parts/TopArea'
import TopArea from '../news/parts/TopArea'

const Meet = () => {
  const faqs = [
    {
      question: "How much is the average rent in Dubai?",
      answer: `With more and more properties flooding the market, property prices have fallen considerably in the past few years and continue to show a decreasing trend. There is now more choice in the market for tenants in terms of location, quality, and value.

    Areas like **Business Bay, Downtown Dubai, Dubai South, Discovery Gardens, Dubai Marina, Al Barsha South,** and **Al Warsan** amongst others remain a favorite amongst renters.

    The variation in rental prices range from **AED 20,000 - 35,000** per year in Dubailand and International City to **AED 70,000 - 85,000** per year in Business Bay and Downtown Dubai.

    To rent a lavish 3-4 bedroom luxury apartment can cost **AED 300,000 - 400,000** a year in Dubai Marina and Downtown Dubai to a whopping **AED 700,000 - 750,000** in similar high-end areas.

    Dubai is a fast-evolving modern economy which makes it an ideal destination for trade, investment, and living.`,
    },
    {
      question: "Apartment Living In Dubai",
      answer:
        "Living in an apartment in Dubai offers various amenities, security, and convenience for residents.",
    },
    {
      question: "How much does a Villa cost in Dubai?",
      answer:
        "The cost of a villa in Dubai varies by location, size, and luxury. Prices typically range from AED 2M to AED 50M.",
    },
    {
      question: "Best places in Dubai to buy a Townhouse",
      answer:
        "The best areas for townhouses in Dubai include Arabian Ranches, JVC, and The Springs.",
    },
    {
      question: "Is it worth to buy property in Dubai?",
      answer:
        "Dubai’s real estate market offers excellent ROI, tax benefits, and residency opportunities for investors.",
    },
    {
      question: "Can a foreigner buy property in Dubai?",
      answer:
        "Yes! Foreigners can purchase properties in designated freehold areas across Dubai.",
    },
    {
      question: "Is now a good time to buy real estate in Dubai?",
      answer:
        "With competitive pricing and high rental yields, now is a great time to invest in Dubai’s real estate market.",
    },
  ];
  const title = "Meet the Creative Homes Real Estate Experts in Dubai";
  const description = `Behind every successful property journey is a dedicated team. Our RERA-certified property specialists bring unparalleled local market knowledge, years of experience, and a passion for client success. Get to know the professionals committed to delivering exceptional service and guiding you through Dubai's vibrant real estate landscape.`;
  return (
    <>
      {/* <Hero /> */}
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
                 <TopArea title={title} description={description} />
        
        <TeamSection />
        <TeamSectionMobile/>
        <MarqueeSection />
        <InterestSection/>
        <FAQSection faqs={faqs}/>
      </div>
    </>
  );
}

export default Meet