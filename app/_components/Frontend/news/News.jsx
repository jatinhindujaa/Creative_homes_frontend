import React from 'react'
import NewsCards from './parts/NewsCards'
import Hero from './parts/Hero';
import MarqueeSection from '../meettheteam/parts/marque';
import Popular from './parts/Popular';
import TopArea from './parts/TopArea';

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
  const title ="Real estate insights"
  const description=`Explore the best properties, reliable agents, and expert advice all in
        one spot. Whether you're searching for your perfect home or making a
        savvy investment, we’re here to help you confidently navigate the real
        estate market.`
  return (
    <>
      {/* <Hero /> */}
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <TopArea title={title} description={description} />
        <NewsCards />
        <MarqueeSection />
        <Popular locations={locations} />
      </div>
    </>
  );
}

export default News