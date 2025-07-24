import React from "react";
import Hero from "./parts/Hero";
import Passionate from "./parts/Passionate";
import Why from "./parts/Why";
import GotQues from "./parts/GotQues";
import GetTouch from "./parts/GetTouch";
import Map from "./parts/Map";
import TopArea from "../news/parts/TopArea";

const Contact = () => {
  const title = "Contact Creative Homes: Your Trusted Dubai Real Estate Agency";
  const description = `Ready to discuss your property needs in Dubai? Reach out to our friendly and knowledgeable real estate team for personalized advice, property inquiries, or any assistance you require. We are committed to providing prompt support and helping you achieve your real estate goals.`;
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
