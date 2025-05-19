import React from "react";
import work from "../assets/working.png";
import Image from "next/image";

const Passionate = () => {
  return (
    <div className="bg-[#282927] flex max-lg:flex-col py-12 justify-center items-center ">
      <div className="max-lg:w-[100%] max-lg:justify-center w-[57%] text-center justify-start flex">
        <div className="w-[80%] ">
          <h1 className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] ">
            We are Passionate
          </h1>
          <span className=" leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Working With You
          </span>
          <p className="text-[#fff] max-md:text-[0.8rem] text-[1.4rem] pt-5">
            Discover the perfect property with our expert guidance and wide
            range of options. From luxurious city apartments to spacious family
            villas, we have something for everyone. Our team is dedicated to
            making your real estate journey smooth, efficient, and successful.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center max-lg:mt-8">
        <div
          className="max-xs:w-[250px] max-xs:h-[150px] xs:w-[320px] xs:h-[200px] md:w-[500px] lg:w-[380px] md:h-[300px] rounded-[20px] bg-center bg-cover"
          style={{ backgroundImage: `url(${work.src})` }}
        ></div>
      </div>
    </div>
  );
};

export default Passionate;
