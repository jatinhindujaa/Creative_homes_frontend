"use client";
import React, { useState } from "react";
import img_1 from "../assets/neighbourhood/img_1.png";
import img_2 from "../assets/neighbourhood/img_2.png";
import img_3 from "../assets/neighbourhood/img_3.png";
import img_4 from "../assets/neighbourhood/img_4.png";
import { useAgents } from "@/app/_components/admin/agents/useAgents";
import Spinner from "@/app/_components/ui/Spinner";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const MobileNeighbourhoods = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);
  const { data: agents, isLoading } = useAgents();

  const images = [
    {
      img: img_1,
      title: "Dubai Marina",
      listings: 18,
      agent: {
        name: "Eman Mohammed Saad",
        role: "Sr. Property Consultant",
        language: "Speaks English",
        rera: "55365",
      },
    },
    {
      img: img_2,
      title: "Downtown Dubai",
      listings: 12,
      agent: {
        name: "Adel Karam",
        role: "Luxury Consultant",
        language: "Speaks Arabic & English",
        rera: "45872",
      },
    },
    {
      img: img_3,
      title: "Palm Jumeirah",
      listings: 23,
      agent: {
        name: "Sara Al Mazrouei",
        role: "Property Expert",
        language: "Speaks English & French",
        rera: "34219",
      },
    },
    {
      img: img_4,
      title: "Jumeirah Beach",
      listings: 31,
      agent: {
        name: "Maya Rahim",
        role: "Sr. Property Consultant",
        language: "Speaks Hindi & English",
        rera: "59810",
      },
    },
  ];

  const sortedTopAgents = agents
    ?.slice() // to avoid mutating original array
    .sort((a, b) => a.order - b.order) // ascending order
    .slice(0, 4) // take top 4 agents
    .map((agent, index) => ({
      ...agent,
      defaultWidth: "100%", // Full width for mobile
    }));

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col items-center w-[100%] md:hidden">
      {/* Heading */}
      <div className="w-[90%] mx-auto gap-2 text-white flex flex-row justify-center items-center text-[1.8rem] leading-[2.5rem] font-semibold mt-6">
        <span>FEATURED {""}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          {""} AGENTS
        </span>
      </div>

      <div className="flex flex-col bg-[#202120] w-[90%] rounded-xl my-10">
        {/* Mobile Image and Agent Detail */}
        {sortedTopAgents.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white p-4 mb-6 rounded-xl"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "250px",
            }}
          >
            <div className="w-full text-center mt-4">
              <h2 className="text-[1.6rem] font-bold bg-gradient-to-r from-[#F1C376] to-[#C89249] bg-clip-text text-transparent">
                {item.name}
              </h2>
              <p className="text-[1rem] font-semibold">{item.role}</p>

              <div className="mt-6 flex gap-4 justify-center">
                <a
                  href={`https://wa.me/${agents?.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="flex items-center gap-2 border bg-white border-black text-black px-5 py-2 rounded-md font-semibold hover:border-white hover:bg-transparent hover:text-white transition"
                  >
                    <FaWhatsapp size={20} />
                    WhatsApp
                  </button>
                </a>
                <a href={`tel:${agents?.phoneNo}`}>
                  <button
                    type="button"
                    className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
                  >
                    <IoCallOutline size={20} />
                    Call
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNeighbourhoods;
