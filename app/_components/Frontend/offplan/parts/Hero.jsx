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
    </div>
  );
};

export default Hero;
