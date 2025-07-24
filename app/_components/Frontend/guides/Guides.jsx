import React from 'react'
import Hero from './parts/Hero'
import Dubai from './parts/Dubai'
import MarqueeSection from '../meettheteam/parts/marque'
import Popular from '../news/parts/Popular'
import InterestSection from '../meettheteam/parts/GotQues'
import ExploreDubai from './parts/TopArea'
import TopArea from '../news/parts/TopArea'

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

   const title = "Why Invest In Dubai";
   const description = ` Unlock the secrets of the Dubai property market with our comprehensive, expert-crafted guides. Whether you're looking to buy, sell, rent, or invest in off-plan properties, our resources provide invaluable information, practical tips, and deep dives into market specifics to ensure your success.`;
  return (
    <>
      {/* <Hero /> */}
      <div className="bg-[#282927] flex flex-col items-center">
        <TopArea title={title} description={description} />        
        <Dubai />
        <MarqueeSection />
        <InterestSection />
        <Popular locations ={locations}/>
      </div>
    </>
  );
}

export default Guides