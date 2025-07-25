"use client"
import React from 'react'
import DubaiInvestmentSection from './parts/NewsPage'
import FAQSection from '../_components/Frontend/meettheteam/parts/Faq\'s'
import { useParams } from 'next/navigation';
import { useNewsById } from '../_components/admin/news/useNews';
import Hero from './parts/Hero';
import ImageBox from '../_components/Frontend/guides/parts/ImageBox';

const NewsInner = () => {
  const { _id } = useParams();
      const { data, isLoading, error } = useNewsById(_id);
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

  return (
    <>
      <Hero data={data} />
      {/* <ImageBox title={data} /> */}
      <div className="bg-[#282927] flex justify-center flex-col items-center">
        <DubaiInvestmentSection data={data} />
        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}

export default NewsInner