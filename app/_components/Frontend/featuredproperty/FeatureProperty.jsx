import React from 'react'
import Hero from './parts/Hero'
import Grid from './parts/Grid';
import Neighbourhoods from './parts/Neighbourhoods';
import Popular from '../news/parts/Popular';
import MarqueeSection from '../meettheteam/parts/marque';
import FeaturedSlider from './parts/FeaturedSlider';
import Featured from '../home/parts/Featured';
import MobileFeatured from '../home/parts/MobileFeatured';
import TopArea from '../news/parts/TopArea';
import MobileNeighbourhoods from './parts/MobileNeighbour';

const FeatureProperty = () => {
  const locations = [
    "3 Bedroom Apartment For Rent",
    "Dubai Hill Estate",
    "2 Bedroom Studio For Rent",
    "Palm Al Jumeriah",
    "Jumeriah Golf Estate",
    "Emirate Hills",
    "Downtown Dubai",
  ];
    const title = "Featured Properties & Expert Insights in Dubai Real Estate";
    const description = `Explore Creative Homes exclusive collection of handpicked properties, showcasing the finest luxury villas, modern apartments, and unique investment opportunities across Dubai. Alongside our premium listings, meet our top agents and gain valuable market insights from our latest articles and guides, empowering you to confidently navigate your real estate journey.`;
  return (
    <>
      {/* <Hero /> */}
      <div className="bg-[#282927] flex  flex-col items-center">
        {/* <Grid /> */}
                         <TopArea title={title} description={description} />
        
        <Featured/>
              <MobileFeatured/>
        
        <Neighbourhoods />
        <FeaturedSlider/>
        <MarqueeSection />

        <Popular locations ={locations}/>
      </div>
    </>
  );
}

export default FeatureProperty