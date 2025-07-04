import React from 'react'
import NewsCards from './parts/NewsCards'
import Hero from './parts/Hero';
import MarqueeSection from '../meettheteam/parts/marque';
import Popular from './parts/Popular';
import ExploreDubai from './parts/TopArea';

const News = () => {
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
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
              <ExploreDubai/>
        <NewsCards />
        <MarqueeSection />
        <Popular locations={locations}/>
      </div>
    </>
  );
}

export default News