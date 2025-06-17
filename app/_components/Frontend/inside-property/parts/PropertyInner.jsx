"use client"

import React from 'react'
import PropertyDetail from './Propertydetails'
import PropertyExtras from './SecondSections'
import PropertyGallery from './Propertygallery';
import InterestSection from '../../meettheteam/parts/GotQues';
import MarqueeSection from '../../meettheteam/parts/marque';
import { usePropertyById } from '@/app/_components/admin/properties/useProperties';
import { useParams } from 'next/navigation';

const PropertyInner = () => {
    const { _id } = useParams();
      const { data, isLoading, error } = usePropertyById(_id);
  return (
    <div className="bg-[#282927]">
      <PropertyGallery data={data}/>
      <PropertyDetail data={data}/>
      <PropertyExtras data={data}/>
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <InterestSection />
        <MarqueeSection />
      </div>
    </div>
  );
}

export default PropertyInner