import React from 'react'
import NewsCards from './parts/NewsCards'
import Hero from './parts/Hero';
import MarqueeSection from '../meettheteam/parts/marque';
import Popular from './parts/Popular';

const News = () => {
  return (
    <>
      <Hero />
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <NewsCards />
        <MarqueeSection />
        <Popular/>
      </div>
    </>
  );
}

export default News