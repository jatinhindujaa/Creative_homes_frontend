import React from "react";
import Hero from "./parts/Hero";
import Offplan_property from "./parts/Offplan_property";
import InterestSection from "../meettheteam/parts/GotQues";
import MarqueeSection from "../meettheteam/parts/marque";
import TopArea from "../news/parts/TopArea";

const OffPlan = () => {
   const title = "Off Plan Properties";
   const description = ` Our property specialists cover Dubai’s key communities, offering a range
        of services including Residential & Commercial Sales and Leasing,
        Off-Plan Investments, Property Management, and more. Whether you're
        looking to invest, buy, sell, or rent, our dedicated specialists are
        here to guide you through every step of the process.`;
  return (
    <div className="bg-[#282927] gap-2 flex items-center flex-col">
    <TopArea title={title} description={description} />
      <Offplan_property />
        <MarqueeSection />
        <InterestSection />
    </div>
  );
};

export default OffPlan;
