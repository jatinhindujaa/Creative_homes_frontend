import React from 'react'
import Hero from './parts/Hero'
import RealEstateSection from './parts/Realestate'
import WhyUsSection from './parts/WhyUsSection';
import Banner from './parts/Banner';
import Agentsbanner from './parts/Agentsbanner';

const About = () => {
  return (
    <div className="bg-[#282927]">
      <Hero />
      <RealEstateSection />
      <WhyUsSection/>
      <Agentsbanner/>
      <Banner/>
    </div>
  );
}

export default About