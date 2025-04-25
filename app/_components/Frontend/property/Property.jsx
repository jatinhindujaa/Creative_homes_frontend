import React from 'react'
import Hero from './parts/Hero'
import PropertyComp from './parts/PropertyComp'
import PropertyCard from './parts/PropertyCard'
import MarqueeSection from '../meettheteam/parts/marque'
import InterestSection from '../meettheteam/parts/GotQues'
import FAQSection from '../meettheteam/parts/Faq\'s'
import News from '../home/parts/News'
import Popular from '../news/parts/Popular'

const Property = () => {
  return (
    <>
      <Hero />
        <PropertyCard />
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <FAQSection />
        <Popular />
        <MarqueeSection />
        <InterestSection />
        <News />
      </div>
    </>
  );
}

export default Property