import React from "react";
import Property from "../assets/property.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";

const Hero = () => {
  return (
    <div className="relative md:flex h-[70vh] hidden flex-col items-center  bg-black">
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
      <div className="h-[70vh] w-full relative">
        <Image
          src={Property.src}
          alt="The Elan"
          layout="fill"
          objectPosition="top"
          priority
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default Hero;
