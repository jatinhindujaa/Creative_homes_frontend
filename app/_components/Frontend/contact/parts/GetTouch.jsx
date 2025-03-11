import Image from 'next/image';
import React from 'react'
import Phone from "../assets/Vector.png"
import map from "../assets/Map.png";
import email from "../assets/Vector-1.png";

const GetTouch = () => {
  return (
    <>
      <p className="text-[#fff] text-[2.5rem] text-center ">
        Get in Touch{" "}
        <span className=" leading-10 text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          With us !
        </span>
      </p>
      <div className="py-12">
        <div className="flex items-center justify-evenly border-[#8e7b4f] py-8">
          {/* Phone Section */}
          <div className=" text-center">
            <div className="flex justify-center mb-4">
              {/* Replace with your actual phone icon */}
              <Image
                src={Phone.src} // Place your phone icon in /public folder
                alt="Phone Icon"
                width={48}
                height={48}
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
          <div className="h-24 w-px bg-[#8e7b4f]"></div>

          {/* Address Section */}
          <div className=" text-center w-[30%]">
            <div className="flex justify-center mb-4">
              {/* Replace with your actual location icon */}
              <Image
                src={map.src} // Place your phone icon in /public folder
                alt="Phone Icon"
                width={48}
                height={48}
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

          <div className="h-24 w-px bg-[#8e7b4f]"></div>

          {/* Email Section */}
          <div className=" text-center">
            <div className="flex justify-center mb-4">
              {/* Replace with your actual email icon */}
              <Image
                src={email.src} // Place your phone icon in /public folder
                alt="Phone Icon"
                width={48}
                height={48}
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
}

export default GetTouch