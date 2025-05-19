
//  "use client";

// import { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const faqs = [
//   {
//     question: "How much is the average rent in Dubai?",
//     answer: `With more and more properties flooding the market, property prices have fallen considerably in the past few years and continue to show a decreasing trend. There is now more choice in the market for tenants in terms of location, quality, and value.

// Areas like **Business Bay, Downtown Dubai, Dubai South, Discovery Gardens, Dubai Marina, Al Barsha South,** and **Al Warsan** amongst others remain a favorite amongst renters.

// The variation in rental prices range from **AED 20,000 - 35,000** per year in Dubailand and International City to **AED 70,000 - 85,000** per year in Business Bay and Downtown Dubai.

// To rent a lavish 3-4 bedroom luxury apartment can cost **AED 300,000 - 400,000** a year in Dubai Marina and Downtown Dubai to a whopping **AED 700,000 - 750,000** in similar high-end areas.

// Dubai is a fast-evolving modern economy which makes it an ideal destination for trade, investment, and living.`,
//   },
//   {
//     question: "Apartment Living In Dubai",
//     answer:
//       "Living in an apartment in Dubai offers various amenities, security, and convenience for residents.",
//   },
//   {
//     question: "How much does a Villa cost in Dubai?",
//     answer:
//       "The cost of a villa in Dubai varies by location, size, and luxury. Prices typically range from AED 2M to AED 50M.",
//   },
//   {
//     question: "Best places in Dubai to buy a Townhouse",
//     answer:
//       "The best areas for townhouses in Dubai include Arabian Ranches, JVC, and The Springs.",
//   },
//   {
//     question: "Is it worth to buy property in Dubai?",
//     answer:
//       "Dubai’s real estate market offers excellent ROI, tax benefits, and residency opportunities for investors.",
//   },
//   {
//     question: "Can a foreigner buy property in Dubai?",
//     answer:
//       "Yes! Foreigners can purchase properties in designated freehold areas across Dubai.",
//   },
//   {
//     question: "Is now a good time to buy real estate in Dubai?",
//     answer:
//       "With competitive pricing and high rental yields, now is a great time to invest in Dubai’s real estate market.",
//   },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="px-4">
//       {/* FAQ Title */}
//       <div className="text-center py-5">
//         <span className="text-center leading-10 text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           FAQ’s
//         </span>
//       </div>

//       {/* FAQ List */}
//       <div className="max-w-[71rem] mx-auto space-y-4">
//         {faqs.map((faq, index) => (
//           <div key={index} className="relative">
//             {/* Outer Shadow for Glow Effect */}
//             <div className="absolute inset-0  rounded-full blur-md opacity-30"></div>

//             {/* FAQ Button */}
//             <div className="bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-full px-[1.3rem">
//               <button
//                 className="relative w-full flex justify-between items-center px-6 py-1 bg-white rounded-full text-black text-lg font-medium shadow-lg transition-all"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 {faq.question}

//                 {/* Expand/Collapse Icon */}
//                 <span
//                   className={`w-[1.8rem] h-[1.8rem] flex items-center justify-center rounded-full border border-black ${
//                     openIndex === index
//                       ? "bg-black text-white"
//                       : "bg-white text-black"
//                   }`}
//                 >
//                   {openIndex === index ? (
//                     <FaChevronUp size={14} />
//                   ) : (
//                     <FaChevronDown size={14} />
//                   )}
//                 </span>
//               </button>
//             </div>

//             {/* FAQ Answer (Collapsible) */}
//             <div
//               className={`overflow-hidden transition-all duration-300 ${
//                 openIndex === index
//                   ? "max-h-[500px] opacity-100 py-4"
//                   : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="bg-white text-black text-md px-6 py-6 rounded-[60px] leading-relaxed shadow-md">
//                 <p className="whitespace-pre-line">{faq.answer}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQSection;


"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const faqss = [
//   {
//     question: "How much is the average rent in Dubai?",
//     answer: `With more and more properties flooding the market, property prices have fallen considerably in the past few years and continue to show a decreasing trend. There is now more choice in the market for tenants in terms of location, quality, and value.

//   Areas like **Business Bay, Downtown Dubai, Dubai South, Discovery Gardens, Dubai Marina, Al Barsha South,** and **Al Warsan** amongst others remain a favorite amongst renters.

//   The variation in rental prices range from **AED 20,000 - 35,000** per year in Dubailand and International City to **AED 70,000 - 85,000** per year in Business Bay and Downtown Dubai.

//   To rent a lavish 3-4 bedroom luxury apartment can cost **AED 300,000 - 400,000** a year in Dubai Marina and Downtown Dubai to a whopping **AED 700,000 - 750,000** in similar high-end areas.

//   Dubai is a fast-evolving modern economy which makes it an ideal destination for trade, investment, and living.`,
//   },
//   {
//     question: "Apartment Living In Dubai",
//     answer:
//       "Living in an apartment in Dubai offers various amenities, security, and convenience for residents.",
//   },
//   {
//     question: "How much does a Villa cost in Dubai?",
//     answer:
//       "The cost of a villa in Dubai varies by location, size, and luxury. Prices typically range from AED 2M to AED 50M.",
//   },
//   {
//     question: "Best places in Dubai to buy a Townhouse",
//     answer:
//       "The best areas for townhouses in Dubai include Arabian Ranches, JVC, and The Springs.",
//   },
//   {
//     question: "Is it worth to buy property in Dubai?",
//     answer:
//       "Dubai’s real estate market offers excellent ROI, tax benefits, and residency opportunities for investors.",
//   },
//   {
//     question: "Can a foreigner buy property in Dubai?",
//     answer:
//       "Yes! Foreigners can purchase properties in designated freehold areas across Dubai.",
//   },
//   {
//     question: "Is now a good time to buy real estate in Dubai?",
//     answer:
//       "With competitive pricing and high rental yields, now is a great time to invest in Dubai’s real estate market.",
//   },
// ];

const FAQSection = ({ faqs }) => {
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-8 md:py-10">
      {/* FAQ Title */}
      <div className="text-center py-5">
        <span className="text-center leading-10 text-[2rem] sm:text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          FAQ’s
        </span>
      </div>

      {/* FAQ List */}
      <div className="max-w-[71rem] mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="relative">
            {/* Outer Shadow for Glow Effect */}
            <div className="absolute inset-0 rounded-full blur-md opacity-30"></div>

            {/* FAQ Button */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg lg:p-4 p-0 rounded-full lg:px-[1.3rem] px-0">
              <button
                className="relative w-full flex justify-between items-center px-6 lg:py-3 py-2 bg-white rounded-full text-black text-sm sm:text-lg font-medium shadow-lg transition-all"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}

                {/* Expand/Collapse Icon */}
                <span
                  className={`w-[1.8rem] h-[1.8rem] flex items-center justify-center rounded-full border border-black ${
                    openIndex === index
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {openIndex === index ? (
                    <FaChevronUp size={14} />
                  ) : (
                    <FaChevronDown size={14} />
                  )}
                </span>
              </button>
            </div>

            {/* FAQ Answer (Collapsible) */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "opacity-100 py-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-white text-black text-sm px-6 py-6 rounded-[20px] leading-relaxed shadow-md">
                <p className="whitespace-pre-line">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
