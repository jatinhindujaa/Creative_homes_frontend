import React from 'react'
import PropertyDetail from './Propertydetails'
import PropertyExtras from './SecondSections'
import PropertyGallery from './Propertygallery';
import InterestSection from '../../meettheteam/parts/GotQues';
import MarqueeSection from '../../meettheteam/parts/marque';

const PropertyInner = () => {
  return (
    <div className="bg-[#282927]">
      <PropertyGallery />
        <PropertyDetail />
        <PropertyExtras />
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <InterestSection />
        <MarqueeSection />
      </div>
    </div>
  );
}

export default PropertyInner