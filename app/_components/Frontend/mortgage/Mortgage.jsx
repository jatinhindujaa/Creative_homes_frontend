import React from 'react'
import Hero from './parts/Hero'
import MortgageCalculator from './parts/Mortgage'
import FAQSection from '../meettheteam/parts/Faq\'s';
import InterestSection from '../meettheteam/parts/GotQues';
import MarqueeSection from '../meettheteam/parts/marque';
import News from '../home/parts/News';
import PropertyCard from '../property/parts/PropertyCard';
import ExploreDubai from './parts/TopArea';

const Mortgage = () => {
  const faqs = [
    {
      question: "How much is my borrowing limit?",
      answer: `Your borrowing limit depends on your income, liabilities, and the lender’s criteria.`,
    },
    {
      question: "What are the rates I should expect in the UAE?",
      answer:
        " Mortgage rates in the UAE typically range between 3.5% to 5.5%, depending on the lender and product.",
    },
    {
      question: "Can non-residents avail financing in the UAE?",
      answer:
        " Yes, many banks in the UAE offer mortgage options for non-residents with certain conditions.",
    },
    {
      question: "What is the minimum deposit?",
      answer:
        " The minimum deposit is usually 20% for expats and 15% for UAE nationals.",
    },
    {
      question: "What kind of documentation is required?",
      answer:
        " Basic documents include passport, visa, Emirates ID (if resident), salary certificate, and bank statements.",
    },
    {
      question: "How long will it take to get a pre-approval?",
      answer:
        " Pre-approval typically takes 3 to 5 working days once all documents are submitted.",
    },

    {
      question: "Is now a good time to buy real estate in Dubai?",
      answer:
        " Yes, with competitive prices and strong ROI, many consider now a favorable time to invest.",
    },
  ];

  return (
    <>
      {/* <Hero /> */}
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <ExploreDubai/>
        <MortgageCalculator />
        <FAQSection faqs ={faqs}/>
        <InterestSection />
        <MarqueeSection />
        <News />
        {/* <PropertyCard/> */}
      </div>
    </>
  );
}

export default Mortgage