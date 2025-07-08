// "use client"
// import React from 'react'
// import Hero from './parts/Hero'
// import PropertyComp from './parts/PropertyComp'
// import MarqueeSection from '../meettheteam/parts/marque'
// import InterestSection from '../meettheteam/parts/GotQues'
// import FAQSection from '../meettheteam/parts/Faq\'s'
// import News from '../home/parts/News'
// import Popular from '../news/parts/Popular'
// import { PropertyCard } from './parts/PropertyCard'
// import villah from "./assets/villah.png";
// import int from "./assets/int.png";
// import { useProperties } from '../../admin/properties/useProperties'
// import { useSearchParams } from 'next/navigation'
// import { useAgentById } from '../../admin/agents/useAgents'
// import Spinner from '../../ui/Spinner'

// const faqs = [
//   {
//     question: "Can foreigners/expats buy property in Dubai?",
//     answer: `Yes, foreigners and expats can purchase property on a freehold basis in designated areas of Dubai.`,
//   },
//   {
//     question: "Can I get a mortgage as a foreign investor/expat?",
//     answer:
//       "Yes, foreign investors/expats can apply for mortgages in Dubai, typically covering up to 80% of the property value, depending on financial eligibility and bank policies.",
//   },
//   {
//     question: "Do property owners in Dubai get a residency visa?",
//     answer: `Yes, property investors can apply for a UAE residency visa if they invest at least:
// - AED 750,000 – Eligible for a 2-year visa
// - AED 2 million – Eligible for a 10-year Golden Visa
// `,
//   },
//   {
//     question: "Are there any property taxes in Dubai?",
//     answer:
//       "No, Dubai has no annual property taxes. However, there are service charges for property maintenance and one-time fees such as the DLD transfer fee.",
//   },
//   {
//     question: "What legal protections do property buyers have in Dubai?",
//     answer:
//       "Dubai’s real estate market is regulated by the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA), ensuring transparency, buyer protection, and fair dealings.",
//   },
//   {
//     question: "What are the best areas to invest in Dubai?",
//     answer:
//       "Top investment areas include: Downtown Dubai, Dubai Marina, Jumeirah Village Circle (JVC), Business Bay, and Dubai Creek Harbour. Each area offers different benefits in terms of rental yield, lifestyle, and price appreciation.",
//   },
//   {
//     question: "What rental yield can I expect in Dubai?",
//     answer:
//       "Dubai offers high rental yields, ranging from 5% to 9% annually, depending on location, property type, and market demand.",
//   },
//   {
//     question: "Can I rent out my property in Dubai?",
//     answer:
//       "Yes, property owners can lease their units for long-term or short-term rentals. Short-term rentals require permits from the Dubai Department of Economy and Tourism (DET).",
//   },
//   {
//     question:
//       "What is an off-plan property, and can I sell it before completion?",
//     answer:
//       "An off-plan property is an unconstructed or preliminary-stage property. Yes, you can sell an off-plan property before the completion date.",
//   },
//   {
//     question: "Is it possible to get a mortgage for an off-plan property?",
//     answer:
//     "Yes, it's possible to obtain a mortgage for off-plan property purchases, subject to meeting the financial institution's requirements."
//   },
//   {
//     question:
//       "How can I get started with your agency?",
//     answer:
//     "Simply contact us via phone, WhatsApp, or email, and one of our experienced agents will assist you. Whether you're buying, selling, or investing, we’ll provide expert advice and guide you through the process from start to finish."
//   },
// ];
// const locations = [
//  "Dubai Penthouse for Sale",
// "Dubai Apartment for Sale",
// "Houses for Sale in Dubai",
// "Townhouse for Sale in Dubai",
// "Dubai Apartment for Rent",
// "Dubai Villa for Rent",
// "Office in Dubai for Rent",
// "Furnished Apartments for Rent",
// "Furnished Studio For Sale",
// "Furnished 1 Bed Apartment For Sale",
// "Furnished Studio For Rent",
// "Furnished 1 Bed Apartment For Rent",
// ];
// const Property = () => {
//    const searchParams = useSearchParams();
//    const offeringtypeFilter = searchParams.get("offeringtype");
//    const propertytypeFilter = searchParams.get("propertytype"); 
//   const {data, isLoading} = useProperties();
  
//   //  const filteredProperties = offeringtypeFilter
//   //    ? data?.filter((property) =>
//   //        property.offeringtype?.some(
//   //          (type) => type.toLowerCase() === offeringtypeFilter.toLowerCase()
//   //        )
//   //      )
//   //    : data;
//   const filteredProperties = data?.filter((property) => {
//     const offeringMatch = offeringtypeFilter
//       ? property.offeringtype?.some(
//           (type) => type.toLowerCase() === offeringtypeFilter.toLowerCase()
//         )
//       : true;

//     const propertyTypeMatch = propertytypeFilter
//       ? property.propertytype?.some(
//           (type) => type.toLowerCase() === propertytypeFilter.toLowerCase()
//         )
//       : true;

//     return offeringMatch && propertyTypeMatch;
//   });

//     if (isLoading) {
//       return (
//         <div className="flex justify-center items-center h-[50vh]">
//           <Spinner />
//         </div>
//       );
//     }
//   return (
//     <>
//       <Hero />
//       {/* {data?.map((property, i) => (
//         <PropertyCard key={i} data={property} />
//       ))} */}
//       {/* {filteredProperties?.map((property, i) => (
//           <PropertyCard key={i} data={property} />
//         ))
//       } */}
//       {filteredProperties?.length === 0 ? (
//         <div className="text-center text-white py-20">
//           <h2 className="text-2xl font-semibold">No properties found</h2>
//           <p className="text-gray-400 mt-2">
//             We’re working on bringing more listings your way. Stay tuned!
//           </p>
//         </div>
//       ) : (
//         filteredProperties.map((property, i) => (
//           <PropertyCard key={i} data={property} />
//         ))
//       )}

//       <div className="bg-[#282927] gap-2 flex items-center flex-col">
//         <FAQSection faqs={faqs} />
//         <Popular locations={locations} />
//         <MarqueeSection />
//         <InterestSection />
//         <News />
//       </div>
//     </>
//   );
// }

// export default Property


"use client";
import React, { useState } from 'react';
import Hero from './parts/Hero';
import PropertyComp from './parts/PropertyComp';
import MarqueeSection from '../meettheteam/parts/marque';
import InterestSection from '../meettheteam/parts/GotQues';
import FAQSection from '../meettheteam/parts/Faq\'s';
import News from '../home/parts/News';
import Popular from '../news/parts/Popular';
import { PropertyCard } from './parts/PropertyCard';
import { useProperties } from '../../admin/properties/useProperties';
import { useSearchParams } from 'next/navigation';
import Spinner from '../../ui/Spinner';
import TopArea from '../news/parts/TopArea';
import Button from '../../ui/Button';

const faqs = [
  {
    question: "Can foreigners/expats buy property in Dubai?",
    answer: "Yes, foreigners and expats can purchase property on a freehold basis in designated areas of Dubai.",
  },
  {
    question: "Can I get a mortgage as a foreign investor/expat?",
    answer: "Yes, foreign investors/expats can apply for mortgages in Dubai, typically covering up to 80% of the property value, depending on financial eligibility and bank policies.",
  },
  {
    question: "Do property owners in Dubai get a residency visa?",
    answer: `Yes, property investors can apply for a UAE residency visa if they invest at least:
    - AED 750,000 – Eligible for a 2-year visa
    - AED 2 million – Eligible for a 10-year Golden Visa`,
  },
  {
    question: "Are there any property taxes in Dubai?",
    answer: "No, Dubai has no annual property taxes. However, there are service charges for property maintenance and one-time fees such as the DLD transfer fee.",
  },
  {
    question: "What legal protections do property buyers have in Dubai?",
    answer: "Dubai’s real estate market is regulated by the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA), ensuring transparency, buyer protection, and fair dealings.",
  },
  {
    question: "What are the best areas to invest in Dubai?",
    answer: "Top investment areas include: Downtown Dubai, Dubai Marina, Jumeirah Village Circle (JVC), Business Bay, and Dubai Creek Harbour. Each area offers different benefits in terms of rental yield, lifestyle, and price appreciation.",
  },
  {
    question: "What rental yield can I expect in Dubai?",
    answer: "Dubai offers high rental yields, ranging from 5% to 9% annually, depending on location, property type, and market demand.",
  },
  {
    question: "Can I rent out my property in Dubai?",
    answer: "Yes, property owners can lease their units for long-term or short-term rentals. Short-term rentals require permits from the Dubai Department of Economy and Tourism (DET).",
  },
  {
    question: "What is an off-plan property, and can I sell it before completion?",
    answer: "An off-plan property is an unconstructed or preliminary-stage property. Yes, you can sell an off-plan property before the completion date.",
  },
  {
    question: "Is it possible to get a mortgage for an off-plan property?",
    answer: "Yes, it's possible to obtain a mortgage for off-plan property purchases, subject to meeting the financial institution's requirements.",
  },
  {
    question: "How can I get started with your agency?",
    answer: "Simply contact us via phone, WhatsApp, or email, and one of our experienced agents will assist you. Whether you're buying, selling, or investing, we’ll provide expert advice and guide you through the process from start to finish.",
  },
];

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

const Property = () => {
  const [currentPage, setCurrentPage] = useState(1);
    const propertyPerPage = 9;
  const searchParams = useSearchParams();
  const offeringtypeFilter = searchParams.get("offeringtype");
  const propertytypeFilter = searchParams.get("propertytype");

  const { data, isLoading } = useProperties();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [offeringType, setOfferingType] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
 const [showPriceModal, setShowPriceModal] = useState(false);
const totalPages = Math.ceil(data?.length / propertyPerPage);

const startIndex = (currentPage - 1) * propertyPerPage;
const filteredDatass = data?.filter((el, i) => el.status === false);
const currentProperties = filteredDatass?.slice(
  startIndex,
  startIndex + propertyPerPage
);

const handleNext = () => {
  if (currentPage < totalPages) {
    setCurrentPage((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const handlePrev = () => {
  if (currentPage > 1) {
    setCurrentPage((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

  
  const filteredDatas = data?.filter((el, i) => el.status === false);
  
  const filteredProperties = currentProperties?.filter((property) => {
    const offeringMatch = offeringType
      ? property.offeringtype?.some(
          (type) => type.toLowerCase() === offeringType.toLowerCase()
        )
      : true;

    const propertyTypeMatch = propertyType
      ? property.propertytype?.some(
          (type) => type.toLowerCase() === propertyType.toLowerCase()
        )
      : true;

    const searchMatch = searchQuery
      ? property.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const minPriceMatch = minPrice ? property.price >= minPrice : true;
    const maxPriceMatch = maxPrice ? property.price <= maxPrice : true;

    const bedMatch = beds ? property.bed === beds : true;
    const bathMatch = baths ? property.shower === baths : true;

    return (
      offeringMatch &&
      propertyTypeMatch &&
      searchMatch &&
      minPriceMatch &&
      maxPriceMatch &&
      bedMatch &&
      bathMatch
    );
  });
const handlePriceSubmit = () => {
  setShowPriceModal(false);
};


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Spinner />
      </div>
    );
  }
 const title = "Property";
 const description = ` Our property specialists cover Dubai’s key communities, offering a range
        of services including Residential & Commercial Sales and Leasing,
        Off-Plan Investments, Property Management, and more. Whether you're
        looking to invest, buy, sell, or rent, our dedicated specialists are
        here to guide you through every step of the process.`;
  return (
    <div className="bg-[#282927] gap-2 flex items-center flex-col">
      {/* <Hero /> */}
      <TopArea title={title} description={description} />
      <div className="pt-14">
        <div className=" bg-black bg-opacity-10 p-6 rounded-lg">
          <div className="flex flex-wrap gap-4 justify-center">
            <select
              className="p-1 h-[35px] rounded-l-2xl border border-gray-300 text-black w-[100px]"
              value={offeringType}
              onChange={(e) => setOfferingType(e.target.value)}
            >
              <option value="">Type</option>
              <option value="sale">Sale</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
              <option value="offplan">Offplan</option>
            </select>
            <input
              type="text"
              placeholder="Search Property Name"
              className="p-1 h-[35px]  border border-gray-300 text-black placeholder-black w-[350px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="p-1 h-[35px]  border border-gray-300 text-black"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="compound">Compound</option>
              <option value="villa">Villa</option>
              <option value="duplex">Duplex</option>
              <option value="townhouse">Townhouse</option>
              <option value="fullfloor">Full Floor</option>
              <option value="halffloor">Half Floor</option>
              <option value="wholebuilding">Whole Building</option>
              <option value="bulkrentunit">Bulk Rent Unit</option>
              <option value="bungalow">Bungalow</option>
              <option value="hotelandhotelapartment">
                Hotel & Hotel Apratment
              </option>
            </select>
            <div className="relative bg-white ">
              <button
                className="p-1 h-[35px]  border border-gray-300 text-black w-[200px]"
                onClick={() => setShowPriceModal(!showPriceModal)}
              >
                Price Range
              </button>
              {showPriceModal && (
                <div className="absolute top-full left-0 mt-2 w-64 p-4 bg-white border rounded-lg shadow-lg z-10">
                  <div className="flex flex-col gap-2">
                    <input
                      type="number"
                      placeholder="Min Price"
                      className="p-2  border border-gray-300 text-black"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Max Price"
                      className="p-2  border border-gray-300 text-black "
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <button
                      className="mt-2 p-2 bg-blue-500 text-white "
                      onClick={handlePriceSubmit}
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
            <select
              className="p-1 h-[35px]  border border-gray-300 text-black px-3"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
            >
              <option value="">Beds</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <select
              className="p-1 h-[35px] rounded-r-2xl border border-gray-300 text-black w-[100px]"
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
            >
              <option value="">Bath</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="pb-10 w-[80%]">
        {filteredProperties?.length === 0 ? (
          <div className="text-center text-white">
            <h2 className="text-2xl font-semibold">No properties found</h2>
            <p className="text-gray-400 mt-2">
              We’re working on bringing more listings your way. Stay tuned!
            </p>
          </div>
        ) : (
          filteredProperties.map((property, i) => (
            <PropertyCard key={i} data={property} />
          ))
        )}
      </div>
      <div className="flex justify-between mt-8 gap-4 items-center">
        <Button
          onClick={handlePrev}
          text="Previous"
          className={`px-4 text-[1rem] py-1 text-white ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        />

        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          onClick={handleNext}
          text="Next"
          className={`px-5 text-[1rem] py-[0.15rem] text-white ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
        />
      </div>
      <MarqueeSection />

      <div className="bg-[#282927] gap-2 flex items-center flex-col py-10">
        <FAQSection faqs={faqs} />
        <Popular locations={locations} />
        <InterestSection />
        <News />
      </div>
    </div>
  );
}

export default Property;
