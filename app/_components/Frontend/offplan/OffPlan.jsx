import React from "react";
import Hero from "./parts/Hero";
import Offplan_property from "./parts/Offplan_property";
import InterestSection from "../meettheteam/parts/GotQues";
import MarqueeSection from "../meettheteam/parts/marque";
import TopArea from "../news/parts/TopArea";

const OffPlan = () => {
   const title = "Best Off-Plan Properties for Sale in Dubai";
   const description = `Explore exclusive off-plan investment opportunities across Dubai's most promising and iconic communities. Secure your future asset in upcoming developments with high capital appreciation potential. Our dedicated specialists provide expert guidance through the entire off-plan buying process, from selection to handover.`;
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
