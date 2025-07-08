import React from 'react'
import Hero from '../about/parts/Hero'
import CareersSection from './parts/life'
import Careerjoin from './parts/Careerjoin';
import News from '../home/parts/News';

const Careers = () => {
  return (
    <div className="bg-[#282927]">
      {/* <Hero /> */}
      <CareersSection />
      <Careerjoin/>
      <News/>
    </div>
  );
}

export default Careers