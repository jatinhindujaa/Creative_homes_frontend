import React from "react";

const locations = [
  "Marina",
  "Dubai Hill Estate",
  "Dubai South",
  "Palm Al Jumeriah",
  "Jumeriah Golf Estate",
  "Emirate Hills",
  "Expo City",
  "Downtown Dubai",
  "Business Bay",
  "Meydan",
  "JVC",
];

const MarqueeSection = () => {
  return (
    <div className="bg-[#202120] flex gap-2 flex-col p-10 w-[80%] rounded-[30px] md:mb-0">
      <div className="flex justify-center">
        <span className="text-[#fff] text-[1.5rem] lg:text-[2.5rem] text-center">
          Explore{" "}
          <span className="leading-10 text-[1.5rem] lg:text-[2.5rem]  text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Exclusive Properties {""}
          </span>
          in Dubai
        </span>
      </div>
      <div className="relative overflow-hidden py-4">
        <div className="marquee-container group">
          <div className="marquee group-hover:[animation-play-state:paused]">
            {/* Duplicate items for smooth infinite loop */}
            {[...locations, ...locations].map((location, index) => (
              <div
                key={index}
                className="whitespace-nowrap mx-2 px-4 py-2 border border-white rounded-full text-white cursor-pointer hover:bg-white hover:text-black "
              >
                {location}
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add some padding if needed */}
      </div>
    </div>
  );
};

export default MarqueeSection;
