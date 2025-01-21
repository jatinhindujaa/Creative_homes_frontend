"use client";
import React, { useState } from "react";
import img_1 from "../assets/neighbourhood/img_1.png";
import img_2 from "../assets/neighbourhood/img_2.png";
import img_3 from "../assets/neighbourhood/img_3.png";
import img_4 from "../assets/neighbourhood/img_4.png";

const Neighbourhoods = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { img: img_1, defaultWidth: "25%", title: "Dubai Marina", listings: 18 },
    { img: img_2, defaultWidth: "30%", title: "Downtown Dubai", listings: 12 },
    { img: img_3, defaultWidth: "20%", title: "Palm Jumeirah", listings: 23 },
    { img: img_4, defaultWidth: "10%", title: "Jumeirah Beach", listings: 31 },
  ];

  return (
    <div className="flex flex-col">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[3.5rem] leading-[4.3rem] font-semibold mt-6">
        <span>BEST NEIGHBOURHOODS IN</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          DUBAI
        </span>
      </div>
      <div className="flex w-[90%] h-[400px] mx-auto space-x-4 mt-4">
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
            className={`rounded-[20px] transition-all duration-500 ease-in-out ${
              activeIndex === index ? "animate-scale-up-back " : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-40 rounded-[20px] opacity-100">
              {activeIndex === index ? (
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <span className="text-[2.5rem] leading-[3.1rem] font-light">
                    {item.title}
                  </span>
                  <button className="text-[1.3rem] font-medium leading-[1.6rem] w-fit p-3 border-[1.5px] bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] border-white hover:bg-white hover:text-black rounded-[41px]">
                    {item.listings} LISTINGS
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Neighbourhoods;
