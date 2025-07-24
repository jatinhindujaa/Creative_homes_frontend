

"use client";
// import Image from "next/image";
// import { useState } from "react";
// import card from "../assets/1.png"; // Replace with actual image path

// const NewsCards = () => {
//   const data = [
//     {
//       img: card,
//       title: "Creative homes wins Town Square Award for the best agent",
//       desc: `Welcome to the thriving world of Dubai investments, where
//         opportunities abound and financial success beckons. In this quick
//         guide, we’ll explore why investing in Dubai is a game-changer for
//         savvy investors like yourself......`,
//       view: 25,
//       date: "1 Nov, 2025",
//     },
//     {
//       img: card,
//       title: "Luxury villas set new benchmark in Dubai real estate",
//       desc: `With Dubai's ever-growing skyline, luxury villas are setting new records
//         in design and investment opportunities. Let's explore why this sector
//         is booming......`,
//       view: 35,
//       date: "5 Nov, 2025",
//     },
//     {
//       img: card,
//       title: "Why Dubai remains a top investment hub in 2025",
//       desc: `The Dubai property market remains resilient and continues to attract
//         global investors. Let's dive into the key factors driving this
//         growth......`,
//       view: 50,
//       date: "10 Nov, 2025",
//     },
//     {
//       img: card,
//       title: "Best neighborhoods for investment in Dubai",
//       desc: `Looking to invest in Dubai? Here are the best locations offering
//         excellent ROI and long-term growth potential......`,
//       view: 40,
//       date: "15 Nov, 2025",
//     },
//     {
//       img: card,
//       title: "Dubai's property market trends for 2026",
//       desc: `As we move into 2026, let’s analyze the trends shaping the Dubai real
//         estate sector for the coming year......`,
//       view: 60,
//       date: "20 Nov, 2025",
//     },
//     {
//       img: card,
//       title: "How to get the best mortgage deals in Dubai",
//       desc: `Thinking about financing your property purchase? Here’s how to secure
//         the best mortgage rates in Dubai......`,
//       view: 30,
//       date: "25 Nov, 2025",
//     },
//   ];

//   const cardsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(data.length / cardsPerPage);
//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const currentCards = data.slice(startIndex, startIndex + cardsPerPage);

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <div className="text-white p-6 md:p-10 flex flex-col items-center gap-6">
//       {currentCards.map((d, index) => (
//         <div
//           key={index}
//           className="flex flex-row p-6 md:p-10 items-center gap-6"
//         >
//           {/* Image Section */}
//           <div className="w-full md:w-1/3 relative">
//             <Image
//               src={d.img}
//               alt="News Image"
//               width={500}
//               height={300}
//               className="rounded-lg object-cover"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="w-full md:w-2/3">
//             <h2 className="text-[2.5rem] font-bold mb-2">{d.title}</h2>
//             <div className="flex flex-row w-full justify-between">
//               <p className="text-gray-400 text-md mb-2">{d.date}</p>
//               <div className="flex items-center text-gray-400">
//                 <span className="mr-1">👁️</span> {d.view}
//               </div>
//             </div>
//             <p className="text-gray-300 text-[1.2rem] mb-4">{d.desc}</p>

//             {/* Read More Button */}
//             <div className="flex items-center gap-4">
//               <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center gap-2 border-none hover:bg-gray-800">
//                 Read More{" "}
//                 <span className="text-2xl bg-white text-black rounded-2xl w-8 text-center">
//                   +
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Styled Pagination */}
//       <div className="flex items-center justify-around gap-6 mt-8 w-full">
//         {/* Previous Button */}
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 1}
//           className={`border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 ${
//             currentPage === 1
//               ? "opacity-50 cursor-not-allowed"
//               : "hover:bg-gray-700"
//           }`}
//         >
//           ← Back
//         </button>

//         {/* Page Number Dropdown */}
//         <div className="flex items-center text-white gap-2">
//           <span>Page</span>
//           <select
//             className="bg-white text-black px-3 py-1 rounded-md border-none cursor-pointer"
//             value={currentPage}
//             onChange={(e) => setCurrentPage(Number(e.target.value))}
//           >
//             {Array.from({ length: totalPages }, (_, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//           <span>of {totalPages}</span>
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//           className={`border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 ${
//             currentPage === totalPages
//               ? "opacity-50 cursor-not-allowed"
//               : "hover:bg-gray-700"
//           }`}
//         >
//           Next →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewsCards;


// import React, { useState } from "react";
// import Image from "next/image";
// import card from "../assets/1.png"; // Replace with actual image path

// const NewsCards = () => {
//   const data = [
//     {
//       img: card,
//       title: "Creative homes wins Town Square Award for the best agent",
//       desc: `Welcome to the thriving world of Dubai investments, where opportunities abound and financial success beckons. In this quick guide, we’ll explore why investing in Dubai is a game-changer for savvy investors like yourself......`,
//       view: 25,
//       date: "1 Nov, 2023",
//     },
//     {
//       img: card,
//       title: "Luxury villas set new benchmark in Dubai real estate",
//       desc: `With Dubai's ever-growing skyline, luxury villas are setting new records in design and investment opportunities. Let's explore why this sector is booming......`,
//       view: 35,
//       date: "5 Nov, 2023",
//     },
//     {
//       img: card,
//       title: "Why Dubai remains a top investment hub in 2025",
//       desc: `The Dubai property market remains resilient and continues to attract global investors. Let's dive into the key factors driving this growth......`,
//       view: 50,
//       date: "10 Nov, 2023",
//     },
//     {
//       img: card,
//       title: "Best neighborhoods for investment in Dubai",
//       desc: `Looking to invest in Dubai? Here are the best locations offering excellent ROI and long-term growth potential......`,
//       view: 40,
//       date: "15 Nov, 2023",
//     },
//     {
//       img: card,
//       title: "Dubai's property market trends for 2026",
//       desc: `As we move into 2026, let’s analyze the trends shaping the Dubai real estate sector for the coming year......`,
//       view: 60,
//       date: "20 Nov, 2023",
//     },
//     {
//       img: card,
//       title: "How to get the best mortgage deals in Dubai",
//       desc: `Thinking about financing your property purchase? Here’s how to secure the best mortgage rates in Dubai......`,
//       view: 30,
//       date: "25 Nov, 2023",
//     },
//   ];

//   const cardsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(data.length / cardsPerPage);
//   const startIndex = (currentPage - 1) * cardsPerPage;
//   const currentCards = data.slice(startIndex, startIndex + cardsPerPage);

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   return (
//     <div className="text-white p-6 md:p-10 flex flex-col items-center gap-6">
//       {currentCards.map((d, index) => (
//         <div
//           key={index}
//           className="flex flex-col sm:flex-row md:p-10 items-center gap-6 w-full"
//         >
//           {/* Image Section */}
//           <div className="w-full sm:w-1/3 relative mb-4 sm:mb-0">
//             <Image
//               src={d.img}
//               alt="News Image"
//               width={500}
//               height={300}
//               className="rounded-lg object-cover w-full h-auto"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="w-full sm:w-2/3">
//             <h2 className="text-[1.8rem] sm:text-[2.5rem] font-bold mb-2">
//               {d.title}
//             </h2>
//             <div className="flex flex-row w-full justify-between">
//               <p className="text-gray-400 text-md mb-2">{d.date}</p>
//               <div className="flex items-center text-gray-400">
//                 <span className="mr-1">👁️</span> {d.view}
//               </div>
//             </div>
//             <p className="text-gray-300 text-[1rem] sm:text-[1.2rem] mb-4">
//               {d.desc}
//             </p>

//             {/* Read More Button */}
//             <div className="flex items-center gap-4">
//               <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center gap-2 border-none hover:bg-gray-800 transition">
//                 Read More{" "}
//                 <span className="text-2xl bg-white text-black rounded-2xl w-8 text-center">
//                   +
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Pagination Controls */}
//       <div className="flex items-center justify-around gap-6 mt-8 w-full">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 1}
//           className={`border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 ${
//             currentPage === 1
//               ? "opacity-50 cursor-not-allowed"
//               : "hover:bg-gray-700"
//           }`}
//         >
//           ← Back
//         </button>

//         <div className="flex items-center text-white gap-2">
//           <span>Page</span>
//           <select
//             className="bg-white text-black px-3 py-1 rounded-md border-none cursor-pointer"
//             value={currentPage}
//             onChange={(e) => setCurrentPage(Number(e.target.value))}
//           >
//             {Array.from({ length: totalPages }, (_, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//           <span>of {totalPages}</span>
//         </div>

//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//           className={`border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 ${
//             currentPage === totalPages
//               ? "opacity-50 cursor-not-allowed"
//               : "hover:bg-gray-700"
//           }`}
//         >
//           Next →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewsCards;
"use client"
import React, { useState } from "react";
import Image from "next/image";
import card from "../assets/1.png"; // Replace with actual image path
import { useNews } from "@/app/_components/admin/news/useNews";
import { useRouter } from "next/navigation";

const NewsCards = () => {
  const {data, isLoading} = useNews()
  // const data = [
  //   {
  //     img: card,
  //     title: "Creative homes wins Town Square Award for the best agent",
  //     desc: `Welcome to the thriving world of Dubai investments, where opportunities abound and financial success beckons. In this quick guide, we’ll explore why investing in Dubai is a game-changer for savvy investors like yourself......`,
  //     view: 25,
  //     date: "1 Nov, 2023",
  //   },
  //   {
  //     img: card,
  //     title: "Luxury villas set new benchmark in Dubai real estate",
  //     desc: `With Dubai's ever-growing skyline, luxury villas are setting new records in design and investment opportunities. Let's explore why this sector is booming......`,
  //     view: 35,
  //     date: "5 Nov, 2023",
  //   },
  //   {
  //     img: card,
  //     title: "Why Dubai remains a top investment hub in 2025",
  //     desc: `The Dubai property market remains resilient and continues to attract global investors. Let's dive into the key factors driving this growth......`,
  //     view: 50,
  //     date: "10 Nov, 2023",
  //   },
  //   {
  //     img: card,
  //     title: "Best neighborhoods for investment in Dubai",
  //     desc: `Looking to invest in Dubai? Here are the best locations offering excellent ROI and long-term growth potential......`,
  //     view: 40,
  //     date: "15 Nov, 2023",
  //   },
  //   {
  //     img: card,
  //     title: "Dubai's property market trends for 2026",
  //     desc: `As we move into 2026, let’s analyze the trends shaping the Dubai real estate sector for the coming year......`,
  //     view: 60,
  //     date: "20 Nov, 2023",
  //   },
  //   {
  //     img: card,
  //     title: "How to get the best mortgage deals in Dubai",
  //     desc: `Thinking about financing your property purchase? Here’s how to secure the best mortgage rates in Dubai......`,
  //     view: 30,
  //     date: "25 Nov, 2023",
  //   },
  // ];
  const filteredDatas = data?.filter((el, i) => el.status === true);
  const cardsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
const router = useRouter()
  const totalPages = Math.ceil(filteredDatas?.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = filteredDatas?.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="text-white p-6 md:p-0 flex flex-col items-center gap-1 md:w-[80%] w-[96%]">
      {currentCards?.map((d, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row p-3 md:p-10 md:px-0 items-center gap-6 w-full"
        >
          {/* Image Section */}
          <div className="w-full sm:w-1/3 relative mb-4 sm:mb-0">
            <Image
              src={d.multipleImages[0]}
              alt="News Image"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full sm:w-2/3 md:mb-[12px]">
            <h2 className="text-[1.8rem] sm:text-[2.5rem] font-bold mb-2">
              {d.title}
            </h2>
            <div
              className="text-[1rem] font-light leading-[1.6rem] line-clamp-3"
              dangerouslySetInnerHTML={{ __html: d.description }}
            />
            <div className="flex flex-row w-full justify-between pt-4">
              <p className="text-gray-400 text-md mb-2">{d.date}</p>
              <div className="flex items-center text-gray-400">
                <span className="mr-1">👁️</span> {d.view}
              </div>
            </div>
            <p className="text-gray-300 text-[1rem] sm:text-[1.2rem] mb-4">
              {d.desc}
            </p>

            {/* Read More Button */}
            <div
              className="flex items-center gap-4"
              onClick={() => router.push(`/news/${d._id}`)}
            >
              <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center gap-2 border-none hover:bg-gray-800 transition">
                Read More{" "}
                <span className="text-2xl bg-white text-black rounded-2xl w-8 text-center">
                  +
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-6 mt-8 w-full">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`flex items-center justify-center border border-gray-400 text-white px-4 py-2 rounded-full ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-700"
          }`}
        >
          <span className="text-lg">←</span>
        </button>

        {/* Page Number Dropdown */}
        <div className="flex items-center text-white gap-2">
          <span>Page</span>
          <select
            className="bg-[#fff] text-black font-semibold px-3 py-1 rounded-md cursor-pointer"
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <span>of {totalPages}</span>
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center border border-gray-400 text-white px-4 py-2 rounded-full ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-700"
          }`}
        >
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default NewsCards;
