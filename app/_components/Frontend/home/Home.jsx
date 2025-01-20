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

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Mortgage_calculator />
      <Neighbourhoods />
      <Projects />
      <Info />
      <Agents />
      <Property />
      <News />
    </div>
  );
};

export default Home;
