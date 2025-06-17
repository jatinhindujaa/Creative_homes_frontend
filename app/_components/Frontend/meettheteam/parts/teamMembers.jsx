

"use client"
import Image from "next/image";
import React, { useState } from "react";
import team from "../assets/team1.png"; // Replace with actual images
import Button from "@/app/_components/ui/Button";
import { useAgents } from "@/app/_components/admin/agents/useAgents";
import { useRouter } from "next/navigation";


const columnLayout = [3, 4, 3, 4, 3]; // Cards per column
const membersPerPage = 17;

const TeamSection = () => {
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
    <div className="py-16 hidden lg:block">
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
                    onClick={() =>
                      router.push(`/meet-the-team/${member._id}`)
                    }
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

export default TeamSection;
