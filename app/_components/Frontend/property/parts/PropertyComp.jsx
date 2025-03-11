import Image from 'next/image';
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import villah from "../assets/villah.png";

const PropertyComp = () => {
  return (
    <div className="flex w-[100%] gap-2 p-6">
      <div className="w-[35%] relative">
        <Image
          src={villah.src}
          alt="mortgage"
          layout="fill"
          objectFit="cover"
          className="rounded-[10px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
      </div>
      <div className="w-[10%] flex-col gap-2 flex">
        <div className=" h-[100%] flex-col flex gap-2">
          <div className="h-[33%]  relative">
            <Image
              src={villah.src}
              alt="mortgage"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
          </div>
          <div className="h-[33%]  relative">
            <Image
              src={villah.src}
              alt="mortgage"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
          </div>
          <div className="h-[33%]  relative">
            <Image
              src={villah.src}
              alt="mortgage"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        <p>AED 29,950,000</p>
        <p>Upgraded | Three Bedroom | Exclusive</p>
        <span className="flex flex-row items-center">
          <IoLocationOutline size={15} />
          <span>The Sundials, Jumeirah Golf Estates, Dubai</span>
        </span>
      </div>
    </div>
  );
}

export default PropertyComp