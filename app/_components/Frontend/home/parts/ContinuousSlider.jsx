// "use client";

// import Slider from "react-slick";
// import Image from "next/image";
// import Slider1 from "../assets/slider/azizi.png"
// import Slider2 from "../assets/slider/Binghatti.png";
// import Slider3 from "../assets/slider/damac.png";
// import Slider4 from "../assets/slider/danub.png";
// import Slider5 from "../assets/slider/Dubai.png";
// import Slider6 from "../assets/slider/Ellington.png";
// import Slider7 from "../assets/slider/Leos.png";
// import Slider8 from "../assets/slider/meraas.png";
// import Slider9 from "../assets/slider/Nakheel.png";
// import Slider10 from "../assets/slider/Nshama.png";
// import Slider12 from "../assets/slider/Symbolic.png";
// import Slider11 from "../assets/slider/Sobha.png";
// import { FcGoogle } from "react-icons/fc";


// const sliderItems = [
//   Slider1,
//   Slider2,
//   Slider3,
//   Slider5,
//   Slider6,
//   Slider7,
//   Slider4,
//   Slider8,
//   Slider9,
//   Slider10,
//   Slider11,
//   Slider12,
// ];

// const DeveloperLogos = () => {
//   const settings = {
//     // infinite: true,
//     // speed: 3000,
//     // autoplay: true,
//     // autoplaySpeed: 0,
//     // cssEase: "linear",
//     // slidesToShow: 5,
//     // slidesToScroll: 1,
//     // arrows: false,
//     // pauseOnHover: false,
//     // responsive: [
//     //   {
//     //     breakpoint: 768,
//     //     settings: { slidesToShow: 2 },
//     //   },
//     //   {
//     //     breakpoint: 480,
//     //     settings: { slidesToShow: 1 },
//     //   },
//     // ],
//     dots: false,
//     infinite: true,
//     speed: 500,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="pt-28 text-center items-center relative cursor-pointer">
//       <div className="bg-[#202120] md:block hidden text-white p-6 rounded-lg border border-[#FCD15B] w-[60%] left-[22%] text-center absolute -top-[4.5rem]">
//         <p className="text-[1.5rem] space-x-4 tracking-wider">
//           <span className="text-[#FCD15B]">AWARDED</span> TOP AGENT:
//           <span className="text-[#A97C50]">EXCELLENCE</span> AT TOWN SQUARE
//           <span className="text-[#FCD15B]">DUBAI</span>
//         </p>
//         <div className="flex items-center justify-center mt-2 space-x-2">
//           <FcGoogle size={40} />
//           <p className="text-[1.5rem] font-semibold">
//             Reviews <span className="text-gray-300">4.8+</span>
//           </p>
//         </div>
//       </div>
//       <div className="flex justify-center space-x-4 text-[2.5rem] pt-[70px] font-medium pb-10 uppercase">
//         <span>Trusted Partner of the Most Prominent </span>
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           Developers
//         </span>
//       </div>
//       <div className="max-w-7xl mx-auto">
//         <Slider {...settings}>
//           {sliderItems.map((logo, i) => (
//             <div key={i} className="px-3">
//               <div className="rounded-xl p-6 flex items-center justify-center h-32 shadow-sm">
//                 <Image
//                   src={logo.src}
//                   alt={logo.alt}
//                   width={150}
//                   height={50}
//                   objectFit="contain"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default DeveloperLogos;
"use client";

import Slider from "react-slick";
import Image from "next/image";
import Slider1 from "../assets/slider/azizi.png";
import Slider2 from "../assets/slider/Binghatti.png";
import Slider3 from "../assets/slider/damac.png";
import Slider4 from "../assets/slider/danub.png";
import Slider5 from "../assets/slider/Dubai.png";
import Slider6 from "../assets/slider/Ellington.png";
import Slider7 from "../assets/slider/Leos.png";
import Slider8 from "../assets/slider/meraas.png";
import Slider9 from "../assets/slider/Nakheel.png";
import Slider10 from "../assets/slider/Nshama.png";
import Slider12 from "../assets/slider/Symbolic.png";
import Slider11 from "../assets/slider/Sobha.png";
import { FcGoogle } from "react-icons/fc";

const sliderItems = [
  Slider1,
  Slider2,
  Slider3,
  Slider5,
  Slider6,
  Slider7,
  Slider4,
  Slider8,
  Slider9,
  Slider10,
  Slider11,
  Slider12,
];

const DeveloperLogos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // mobile portrait
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="md:pt-28  text-center items-center relative cursor-pointer pt-12">
      <div className="bg-[#202120] md:block hidden text-white p-6 rounded-lg border border-[#FCD15B] w-[80%] sm:w-[70%] md:w-[60%] left-[50%] transform -translate-x-1/2 text-center absolute -top-[4.5rem]">
        <p className="text-[1.2rem] sm:text-[1.5rem] tracking-wider">
          <span className="text-[#FCD15B]">AWARDED</span> TOP AGENT:
          <span className="text-[#A97C50]">EXCELLENCE</span> AT TOWN SQUARE
          <span className="text-[#FCD15B]">DUBAI</span>
        </p>
        <div className="flex items-center justify-center mt-2 space-x-2">
          <FcGoogle size={30} />
          <p className="text-[1.2rem] sm:text-[1.5rem] font-semibold">
            Reviews <span className="text-gray-300">4.8+</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] md:pt-[70px] pt-0 font-medium md:pb-10 pb-2 uppercase">
        <span className="text-[1.3rem] md:text-[2.5rem]">
          Trusted Partner of the Most Prominent{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Developers
          </span>
        </span>
      </div>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {sliderItems.map((logo, i) => (
            <div key={i} className="px-3">
              <div className="rounded-xl p-2 flex items-center justify-center h-32 shadow-sm">
                <Image
                  src={logo.src}
                  alt={`Logo ${i + 1}`}
                  width={150}
                  height={50}
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DeveloperLogos;
