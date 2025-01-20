import React from "react";
import work_banner from "../assets/info/work_with_us.png";
import Image from "next/image";

const Info = () => {
  return (
    <div className="relative h-[450px] w-[90%] mx-auto mt-8">
      <Image
        src={work_banner.src}
        alt="Work with us"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-[20px]"
      />
      <div className="absolute inset-0 flex flex-col ">
        <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 relative z-10 flex flex-col items-center justify-around h-[100%] flex-wrap">
          <span className="text-[3.5rem] leading-[4.3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Why Work With Us
          </span>
          <div className="text-white flex w-[90%] justify-around">
            <div className="flex flex-col ">
              <span className="text-[3.5rem] leading-[4.3rem] font-bold ">
                2.5 B+
              </span>
              <span className="text-[1.9rem] leading-[2.4rem]">
                Sales Volume
              </span>
            </div>
            <div className="border-r-2"></div>
            <div className="flex flex-col ">
              <span className="text-[3.5rem] leading-[4.3rem] font-bold ">
                200 K+
              </span>
              <span className="text-[1.9rem] leading-[2.4rem]">
                Email Subscribers
              </span>
            </div>
            <div className="border-r-2"></div>
            <div className="flex flex-col ">
              <span className="text-[3.5rem] leading-[4.3rem] font-bold ">
                20.2 K+
              </span>
              <span className="text-[1.9rem] leading-[2.4rem]">
                Social Media Followers
              </span>
            </div>
            <div className="border-r-2"></div>
            <div className="flex flex-col ">
              <span className="text-[3.5rem] leading-[4.3rem] font-bold ">
                100+
              </span>
              <span className="text-[1.9rem] leading-[2.4rem]">
                Active agents
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
