// "use client"
// import React, { useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image"; // For optimal image loading
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img_1 from "../assets/neighbourhood/img_1.png";

// const FeaturedSlider = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     beforeChange: (current, next) => setActiveSlide(next),
//     customPaging: (i) => (
//       <span
//         className={`w-2.5 h-2.5 mx-1 rounded-full ${
//           i === activeSlide ? "bg-white" : "bg-gray-500"
//         }`}
//       ></span>
//     ),
//   };

//   return (
//     <div className="relative">
//       <Slider {...settings}>
//         {/* Add your slide items here */}
//         <div className="relative">
//           <Image
//             src={img_1}
//             alt="Slide 1"
//             layout="responsive"
//             width={1200}
//             height={500}
//           />
//           <div className="absolute bottom-4 left-4 text-white text-lg bg-black p-2 rounded">
//             Why invest in Palm Jebel Ali?
//           </div>
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>
//     </div>
//   );
// };

// export default FeaturedSlider;
"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image"; // For optimal image loading
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_1 from "../assets/neighbourhood/img_1.png";
const sliderItems = [img_1, img_1, img_1, img_1, img_1, img_1, img_1];
const FeaturedSlider = () => {
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

  return (
    // <div className="relative max-w-full mx-auto">
    //   <Slider {...settings}>
    //     <div className="relative">
    //       <Image
    //         src={img_1}
    //         alt="Slide 1"
    //         layout="responsive"
    //         width={1200}
    //         height={500}
    //       />
    //       <div className="absolute bottom-4 left-4 text-white text-lg bg-black p-2 rounded">
    //         Why invest in Palm Jebel Ali?
    //       </div>
    //     </div>
    //     {/* Add more slides as needed */}
    //   </Slider>
    // </div>
    <>
     <div className="w-[90%] mx-auto gap-2 text-white flex flex-row justify-center items-center text-[2.5rem] leading-[3.3rem] font-semibold mt-2">
        <span>FEATURED {""}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          {""} INSIGHTS
        </span>
      </div>
    <div className="max-w-7xl w-[100%] relative my-10">
      <Slider {...settings} ref={sliderRef}>
        {sliderItems.map((logo, i) => (
          <div key={i} className="px-3">
            <div className="flex flex-row">
              <div className="rounded-xl flex  items-center justify-center h-37 shadow-sm w-[50%]">
                <Image
                  src={logo}
                  alt={logo.alt}
                  width={550}
                  height={150}
                  objectFit="contain"
                />
              </div>
              <div className="text-white w-[50%] text-3xl p-2 rounded">
                <p className="text-xs font-normal mb-3">25 jan. 2025</p>
                Why invest in Palm Jebel Ali? <br />
                Life is breathed into island development
                <p className="text-xs font-normal mt-3">
                  After lying dormant for 15 years, new life is being breathed
                  into the huge island development, rekindling its unique
                  potential as a luxury hot spot. One of the Palm Islands
                  developments, Palm Jebel Ali Dubai is an archipelago of
                  man-made islands and one of the most highly anticipated
                  additions to the emirate’s real estate landscape. Like its
                  iconic neighbouring island Palm Jumeirah, Palm Jebel Ali’s
                  luxury properties, exclusive lifestyle offerings, and growing
                  appeal offer incredible investment potential. The development
                  consists of seven islands and 16 fronds forming the shape of a
                  palm tree. Combined, they span 13.4km of land with 10.5
                  million sq. m of development and more than 90 kilometres of
                  exquisite beachfront. In addition to luxury Palm Jebel Ali
                  apartments and beachside homes in pedestrian-friendly
                  neighbourhoods, this upscale residential and entertainment hub
                  will also boast mixed-use zones, 80 hotels and resorts, green
                  spaces, and other amenities. When complete, Palm Jebel Ali is
                  expected to become home to 35,000 families and establish a new
                  growth corridor in the...... Read More
                </p>
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
