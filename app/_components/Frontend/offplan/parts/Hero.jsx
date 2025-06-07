import React from "react";
import off from "../assets/off.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="relative h-[550px] flex flex-col items-center justify-center bg-black">
      {/* Background gradient overlay */}
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>

      {/* Background image */}
      <Image
        src={off.src}
        alt="The Elan"
        layout="fill"
        objectPosition="center"
        priority
      />
      {/* <div className="relative -bottom-[13rem] z-10 lg:flex hidden w-[77%] flex-col items-center justify-center text-white text-center px-4 gap-4">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg py-5 rounded-full px-6 flex gap-4 w-full">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="City, Building or Community"
              className="w-full bg-white text-black placeholder-black rounded-l-full py-2 px-4 pl-10 cursor-pointer focus:outline-none"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
          </div>

          <div className="relative">
            <select
              className="bg-white text-black  py-2 pl-4 pr-8 cursor-pointer appearance-none focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Property Type
              </option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="townhouse">Townhouse</option>
              <option value="penthouse">Penthouse</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none"
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 8L12 1" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative">
            <select
              className="bg-white text-black  py-2 px-4 cursor-pointer appearance-none focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Min Price
              </option>
              <option value="500000">500,000</option>
              <option value="1000000">1,000,000</option>
              <option value="1500000">1,500,000</option>
              <option value="2000000">2,000,000</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none"
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 8L12 1" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative">
            <select
              className="bg-white text-black  py-2 px-4 cursor-pointer appearance-none focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Max Price
              </option>
              <option value="1000000">1,000,000</option>
              <option value="2000000">2,000,000</option>
              <option value="3000000">3,000,000</option>
              <option value="4000000">4,000,000</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none"
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 8L12 1" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative">
            <select
              className="bg-white text-black  py-2 pl-4 px-8 cursor-pointer appearance-none focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Beds
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none"
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 8L12 1" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative">
            <select
              className="bg-white text-black  py-2 pl-4 px-8  cursor-pointer appearance-none focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Bath
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none"
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 8L12 1" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative">
            <select
              className="bg-white text-black rounded-r-full py-2 px-4 cursor-pointer appearance-none focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Developer
              </option>
              <option value="nikhil">Nikhil</option>
              <option value="develperx">Developer X</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none"
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 8L12 1" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
