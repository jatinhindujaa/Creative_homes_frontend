
import React from "react";

const Why = () => {
  const benefits = [
    "Eligibility For Golden Visa",
    "No Property Tax",
    "Quick Transactions",
    "Flexible Payment Plans",
    "Investor-Friendly Policies",
    "Secured Funds By Govt.",
  ];

  const staggerOffsets = [
    "translate-y-6",
    "translate-y-0",
    "-translate-y-6",
    "-translate-y-6",
    "-translate-y-0",
    "translate-y-6",
  ];

  return (
    <>
      <div className=" flex justify-center">
        <span className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] text-center">
          Why Invest{" "}
          <span className="leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            In Dubai
          </span>
        </span>
      </div>

      <div className="max-lg:hidden relative py-12 flex justify-center overflow-hidden">
        <div className="relative flex gap-3 flex-wrap justify-center">
          {benefits.map((text, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${staggerOffsets[index]} w-[130px] md:w-[180px] lg:w-[200px]`}
            >
              {/* Card container with overflow-hidden to keep rounded corners clean */}
              <div className="relative group w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-[30px]">
                {/* Background Image */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/dubai.png')",
                    backgroundPosition: `${index * 20}% center`,
                  }}
                />

                {/* Black overlay with opacity transition */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Text - Outside the image card, centered */}
              <p className="mt-2 text-white text-center text-xs md:text-sm font-light">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        {/* Mobile Section with 3 cards per row */}
        <div className="grid grid-cols-3 gap-4 m-[13px]">
          {benefits.map((text, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-full`}
            >
              {/* Card container with overflow-hidden to keep rounded corners clean */}
              <div className="relative group w-full h-[140px] md:h-[250px] lg:h-[300px] overflow-hidden rounded-[20px]">
                {/* Background Image */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/dubai.png')",
                    backgroundPosition: `${index * 20}% center`,
                  }}
                />

                {/* Black overlay with opacity transition */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Text - Outside the image card, centered */}
              <p className="mt-2 text-white text-center text-xs md:text-sm font-light">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Why;
