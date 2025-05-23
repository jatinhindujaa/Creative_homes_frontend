"use client";
import React, { useEffect, useRef, useState } from "react";
import agents_1 from "../assets/agents/agents_1.png";
import agents_2 from "../assets/agents/agents_2.png";
import agents_3 from "../assets/agents/agents_3.png";
import agents_4 from "../assets/agents/agents_4.png";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const hoverStyle = "text-gray-400 text-2xl";
const normalStyle = "text-white text-2xl";
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
    department: "Ready",
    data: [
      {
        subId: 0,
        name: "Majaa Pavlovic",
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
    id: 3,
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
    id: 4,
    department: "Plots",
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

const data = [
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
];

const Agents = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [arrowStyle1, setArrowStyle1] = useState(normalStyle);
  const [arrowStyle2, setArrowStyle2] = useState(normalStyle);
  const [tabWidths, setTabWidths] = useState([]);
  const [tabPositions, setTabPositions] = useState([]);
  const tabRefs = useRef([]);
  const containerRef = useRef(null);
 useEffect(() => {
   if (tabRefs.current.length && containerRef.current) {
     const containerRect = containerRef.current.getBoundingClientRect();
     const widths = tabRefs.current.map((tab) => tab?.offsetWidth || 0);
     setTabWidths(widths);

     // Calculate left positions dynamically based on justify-evenly spacing
     const positions = tabRefs.current.map((tab) => {
       if (!tab) return 0;
       const tabRect = tab.getBoundingClientRect();
       return tabRect.left - containerRect.left;
     });
     setTabPositions(positions);
   }
 }, [agentsData]);
  
  const sliderRef = useRef(null);
  const SecondsliderRef = useRef(null);

  var settings = {
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  };


  var secondsettings = {
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
   const leftPositions = [20, 45, 68, 80];
  return (
    <div className="flex flex-col">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center lg:text-[2.5rem] text-[1.5rem] leading-[4.3rem] font-semibold mt-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          AGENTS
        </span>
      </div>
      <div
        ref={containerRef}
        className="w-[80%] mx-auto mt-4 flex flex-wrap rounded-[30px] justify-between p-3 relative bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] lg:flex hidden"
      >
        {/* Dynamic Moving Background */}
        <div
          className="absolute top-4 h-[40px] bg-white rounded-[30px] transition-all duration-500 ease-in-out"
          style={{
            width: tabWidths[activeTab] || 130,
            left: tabPositions[activeTab] || 0,
          }}
        ></div>

        {agentsData.map((department, index) => (
          <button
            key={department.id}
            ref={(el) => (tabRefs.current[index] = el)}
            className="relative z-10 px-6 py-2 text-[1.4rem] rounded-[30px] transition-all duration-500"
            style={{
              color: activeTab === index ? "black" : "white",
            }}
            onClick={() => setActiveTab(index)}
          >
            <span className="text-[1.6rem] leading-[1.9rem]">
              {department.department}
            </span>
          </button>
        ))}
      </div>

      <div className="w-[90%] mx-auto mt-10 relative lg:block hidden">
        <Slider {...settings} ref={sliderRef}>
          {agentsData[activeTab].data.map((agent, index) => (
            <div key={agent.subId || index} className="flex flex-col w-[250px] px-2">
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
        {/* Left Arrow */}
        <div className="absolute bottom-1/2 -left-9 flex gap-2">
          <div
            className="border-2 border-white rounded-full flex justify-center items-center p-0.5 cursor-pointer hover:bg-transparent"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoIosArrowBack
              className={arrowStyle1}
              onMouseEnter={() => setArrowStyle1(hoverStyle)}
              onMouseLeave={() => setArrowStyle1(normalStyle)}
            />
          </div>
        </div>

        {/* Right Arrow */}
        <div className="absolute bottom-1/2 -right-9 flex gap-2">
          <div
            className="border-2 border-white rounded-full flex justify-center items-center p-0.5 cursor-pointer hover:bg-transparent"
            onClick={() => sliderRef.current.slickNext()}
          >
            <IoIosArrowForward
              className={arrowStyle2}
              onMouseEnter={() => setArrowStyle2(hoverStyle)}
              onMouseLeave={() => setArrowStyle2(normalStyle)}
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-10 relative lg:hidden block ">
        <Slider {...secondsettings} ref={SecondsliderRef}>
          {data.map((agent, index) => (
            <div>
              <div key={agent.subId || index} className="flex flex-col w-[100%] px-2">
                <Image
                  className="rounded-[20px] w-full h-[200px] object-cover"
                  src={require(`../assets/agents/${agent.image}.png`)}
                  alt={agent.name}
                />
                <div className="flex flex-col justify-center items-center text-[1rem] leading-[2.2rem]">
                  <span className="leading-6">{agent.name}</span>
                  <span className="text-[0.8rem] leading-6">
                    {agent.designation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Left Arrow */}
        <div className="absolute bottom-1/2 -left-4 flex gap-2">
          <div
            className="border-2 border-white rounded-full flex justify-center items-center p-0.3 cursor-pointer hover:bg-transparent"
            onClick={() => SecondsliderRef.current.slickPrev()}
          >
            <IoIosArrowBack
              className={arrowStyle1}
              onMouseEnter={() => setArrowStyle1(hoverStyle)}
              onMouseLeave={() => setArrowStyle1(normalStyle)}
            />
          </div>
        </div>

        {/* Right Arrow */}
        <div className="absolute bottom-1/2 -right-4 flex gap-2">
          <div
            className="border-2 border-white rounded-full flex justify-center items-center p-0.3 cursor-pointer hover:bg-transparent"
            onClick={() => SecondsliderRef.current.slickNext()}
          >
            <IoIosArrowForward
              className={arrowStyle2}
              onMouseEnter={() => setArrowStyle2(hoverStyle)}
              onMouseLeave={() => setArrowStyle2(normalStyle)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
