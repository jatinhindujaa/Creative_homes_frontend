
"use client";
import React, { useState } from "react";
import img_1 from "../assets/neighbourhood/img_1.png";
import img_2 from "../assets/neighbourhood/img_2.png";
import img_3 from "../assets/neighbourhood/img_3.png";
import img_4 from "../assets/neighbourhood/img_4.png";

const Neighbourhoods = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);

  // const images = [
  //   { img: img_1, title: "Dubai Marina", listings: 18, defaultWidth: "25%" },
  //   { img: img_2, title: "Downtown Dubai", listings: 12, defaultWidth: "30%" },
  //   { img: img_3, title: "Palm Jumeirah", listings: 23, defaultWidth: "20%" },
  //   { img: img_4, title: "Jumeirah Beach", listings: 31, defaultWidth: "10%" },
  // ];
  const images = [
    {
      img: img_1,
      title: "Dubai Marina",
      listings: 18,
      defaultWidth: "25%",
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
      defaultWidth: "30%",
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
      defaultWidth: "20%",
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
      defaultWidth: "10%",
      agent: {
        name: "Maya Rahim",
        role: "Sr. Property Consultant",
        language: "Speaks Hindi & English",
        rera: "59810",
      },
    },
  ];


  // Custom left positions for each box
  const leftPositions = [20, 45, 68, 80];

  return (
    <div className="md:flex hidden flex-col items-center w-[100%]">
      {/* Heading */}
      <div className="w-[90%] mx-auto gap-2 text-white flex flex-row justify-center items-center text-[2.5rem] leading-[3.3rem] font-semibold mt-6">
        <span>FEATURED {""}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          {""} AGENTS
        </span>
      </div>
      <div className="flex flex-row  bg-[#202120] w-[95%] rounded-xl my-10">
        {/* <div className="text-[2.5rem] font-light text-white transition-all duration-500 ease-in-out z-10 w-[25%] flex flex-col items-center text-center space-y-2">
          <span>
            {images[hoverIndex !== null ? hoverIndex : lastActiveIndex].title}
          </span>
          <button className="text-[1.3rem] font-medium leading-[1.6rem] w-fit px-6 py-3 border-[1.5px] bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] border-white hover:bg-white hover:text-black rounded-[41px]">
            {
              images[hoverIndex !== null ? hoverIndex : lastActiveIndex]
                .listings
            }{" "}
            LISTINGS
          </button>
        </div> */}
        {/* Left Agent Detail */}
        <div className="text-white transition-all duration-500 ease-in-out z-10 w-[30%] flex flex-col items-start justify-center px-6 py-10 space-y-3">
          <h2 className="text-[1.8rem] font-bold bg-gradient-to-r from-[#F1C376] to-[#C89249] bg-clip-text text-transparent">
            {
              images[hoverIndex !== null ? hoverIndex : lastActiveIndex].agent
                .name
            }
          </h2>
          <p className="text-lg border-b border-white pb-1 w-fit">
            {
              images[hoverIndex !== null ? hoverIndex : lastActiveIndex].agent
                .role
            }
          </p>
          <p>
            {
              images[hoverIndex !== null ? hoverIndex : lastActiveIndex].agent
                .language
            }
          </p>
          <p>
            RERA Number:{" "}
            {
              images[hoverIndex !== null ? hoverIndex : lastActiveIndex].agent
                .rera
            }
          </p>

          <div className="flex gap-4 mt-4">
            <button className="border border-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
              📞 Call
            </button>
            <button className="border border-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
              💬 WhatsApp
            </button>
          </div>
        </div>

        <div className="flex w-[70%] h-[400px]  space-x-4 mt-4 py-4 relative">
          {images.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "100%",
                width: activeIndex === index ? "50%" : item.defaultWidth,
              }}
              className={`rounded-[20px] transition-all duration-500 ease-in-out relative overflow-hidden ${
                activeIndex === index ? "animate-scale-up-back" : ""
              }`}
              onMouseEnter={() => {
                setActiveIndex(index);
                setHoverIndex(index);
                setLastActiveIndex(index);
              }}
              onMouseLeave={() => setHoverIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Neighbourhoods;
