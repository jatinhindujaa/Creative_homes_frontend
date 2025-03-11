import React from 'react'
import Hero from './parts/Hero'
import TeamSection from './parts/teamMembers'
import MarqueeSection from './parts/marque'
import InterestSection from './parts/GotQues'
import FAQSection from './parts/Faq\'s'
import MortgageCalculator from '../mortgage/parts/Mortgage'

const Meet = () => {
  return (
    <>
      <Hero />
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <TeamSection />
        <MarqueeSection />
        <InterestSection/>
        <FAQSection/>
      </div>
    </>
  );
}

export default Meet