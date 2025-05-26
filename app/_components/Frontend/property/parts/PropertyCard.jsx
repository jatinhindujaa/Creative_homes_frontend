"use client";
import Image from "next/image";

import agent from "../assets/1.png";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
// export default function PropertyCard() {
//   return (
//     <>
//       <div className=" text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center gap-6">
//         {/* Left - Image Section */}
//         <div className="w-full md:w-1/2 flex flex-row gap-4">
//           {/* Main Image */}
//           <div className="relative w-[80%] h-[250px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer">
//             <Image
//               src={villah}
//               alt="Luxury Villa"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>

//           {/* Small Images Grid */}
//           <div className="flex flex-col gap-2 w-[20%] ">
//             {[1, 2, 3, 4].map((num) => (
//               <div
//                 key={num}
//                 className="relative w-[80%] h-[80px] md:h-[95px] rounded-lg overflow-hidden cursor-pointer"
//               >
//                 <Image
//                   src={int}
//                   alt={`Interior ${num}`}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 flex flex-col gap-2">
//           <h2 className="text-2xl md:text-3xl font-bold">AED 29,950,000</h2>
//           <p className="text-xl md:text-xl font-semibold mt-1">
//             Upgraded | Three Bedroom | Exclusive
//           </p>
//           <p className="text-gray-400 text-lg mt-1">
//             📍 The Sundials, Jumeirah Golf Estates, Dubai
//           </p>
//           <div className="flex items-center gap-32 text-gray-300 text-lg mt-4">
//             <div className="flex flex-row gap-4">
//               <p>🏡 Villa</p>
//               <p>🚗 6</p>
//               <p>🛁 6</p>
//             </div>
//             <div className="flex flex-row gap-6">
//               <p>BUA: 7,535 sq.ft</p>
//               <p>|</p>
//               <p>Plot: 6,900 sq.ft</p>
//             </div>
//           </div>

//           <p className="text-gray-300 text-md mt-4 w-[80%]">
//             Escape to the luxurious lifestyle of Jumeirah Golf Estates with this
//             stunning 6-bedroom home located in "The Sundials".
//           </p>

//           <div className="flex gap-32 mt-4 items-center">
//             <div className="flex flex-row items-center gap-2">
//               <div className="relative w-[50px] h-[50px] overflow-hidden">
//                 <Image
//                   src={agent} // Replace with actual agent image
//                   alt="Agent"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <p className="text-lg font-medium">Ghizlane Haddi</p>
//             </div>
//             <div className="flex flex-row items-center gap-2">
//               <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//                 📞 Call
//               </button>
//               <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//                 💬 WhatsApp
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center gap-6">
//         {/* Left - Image Section */}
//         <div className="w-full md:w-1/2 flex flex-row gap-4">
//           {/* Main Image */}
//           <div className="relative w-[80%] h-[250px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer">
//             <Image
//               src={villah}
//               alt="Luxury Villa"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>

//           {/* Small Images Grid */}
//           <div className="flex flex-col gap-2 w-[20%] ">
//             {[1, 2, 3, 4].map((num) => (
//               <div
//                 key={num}
//                 className="relative w-[80%] h-[80px] md:h-[95px] rounded-lg overflow-hidden cursor-pointer"
//               >
//                 <Image
//                   src={int}
//                   alt={`Interior ${num}`}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 flex flex-col gap-2">
//           <h2 className="text-2xl md:text-3xl font-bold">AED 29,950,000</h2>
//           <p className="text-xl md:text-xl font-semibold mt-1">
//             Upgraded | Three Bedroom | Exclusive
//           </p>
//           <p className="text-gray-400 text-lg mt-1">
//             📍 The Sundials, Jumeirah Golf Estates, Dubai
//           </p>
//           <div className="flex items-center gap-32 text-gray-300 text-lg mt-4">
//             <div className="flex flex-row gap-4">
//               <p>🏡 Villa</p>
//               <p>🚗 6</p>
//               <p>🛁 6</p>
//             </div>
//             <div className="flex flex-row gap-6">
//               <p>BUA: 7,535 sq.ft</p>
//               <p>|</p>
//               <p>Plot: 6,900 sq.ft</p>
//             </div>
//           </div>

//           <p className="text-gray-300 text-md mt-4 w-[80%]">
//             Escape to the luxurious lifestyle of Jumeirah Golf Estates with this
//             stunning 6-bedroom home located in "The Sundials".
//           </p>

//           <div className="flex gap-32 mt-4 items-center">
//             <div className="flex flex-row items-center gap-2">
//               <div className="relative w-[50px] h-[50px] overflow-hidden">
//                 <Image
//                   src={agent} // Replace with actual agent image
//                   alt="Agent"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <p className="text-lg font-medium">Ghizlane Haddi</p>
//             </div>
//             <div className="flex flex-row items-center gap-2">
//               <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//                 📞 Call
//               </button>
//               <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//                 💬 WhatsApp
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// export function PropertyCard({ data }) {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const slickSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center gap-6 bg-[#1c1c1c] mb-10">
//       {/* Left Section */}
//       <div className="w-full md:w-1/2">
//         {isMobile ? (
//           <Slider {...slickSettings}>
//             {data?.multipleImages?.map((img, i) => (
//               <div
//                 key={i}
//                 className="relative h-[300px] rounded-lg overflow-hidden"
//               >
//                 <Image
//                   src={img}
//                   alt={`Slide ${i + 1}`}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           <div className="flex flex-row gap-4">
//             <div className="relative w-[80%] h-[400px] rounded-lg overflow-hidden">
//               <Image
//                 src={data.multipleImages[0]}
//                 alt="Main"
//                 fill
//                 className="object-cover rounded-lg"
//               />
//             </div>
//             <div className="flex flex-col gap-2 w-[20%]">
//               {data.multipleImages.slice(1).map((img, i) => (
//                 <div
//                   key={i}
//                   className="relative w-full h-[95px] rounded-lg overflow-hidden"
//                 >
//                   <Image
//                     src={img}
//                     alt={`Thumb ${i}`}
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 flex flex-col gap-2">
//         <h2 className="text-2xl md:text-3xl font-bold">{data.name}</h2>
//         <h2 className="text-2xl md:text-3xl font-bold">AED {data.price}</h2>
//         <p className="text-xl font-semibold mt-1">{data.title}</p>
//         <p className="text-gray-400 text-lg mt-1">📍 {data.location}</p>

//         <div className="flex items-center gap-6 md:gap-32 text-gray-300 text-lg mt-4 flex-wrap">
//           <div className="flex flex-row gap-4">
//             <p>{data.villaType}</p>
//             <p>{data.car}</p>
//             <p>{data.bath}</p>
//           </div>
//           <div className="flex flex-row gap-4 md:gap-6">
//             <p>BUA: {data.bua}</p>
//             <p>|</p>
//             <p>Plot: {data.plot}</p>
//           </div>
//         </div>

//         <p className="text-gray-300 text-md mt-4 w-[90%] md:w-[80%]">
//           {data.description}
//         </p>

//         <div className="flex gap-6 md:gap-32 mt-4 items-center flex-wrap">
//           <div className="flex flex-row items-center gap-2">
//             <div className="relative w-[50px] h-[50px] overflow-hidden">
//               <Image
//                 src={agent}
//                 alt="Agent"
//                 fill
//                 className="object-cover rounded-full"
//               />
//             </div>
//             <p className="text-lg font-medium">{data.agent}</p>
//           </div>
//           <div className="flex flex-row items-center gap-2">
//             <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//               📞 Call
//             </button>
//             <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//               💬 WhatsApp
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





export function PropertyCard({ data }) {
  const [isMobile, setIsMobile] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center gap-6 bg-[#1c1c1c] mb-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        {isMobile ? (
          <Slider {...slickSettings}>
            {data?.multipleImages?.map((img, i) => (
              <div
                key={i}
                className="relative h-[300px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openViewer(i)}
              >
                <Image
                  src={img}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex flex-row gap-4">
            <div
              className="relative w-[80%] h-[400px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openViewer(0)}
            >
              <Image
                src={data.multipleImages[0]}
                alt="Main"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 w-[20%]">
              {data.multipleImages.slice(1, 4).map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-[95px] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openViewer(i + 1)}
                >
                  <Image
                    src={img}
                    alt={`Thumb ${i}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
              {data.multipleImages.length > 4 && (
                <div
                  className="relative w-full h-[95px] rounded-lg overflow-hidden bg-black bg-opacity-60 flex items-center justify-center text-white text-xl font-semibold cursor-pointer"
                  onClick={() => openViewer(4)}
                >
                  +{data.multipleImages.length - 4}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-bold">{data.name}</h2>
        <h2 className="text-2xl md:text-3xl font-bold">AED {data.price}</h2>
        <p className="text-xl font-semibold mt-1">{data.title}</p>
        <p className="text-gray-400 text-lg mt-1">📍 {data.location}</p>

        <div className="flex items-center gap-6 md:gap-32 text-gray-300 text-lg mt-4 flex-wrap">
          <div className="flex flex-row gap-4">
            <p>{data.villaType}</p>
            <p>{data.car}</p>
            <p>{data.bath}</p>
          </div>
          <div className="flex flex-row gap-4 md:gap-6">
            <p>BUA: {data.bua}</p>
            <p>|</p>
            <p>Plot: {data.plot}</p>
          </div>
        </div>

        <p className="text-gray-300 text-md mt-4 w-[90%] md:w-[80%]">
          {data.description}
        </p>

        <div className="flex gap-6 md:gap-32 mt-4 items-center flex-wrap">
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-[50px] h-[50px] overflow-hidden">
              <Image
                src={agent}
                alt="Agent"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <p className="text-lg font-medium">{data.agent}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
              📞 Call
            </button>
            <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
              💬 WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {viewerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-3xl h-[80vh]">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10"
              onClick={closeViewer}
            >
              &times;
            </button>

            {/* Previous Arrow */}
            <div
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
              onClick={() =>
                setCurrentIndex(
                  (currentIndex - 1 + data.multipleImages.length) %
                    data.multipleImages.length
                )
              }
            >
              &larr;
            </div>

            {/* Next Arrow */}
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % data.multipleImages.length)
              }
            >
              &rarr;
            </div>

            <Image
              src={data.multipleImages[currentIndex]}
              alt={`Viewer ${currentIndex}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
