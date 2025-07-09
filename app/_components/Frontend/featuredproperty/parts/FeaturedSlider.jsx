
"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image"; // For optimal image loading
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_1 from "../assets/neighbourhood/img_1.png";
import { useNews } from "@/app/_components/admin/news/useNews";
import Spinner from "@/app/_components/ui/Spinner";
const FeaturedSlider = () => {
  const {data, isLoading} = useNews()
  console.log("Data", data);
  const sliderRef = useRef(null);
  const [arrowStyle1, setArrowStyle1] = useState("text-white text-2xl");
  const [arrowStyle2, setArrowStyle2] = useState("text-white text-2xl");
   const settings = {
     dots: false,
     infinite: true,
     speed: 500,
     arrows: false,
    //  autoplay: true,
     autoplaySpeed: 1000,
     slidesToShow: 1,
     slidesToScroll: 1,
     responsive: [
       {
         breakpoint: 768,
         settings: { slidesToShow: 2 },
       },
       {
         breakpoint: 480,
         settings: { slidesToShow: 1 },
       },
     ],
   };
if (isLoading) return <Spinner />;
  return (
   
    <>
      <div className="w-[90%] mx-auto gap-2 text-white flex flex-row justify-center items-center text-[2.5rem] leading-[3.3rem] font-semibold mt-2">
        <span>FEATURED {""}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          {""} INSIGHTS
        </span>
      </div>
      <div className="max-w-7xl md:w-[80%] relative my-10">
        <Slider {...settings} ref={sliderRef}>
          {data.slice(0,4).map((logo, i) => (
            <div key={i} className="px-3">
              <div className="flex flex-row">
                <div className="rounded-xl flex  items-center justify-center h-37 shadow-sm w-[50%]">
                  <Image
                    src={logo.multipleImages[0]}
                    alt={logo.alt}
                    width={550}
                    height={150}
                    objectFit="contain"
                  />
                </div>
                <div className="text-white w-[50%] text-3xl p-2 rounded">
                  <p className="text-xs font-normal mb-3">{logo.date}</p>
                  {logo.title} <br />
                  <p
                    className="text-xs font-normal mt-3"
                    dangerouslySetInnerHTML={{ __html: logo?.description.slice(0,1500)}}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-[90%] right-1 flex gap-2">
          <div
            className="border-2 border-white rounded-full flex justify-center items-center p-0.5 cursor-pointer hover:bg-transparent"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoIosArrowBack
              className={arrowStyle1}
              onMouseEnter={() => setArrowStyle1("text-gray-400 text-2xl")}
              onMouseLeave={() => setArrowStyle1("text-white text-2xl")}
            />
          </div>
        </div>

        {/* Right Arrow */}
        <div className="absolute bottom-[90%] -right-9 flex gap-2">
          <div
            className="border-2 border-white rounded-full flex justify-center items-center p-0.5 cursor-pointer hover:bg-transparent"
            onClick={() => sliderRef.current.slickNext()}
          >
            <IoIosArrowForward
              className={arrowStyle2}
              onMouseEnter={() => setArrowStyle2("text-gray-400 text-2xl")}
              onMouseLeave={() => setArrowStyle2("text-white text-2xl")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedSlider;
