import React from "react";
import Name from "../assets/hero/Creative.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Night.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex w-3/5 flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 ">
          Find Something Extraordinary with
        </h1>
        <div className="relative w-full h-36">
          <Image
            src={Name.src}
            alt="The Elan"
            layout="fill"
            objectPosition="center"
            priority
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
