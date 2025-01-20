import React from "react";
import mortgage from "../assets/mortgage/mortgage.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";

const Mortgage_calculator = () => {
  return (
    <div className="w-[90%] mx-auto flex space-x-4  mt-12 ">
      <div className="w-[40%] flex flex-col bg-[#202120] rounded-[10px] p-4 space-y-4">
        <div className="flex flex-col">
          <span className="text-[3.5rem] font-medium leading-[4.3rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            MORTGAGE
          </span>
          <span className="text-[3.5rem] font-medium leading-[4.3rem] ">
            CALCULATOR
          </span>
        </div>

        <p className="text-[1.9rem] leading-[2.4rem]">
          Your home-buying journey should be smooth and stress-free. Speak to
          our in-house mortgage team today and get access the best rates in the
          UAE.
        </p>

        <Button
          text="Mortgage Calculator"
          className="w-fit text-[1.9rem] leading-[2.4rem] p-3 font-normal"
        />
        <Button
          text="Speak to the team"
          className="w-fit text-[1.9rem] leading-[2.4rem] p-3 font-normal"
        />
      </div>
      <div className="w-[60%] relative">
        <Image
          src={mortgage.src}
          alt="mortgage"
          layout="fill"
          objectFit="cover"
          className="rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default Mortgage_calculator;
