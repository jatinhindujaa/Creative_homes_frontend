import React from "react";
import mortgage from "../assets/mortgage/mortgage.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";

const Mortgage_calculator = () => {
  return (
    <div className="w-[95%] mx-auto flex space-x-4  mt-12 ">
      <div className="w-[45%] flex flex-col bg-[#202120] rounded-[10px] p-4 space-y-4">
        <div className="flex flex-col p-3">
          <span className="text-[2.5rem] font-medium leading-[3.2rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold tracking-wider">
            MORTGAGE
          </span>
          <span className="text-[2.5rem] font-medium leading-[3.2rem] tracking-wider">
            CALCULATOR
          </span>
        </div>

        <p className="text-[1.4rem] leading-[2.4rem] pt-12 pl-3">
          Your home-buying journey should be smooth and stress-free. Speak to
          our in-house mortgage team today and get access the best rates in the
          UAE.
        </p>
        <div className="flex-row flex justify-between pl-3">
          <HoverButton
            text="Mortgage Calculator"
            className="w-fit text-[1.4rem] text-black bg-white leading-[2.4rem] px-5 py-1 font-normal tracking-wider"
          />
          <Button
            text="Speak to the team"
            className="w-fit text-[1.4rem] leading-[2.4rem] px-5 py-1 font-normal tracking-wider"
          />
        </div>
      </div>
      <div className="w-[25%] relative">
        <Image
          src={mortgage.src}
          alt="mortgage"
          layout="fill"
          objectFit="cover"
          className="rounded-[10px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
      </div>
      <div className="w-[30%] flex-col gap-2 flex">
        <div className="h-[50%] relative">
          <Image
            src={mortgage.src}
            alt="mortgage"
            layout="fill"
            objectFit="cover"
            className="rounded-[10px]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
        </div>
        <div className="w-[100%] h-[50%] flex-row flex gap-2">
          <div className="h-[100%] w-[50%] relative">
            <Image
              src={mortgage.src}
              alt="mortgage"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
          </div>
          <div className="h-[100%] w-[50%] relative">
            <Image
              src={mortgage.src}
              alt="mortgage"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mortgage_calculator;
