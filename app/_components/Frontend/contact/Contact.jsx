import React from "react";
import Hero from "./parts/Hero";
import Passionate from "./parts/Passionate";
import Why from "./parts/Why";
import GotQues from "./parts/GotQues";
import GetTouch from "./parts/GetTouch";
import Map from "./parts/Map";
import TopArea from "../news/parts/TopArea";

const Contact = () => {
  const title = "Contact US";
  const description = `Need expert advice? Whether you’re exploring new investment options or
          seeking advice on the best property deals, our experienced team is
          here to help you with all your property needs.`;
  return (
    <>
      {/* <Hero /> */}
      <div className="bg-[#282927] gap-2 flex flex-col items-center">
        <TopArea title={title} description={description} />
        <Passionate />
        <Why />
        <GotQues />
        <GetTouch />
        <Map />
      </div>
    </>
  );
};

export default Contact;
