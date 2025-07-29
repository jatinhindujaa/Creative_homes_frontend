import React from 'react'
import Hero from '../about/parts/Hero'
import CareersSection from './parts/life'
import Careerjoin from './parts/Careerjoin';
import News from '../home/parts/News';
import TopArea from '../news/parts/TopArea';

const Careers = () => {
    const title = "Careers at Creative Homes: Build Your Real Estate Future in Dubai"
    const description = `Are you passionate about real estate and looking for a rewarding career in Dubai? Join Creative Homes, a dynamic and growth-oriented team where talent is nurtured and success is shared. Explore our current Real Estate job openings in Dubai and take the next step in your professional journey.`;
  return (
    <div className="bg-[#282927] gap-2 flex items-center flex-col">
      {/* <Hero /> */}
      {/* <CareersSection /> */}
      <TopArea title={title} description={description} />
      <Careerjoin />
      <News />
    </div>
  );
}

export default Careers