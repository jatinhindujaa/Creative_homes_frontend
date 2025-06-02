// "use client";
// import React, { useState } from "react";
// import img_1 from "../assets/neighbourhood/img_1.png";
// import img_2 from "../assets/neighbourhood/img_2.png";
// import img_3 from "../assets/neighbourhood/img_3.png";
// import img_4 from "../assets/neighbourhood/img_4.png";

// const Neighbourhoods = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const images = [
//     { img: img_1, defaultWidth: "25%", title: "Dubai Marina", listings: 18 },
//     { img: img_2, defaultWidth: "30%", title: "Downtown Dubai", listings: 12 },
//     { img: img_3, defaultWidth: "20%", title: "Palm Jumeirah", listings: 23 },
//     { img: img_4, defaultWidth: "10%", title: "Jumeirah Beach", listings: 31 },
//   ];

//   return (
//     <div className="flex flex-col">
//       <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[3.5rem] leading-[4.3rem] font-semibold mt-6">
//         <span>BEST NEIGHBOURHOODS IN</span>
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           DUBAI
//         </span>
//       </div>
//       <div className="flex w-[90%] h-[400px] mx-auto space-x-4 mt-4">
//         {images.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundImage: `url(${item.img.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               height: "100%",
//               width: activeIndex === index ? "50%" : item.defaultWidth,
//             }}
//             className={`rounded-[20px] transition-all duration-500 ease-in-out ${
//               activeIndex === index ? "animate-scale-up-back " : ""
//             }`}
//             onMouseEnter={() => setActiveIndex(index)}
//           >
//             <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-40 rounded-[20px] opacity-100">
//               {activeIndex === index ? (
//                 <div className="flex flex-col justify-center items-center w-full h-full">
//                   <span className="text-[2.5rem] leading-[3.1rem] font-light">
//                     {item.title}
//                   </span>
//                   <button className="text-[1.3rem] font-medium leading-[1.6rem] w-fit p-3 border-[1.5px] bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] border-white hover:bg-white hover:text-black rounded-[41px]">
//                     {item.listings} LISTINGS
//                   </button>
//                 </div>
//               ) : (
//                 ""
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Neighbourhoods;



// "use client";
// import React, { useState } from "react";
// import img_1 from "../assets/neighbourhood/img_1.png";
// import img_2 from "../assets/neighbourhood/img_2.png";
// import img_3 from "../assets/neighbourhood/img_3.png";
// import img_4 from "../assets/neighbourhood/img_4.png";

// const Neighbourhoods = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoverIndex, setHoverIndex] = useState(0);

//   const images = [
//     { img: img_1, defaultWidth: "25%", title: "Dubai Marina", listings: 18 },
//     { img: img_2, defaultWidth: "30%", title: "Downtown Dubai", listings: 12 },
//     { img: img_3, defaultWidth: "20%", title: "Palm Jumeirah", listings: 23 },
//     { img: img_4, defaultWidth: "10%", title: "Jumeirah Beach", listings: 31 },
//   ];

//   return (
//     <div className="flex flex-col">
//       {/* Heading */}
//       <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[3.5rem] leading-[4.3rem] font-semibold mt-6">
//         <span>BEST NEIGHBOURHOODS IN</span>
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           DUBAI
//         </span>
//       </div>

//       {/* Neighbourhoods Grid */}
//       <div className="flex w-[90%] h-[400px] mx-auto space-x-4 mt-4 relative">
//         {images.map((item, index) => (
//           <>
//           <div
//             key={index}
//             style={{
//               backgroundImage: `url(${item.img.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               height: "100%",
//               width: activeIndex === index ? "50%" : item.defaultWidth,
//             }}
//             className={`rounded-[20px] transition-all duration-500 ease-in-out relative overflow-hidden ${
//               activeIndex === index ? "animate-scale-up-back" : ""
//             }`}
//             onMouseEnter={() => {
//               setActiveIndex(index);
//               setHoverIndex(index);
//             }}
//             onMouseLeave={() => setHoverIndex(null)}
//           >
//             {/* Title Sliding Effect */}
            

//             {/* Overlay */}
//             {/* <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-40 rounded-[20px]">
//               {activeIndex === index && (
//                 <div className="flex flex-col justify-center items-center w-full h-full">
//                   <span className="text-[2.5rem] leading-[3.1rem] font-light">
//                     {item.title}
//                   </span>
//                   <button className="text-[1.3rem] font-medium leading-[1.6rem] w-fit p-3 border-[1.5px] bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] border-white hover:bg-white hover:text-black rounded-[41px]">
//                     {item.listings} LISTINGS
//                   </button>
//                 </div>
//               )}
//             </div> */}
//           </div>
//           {index === 0 && hoverIndex === 1 && (
//               <div
//                 className="absolute text-[2.5rem] font-light text-white transition-transform duration-500 ease-in-out z-10"
//                 style={{
//                   top: "50%",
//                   left: hoverIndex === 1 ? "50%" : "0%",
//                   transform:
//                     hoverIndex === 1
//                       ? "translate(-50%, -50%)"
//                       : "translate(0%, -50%)",
//                 }}
//               >
//                 {item.title}
//               </div>
//             )}
//             </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Neighbourhoods;



// "use client";
// import React, { useState } from "react";
// import img_1 from "../assets/neighbourhood/img_1.png";
// import img_2 from "../assets/neighbourhood/img_2.png";
// import img_3 from "../assets/neighbourhood/img_3.png";
// import img_4 from "../assets/neighbourhood/img_4.png";

// const Neighbourhoods = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoverIndex, setHoverIndex] = useState(null);

//   const images = [
//     { img: img_1, defaultWidth: "25%", title: "Dubai Marina", listings: 18 },
//     { img: img_2, defaultWidth: "30%", title: "Downtown Dubai", listings: 12 },
//     { img: img_3, defaultWidth: "20%", title: "Palm Jumeirah", listings: 23 },
//     { img: img_4, defaultWidth: "10%", title: "Jumeirah Beach", listings: 31 },
//   ];

//   return (
//     <div className="flex flex-col">
//       {/* Heading */}
//       <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[3.5rem] leading-[4.3rem] font-semibold mt-6">
//         <span>BEST NEIGHBOURHOODS IN</span>
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           DUBAI
//         </span>
//       </div>

//       {/* Neighbourhoods Grid */}
//       <div className="flex w-[90%] h-[400px] mx-auto space-x-4 mt-4 relative">
//         {images.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundImage: `url(${item.img.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               height: "100%",
//               width: activeIndex === index ? "50%" : item.defaultWidth,
//             }}
//             className={`rounded-[20px] transition-all duration-500 ease-in-out relative overflow-hidden ${
//               activeIndex === index ? "animate-scale-up-back" : ""
//             }`}
//             onMouseEnter={() => {
//               setActiveIndex(index);
//               setHoverIndex(index);
//             }}
//             onMouseLeave={() => setHoverIndex(null)}
//           />
//         ))}

//         {/* Moving Title */}
//         <div
//           className="absolute text-[2.5rem] font-light text-white transition-all duration-500 ease-in-out z-10"
//           style={{
//             top: "50%",
//             left: hoverIndex !== null
//               ? `${25 + hoverIndex * 30}%` // Dynamically moves across boxes
//               : "12%", // Default position in the first box
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           {images[hoverIndex !== null ? hoverIndex : 0].title}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Neighbourhoods;


// "use client";
// import React, { useState } from "react";
// import img_1 from "../assets/neighbourhood/img_1.png";
// import img_2 from "../assets/neighbourhood/img_2.png";
// import img_3 from "../assets/neighbourhood/img_3.png";
// import img_4 from "../assets/neighbourhood/img_4.png";

// const Neighbourhoods = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [lastActiveIndex, setLastActiveIndex] = useState(0); // Store last hovered index

//   const images = [
//     { img: img_1, defaultWidth: "25%", title: "Dubai Marina", listings: 18 },
//     { img: img_2, defaultWidth: "30%", title: "Downtown Dubai", listings: 12 },
//     { img: img_3, defaultWidth: "20%", title: "Palm Jumeirah", listings: 23 },
//     { img: img_4, defaultWidth: "10%", title: "Jumeirah Beach", listings: 31 },
//   ];

//   return (
//     <div className="flex flex-col">
//       {/* Heading */}
//       <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[3.5rem] leading-[4.3rem] font-semibold mt-6">
//         <span>BEST NEIGHBOURHOODS IN</span>
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           DUBAI
//         </span>
//       </div>

//       {/* Neighbourhoods Grid */}
//       <div className="flex w-[90%] h-[400px] mx-auto space-x-4 mt-4 relative">
//         {images.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundImage: `url(${item.img.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               height: "100%",
//               width: activeIndex === index ? "50%" : item.defaultWidth,
//             }}
//             className={`rounded-[20px] transition-all duration-500 ease-in-out relative overflow-hidden ${
//               activeIndex === index ? "animate-scale-up-back" : ""
//             }`}
//             onMouseEnter={() => {
//               setActiveIndex(index);
//               setHoverIndex(index);
//               setLastActiveIndex(index); // Store last hovered box
//             }}
//             onMouseLeave={() => setHoverIndex(null)}
//           />
//         ))}

//         {/* Moving Title */}
//         <div
//           className="absolute text-[2.5rem] font-light text-white transition-all duration-500 ease-in-out z-10"
//           style={{
//             top: "50%",
//             left: `${
//               25 + (hoverIndex !== null ? hoverIndex : lastActiveIndex) * 30
//             }%`,
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           {images[hoverIndex !== null ? hoverIndex : lastActiveIndex].title}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Neighbourhoods;



// "use client";
// import React, { useState } from "react";
// import img_1 from "../assets/neighbourhood/img_1.png";
// import img_2 from "../assets/neighbourhood/img_2.png";
// import img_3 from "../assets/neighbourhood/img_3.png";
// import img_4 from "../assets/neighbourhood/img_4.png";

// const Neighbourhoods = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [lastActiveIndex, setLastActiveIndex] = useState(0);

//   const images = [
//     { img: img_1, title: "Dubai Marina", listings: 18 },
//     { img: img_2, title: "Downtown Dubai", listings: 12 },
//     { img: img_3, title: "Palm Jumeirah", listings: 23 },
//     { img: img_4, title: "Jumeirah Beach", listings: 31 },
//   ];

//   // Custom left positions for each box
//   const leftPositions = [22, 42, 60, 81];

//   return (
//     <div className="flex flex-col">
//       {/* Heading */}
//       <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[3.5rem] leading-[4.3rem] font-semibold mt-6">
//         <span>BEST NEIGHBOURHOODS IN</span>
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           DUBAI
//         </span>
//       </div>

//       {/* Neighbourhoods Grid */}
//       <div className="flex w-[90%] h-[400px] mx-auto space-x-4 mt-4 relative">
//         {images.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundImage: `url(${item.img.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center",
//               height: "100%",
//               width: activeIndex === index ? "50%" : "20%",
//             }}
//             className={`rounded-[20px] transition-all duration-500 ease-in-out relative overflow-hidden ${
//               activeIndex === index ? "animate-scale-up-back" : ""
//             }`}
//             onMouseEnter={() => {
//               setActiveIndex(index);
//               setHoverIndex(index);
//               setLastActiveIndex(index);
//             }}
//             onMouseLeave={() => setHoverIndex(null)}
//           />
//         ))}

//         {/* Moving Title */}
//         <div
//           className="absolute text-[2.5rem] font-light text-white transition-all duration-500 ease-in-out z-10 w-[25%]"
//           style={{
//             top: "50%",
//             left: `${
//               leftPositions[hoverIndex !== null ? hoverIndex : lastActiveIndex]
//             }%`,
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           {images[hoverIndex !== null ? hoverIndex : lastActiveIndex].title}
//           <button className="text-[1.3rem] font-medium leading-[1.6rem] w-fit p-3 border-[1.5px] bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] border-white hover:bg-white hover:text-black rounded-[41px]">
//             {images[hoverIndex !== null ? hoverIndex : lastActiveIndex].listings} LISTINGS
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Neighbourhoods;


"use client";
import React, { useState } from "react";
import img_1 from "../assets/neighbourhood/img_1.png";
import img_2 from "../assets/neighbourhood/img_2.png";
import img_3 from "../assets/neighbourhood/img_3.png";
import img_4 from "../assets/neighbourhood/img_41.jpg";

const Neighbourhoods = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);

  const images = [
    { img: img_1, title: "Dubai Marina", listings: 18, defaultWidth: "25%" },
    { img: img_2, title: "Downtown Dubai", listings: 12, defaultWidth: "30%" },
    { img: img_3, title: "Palm Jumeirah", listings: 23, defaultWidth: "20%" },
    { img: img_4, title: "Creek Harbour", listings: 31, defaultWidth: "10%" },
  ];

  // Custom left positions for each box
  const leftPositions = [20, 45, 68, 80];

  return (
    <div className="md:flex hidden flex-col gap-[50px] mt-[100px]">
      {/* Heading */}
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[2.5rem] leading-[3.3rem] font-semibold">
        <span>BEST NEIGHBOURHOODS IN</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          DUBAI
        </span>
      </div>

      <div className="flex w-[90%] h-[400px] mx-auto space-x-4 relative">
        {images.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item.img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "100%",
              width: activeIndex === index ? "50%" : item.defaultWidth,
            }}
            className={`rounded-[20px] transition-all duration-500 ease-in-out relative overflow-hidden ${
              activeIndex === index ? "animate-scale-up-back" : ""
            }`}
            onMouseEnter={() => {
              setActiveIndex(index);
              setHoverIndex(index);
              setLastActiveIndex(index);
            }}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}

        <div
          className="absolute  text-[2.5rem] font-light text-white transition-all duration-500 ease-in-out z-10 w-[25%] flex flex-col items-center text-center space-y-2"
          style={{
            top: "50%",
            left: `${
              leftPositions[hoverIndex !== null ? hoverIndex : lastActiveIndex]
            }%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span>
            {images[hoverIndex !== null ? hoverIndex : lastActiveIndex].title}
          </span>
          <button className="text-[1.3rem] font-medium leading-[1.6rem] w-fit px-6 py-3 border-[1.5px] bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] border-white hover:bg-white hover:text-black rounded-[41px]">
            {
              images[hoverIndex !== null ? hoverIndex : lastActiveIndex]
                .listings
            }{" "}
            LISTINGS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Neighbourhoods;
