import React from "react";
import Hero from "./parts/Hero";
import Featured from "./parts/Featured";
import Mortgage_calculator from "./parts/Mortgage_calculator";
import Neighbourhoods from "./parts/Neighbourhoods";
import Projects from "./parts/Projects";
import Info from "./parts/Info";
import Agents from "./parts/Agents";
import Property from "./parts/Property";
import News from "./parts/News";
import work_banner from "./assets/info/work_with_us.jpg";
import Image from "next/image";
import MobileFeatured from "./parts/MobileFeatured";
import MobileProp from "./parts/MobileProp";

const Home = () => {
  return (
    <div className="flex flex-col">
      
      <Hero />
      <Featured />
      <MobileFeatured/>
      <Mortgage_calculator />
      <Neighbourhoods />
      <MobileProp/>
      <Projects />
      <Info />
      <Agents />
      <Property />
      <News />
    </div>
  );
};

export default Home;
