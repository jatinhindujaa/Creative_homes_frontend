import React from "react";
import Name from "../assets/hero/Creative.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Night.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>

      <div className="relative z-10 flex w-3/5 flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 ">
          Find Something Extraordinary with
        </h1>
        <div className="relative w-full h-36">
          <Image
            src={Name.src}
            alt="The Elan"
            layout="fill"
            objectPosition="center"
            priority
            className="rounded-[20px]"
          />
        </div>
        {/* Buttons */}
        {/* <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
            Buy
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
            Rent
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
            New Projects
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
            Commercial
          </button>
        </div> */}

        {/* Search Bar */}
        {/* <div className="mt-8 w-full max-w-3xl bg-white text-black rounded-full flex items-center px-4 py-2 shadow-lg">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-full focus:outline-none"
            placeholder="Search By Area or Project"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full">
            Search
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
