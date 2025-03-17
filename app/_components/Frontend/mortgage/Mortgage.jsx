import React from 'react'
import Hero from './parts/Hero'
import MortgageCalculator from './parts/Mortgage'
import FAQSection from '../meettheteam/parts/Faq\'s';
import InterestSection from '../meettheteam/parts/GotQues';
import MarqueeSection from '../meettheteam/parts/marque';
import News from '../home/parts/News';
import PropertyCard from '../home/parts/PropertyCard';

const Mortgage = () => {
  return (
    <>
      <Hero />
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <MortgageCalculator />
        <FAQSection />
        <InterestSection />
        <MarqueeSection/>
        <News/>
        <PropertyCard/>
      </div>
    </>
  );
}

export default Mortgage