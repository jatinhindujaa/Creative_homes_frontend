
// "use client";

// import React from "react";
// import work_banner from "../assets/info/work_with_us.jpg";
// import Image from "next/image";
// import CountUp from "react-countup";

// const Info = () => {
//   return (
//     // <div className="relative h-[450px] w-[90%] mx-auto mt-8 ">
//     <div className="relative z-[1] mx-auto mt-8 h-[450px] w-[90%] bg-[url('/work_with_us.jpg')] bg-transparent bg-no-repeat bg-top bg-cover bg-fixed py-[81px] pb-[94px]">
//       <div className="absolute inset-0 flex flex-col">
//         <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 relative z-10 flex flex-col items-center justify-evenly h-[100%] flex-wrap">
//           <span className="text-[2.5rem] leading-[4.3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold uppercase">
//             Why Work With Us
//           </span>
//           <div className="text-white flex w-[90%] justify-around">
//             <StatCard label="Sales Volume" end={2.5} suffix="B+" />
//             <div className="border-r-2"></div>
//             <StatCard label="Email Subscribers" end={200} suffix="K+" />
//             <div className="border-r-2"></div>
//             <StatCard label="Social Media Followers" end={20.2} suffix="K+" />
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




// "use client";

// import React from "react";
// import CountUp from "react-countup";

// const Info = () => {
//   return (
//     <div className="relative z-[1] mx-auto mt-[100px] min-h-[500px] w-[90%] bg-[url('/work_with_us.jpg')] bg-cover bg-top bg-no-repeat bg-fixed py-[111px] pb-[114px] rounded-[18px]">
//       <div className="absolute inset-0 flex flex-col items-center justify-center">
//         <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 relative z-10 flex flex-col items-center justify-evenly h-full">
//           <span className="text-[1.5rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[4.3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold uppercase text-center">
//             Why Work With Us
//           </span>

//           {/* Responsive Flex Container */}
//           <div className="text-white flex flex-col lg:flex-row items-center justify-around w-full gap-y-[1rem] lg:gap-y-0 lg:gap-x-6 px-6 sm:px-10">
//             <StatCard label="Years of Experience" end={18} suffix="+" />
//             <div className="hidden lg:block border-r-2 h-[60px]" />
//             <div className="flex lg:hidden border-b-[1px] w-[150px]" />
//             <StatCard label="Email Subscribers " end={15} suffix="K+" />
//             <div className="hidden lg:block border-r-2 h-[60px]" />
//             <div className="flex lg:hidden border-b-[1px] w-[150px]" />
//             <StatCard label="Active agents" end={35} suffix="+" />
//             <div className="hidden lg:block border-r-2 h-[60px]" />
//             <div className="flex lg:hidden border-b-[1px] w-[150px]" />
//             <StatCard
//               label="Social media followers "
//               end={31.5}
//               suffix="K+"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StatCard = ({ label, end, suffix }) => {
//   return (
//     <div className="flex flex-col items-center text-center">
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
//             className="text-[2rem] sm:text-[2.5rem] leading-[2.8rem] sm:leading-[4.3rem] font-bold"
//             ref={countUpRef}
//           ></span>
//         )}
//       </CountUp>
//       <span className="text-[1.2rem] sm:text-[1.4rem] leading-[2.4rem]">
//         {label}
//       </span>
//     </div>
//   );
// };

// export default Info;






"use client";

import React from "react";
import CountUp from "react-countup";

const Info = () => {
  return (
    <div className="relative z-[1] mx-auto md:mt-[100px] mt-[30px] min-h-[500px] w-[90%] bg-[url('/work_with_us.jpg')] bg-cover bg-top bg-no-repeat bg-fixed py-[111px] pb-[114px] rounded-[18px] max-w-[1200px]">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white text-[1.9rem] leading-[2.4rem] space-y-2 relative z-10 flex flex-col items-center justify-evenly h-full">
          <span className="text-[1.5rem] sm:text-[2.5rem] leading-[3rem] sm:leading-[4.3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold uppercase text-center">
            Why Work With Us
          </span>

          {/* Responsive Flex Container */}
          <div className="text-white flex flex-col lg:flex-row items-center justify-around w-full gap-y-[1rem] lg:gap-y-0 lg:gap-x-6 px-6 sm:px-10">
            <StatCard label="Years of Experience" end={18} suffix="+" />
            <div className="hidden lg:block border-r-2 h-[60px]" />
            <div className="flex lg:hidden border-b-[1px] w-[150px]" />
            <StatCard label="Email Subscribers " end={15} suffix="K+" />
            <div className="hidden lg:block border-r-2 h-[60px]" />
            <div className="flex lg:hidden border-b-[1px] w-[150px]" />
            <StatCard label="Active agents" end={35} suffix="+" />
            <div className="hidden lg:block border-r-2 h-[60px]" />
            <div className="flex lg:hidden border-b-[1px] w-[150px]" />
            <StatCard label="Social media followers " end={31.5} suffix="K+" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, end, suffix }) => {
  return (
    <div className="flex flex-col items-center text-center">
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
            className="text-[2rem] sm:text-[2.5rem] leading-[2.8rem] sm:leading-[4.3rem] font-bold"
            ref={countUpRef}
          ></span>
        )}
      </CountUp>
      <span className="text-[1.2rem] sm:text-[1.4rem] leading-[2.4rem]">
        {label}
      </span>
    </div>
  );
};

export default Info;
