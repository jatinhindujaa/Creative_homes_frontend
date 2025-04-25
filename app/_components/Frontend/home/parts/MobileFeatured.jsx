"use client";
import Image from "next/image";
import Slider from "react-slick";
import { FcGoogle } from "react-icons/fc";
import Button from "@/app/_components/ui/Button";

import Featured_1 from "../assets/featured/featured_1.png";
import Featured_2 from "../assets/featured/featured_2.png";
import Featured_3 from "../assets/featured/featured_3.png";
import Featured_4 from "../assets/featured/featured_4.png";
import Featured_5 from "../assets/featured/featured_5.png";

const featuredData = [
  { src: Featured_1, title: "The Elan", price: "AED 15,900,000" },
  { src: Featured_2, title: "Harmony", price: "AED 20,600,000" },
  { src: Featured_3, title: "The Sundials", price: "AED 29,800,000" },
  { src: Featured_4, title: "Aseel", price: "AED 24,400,000" },
  { src: Featured_5, title: "Mira", price: "AED 35,100,000" },
];

const sliderSettings = {
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 1000,
  infinite: true,
  speed: 500,
  dots:true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function MobileFeatured() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-10 bg-[#282927] text-white md:hidden relative">
      <style jsx global>{`
        .slick-dots {
          position: relative;
          bottom: 0px;
          margin-top: 30px;
          text-align: center;
          right: 0px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #929492;
        }
        .slick-dots li.slick-active button:before {
          color: white; /* or #333 */
        }
      `}</style>
      {/* Top Banner */}
      <div className="bg-[#202120] text-white px-5 py-4 rounded-xl border border-[#FCD15B] text-center w-[95%] max-w-md shadow-md  absolute -top-[6rem]">
        <p className="text-[1.2rem] leading-tight">
          <span className="text-[#FCD15B] font-semibold">AWARDED</span> TOP
          AGENT:
          <span className="text-[#A97C50] font-semibold"> EXCELLENCE </span>
          AT TOWN SQUARE <span className="text-[#FCD15B]">DUBAI</span>
        </p>
        <div className="flex items-center justify-center mt-2 space-x-2">
          <FcGoogle size={30} />
          <p className="text-[1rem] font-medium">
            Reviews <span className="text-gray-300">11,000+</span>
          </p>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-10 mb-4">
        <h2 className="text-[1.5rem] font-semibold">
          FEATURED{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#B08D57] to-[#FFD700]">
            PROPERTIES
          </span>
        </h2>
      </div>

      {/* Mobile Slider */}
      <div className="w-full max-w-sm block md:hidden">
        <Slider {...sliderSettings}>
          {featuredData.map((item, index) => (
            <div key={index} className="p-2">
              <div className="relative w-full h-[18rem] rounded-[20px] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[20px]"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm text-center">
                  <span className="text-white font-medium text-lg">
                    {item.title}
                  </span>
                  <span className="text-white text-lg">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Static Grid for Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-10 w-[90%]">
        {featuredData.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="relative h-[18rem] w-full rounded-[20px] overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-[20px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm text-center">
              <span className="text-white font-medium text-lg">
                {item.title}
              </span>
              <span className="text-white text-lg">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6">
        <Button
          text="VIEW ALL"
          className="text-white border border-white px-6 py-2 rounded-full text-sm"
        />
      </div>
    </div>
  );
}
