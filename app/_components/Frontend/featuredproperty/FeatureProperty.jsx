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
    const title = "Featured Properties";
    const description = ` Our property specialists cover Dubai’s key communities, offering a range
        of services including Residential & Commercial Sales and Leasing,
        Off-Plan Investments, Property Management, and more. Whether you're
        looking to invest, buy, sell, or rent, our dedicated specialists are
        here to guide you through every step of the process.`;
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