
import React from "react";
import News from "../assets/2.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";

const Hero = ({data}) => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
      <Image
        src={data?.multipleImages[0]}
        alt="The Elan"
        layout="fill"
        objectPosition="center"
        priority
        className="object-cover"
      />
    </div>
  );
};

export default Hero;


