import React from 'react'
import Hero from './parts/Hero'
import RealEstateSection from './parts/Realestate'
import WhyUsSection from './parts/WhyUsSection';
import Banner from './parts/Banner';
import Agentsbanner from './parts/Agentsbanner';
import TopArea from '../news/parts/TopArea';

const About = () => {

  const title = "About Us";
  const description = `Creative Homes Real Estate is a leading real estate agency in Dubai,
          specializing in identifying prime properties that cater to diverse
          real estate needs. With extensive experience, global exposure, and
          industry expertise, we have become the preferred choice for
          enterprises, investors, and home-buyers seeking the right space at the
          right price.`;

  
  return (
    <div className="bg-[#282927] gap-2 flex items-center flex-col">
      {/* <Hero /> */}
      <TopArea title={title} description={description} />

      <RealEstateSection />
      <WhyUsSection />
      <Agentsbanner />
      <Banner />
    </div>
  );
}

export default About