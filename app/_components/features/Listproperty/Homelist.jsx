import React from 'react'
import ValuationForm from './CreateListProperty'
import News from '../../Frontend/home/parts/News';
import Popular from '../../Frontend/news/parts/Popular';
import InterestSection from '../../Frontend/meettheteam/parts/GotQues';
import MarqueeSection from '../../Frontend/meettheteam/parts/marque';
import TopArea from '../../Frontend/news/parts/TopArea';

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
  const title = "List Your Property";
  const description = `Looking to sell or rent your property in Dubai? Please complete the
          form below, and we will contact you promptly to facilitate the
          process.`;

  return (
     <div className="bg-[#282927] gap-2 flex items-center flex-col">
      <TopArea title={title} description={description} />
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