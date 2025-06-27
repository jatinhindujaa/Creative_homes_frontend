"use client"

import React from "react";
import Name from "../assets/1.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";
import sm_banner from "../assets/1.png";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();
  return (
    <div className="relative h-screen  flex flex-col items-center justify-center bg-black">
      <div className="max-md:hidden">
        <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
        <Image
          src={Name.src}
          alt="The Elan"
          layout="fill"
          objectPosition="center"
          priority
        />
      </div>
      <div className="md:hidden">
        <Image
          src={sm_banner.src}
          alt="The Elan"
          layout="fill"
          objectPosition="center"
          priority
        />
      </div>

      <div className="relative z-10 flex sm:w-[77%] w-[100%] flex-col items-center justify-center text-white text-center px-4 gap-4">
        <h1 className="max-md:text-[1.5rem] text-[3.1rem] font-normal uppercase">
          Featured Properties, Agents & Insights
        </h1>
        <h1 className="max-md:text-[0.9rem] text-xl font-normal">
          Discover top properties, trusted agents, and expert insights all in
          one place. Find your dream home, make smart investments, and navigate
          the real estate market with confidence.
        </h1>
        <div className="bg-white-glass-gradient border border-white-glass-gradient backdrop-blur-sm py-5 rounded-full max-md:px-4 max-md:py-2 px-10 gap-4 flex">
          <Button
            text="Properties"
            onClick={() => router.push("/property")}
            className="w-fit text-[1rem] text-black bg-white leading-[2.4rem] px-5 font-normal tracking-wider"
          />
          <HoverButton
            text="Off Plan"
            onClick={() => router.push("/off-plan-properties")}
            className="w-fit text-[1rem] leading-[2.4rem] px-5 font-normal tracking-wider"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
