import React from "react";
import mortgage from "../assets/mortgage/mortgage.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";

const Mortgage_calculator = () => {
  return (
    <div className="w-[95%] mx-auto mt-12 flex flex-col lg:flex-row lg:space-x-4 xs:bg-[#202120] lg:bg-[transparent] rounded-2xl xs:p-[10px] lg:p-[0]">
      <div className="w-full lg:w-[45%] flex flex-col bg-[#202120] rounded-[10px] p-6 space-y-4 text-center lg:text-left">
        <div>
          <h2 className="text-[1.5rem] sm:text-[2.5rem] font-medium leading-[3.2rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold tracking-wider">
            MORTGAGE
          </h2>
          <h2 className="text-[1.5rem] sm:text-[2.5rem] font-medium leading-[1rem] tracking-wider text-white">
            CALCULATOR
          </h2>
        </div>

        <p className="text-[1rem] sm:text-[1.4rem] leading-[1.8rem] sm:leading-[2.4rem] pt-4 sm:pt-8 text-white">
          Your home-buying journey should be smooth and stress-free. Speak to
          our in-house mortgage team today and get access the best rates in the
          UAE.
        </p>
        <div className="flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 sm:flex hidden">
          <HoverButton
            text="Mortgage Calculator"
            className="w-full sm:w-fit text-[1.1rem] sm:text-[1.4rem] text-black bg-white leading-[2.4rem] px-5 py-2 font-normal tracking-wider"
          />
          <Button
            text="Speak To The Team"
            className="w-full sm:w-fit text-[1.1rem] sm:text-[1.4rem] leading-[2.4rem] px-5 py-2 font-normal tracking-wider"
          />
        </div>
      </div>
      <div className="w-full lg:w-[25%] h-[200px] md:h-[250px] lg:h-[477px] xl:h-[402px] relative">
        <Image
          src={mortgage.src}
          alt="mortgage"
          layout="fill"
          objectFit="cover"
          className="rounded-[10px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
      </div>
      <div className="w-full lg:w-[30%] flex-row lg:flex-col h-[300px] lg:h-[477px]  xl:h-[402px] gap-2 lg:gap:2 flex pt-2 lg:pt-0">
        <div className="h-[100%] lg:h-[60%] w-[60%] lg:w-[100%] relative">
          <Image
            src={mortgage.src}
            alt="mortgage"
            layout="fill"
            objectFit="cover"
            className="rounded-[10px]"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
        </div>
        <div className="lg:w-[100%] w-[40%] lg:h-[50%] h-[100%] lg:flex-row flex-col flex gap-2">
          <div className="h-[100%] lg:w-[50%] w-[100%] relative">
            <Image
              src={mortgage.src}
              alt="mortgage"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[10px]"></div>
          </div>
          <div className="h-[100%] lg:w-[50%] w-[100%]  relative">
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
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 sm:hidden">
        <HoverButton
          text="Mortgage Calculator"
          className="w-full sm:w-fit text-[1.1rem] sm:text-[1.4rem] text-black bg-white leading-[2.4rem] px-5 py-2 font-normal tracking-wider"
        />
        <Button
          text="Speak To The Team"
          className="w-full sm:w-fit text-[1.1rem] sm:text-[1.4rem] leading-[2.4rem] px-5 py-2 font-normal tracking-wider"
        />
      </div>
    </div>
  );
};

export default Mortgage_calculator;
