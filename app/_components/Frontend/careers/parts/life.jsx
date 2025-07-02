"use client";
import React from "react";

const CareersSection = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-4 sm:text-4xl">
          Careers at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold leading-[2.5rem]">
            Creative Homes
          </span>{" "}
          Properties
        </h2>
        <p className="text-lg text-white mb-6">
          Move in the right direction and advance with a company that values and
          fosters career growth.
        </p>
        {/* <button
          className="bg-white text-black text-xl py-2 px-6 rounded-full hover:bg-gray-800 transition"
          onClick={() => (window.location.href = "/apply-now")}
        >
          Apply now
        </button> */}
      </div>
    </div>
  );
};

export default CareersSection;
