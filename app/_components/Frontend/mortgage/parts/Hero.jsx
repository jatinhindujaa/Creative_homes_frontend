// import React from "react";
// import Mortgage from "../assests/mortgage.png";
// import Image from "next/image";
// import Button from "@/app/_components/ui/Button";
// import HoverButton from "@/app/_components/ui/HoverButton";

// const Hero = () => {
//   return (
//     <div className="relative h-screen flex flex-col items-center justify-center bg-black">
//       <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
//       <Image
//         src={Mortgage.src}
//         alt="The Elan"
//         layout="fill"
//         objectPosition="center"
//         priority
//       />
//       <div className="relative z-10 flex w-[77%] flex-col items-center justify-center text-white text-center px-4 gap-4">
//         <h1 className="text-[5.5rem] font-normal uppercase">
//           Mortgage Calculator
//         </h1>
//         <h1 className="text-xl font-normal">
//           Our mortgage calculator factors in key costs like homeowners
//           association fees and private mortgage insurance (PMI), without the
//           burden of property taxes. Get a complete view of your total monthly
//           payment today.
//         </h1>
//         <div className="bg-white bg-opacity-20 backdrop-blur-lg py-5 rounded-full px-20 gap-[2rem] flex">
//           <Button
//             text="Contact Us"
//             className="w-fit text-[1.2rem] text-black bg-white leading-[2.4rem] px-5 font-normal tracking-wider"
//           />
//           <HoverButton
//             text="About Us"
//             className="w-fit text-[1.2rem] leading-[2.4rem] px-5 font-normal tracking-wider"
//           />
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default Hero;



import React from "react";
import Image from "next/image";
import Mortgage from "../assests/mortgage.png";

import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";
const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
      <div className="max-md:hidden">
        <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
        <Image
          src={Mortgage.src}
          alt="The Elan"
          layout="fill"
          objectPosition="center"
          priority
        />
      </div>
      <div className="md:hidden">
        <Image
          src={Mortgage.src}
          alt="The Elan"
          layout="fill"
          objectPosition="center"
          priority
        />
      </div>
      <div className="relative z-10 flex w-[100%] sm:w-[77%] flex-col items-center justify-center text-white text-center px-4 gap-4">
        {/* Title */}
        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] font-normal uppercase">
          Mortgage Calculator
        </h1>
        {/* Description */}
        <h1 className="text-base sm:text-lg md:text-xl font-normal max-w-[80%] mx-auto">
          Our mortgage calculator factors in key costs like homeowners
          association fees and private mortgage insurance (PMI), without the
          burden of property taxes. Get a complete view of your total monthly
          payment today.
        </h1>
        <div className="bg-white bg-opacity-20 w-[100%] xl:w-[40%] md:w-[70%] justify-center backdrop-blur-lg py-5 rounded-full lg:px-20 px-1 gap-[1.5rem] flex">
          <Button
            text="Contact Us"
            className="w-fit text-[1rem] text-black bg-white leading-[1.4rem] px-3 py-2 font-normal tracking-wider"
          />
          <HoverButton
            text="About Us"
            className="w-fit text-[1rem] leading-[1.4rem] px-3 font-normal tracking-wider"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

