"use client"
import { useParams } from 'next/navigation';
import React from 'react'
import InterestSection from '../../meettheteam/parts/GotQues';
import MarqueeSection from '../../meettheteam/parts/marque';
import OffplanGallery from './Offplangallery';
import OffplanDetail from './Offplandetails';
import OffplanExtras from './SecondSections';
import { useOffplanById } from '@/app/_components/admin/offplan/useOffplan';

const OffplanInner = () => {
    const { _id } = useParams();
    const { data, isLoading, error } = useOffplanById(_id);
    console.log("data", data);
  return (
    <div className="bg-[#282927]">
      <OffplanGallery />
      <OffplanDetail />
      <OffplanExtras/>
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <InterestSection />
        <MarqueeSection />
      </div>
    </div>
  );
}

export default OffplanInner