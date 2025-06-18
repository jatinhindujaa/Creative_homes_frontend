// import React from "react";
// import Name from "../assets/hero/Creative.png";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <div className="relative h-screen flex flex-col items-center justify-center bg-black">
//       <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/Night.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//         <div className="relative z-10 flex w-3/5 flex-col items-center justify-center text-white text-center px-4">
//           <h1 className="text-4xl md:text-3xl font-bold mb-4 ">
//             Find Something Extraordinary with
//           </h1>
//           <div className="relative w-[90%] h-32">
//             <Image
//               src={Name.src}
//               alt="The Elan"
//               layout="fill"
//               objectPosition="center"
//               priority
//               className="rounded-[20px]"
//             />
//           </div>
//         </div>

//         {/* <div className="bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-full px-8">
//           <div className="flex justify-center space-x-3 mb-3">
//             <button className="bg-white text-black font-semibold px-6 py-2 rounded-full">
//               Buy
//             </button>
//             <button className="bg-white text-black font-semibold px-6 py-2 rounded-full">
//               Rent
//             </button>
//             <button className="bg-white text-black font-semibold px-6 py-2 rounded-full">
//               Off Plan
//             </button>
//             <button className="bg-white text-black font-semibold px-6 py-2 rounded-full">
//               Commercial
//             </button>
//           </div>

//           <div className="flex items-center bg-white p-2 rounded-full space-x-2 shadow-md">
//             <input
//               type="text"
//               placeholder="Search By Area Or Project"
//               className="flex-1 px-4 py-2 rounded-full outline-none text-gray-700 placeholder-gray-500"
//             />

//             <select className="bg-transparent text-black font-semibold px-4 py-2 rounded-full outline-none">
//               <option>Rent</option>
//               <option>Buy</option>
//             </select>

//             <button className="bg-white px-4 py-2 rounded-full text-black font-semibold flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-gray-700 mr-1"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M21 21l-4.35-4.35m0 0A8.5 8.5 0 1011 19.5a8.5 8.5 0 005.65-2.85z"
//                 />
//               </svg>
//               Search
//             </button>
//           </div>
//         </div> */}
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import Name from "../assets/hero/Creative.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10" />

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Night2.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        webkit-playsinline="true"
        controls={false}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Find Something Extraordinary with
        </h1>
        <h1 className="filedazzle-font text-[2rem] sm:text-[4rem] md:text-[5.5rem] font-light uppercase">
          <span
            className="text-[2.4rem] md:text-[6.5rem]"
            style={{ fontFamily: "Outfit" }}
          >
            C
          </span>
          reative Homes
        </h1>
      </div>
    </div>
  );
};

export default Hero;

