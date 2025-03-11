import React from "react";
import work from "../assets/working.png";
import Image from "next/image";

const Passionate = () => {
  return (
    <div className="bg-[#282927] flex flex-row h-[65vh] justify-center items-center">
      <div className="w-[57%] text-center justify-start flex">
        <div className="w-[80%]">
          <h1 className="text-[#fff] text-[2.5rem] ">We are Passionate</h1>
          <span className=" leading-10 text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Working With You
          </span>
          <p className="text-[#fff] text-[1.4rem] pt-5">
            Discover your ideal property with our extensive listings and expert
            guidance. From luxurious city apartments to spacious family villas,
            we cater to all your real estate needs in Dubai. Let us make your
            property journey smooth, efficient, and successful.
          </p>
        </div>
      </div>
      <div className="h-[67%] w-[30%] relative">
        <Image
          src={work.src}
          alt={work}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default Passionate;
