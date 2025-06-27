"use client"
import React from "react";
import News from "../assets/news.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";
import { useRouter } from "next/navigation";

const Hero = () => {
      const router = useRouter();
  
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
      <Image
        src={News.src}
        alt="The Elan"
        layout="fill"
        objectPosition="center"
        priority
        className="object-cover"
      />
      <div className="relative z-10 flex w-[100%] sm:w-[77%] flex-col items-center justify-center text-white text-center px-4 gap-4">
        {/* Title */}
        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] font-normal uppercase">
          Real estate insights
        </h1>
        {/* Description */}
        <h1 className="text-base sm:text-lg md:text-xl font-normal max-w-[80%] mx-auto">
          Explore the best properties, reliable agents, and expert advice all in
          one spot. Whether you're searching for your perfect home or making a
          savvy investment, we’re here to help you confidently navigate the real
          estate market.
        </h1>
        {/* Button Section */}
        {/* <div className="bg-white bg-opacity-20 backdrop-blur-lg py-5 rounded-full px-8 sm:px-20 gap-[2rem] flex flex-col sm:flex-row sm:gap-5 md:gap-10">
          <Button
            text="Properties"
            className="w-full sm:w-fit text-[1rem] sm:text-[1.2rem] text-black bg-white leading-[2.4rem] px-6 py-3 font-normal tracking-wider"
          />
          <HoverButton
            text="Off plan"
            className="w-full sm:w-fit text-[1rem] sm:text-[1.2rem] leading-[2.4rem] px-6 py-3 font-normal tracking-wider"
          />
        </div> */}
        <div className="bg-white bg-opacity-20 w-[100%] xl:w-[50%] md:w-[70%] justify-center backdrop-blur-lg py-5 rounded-full lg:px-20 px-1 gap-[2rem] flex">
          <Button
            text="Properties"
            onClick={() => router.push("/property")}
            className="w-fit text-[1rem] text-black bg-white leading-[2.4rem] px-5 font-normal tracking-wider"
          />
          <HoverButton
            text="Off plan"
            className="w-fit text-[1rem] leading-[2.4rem] px-5 font-normal tracking-wider"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;


