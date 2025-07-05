import Image from "next/image";
import React from "react";
import Phone from "../assets/Vector.png";
import map from "../assets/Map.png";
import email from "../assets/Vector-1.png";

const GetTouch = () => {
  return (
    <>
      <p className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] text-center ">
        Get in Touch{" "}
        <span className=" leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          With Us !
        </span>
      </p>
      <div className="py-12 pt-5 max-md:py-0 md:w-[80%]">
        <div className="flex max-md:flex-col max-md:gap-8 items-center justify-evenly border-[#8e7b4f] py-8">
          {/* Phone Section */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex justify-center mb-4 w-[48px] h-[80px]">
              {/* Replace with your actual phone icon */}
              <Image
                src={Phone.src} // Place your phone icon in /public folder
                alt="Phone Icon"
                fill
                priority
              />
            </div>
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b58e31]">
              PHONE
            </h3>
            <p className="text-white mt-2 text-[0.9rem]">
              <span className="font-medium">Mobile :</span> +971 4 238 7671
            </p>
          </div>

          {/* Divider Line */}
          <div className="max-md:h-px max-md:w-80 h-24 w-px bg-[#8e7b4f]"></div>

          {/* Address Section */}
          <div className="flex flex-col text-center items-center w-[30%] max-md:w-[80%]">
            <div className="relative flex justify-center mb-4 max-md:w-[90px] max-md:h-[90px] w-[48px] h-[48px]">
              {/* Replace with your actual location icon */}
              <Image
                src={map.src} // Place your phone icon in /public folder
                alt="map Icon"
                fill
                priority
              />
            </div>
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b58e31]">
              ADDRESS
            </h3>
            <p className="text-white mt-2 leading-relaxed text-[0.9rem]">
              Office 3107, BLDG 3, Gold & Diamond Park, Sheikh Zayed Road 37468
              Dubai, United Arab Emirates
            </p>
          </div>

          <div className="max-md:h-px max-md:w-80 h-24 w-px bg-[#8e7b4f]"></div>

          {/* Email Section */}
          <div className="flex flex-col items-center text-center">
            <div className="relative  mb-4 max-md:w-[80px] max-md:h-[62px] w-[48px] h-[37px]">
              {/* Replace with your actual email icon */}
              <Image
                src={email.src} // Place your phone icon in /public folder
                alt="Email Icon"
                fill
                priority
              />
            </div>
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b58e31]">
              EMAIL
            </h3>
            <p className="text-white mt-2 text-[0.9rem]">
              info@creativehomes.ae
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetTouch;
