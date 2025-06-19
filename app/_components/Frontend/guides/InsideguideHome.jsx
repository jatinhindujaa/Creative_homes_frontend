import React from 'react'
import InsideGuide from './InsideGuide'
import ImageBox from './parts/ImageBox';
import InterestSection from '../meettheteam/parts/GotQues';
import MarqueeSection from '../meettheteam/parts/marque';
import Popular from '../news/parts/Popular';


const InsideguideHome = ({steps, title,des}) => {
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
      <ImageBox title={title} des={des}/>
      <InsideGuide steps={steps}/>
      <div className="bg-[#282927] gap-2 flex items-center flex-col">

      <InterestSection                                 />
      <MarqueeSection />
      <Popular locations={locations}/>
      </div>
    </>
  );
}

export default InsideguideHome