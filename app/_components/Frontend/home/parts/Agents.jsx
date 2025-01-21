"use client";
import React, { useState } from "react";
import agents_1 from "../assets/agents/agents_1.png";
import agents_2 from "../assets/agents/agents_2.png";
import agents_3 from "../assets/agents/agents_3.png";
import agents_4 from "../assets/agents/agents_4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const agentsData = [
  {
    id: 0,
    department: "Off Plan",
    data: [
      {
        subId: 0,
        name: "Maja Pavlovic",
        image: "agents_1",
        designation: "Property Advisor",
      },
      {
        subId: 1,
        name: "Darine Alyamani",
        image: "agents_2",
        designation: "Property Manager",
      },
      {
        subId: 2,
        name: "Dean Darby",
        image: "agents_3",
        designation: "Property Manager",
      },
      {
        subId: 3,
        name: "Ghizlane Haddi",
        image: "agents_4",
        designation: "Property Manager",
      },
    ],
  },
  {
    id: 1,
    department: "Rental",
    data: [
      {
        subId: 0,
        name: "Maja Pavlovic",
        image: "agents_1",
        designation: "Property Advisor",
      },
      {
        subId: 1,
        name: "Darine Alyamani",
        image: "agents_2",
        designation: "Property Manager",
      },
      {
        subId: 2,
        name: "Dean Darby",
        image: "agents_3",
        designation: "Property Manager",
      },
      {
        subId: 3,
        name: "Ghizlane Haddi",
        image: "agents_4",
        designation: "Property Manager",
      },
    ],
  },
  {
    id: 2,
    department: "Commercial",
    data: [
      {
        subId: 0,
        name: "Maja Pavlovic",
        image: "agents_1",
        designation: "Property Advisor",
      },
      {
        subId: 1,
        name: "Darine Alyamani",
        image: "agents_2",
        designation: "Property Manager",
      },
      {
        subId: 2,
        name: "Dean Darby",
        image: "agents_3",
        designation: "Property Manager",
      },
      {
        subId: 3,
        name: "Ghizlane Haddi",
        image: "agents_4",
        designation: "Property Manager",
      },
    ],
  },
  {
    id: 3,
    department: "Industrial",
    data: [
      {
        subId: 0,
        name: "Maja Pavlovic",
        image: "agents_1",
        designation: "Property Advisor",
      },
      {
        subId: 1,
        name: "Darine Alyamani",
        image: "agents_2",
        designation: "Property Manager",
      },
      {
        subId: 2,
        name: "Dean Darby",
        image: "agents_3",
        designation: "Property Manager",
      },
      {
        subId: 3,
        name: "Ghizlane Haddi",
        image: "agents_4",
        designation: "Property Manager",
      },
    ],
  },
  {
    id: 4,
    department: "Raw Land",
    data: [
      {
        subId: 0,
        name: "Maja Pavlovic",
        image: "agents_1",
        designation: "Property Advisor",
      },
      {
        subId: 1,
        name: "Darine Alyamani",
        image: "agents_2",
        designation: "Property Manager",
      },
      {
        subId: 2,
        name: "Dean Darby",
        image: "agents_3",
        designation: "Property Manager",
      },
      {
        subId: 3,
        name: "Ghizlane Haddi",
        image: "agents_4",
        designation: "Property Manager",
      },
    ],
  },
];

const Agents = () => {
  const [activeTab, setActiveTab] = useState(0);
  var settings = {
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[3.5rem] leading-[4.3rem] font-semibold mt-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          AGENTS
        </span>
      </div>

      <div className="w-[80%] mx-auto mt-4 rounded-[230px] flex flex-wrap justify-center p-3 bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] ">
        {agentsData.map((department) => (
          <button
            key={department.id}
            className={`flex-auto p-2 rounded-[30px] w-fit  ${
              department.id === activeTab ? "bg-white text-black" : "text-white"
            }`}
            onClick={() => setActiveTab(department.id)}
          >
            <span className="text-[1.9rem] leading-[1.9rem]">
              {department.department}
            </span>
          </button>
        ))}
      </div>

      <div className="w-[90%] mx-auto mt-10">
        <Slider {...settings}>
          {agentsData[activeTab].data.map((agent) => (
            <div key={agent.subId} className="flex flex-col w-[250px] mx-4">
              <Image
                className="rounded-[20px] w-full h-[300px] object-cover"
                src={require(`../assets/agents/${agent.image}.png`)}
                alt={agent.name}
              />
              <div className="flex flex-col justify-center items-center text-[1.6rem] leading-[2.2rem]">
                <span>{agent.name}</span>
                <span>{agent.designation}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Agents;
