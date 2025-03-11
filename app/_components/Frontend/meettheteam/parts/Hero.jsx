import React from "react";
import Meet from "../assets/meet.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
      <Image
        src={Meet.src}
        alt="The Elan"
        layout="fill"
        objectPosition="center"
        priority
      />
      <div className="relative z-10 flex w-3/5 flex-col items-center justify-center text-white text-center px-4 gap-4">
        <h1 className="text-[5.5rem] font-normal uppercase">Meet the team</h1>
        <h1 className="text-xl font-normal">
          Covering Dubai's key communities, our property experts offer a wide
          range of services including Residential & Commercial Sales and
          Leasing, Off Plan and Investments, Property Management, and more. Use
          the search feature to find a specific person or browse through a
          department.
        </h1>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg py-5 rounded-full px-20 gap-[2rem] flex">
          <Button
            text="Contact Us"
            className="w-fit text-[1.2rem] text-black bg-white leading-[2.4rem] px-5 font-normal tracking-wider"
          />
          <HoverButton
            text="About Us"
            className="w-fit text-[1.2rem] leading-[2.4rem] px-5 font-normal tracking-wider"
          />
        </div>
      </div>

      {/* <div className="bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-full px-8">
          <div className="flex justify-center space-x-3 mb-3">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full">
              Buy
            </button>
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full">
              Rent
            </button>
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full">
              Off Plan
            </button>
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full">
              Commercial
            </button>
          </div>

          <div className="flex items-center bg-white p-2 rounded-full space-x-2 shadow-md">
            <input
              type="text"
              placeholder="Search By Area Or Project"
              className="flex-1 px-4 py-2 rounded-full outline-none text-gray-700 placeholder-gray-500"
            />

            <select className="bg-transparent text-black font-semibold px-4 py-2 rounded-full outline-none">
              <option>Rent</option>
              <option>Buy</option>
            </select>

            <button className="bg-white px-4 py-2 rounded-full text-black font-semibold flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35m0 0A8.5 8.5 0 1011 19.5a8.5 8.5 0 005.65-2.85z"
                />
              </svg>
              Search
            </button>
          </div>
        </div> */}
    </div>
  );
};

export default Hero;
