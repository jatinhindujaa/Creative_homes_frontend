import Image from 'next/image';
import React from 'react'
import Name from "../assets/11.png";
const ImageBox = () => {
  return (
    <div className=" bg-[#282927] flex flex-col items-center text-center justify-center gap-2 pt-20">
      <div className="flex flex-row gap-2 ">
        <h1 className="text-[#fff] lg:text-[2.5rem] text-[1.5rem]">
          How To Buy A Property In
        </h1>
        <h1 className="lg:text-[2.5rem] text-[1.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          {""} Dubai
        </h1>
      </div>
      <div className="relative w-[80%] h-[30rem]">
        {/* Image */}
        <Image src={Name} alt={Name} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
}

export default ImageBox