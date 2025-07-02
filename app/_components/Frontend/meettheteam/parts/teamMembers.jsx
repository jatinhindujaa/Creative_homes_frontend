

// "use client"
// import Image from "next/image";
// import React, { useState } from "react";
// import team from "../assets/team1.png"; // Replace with actual images
// import Button from "@/app/_components/ui/Button";
// import { useAgents } from "@/app/_components/admin/agents/useAgents";
// import { useRouter } from "next/navigation";


// const columnLayout = [3, 4, 3, 4, 3]; // Cards per column
// const membersPerPage = 17;

// const TeamSection = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortOrder, setSortOrder] = useState("asc");
//     const [searchQuery, setSearchQuery] = useState(""); // Search state
//     const [selectedType, setSelectedType] = useState("");
// const {data, isLoading} = useAgents()

// let sortedData = data
//   ? [...data].sort((a, b) => {
//       if (sortOrder === "asc") {
//         return a.order - b.order;
//       } else {
//         return b.order - a.order;
//       }
//     })
//   : [];
// console.log("sortedData", sortedData);
// // Custom swap logic
// if (sortedData.length > 0) {
//   const index1 = sortedData.findIndex((item) => item.order === 1);
//   const index4 = sortedData.findIndex((item) => item.order === 4);
//   if (index1 !== -1 && index4 !== -1) {
//     [sortedData[index1], sortedData[index4]] = [
//       sortedData[index4],
//       sortedData[index1],
//     ];
//   }

//   const index10 = sortedData.findIndex((item) => item.order === 10);
//   const index11 = sortedData.findIndex((item) => item.order === 11);
//   if (index10 !== -1 && index11 !== -1) {
//     [sortedData[index10], sortedData[index11]] = [
//       sortedData[index11],
//       sortedData[index10],
//     ];
//   }
// }


//   // const totalPages = Math.ceil(data.length / membersPerPage);
//   const totalPages = sortedData
//     ? Math.ceil(sortedData.length / membersPerPage)
//     : 0;


//   // Get members for current page
//   const startIndex = (currentPage - 1) * membersPerPage;
//   // const currentMembers = data.slice(startIndex, startIndex + membersPerPage);
//   const currentMembers = sortedData
//     ? sortedData.slice(startIndex, startIndex + membersPerPage)
//     : 0;
// const router = useRouter();
//   let memberIndex = 0;

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//       window.scroll(0,0)
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="py-16 hidden lg:block">
//       <div className="flex justify-center mb-8">
//         <div className="flex gap-4 items-center">
//           <input
//             type="text"
//             placeholder="Enter Location Or Agent Name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           />
//           <select
//             value={selectedType}
//             onChange={(e) => setSelectedType(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           >
//             <option value="">Type</option>
//             <option value="off plan">Off Plan</option>
//             <option value="rental">Rental</option>
//           </select>
//           <select className="px-4 py-2 rounded-md">
//             <option value="">Language</option>
//             <option value="English">English</option>
//             <option value="Spanish">Spanish</option>
//           </select>
//           <select className="px-4 py-2 rounded-md">
//             <option value="">Nationality</option>
//             <option value="Indian">Indian</option>
//             <option value="UAE">UAE</option>
//           </select>
//           <button className="px-4 py-2 rounded-md bg-gray-800 text-white">
//             Search
//           </button>
//         </div>
//       </div>

//       <h2 className="text-4xl font-bold text-white text-center mb-12">
//         Meet Our Team
//       </h2>

//       <div className="flex justify-center">
//         <div className="flex gap-6 items-center">
//           {columnLayout.map((cardCount, colIndex) => (
//             <div key={colIndex} className="flex flex-col gap-4 items-center">
//               {Array.from({ length: cardCount }).map((_, i) => {
//                 const member = currentMembers[memberIndex++];
//                 if (!member) return null;

//                 return (
//                   <div
//                     key={member.name}
//                     className="relative w-[120px] h-[220px] md:w-[150px] md:h-[280px] lg:w-[230px] lg:h-[300px] rounded-2xl overflow-hidden group"
//                     onClick={() => router.push(`/meet-the-team/${member._id}`)}
//                   >
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       fill
//                       className="object-cover rounded-2xl"
//                     />

//                     {/* Gradient Overlay - hidden until hover */}
//                     <div
//                       className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                       style={{
//                         backgroundImage: `linear-gradient(
//                           to top,
//                           rgba(0, 0, 0, 0.8) 0%,
//                           rgba(8, 8, 8, 0.6) 20%,
//                           rgba(15, 15, 15, 0.4) 40%,
//                           rgba(36, 36, 36, 0.2) 60%,
//                           rgba(52, 52, 52, 0) 100%
//                         )`,
//                       }}
//                     ></div>

//                     {/* Name & Role on hover */}
//                     <div className="absolute bottom-3 left-0 w-full text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <p className="font-bold">{member.name}</p>
//                       <p className="text-sm">{member.designation}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-between mt-8 gap-4 items-center">
//         {/* <button
//           onClick={handlePrev}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 rounded ${
//             currentPage === 1
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-white text-black cursor-pointer hover:bg-gray-200"
//           }`}
//         >
//           Previous
//         </button> */}
//         <Button
//           onClick={handlePrev}
//           text="Previous"
//           className="px-4 text-[1rem] py-1 text-white"
//         />

//         <span className="text-white">
//           Page {currentPage} of {totalPages}
//         </span>

//         {/* <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 rounded ${
//             currentPage === totalPages
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-white text-black cursor-pointer hover:bg-gray-200"
//           }`}
//         >
//           Next
//         </button> */}
//         <Button
//           onClick={handleNext}
//           text="Next"
//           className="px-5 text-[1rem] py-[0.15rem] text-white"
//         />
//       </div>
//     </div>
//   );
// };

// export default TeamSection;




// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import team from "../assets/team1.png"; // Replace with actual images
// import Button from "@/app/_components/ui/Button";
// import { useAgents } from "@/app/_components/admin/agents/useAgents";
// import { useRouter } from "next/navigation";

// const columnLayout = [3, 4, 3, 4, 3]; // Cards per column
// const membersPerPage = 17;

// const TeamSection = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [searchQuery, setSearchQuery] = useState(""); // Search state
//   const [selectedType, setSelectedType] = useState("");
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [selectedNationality, setSelectedNationality] = useState("");

//   const { data, isLoading } = useAgents();

//   // Function to filter agents based on search criteria
//   const filteredData = data?.filter((agent) => {
//     return (
//       (agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         searchQuery === "") &&
//       (selectedType
//         ? agent.type.toLowerCase() === selectedType.toLowerCase()
//         : true) &&
//       (selectedLanguage
//         ? agent.language.toLowerCase() === selectedLanguage.toLowerCase()
//         : true) &&
//       (selectedNationality
//         ? agent.nationality.toLowerCase() === selectedNationality.toLowerCase()
//         : true)
//     );
//   });

//   let sortedData = filteredData
//     ? [...filteredData].sort((a, b) => {
//         if (sortOrder === "asc") {
//           return a.order - b.order;
//         } else {
//           return b.order - a.order;
//         }
//       })
//     : [];

//   // Custom swap logic
//   if (sortedData.length > 0) {
//     const index1 = sortedData.findIndex((item) => item.order === 1);
//     const index4 = sortedData.findIndex((item) => item.order === 4);
//     if (index1 !== -1 && index4 !== -1) {
//       [sortedData[index1], sortedData[index4]] = [
//         sortedData[index4],
//         sortedData[index1],
//       ];
//     }

//     const index10 = sortedData.findIndex((item) => item.order === 10);
//     const index11 = sortedData.findIndex((item) => item.order === 11);
//     if (index10 !== -1 && index11 !== -1) {
//       [sortedData[index10], sortedData[index11]] = [
//         sortedData[index11],
//         sortedData[index10],
//       ];
//     }
//   }

//   const totalPages = sortedData
//     ? Math.ceil(sortedData.length / membersPerPage)
//     : 0;

//   // Get members for current page
//   const startIndex = (currentPage - 1) * membersPerPage;
//   const currentMembers = sortedData
//     ? sortedData.slice(startIndex, startIndex + membersPerPage)
//     : [];

//   const router = useRouter();
//   let memberIndex = 0;

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//       window.scroll(0, 0);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="py-16 hidden lg:block">
//       <div className="flex justify-center mb-8">
//         <div className="flex gap-4 items-center">
//           <input
//             type="text"
//             placeholder="Enter Location Or Agent Name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           />
//           <select
//             value={selectedType}
//             onChange={(e) => setSelectedType(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           >
//             <option value="">Type</option>
//             <option value="off plan">Off Plan</option>
//             <option value="rental">Rental</option>
//           </select>
//           <select
//             value={selectedLanguage}
//             onChange={(e) => setSelectedLanguage(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           >
//             <option value="">Language</option>
//             <option value="English">English</option>
//             <option value="Spanish">Spanish</option>
//           </select>
//           <select
//             value={selectedNationality}
//             onChange={(e) => setSelectedNationality(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           >
//             <option value="">Nationality</option>
//             <option value="Indian">Indian</option>
//             <option value="UAE">UAE</option>
//           </select>
//           <button className="px-4 py-2 rounded-md bg-gray-800 text-white">
//             Search
//           </button>
//         </div>
//       </div>

//       <h2 className="text-4xl font-bold text-white text-center mb-12">
//         Meet Our Team
//       </h2>

//       <div className="flex justify-center">
//         <div className="flex gap-6 items-center">
//           {columnLayout.map((cardCount, colIndex) => (
//             <div key={colIndex} className="flex flex-col gap-4 items-center">
//               {Array.from({ length: cardCount }).map((_, i) => {
//                 const member = currentMembers[memberIndex++];
//                 if (!member) return null;

//                 return (
//                   <div
//                     key={member.name}
//                     className="relative w-[120px] h-[220px] md:w-[150px] md:h-[280px] lg:w-[230px] lg:h-[300px] rounded-2xl overflow-hidden group"
//                     onClick={() => router.push(`/meet-the-team/${member._id}`)}
//                   >
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       fill
//                       className="object-cover rounded-2xl"
//                     />

//                     {/* Gradient Overlay - hidden until hover */}
//                     <div
//                       className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                       style={{
//                         backgroundImage: `linear-gradient(
//                           to top,
//                           rgba(0, 0, 0, 0.8) 0%,
//                           rgba(8, 8, 8, 0.6) 20%,
//                           rgba(15, 15, 15, 0.4) 40%,
//                           rgba(36, 36, 36, 0.2) 60%,
//                           rgba(52, 52, 52, 0) 100%
//                         )`,
//                       }}
//                     ></div>

//                     {/* Name & Role on hover */}
//                     <div className="absolute bottom-3 left-0 w-full text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <p className="font-bold">{member.name}</p>
//                       <p className="text-sm">{member.designation}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-between mt-8 gap-4 items-center">
//         <Button
//           onClick={handlePrev}
//           text="Previous"
//           className="px-4 text-[1rem] py-1 text-white"
//         />
//         <span className="text-white">
//           Page {currentPage} of {totalPages}
//         </span>
//         <Button
//           onClick={handleNext}
//           text="Next"
//           className="px-5 text-[1rem] py-[0.15rem] text-white"
//         />
//       </div>
//     </div>
//   );
// };

// export default TeamSection;




// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import team from "../assets/team1.png"; // Replace with actual images
// import Button from "@/app/_components/ui/Button";
// import { useAgents } from "@/app/_components/admin/agents/useAgents";
// import { useRouter } from "next/navigation";

// const columnLayout = [3, 4, 3, 4, 3]; // Cards per column
// const membersPerPage = 17;

// const TeamSection = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [searchQuery, setSearchQuery] = useState(""); // Search state
//   const [selectedType, setSelectedType] = useState("");
//   const [selectedLanguage, setSelectedLanguage] = useState("");
//   const [selectedNationality, setSelectedNationality] = useState("");

//   const { data, isLoading } = useAgents();

//   // Function to filter agents based on search criteria
//   const filteredData = data?.filter((agent) => {
//     return (
//       (agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         searchQuery === "") &&
//       (selectedType
//         ? (agent.type || "").toLowerCase() === selectedType.toLowerCase()
//         : true) &&
//       (selectedLanguage
//         ? (agent.language || "").toLowerCase() ===
//           selectedLanguage.toLowerCase()
//         : true) &&
//       (selectedNationality
//         ? (agent.nationality || "").toLowerCase() ===
//           selectedNationality.toLowerCase()
//         : true)
//     );
//   });

//   let sortedData = filteredData
//     ? [...filteredData].sort((a, b) => {
//         if (sortOrder === "asc") {
//           return a.order - b.order;
//         } else {
//           return b.order - a.order;
//         }
//       })
//     : [];

//   // Custom swap logic
//   if (sortedData.length > 0) {
//     const index1 = sortedData.findIndex((item) => item.order === 1);
//     const index4 = sortedData.findIndex((item) => item.order === 4);
//     if (index1 !== -1 && index4 !== -1) {
//       [sortedData[index1], sortedData[index4]] = [
//         sortedData[index4],
//         sortedData[index1],
//       ];
//     }

//     const index10 = sortedData.findIndex((item) => item.order === 10);
//     const index11 = sortedData.findIndex((item) => item.order === 11);
//     if (index10 !== -1 && index11 !== -1) {
//       [sortedData[index10], sortedData[index11]] = [
//         sortedData[index11],
//         sortedData[index10],
//       ];
//     }
//   }

//   const totalPages = sortedData
//     ? Math.ceil(sortedData.length / membersPerPage)
//     : 0;

//   // Get members for current page
//   const startIndex = (currentPage - 1) * membersPerPage;
//   const currentMembers = sortedData
//     ? sortedData.slice(startIndex, startIndex + membersPerPage)
//     : [];

//   const router = useRouter();
//   let memberIndex = 0;

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//       window.scroll(0, 0);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="py-16 hidden lg:block">
//       <div className="flex justify-center mb-8">
//         <div className="flex gap-4 items-center">
//           <input
//             type="text"
//             placeholder="Enter Location Or Agent Name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           />
//           <select
//             value={selectedType}
//             onChange={(e) => setSelectedType(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           >
//             <option value="">Type</option>
//             <option value="off plan">Off Plan</option>
//             <option value="rental">Rental</option>
//           </select>
//           <select
//             value={selectedLanguage}
//             onChange={(e) => setSelectedLanguage(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           >
//             <option value="">Language</option>
//             <option value="English">English</option>
//             <option value="Spanish">Spanish</option>
//           </select>
//           <select
//             value={selectedNationality}
//             onChange={(e) => setSelectedNationality(e.target.value)}
//             className="px-4 py-2 rounded-md"
//           >
//             <option value="">Nationality</option>
//             <option value="Indian">Indian</option>
//             <option value="UAE">UAE</option>
//           </select>
//           <button className="px-4 py-2 rounded-md bg-gray-800 text-white">
//             Search
//           </button>
//         </div>
//       </div>

//       <h2 className="text-4xl font-bold text-white text-center mb-12">
//         Meet Our Team
//       </h2>

//       <div className="flex justify-center">
//         <div className="flex gap-6 items-center">
//           {columnLayout.map((cardCount, colIndex) => (
//             <div key={colIndex} className="flex flex-col gap-4 items-center">
//               {Array.from({ length: cardCount }).map((_, i) => {
//                 const member = currentMembers[memberIndex++];
//                 if (!member) return null;

//                 return (
//                   <div
//                     key={member.name}
//                     className="relative w-[120px] h-[220px] md:w-[150px] md:h-[280px] lg:w-[230px] lg:h-[300px] rounded-2xl overflow-hidden group"
//                     onClick={() => router.push(`/meet-the-team/${member._id}`)}
//                   >
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       fill
//                       className="object-cover rounded-2xl"
//                     />

//                     {/* Gradient Overlay - hidden until hover */}
//                     <div
//                       className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                       style={{
//                         backgroundImage: `linear-gradient(
//                           to top,
//                           rgba(0, 0, 0, 0.8) 0%,
//                           rgba(8, 8, 8, 0.6) 20%,
//                           rgba(15, 15, 15, 0.4) 40%,
//                           rgba(36, 36, 36, 0.2) 60%,
//                           rgba(52, 52, 52, 0) 100%
//                         )`,
//                       }}
//                     ></div>

//                     {/* Name & Role on hover */}
//                     <div className="absolute bottom-3 left-0 w-full text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <p className="font-bold">{member.name}</p>
//                       <p className="text-sm">{member.designation}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-between mt-8 gap-4 items-center">
//         <Button
//           onClick={handlePrev}
//           text="Previous"
//           className="px-4 text-[1rem] py-1 text-white"
//         />
//         <span className="text-white">
//           Page {currentPage} of {totalPages}
//         </span>
//         <Button
//           onClick={handleNext}
//           text="Next"
//           className="px-5 text-[1rem] py-[0.15rem] text-white"
//         />
//       </div>
//     </div>
//   );
// };

// export default TeamSection;






"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "@/app/_components/ui/Button";
import { useAgents } from "@/app/_components/admin/agents/useAgents";
import { useRouter } from "next/navigation";
import Spinner from "@/app/_components/ui/Spinner";

const columnLayout = [3, 4, 3, 4, 3]; // Cards per column
const membersPerPage = 17;

const TeamSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState(""); // Search state
  const [selectedType, setSelectedType] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedNationality, setSelectedNationality] = useState("");

  const { data, isLoading } = useAgents();
  const router = useRouter();

  const filteredDatas = data?.filter((el, i) => el.status === true);
  const filteredData = filteredDatas?.filter((agent) => {
    const searchMatch =
      searchQuery === "" ||
      agent.name.toLowerCase().includes(searchQuery.toLowerCase());

    const typeMatch =
      selectedType === "" ||
      agent.type.some((t) => t.toLowerCase() === selectedType.toLowerCase());

    const languageMatch =
      selectedLanguage === "" ||
      agent.languages.some(
        (lang) => lang.toLowerCase() === selectedLanguage.toLowerCase()
      );

    const nationalityMatch =
      selectedNationality === "" ||
      (typeof agent.nationality === "string" &&
        agent.nationality.toLowerCase() === selectedNationality.toLowerCase());

    return searchMatch && typeMatch && languageMatch && nationalityMatch;
  });
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-[50vh]">
          <Spinner />
        </div>
      );
    }


  // Sorting the filtered data based on order
  let sortedData = filteredData
    ? [...filteredData].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.order - b.order;
        } else {
          return b.order - a.order;
        }
      })
    : [];
  console.log("sortedData", sortedData);
  // Custom swap logic
  if (sortedData.length > 0) {
    const index1 = sortedData.findIndex((item) => item.order === 1);
    const index4 = sortedData.findIndex((item) => item.order === 4);
    if (index1 !== -1 && index4 !== -1) {
      [sortedData[index1], sortedData[index4]] = [
        sortedData[index4],
        sortedData[index1],
      ];
    }

    const index10 = sortedData.findIndex((item) => item.order === 10);
    const index11 = sortedData.findIndex((item) => item.order === 11);
    if (index10 !== -1 && index11 !== -1) {
      [sortedData[index10], sortedData[index11]] = [
        sortedData[index11],
        sortedData[index10],
      ];
    }
  }

  const totalPages = sortedData
    ? Math.ceil(sortedData.length / membersPerPage)
    : 0;

  // Get members for current page
  const startIndex = (currentPage - 1) * membersPerPage;
  const currentMembers = sortedData
    ? sortedData.slice(startIndex, startIndex + membersPerPage)
    : [];

  let memberIndex = 0;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scroll(1000, 1000);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="py-16 hidden lg:block">
      <div className="flex justify-center mb-8">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Enter Agent Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-md w-[400px] text-black placeholder-black"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 rounded-md"
          >
            <option value="">Type</option>
            <option value="off plan">Off Plan</option>
            <option value="rental">Rental</option>
          </select>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-4 py-2 rounded-md"
          >
            <option value="">Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
          {/* <select
            value={selectedNationality}
            onChange={(e) => setSelectedNationality(e.target.value)}
            className="px-4 py-2 rounded-md"
          >
            <option value="">Nationality</option>
            <option value="Indian">Indian</option>
            <option value="UAE">UAE</option>
          </select> */}
          {/* <button className="px-4 py-2 rounded-md bg-gray-800 text-white">
            Search
          </button> */}
        </div>
      </div>

      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Meet Our Team
      </h2>

      <div className="flex justify-center">
        <div className="flex gap-6 items-center">
          {columnLayout.map((cardCount, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 items-center">
              {Array.from({ length: cardCount }).map((_, i) => {
                const member = currentMembers[memberIndex++];
                if (!member) return null;

                return (
                  <div
                    key={member.name}
                    className="relative w-[120px] h-[220px] md:w-[150px] md:h-[280px] lg:w-[230px] lg:h-[300px] rounded-2xl overflow-hidden group"
                    onClick={() => router.push(`/meet-the-team/${member._id}`)}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-2xl"
                    />

                    {/* Gradient Overlay - hidden until hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        backgroundImage: `linear-gradient(
                          to top,
                          rgba(0, 0, 0, 0.8) 0%,
                          rgba(8, 8, 8, 0.6) 20%,
                          rgba(15, 15, 15, 0.4) 40%,
                          rgba(36, 36, 36, 0.2) 60%,
                          rgba(52, 52, 52, 0) 100%
                        )`,
                      }}
                    ></div>

                    {/* Name & Role on hover */}
                    <div className="absolute bottom-3 left-0 w-full text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="font-bold">{member.name}</p>
                      <p className="text-sm">{member.designation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-8 gap-4 items-center">
        <Button
          onClick={handlePrev}
          text="Previous"
          className="px-4 text-[1rem] py-1 text-white"
        />
        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={handleNext}
          text="Next"
          className="px-5 text-[1rem] py-[0.15rem] text-white"
        />
      </div>
    </div>
  );
};

export default TeamSection;
