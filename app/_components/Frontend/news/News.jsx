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
  const title = "Latest Dubai Real Estate News & Market Insights";
  const description = `Stay informed and ahead of the curve with our curated collection of the freshest news, expert analysis, and market trends impacting Dubai's property sector. Our insights empower investors, buyers, and sellers with the knowledge needed to make strategic decisions and capitalize on emerging opportunities.`;
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