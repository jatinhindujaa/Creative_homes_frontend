import Image from 'next/image';
import React from 'react'
import Name from "../assets/11.png";
const ImageBox = ({title}) => {
  return (
    <div className=" bg-[#282927] flex flex-col items-center text-center justify-center gap-2 pt-20">
      <div className="relative w-[85%] h-[30rem] mt-10">
        <Image
          src={title?.multipleImages[0]}
          alt="The Elan"
          layout="fill"
          objectPosition="center"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex sm:flex-row flex-row gap-2 absolute inset-0 items-center justify-center">
          <h1 className="text-[#fff] lg:text-[2.5rem] text-[1.5rem]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ImageBox