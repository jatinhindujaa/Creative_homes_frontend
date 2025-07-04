import React from 'react'
import Hero from './parts/Hero'
import Dubai from './parts/Dubai'
import MarqueeSection from '../meettheteam/parts/marque'
import Popular from '../news/parts/Popular'
import InterestSection from '../meettheteam/parts/GotQues'
import ExploreDubai from './parts/TopArea'

const Guides = () => {
  const locations = [
    "3 Bedroom Apartment For Rent",
    "Dubai Hill Estate",
    "2 Bedroom Studio For Rent",
    "Palm Al Jumeriah",
    "Jumeriah Golf Estate",
    "Emirate Hills",
    "Downtown Dubai",
  ];
  return (
    <>
      {/* <Hero /> */}
      <div className="bg-[#282927] flex flex-col items-center pt-10">
         <ExploreDubai/>
        <Dubai />
        <MarqueeSection />
        <InterestSection />
        <Popular locations ={locations}/>
      </div>
    </>
  );
}

export default Guides