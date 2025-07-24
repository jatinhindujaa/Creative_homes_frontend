import React from 'react'
import ValuationForm from './CreateListProperty'
import News from '../../Frontend/home/parts/News';
import Popular from '../../Frontend/news/parts/Popular';
import InterestSection from '../../Frontend/meettheteam/parts/GotQues';
import MarqueeSection from '../../Frontend/meettheteam/parts/marque';

const Homelist = () => {
  const locations = [
    "Dubai Penthouse for Sale",
    "Dubai Apartment for Sale",
    "Houses for Sale in Dubai",
    "Townhouse for Sale in Dubai",
    "Dubai Apartment for Rent",
    "Dubai Villa for Rent",
    "Office in Dubai for Rent",
    "Furnished Apartments for Rent",
    "Furnished Studio For Sale",
    "Furnished 1 Bed Apartment For Sale",
    "Furnished Studio For Rent",
    "Furnished 1 Bed Apartment For Rent",
  ];
  return (
    <div className="bg-[#282927]">
      <ValuationForm />
      <News />
      <div className="bg-[#282927] gap-2 flex items-center flex-col py-10">
      <MarqueeSection />
        <Popular locations={locations} />
        <InterestSection />
      </div>
    </div>
  );
}

export default Homelist