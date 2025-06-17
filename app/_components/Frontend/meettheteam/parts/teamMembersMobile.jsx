

"use client"
import Image from "next/image";
import React, { useState } from "react";
import team from "../assets/team1.png"; // Replace with actual images
import Button from "@/app/_components/ui/Button";
import { useAgents } from "@/app/_components/admin/agents/useAgents";
import { useRouter } from "next/navigation";

// const teamMembers = Array.from({ length: 57 }, (_, i) => ({
//   name: `Member ${i + 1}`,
//   role: `Role ${i + 1}`,
//   image: team,
// }));
const teamMembers = [
  { name: "Jatin Todi", role: "Sales Director", image: team },
  { name: "Member 2", role: "Sales Manager", image: team },
  { name: "Member 3", role: "Marketing Head", image: team },
  { name: "Member 4", role: "Operations", image: team },
  { name: "Member 5", role: "Finance Head", image: team },
  { name: "Member 6", role: "HR Manager", image: team },
  { name: "Member 7", role: "Property Consultant", image: team },
  { name: "Member 8", role: "Legal Advisor", image: team },
  { name: "Member 9", role: "Sales Executive", image: team },
  { name: "Member 10", role: "Marketing Executive", image: team },
  { name: "Member 11", role: "IT Specialist", image: team },
  { name: "Member 12", role: "Operations Manager", image: team },
  { name: "Member 13", role: "HR Assistant", image: team },
  { name: "Member 14", role: "Property Consultant", image: team },
  { name: "Member 15", role: "Legal Advisor", image: team },
  { name: "Member 16", role: "Sales Executive", image: team },
  { name: "Member 17", role: "Marketing Executive", image: team },
  { name: "Member 18", role: "Team Lead", image: team },
  { name: "Member 19", role: "Support Staff", image: team },
  { name: "Member 20", role: "Support Staff", image: team },
  { name: "Member 21", role: "Support Staff", image: team },
  { name: "Member 22", role: "Support Staff", image: team },
  { name: "Member 23", role: "Support Staff", image: team },
  { name: "Member 24", role: "Support Staff", image: team },
  { name: "Member 25", role: "Support Staff", image: team },
  
];

const columnLayout = [ 5, 4, 5]; // Cards per column
const membersPerPage = 14;

const TeamSectionMobile = () => {
  const [currentPage, setCurrentPage] = useState(1);
 const [sortOrder, setSortOrder] = useState("asc");
const {data, isLoading} = useAgents()
  const sortedData = data
     ? [...data].sort((a, b) => {
         if (sortOrder === "asc") {
           return a.order - b.order;
         } else {
           return b.order - a.order;
         }
       })
     : [];
  
    // const totalPages = Math.ceil(data.length / membersPerPage);
    const totalPages = sortedData
      ? Math.ceil(sortedData.length / membersPerPage)
      : 0;
  
  
    // Get members for current page
    const startIndex = (currentPage - 1) * membersPerPage;
    // const currentMembers = data.slice(startIndex, startIndex + membersPerPage);
    const currentMembers = sortedData
      ? sortedData.slice(startIndex, startIndex + membersPerPage)
      : 0;
  const router = useRouter();
    let memberIndex = 0;
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
        window.scroll(0,0)
      }
    };
  
    const handlePrev = () => {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    };
  return (
    <div className="py-16 lg:hidden block">
      <h2 className="text-[1.2rem] font-bold text-white text-center mb-12">
        Meet Our Team
      </h2>

      <div className="flex justify-center">
        <div className="flex gap-[1rem] items-center">
          {columnLayout.map((cardCount, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 items-center">
              {Array.from({ length: cardCount }).map((_, i) => {
                const member = currentMembers[memberIndex++];
                if (!member) return null;

                return (
                  <div
                    key={member.name}
                    className="relative w-[100px] h-[140px] md:w-[150px] md:h-[280px] lg:w-[230px] lg:h-[300px] rounded-2xl overflow-hidden group"
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
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-evenly mt-8 gap-4 items-center">
        {/* <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-white text-black cursor-pointer hover:bg-gray-200"
          }`}
        >
          Previous
        </button> */}
        <Button
          onClick={handlePrev}
          text="Previous"
          className="px-4 text-[1rem] py-1 text-white"
        />

        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>

        {/* <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-white text-black cursor-pointer hover:bg-gray-200"
          }`}
        >
          Next
        </button> */}
        <Button
          onClick={handleNext}
          text="Next"
          className="px-5 text-[1rem] py-[0.15rem] text-white"
        />
      </div>
    </div>
  );
};

export default TeamSectionMobile;
