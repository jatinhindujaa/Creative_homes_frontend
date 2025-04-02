import React from "react";
import Hero from "./parts/Hero";
import Offplan_property from "./parts/Offplan_property";
import InterestSection from "../meettheteam/parts/GotQues";
import MarqueeSection from "../meettheteam/parts/marque";

const OffPlan = () => {
  return (
    <>
      <Hero />
      <Offplan_property />
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
        <MarqueeSection />
        <InterestSection />
      </div>
    </>
  );
};

export default OffPlan;
