




// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useProperties } from "@/app/_components/admin/properties/useProperties";

// const Hero = () => {
//   const router = useRouter();
//   const { data: properties, isLoading } = useProperties();

//   const [searchQuery, setSearchQuery] = useState(""); // State for search query
//   const [filteredProperties, setFilteredProperties] = useState([]); // State for filtered properties

//   // Handle search query change
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query.length >= 2) {
//       // Filter properties based on the name field
//       const results = properties.filter((property) =>
//         property.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredProperties(results);
//     } else {
//       setFilteredProperties([]);
//     }
//   };

//   // Handle filter button click to update URL with the selected filter
//   const handleFilterClick = (type) => {
//     router.push(`/property?offeringtype=${type}`);
//   };

//   console.log("properties", properties);

//   return (
//     <div className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
//       {/* Background Gradient Overlay */}
//       <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10" />

//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/Night2.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         disablePictureInPicture
//         webkit-playsinline="true"
//         controls={false}
//       />

//       {/* Foreground Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 w-full max-w-4xl">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
//           Find Something Extraordinary with
//         </h1>
//         <h1 className="filedazzle-font text-[2rem] sm:text-[4rem] md:text-[5.5rem] font-light uppercase">
//           <span
//             className="text-[2.4rem] md:text-[6.5rem]"
//             style={{ fontFamily: "Outfit" }}
//           >
//             C
//           </span>
//           reative Homes
//         </h1>
//       </div>

//       {/* Filter Buttons */}
//       <div className="bg-white z-10 bg-opacity-20 backdrop-blur-lg p-4 rounded-full px-8">
//         <div className="flex justify-center space-x-3 mb-3">
//           <button
//             onClick={() => handleFilterClick("buy")}
//             className="bg-white text-black font-semibold px-6 py-2 rounded-full"
//           >
//             Buy
//           </button>
//           <button
//             onClick={() => handleFilterClick("rent")}
//             className="bg-white text-black font-semibold px-6 py-2 rounded-full"
//           >
//             Rent
//           </button>
//           <button
//             onClick={() => handleFilterClick("off-plan")}
//             className="bg-white text-black font-semibold px-6 py-2 rounded-full"
//           >
//             Off Plan
//           </button>
//           <button
//             onClick={() => handleFilterClick("commercial")}
//             className="bg-white text-black font-semibold px-6 py-2 rounded-full"
//           >
//             Commercial
//           </button>
//         </div>

//         {/* Search Bar with Dropdown */}
//         <div className="flex items-center bg-white p-2 rounded-full space-x-2 shadow-md">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search By Area Or Project"
//             className="flex-1 px-4 py-2 rounded-full outline-none text-gray-700 placeholder-gray-500"
//           />
//           <select className="bg-transparent text-black font-semibold px-4 py-2 rounded-full outline-none">
//             <option>Rent</option>
//             <option>Buy</option>
//           </select>
//           <button className="bg-white px-4 py-2 rounded-full text-black font-semibold flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-700 mr-1"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M21 21l-4.35-4.35m0 0A8.5 8.5 0 1011 19.5a8.5 8.5 0 005.65-2.85z"
//               />
//             </svg>
//             Search
//           </button>
//         </div>

//         {/* Search Results Dropdown */}
//         {searchQuery && filteredProperties.length > 0 && (
//           <div className="absolute bg-white w-[90%] mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//             {filteredProperties.map((property) => (
//               <div
//                 key={property.id}
//                 className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
//                 onClick={() => {
//                   router.push(`/property/${property._id}`);
//                 }}
//               >
//                 {property.name}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Hero;




// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useProperties } from "@/app/_components/admin/properties/useProperties";

// const Hero = () => {
//   const router = useRouter();
//   const { data: properties, isLoading } = useProperties();

//   const [searchQuery, setSearchQuery] = useState(""); // State for search query
//   const [filteredProperties, setFilteredProperties] = useState([]); // State for filtered properties
//   const [selectedOfferingType, setSelectedOfferingType] = useState(""); // State for selected offering type

//   // Handle search query change
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//   };

//   // Handle offering type filter change
//   const handleOfferingTypeChange = (e) => {
//     const type = e.target.value;
//     setSelectedOfferingType(type);
//   };

//   // Filter properties based on search query and offering type
//   useEffect(() => {
//     let filtered = properties;

//     // Filter by name if search query exists
//     if (searchQuery.length >= 2) {
//       filtered = filtered.filter((property) =>
//         property.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Filter by offering type if selected
//     if (selectedOfferingType) {
//       filtered = filtered.filter(
//         (property) =>
//           property.offeringtype &&
//           property.offeringtype.includes(selectedOfferingType)
//       );
//     }

//     setFilteredProperties(filtered);
//   }, [searchQuery, selectedOfferingType, properties]);

//   // Handle filter button click to update URL with the selected filter
//   const handleFilterClick = (type) => {
//     router.push(`/property?offeringtype=${type}`);
//   };

//   console.log("properties", properties);

//   return (
//     <div className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
//       {/* Background Gradient Overlay */}
//       <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10" />

//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/Night2.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         disablePictureInPicture
//         webkit-playsinline="true"
//         controls={false}
//       />

//       {/* Foreground Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 w-full max-w-4xl">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
//           Find Something Extraordinary with
//         </h1>
//         <h1 className="filedazzle-font text-[2rem] sm:text-[4rem] md:text-[5.5rem] font-light uppercase">
//           <span
//             className="text-[2.4rem] md:text-[6.5rem]"
//             style={{ fontFamily: "Outfit" }}
//           >
//             C
//           </span>
//           reative Homes
//         </h1>
//       </div>

//       {/* Filter Buttons */}
//       <div className="bg-white z-10 bg-opacity-20 backdrop-blur-lg p-4 rounded-full px-8">
//         <div className="flex justify-center space-x-3 mb-3">
//           <button
//             onClick={() => handleFilterClick("buy")}
//             className="bg-white text-black font-semibold px-6 py-2 rounded-full"
//           >
//             Buy
//           </button>
//           <button
//             onClick={() => handleFilterClick("rent")}
//             className="bg-white text-black font-semibold px-6 py-2 rounded-full"
//           >
//             Rent
//           </button>
//           <button
//             onClick={() => handleFilterClick("off-plan")}
//             className="bg-white text-black font-semibold px-6 py-2 rounded-full"
//           >
//             Off Plan
//           </button>
//           <button
//             onClick={() => handleFilterClick("commercial")}
//             className="bg-white text-black font-semibold px-6 py-2 rounded-full"
//           >
//             Commercial
//           </button>
//         </div>

//         {/* Search Bar with Dropdown */}
//         <div className="flex items-center bg-white px-2 rounded-full space-x-2 shadow-md">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search By Area Or Project"
//             className="flex-1 px-4 py-2 rounded-full outline-none text-gray-700 placeholder-gray-500"
//           />
//           <select
//             value={selectedOfferingType}
//             onChange={handleOfferingTypeChange}
//             className="bg-transparent text-black font-semibold py-2 rounded-full outline-none"
//           >
//             <option value="">Select Type</option>
//             <option value="rent">Rent</option>
//             <option value="buy">Buy</option>
//             <option value="off-plan">Off Plan</option>
//             <option value="commercial">Commercial</option>
//           </select>
//           {/* <button className="bg-white px-4 py-2 rounded-full text-black font-semibold flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-700 mr-1"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M21 21l-4.35-4.35m0 0A8.5 8.5 0 1011 19.5a8.5 8.5 0 005.65-2.85z"
//               />
//             </svg>
//             Search
//           </button> */}
//         </div>

//         {/* Search Results Dropdown */}
//         {searchQuery && filteredProperties.length > 0 && (
//           <div className="absolute bg-white w-[63%] mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto ml-[12px]">
//             {filteredProperties.map((property) => (
//               <div
//                 key={property._id}
//                 className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
//                 onClick={() => {
//                   router.push(`/property/${property._id}`);
//                 }}
//               >
//                 {property.name}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Hero;



"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProperties } from "@/app/_components/admin/properties/useProperties";

const Hero = () => {
  const router = useRouter();
  const { data: properties, isLoading } = useProperties();

  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredProperties, setFilteredProperties] = useState([]); // State for filtered properties
  const [selectedOfferingType, setSelectedOfferingType] = useState(""); // State for selected offering type

  // Handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  // Handle offering type filter change
  const handleOfferingTypeChange = (e) => {
    const type = e.target.value;
    setSelectedOfferingType(type);
  };

  // Filter properties based on search query and offering type
  useEffect(() => {
    let filtered = properties;

    // Filter by name if search query exists
    if (searchQuery.length >= 2) {
      filtered = filtered.filter((property) =>
        property.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by offering type if selected
    if (selectedOfferingType) {
      filtered = filtered.filter(
        (property) =>
          property.offeringtype &&
          property.offeringtype.includes(selectedOfferingType)
      );
    }

    setFilteredProperties(filtered);
  }, [searchQuery, selectedOfferingType, properties]);

  // Handle filter button click to update URL with the selected filter
  const handleFilterClick = (type) => {
    router.push(`/property?offeringtype=${type}`);
  };

  console.log("properties", properties);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10" />

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Night2.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        webkit-playsinline="true"
        controls={false}
      />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Night2.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        webkit-playsinline="true"
        controls={false}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 w-full max-w-4xl">
        <h1 className="text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Find Something Extraordinary with
        </h1>
        <h1 className="filedazzle-font text-[2rem] sm:text-[4rem] md:text-[5.5rem] font-light uppercase">
          <span
            className="text-[2.4rem] md:text-[6.5rem]"
            style={{ fontFamily: "Outfit" }}
          >
            C
          </span>
          reative Homes
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="bg-white z-10 bg-opacity-20 backdrop-blur-lg p-4 rounded-full sm:px-8 px-4 m-2">
        <div className="flex flex-wrap justify-center sm:space-x-3 mb-3 gap-1">
          <button
            onClick={() => handleFilterClick("buy")}
            className="bg-white text-black font-normal md:px-6 px-2 md:py-2 py-1 rounded-full text-sm sm:text-base"
          >
            Buy
          </button>
          <button
            onClick={() => handleFilterClick("rent")}
            className="bg-white text-black font-normal md:px-6 px-2 md:py-2 py-1 rounded-full text-sm sm:text-base"
          >
            Rent
          </button>
          <button
            onClick={() => handleFilterClick("off-plan")}
            className="bg-white text-black font-normal md:px-6 px-2 md:py-2 py-1 rounded-full text-sm sm:text-base"
          >
            Off Plan
          </button>
          <button
            onClick={() => handleFilterClick("commercial")}
            className="bg-white text-black font-normal md:px-6 px-2 md:py-2 py-1 rounded-full text-sm sm:text-base"
          >
            Commercial
          </button>
        </div>

        {/* Search Bar with Dropdown */}
        <div className="flex flex-row items-center bg-white px-2 rounded-full space-x-2 shadow-md w-[100%] sm:w-full max-w-lg mx-auto sm:space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search By Area Or Project"
            className="flex-1 sm:px-4 px-2 sm:py-2 py-1 rounded-full outline-none text-gray-700 placeholder-gray-500 w-[50%] sm:w-auto"
          />
          <select
            value={selectedOfferingType}
            onChange={handleOfferingTypeChange}
            className="bg-transparent text-black font-normal py-2 rounded-full outline-none w-[40%] sm:w-auto hidden sm:block"
          >
            <option value="">Select Type</option>
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
            <option value="off-plan">Off Plan</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Search Results Dropdown */}
        {searchQuery && filteredProperties.length > 0 && (
          <div className="absolute bg-white w-[90%] sm:w-[63%] mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto ml-[12px] sm:ml-0">
            {filteredProperties.map((property) => (
              <div
                key={property._id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                onClick={() => {
                  router.push(`/property/${property._id}`);
                }}
              >
                {property.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
