"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import img_1 from "../assets/neighbourhood/img_1.png";
import img_2 from "../assets/neighbourhood/img_2.png";
import img_3 from "../assets/neighbourhood/img_3.png";
import img_4 from "../assets/neighbourhood/img_4.png";
import { useRouter } from "next/navigation";
import { PlayCircle } from "lucide-react"; // Optional: Use Heroicons or any SVG if needed

const MobileProp = () => {
  const router = useRouter();
  const images = [
     { img: img_1, title: "Dubai Marina", listings: 18, defaultWidth: "25%" },
     { img: img_2, title: "Downtown Dubai", listings: 12, defaultWidth: "30%" },
     { img: img_3, title: "Palm Jumeirah", listings: 23, defaultWidth: "20%" },
     { img: img_4, title: "Jumeirah Beach", listings: 31, defaultWidth: "10%" },
   ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };

  const handleOpenModal = (url) => {
    router.push(url);
  };

  return (
    <div className="block md:hidden w-full px-4 mt-10">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[1.2rem] leading-[3.3rem] font-semibold mt-6">
        <span className="leading-4">BEST NEIGHBOURHOODS IN</span>
        <span className=" leading-10 text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          DUBAI
        </span>
      </div>
      <div className="w-full h-[40vh]">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-[40vh] rounded-md overflow-hidden bg-[#476C9B]">
                <Image
                  src={item.img}
                  alt={`property-${index}`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute w-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-2 rounded-full transition flex flex-col items-center gap-1">
                  <span>{item.title}</span>
                  <button className="text-[1rem] font-medium leading-[1.6rem] w-[120px] px-2 border-[1.5px] bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] border-white hover:bg-white hover:text-black rounded-[41px]">
                    {item.listings} LISTINGS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MobileProp;
