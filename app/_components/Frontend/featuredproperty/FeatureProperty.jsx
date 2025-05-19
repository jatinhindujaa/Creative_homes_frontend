import React from 'react'
import Hero from './parts/Hero'
import Grid from './parts/Grid';
import Neighbourhoods from './parts/Neighbourhoods';
import Popular from '../news/parts/Popular';
import MarqueeSection from '../meettheteam/parts/marque';

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
  return (
    <>
      <Hero />
      <div className="bg-[#282927] flex  flex-col items-center">
        <Grid />
        <Neighbourhoods />
        <MarqueeSection />
        <Popular locations ={locations}/>
      </div>
    </>
  );
}

export default FeatureProperty