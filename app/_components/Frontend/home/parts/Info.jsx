// import React from "react";
// import work_banner from "../assets/info/work_with_us.png";
// import Image from "next/image";

// const Info = () => {
//   return (
//     <div className="relative h-[450px] w-[90%] mx-auto mt-8">
//       <Image
//         src={work_banner.src}
//         alt="Work with us"
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//         className="rounded-[20px]"
//       />
//       <div className="absolute inset-0 flex flex-col ">
//         <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 relative z-10 flex flex-col items-center justify-evenly h-[100%] flex-wrap">
//           <span className="text-[2.5rem] leading-[4.3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold uppercase">
//             Why Work With Us
//           </span>
//           <div className="text-white flex w-[90%] justify-around">
//             <div className="flex flex-col ">
//               <span className="text-[2.5rem] leading-[4.3rem] font-bold ">
//                 2.5 B+
//               </span>
//               <span className="text-[1.4rem] leading-[2.4rem]">
//                 Sales Volume
//               </span>
//             </div>
//             <div className="border-r-2"></div>
//             <div className="flex flex-col ">
//               <span className="text-[2.5rem] leading-[4.3rem] font-bold ">
//                 200 K+
//               </span>
//               <span className="text-[1.4rem] leading-[2.4rem]">
//                 Email Subscribers
//               </span>
//             </div>
//             <div className="border-r-2"></div>
//             <div className="flex flex-col ">
//               <span className="text-[2.5rem] leading-[4.3rem] font-bold ">
//                 20.2 K+
//               </span>
//               <span className="text-[1.4rem] leading-[2.4rem]">
//                 Social Media Followers
//               </span>
//             </div>
//             <div className="border-r-2"></div>
//             <div className="flex flex-col ">
//               <span className="text-[2.5rem] leading-[4.3rem] font-bold ">
//                 100+
//               </span>
//               <span className="text-[1.4rem] leading-[2.4rem]">
//                 Active agents
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;

// "use client";

// import React from "react";
// import work_banner from "../assets/info/work_with_us.png";
// import Image from "next/image";
// import CountUp from "react-countup";

// const Info = () => {
//   return (
//     <div className="relative h-[450px] w-[90%] mx-auto mt-8">
//       <Image
//         src={work_banner.src}
//         alt="Work with us"
//         layout="fill"
//         objectFit="cover"
//         objectPosition="center"
//         className="rounded-[20px]"
//       />
//       <div className="absolute inset-0 flex flex-col">
//         <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 relative z-10 flex flex-col items-center justify-evenly h-[100%] flex-wrap">
//           <span className="text-[2.5rem] leading-[4.3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold uppercase">
//             Why Work With Us
//           </span>
//           <div className="text-white flex w-[90%] justify-around">
//             <StatCard label="Sales Volume" end={2500000000} suffix="+" />
//             <div className="border-r-2"></div>
//             <StatCard label="Email Subscribers" end={200000} suffix="+" />
//             <div className="border-r-2"></div>
//             <StatCard label="Social Media Followers" end={20200} suffix="+" />
//             <div className="border-r-2"></div>
//             <StatCard label="Active Agents" end={100} suffix="+" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ label, end, suffix }) => {
//   return (
//     <div className="flex flex-col items-center">
//       <CountUp
//         start={0}
//         end={end}
//         duration={2}
//         suffix={suffix}
//         useEasing
//         enableScrollSpy
//       >
//         {({ countUpRef }) => (
//           <span
//             className="text-[2.5rem] leading-[4.3rem] font-bold"
//             ref={countUpRef}
//           ></span>
//         )}
//       </CountUp>
//       <span className="text-[1.4rem] leading-[2.4rem]">{label}</span>
//     </div>
//   );
// };

// export default Info;

"use client";

import React from "react";
import work_banner from "../assets/info/work_with_us.jpg";
import Image from "next/image";
import CountUp from "react-countup";

const Info = () => {
  return (
    // <div className="relative h-[450px] w-[90%] mx-auto mt-8 ">
    <div className="relative z-[1] mx-auto mt-8 h-[450px] w-[90%] bg-[url('/work_with_us.jpg')] bg-transparent bg-no-repeat bg-top bg-cover bg-fixed py-[81px] pb-[94px]">
      <div className="absolute inset-0 flex flex-col">
        <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 relative z-10 flex flex-col items-center justify-evenly h-[100%] flex-wrap">
          <span className="text-[2.5rem] leading-[4.3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold uppercase">
            Why Work With Us
          </span>
          <div className="text-white flex w-[90%] justify-around">
            <StatCard label="Sales Volume" end={2.5} suffix="B+" />
            <div className="border-r-2"></div>
            <StatCard label="Email Subscribers" end={200} suffix="K+" />
            <div className="border-r-2"></div>
            <StatCard label="Social Media Followers" end={20.2} suffix="K+" />
            <div className="border-r-2"></div>
            <StatCard label="Active Agents" end={100} suffix="+" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, end, suffix }) => {
  return (
    <div className="flex flex-col items-center">
      <CountUp
        start={0}
        end={end}
        duration={2}
        suffix={suffix}
        useEasing
        enableScrollSpy
      >
        {({ countUpRef }) => (
          <span
            className="text-[2.5rem] leading-[4.3rem] font-bold"
            ref={countUpRef}
          ></span>
        )}
      </CountUp>
      <span className="text-[1.4rem] leading-[2.4rem]">{label}</span>
    </div>
  );
};

export default Info;
