import React from 'react'
import Hero from './parts/Hero'
import RealEstateSection from './parts/Realestate'
import WhyUsSection from './parts/WhyUsSection';
import Banner from './parts/Banner';
import Agentsbanner from './parts/Agentsbanner';
import TopArea from '../news/parts/TopArea';

const About = () => {

  const title =
    "About Creative Homes Real Estate: Your Best Dubai Real Estate Agency";
  const description = ` Discover Creative Homes Real Estate, a leading agency in Dubai dedicated to providing unparalleled expertise in property buying, selling, leasing, and investment advisory. With extensive experience, global exposure, and a steadfast client-centric approach, we ensure a seamless and delightful journey in finding your ideal property or maximizing your investment in Dubai's dynamic market.`;

  
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