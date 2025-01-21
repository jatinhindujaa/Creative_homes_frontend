import React from "react";
import property_1 from "../assets/property/property_1.png";
import property_2 from "../assets/property/property_2.png";
import property_3 from "../assets/property/property_3.png";
import Image from "next/image";

const Property = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[3.5rem] leading-[4.3rem] mt-4">
        <span>LIST YOUR </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          PROPERTY
        </span>
      </div>
      <div className="w-[90%] mx-auto flex space-x-20">
        <div className="h-[800px] w-[33.33%] flex items-end">
          <div className="relative w-full h-[562px] hover:motion-scale-out-105">
            <Image
              src={property_1.src}
              alt="Apartments"
              width={487}
              height={562}
              objectPosition="center"
              className="rounded-t-[300px] rounded-b-[20px]"
            />
            <div className="absolute h-[83%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-all duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
              <span className="text-white text-[1.9rem] leading-[2.4rem]">
                Apartments
              </span>
            </div>
          </div>
        </div>
        <div className="h-[800px] w-[33.33%] flex flex-col top-14 relative">
          <div className="h-[70%]">
            <div className="relative w-full h-[562px] hover:motion-scale-out-105">
              <Image
                src={property_2.src}
                alt="Mansions/villas/Penthouses"
                width={487}
                height={562}
                objectPosition="center"
                className="rounded-t-[300px] rounded-b-[20px]"
              />
              <div className="absolute h-[83%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
                <span className="text-white text-[1.9rem] leading-[2.4rem]">
                  Mansions/villas/Penthouses
                </span>
              </div>
            </div>
          </div>
          <div className="h-[30%] w-full flex flex-col justify-start items-center space-y-12 -top-12 relative">
            <span className="text-[1.4rem] leading-[2.3rem]">
              Get the right valuation for your property
            </span>
            <button className="text-[1.3rem] font-normal leading-[1.6rem] w-fit p-3 border-[1.5px] border-white hover:bg-white hover:text-black rounded-[41px]">
              Submit Property
            </button>
          </div>
        </div>
        <div className="h-[800px] w-[33.33%] flex items-end">
          <div className="relative w-full h-[562px] hover:motion-scale-out-105">
            <Image
              src={property_3.src}
              alt="Townhouses"
              width={487}
              height={562}
              objectPosition="center"
              className="rounded-t-[300px] rounded-b-[20px]"
            />
            <div className="absolute h-[83%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
              <span className="text-white text-[1.9rem] leading-[2.4rem]">
                Townhouses
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
