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
    </div>
  );
};

export default Hero;
