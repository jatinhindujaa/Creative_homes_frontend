// import React from "react";
// import Meet from "../assets/meet.png";
// import Image from "next/image";
// import Button from "@/app/_components/ui/Button";
// import HoverButton from "@/app/_components/ui/HoverButton";

// const Hero = () => {
//   return (
//     <div className="relative h-screen flex flex-col items-center justify-center bg-black">
//       <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
//       <Image
//         src={Meet.src}
//         alt="The Elan"
//         layout="fill"
//         objectPosition="center"
//         priority
//       />
//       <div className="relative z-10 flex w-3/5 flex-col items-center justify-center text-white text-center px-4 gap-4">
//         <h1 className="text-[5.5rem] font-normal uppercase">Meet the team</h1>
//         <h1 className="text-xl font-normal">
//           Covering Dubai's key communities, our property experts offer a wide
//           range of services including Residential & Commercial Sales and
//           Leasing, Off Plan and Investments, Property Management, and more. Use
//           the search feature to find a specific person or browse through a
//           department.
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
import Meet from "../assets/meet.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
      <Image
        src={Meet.src}
        alt="The Elan"
        layout="fill"
        objectPosition="center"
        priority
        className="object-cover"
      />
      <div className="relative z-10 flex w-[100%] sm:w-[77%] flex-col items-center justify-center text-white text-center px-4 gap-4">
        {/* Title */}
        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] font-normal uppercase">
          Meet Our team
        </h1>
        {/* Description */}
        <h1 className="text-base sm:text-lg md:text-xl font-normal max-w-[80%] mx-auto">
          Our property specialists cover Dubai’s key communities, offering a
          range of services including Residential & Commercial Sales and
          Leasing, Off-Plan Investments, Property Management, and more. Whether
          you're looking to invest, buy, sell, or rent, our dedicated
          specialists are here to guide you through every step of the process.
        </h1>
        {/* Button Section */}
        {/* <div className="bg-white bg-opacity-20 backdrop-blur-lg py-5 rounded-full px-8 sm:px-20 gap-[2rem] flex flex-col sm:flex-row sm:gap-5 md:gap-10">
          <Button
            text="Properties"
            className="w-full sm:w-fit text-[1rem] sm:text-[1.2rem] text-black bg-white leading-[2.4rem] px-6 py-3 font-normal tracking-wider"
          />
          <HoverButton
            text="Off plan"
            className="w-full sm:w-fit text-[1rem] sm:text-[1.2rem] leading-[2.4rem] px-6 py-3 font-normal tracking-wider"
          />
        </div> */}
        <div className="bg-white bg-opacity-20 w-[100%] xl:w-[50%] md:w-[70%] justify-center backdrop-blur-lg py-5 rounded-full lg:px-20 px-1 gap-[2rem] flex">
          <Button
            text="Contact Us"
            className="w-fit text-[1.2rem] text-black bg-white leading-[2.4rem] px-5 font-normal tracking-wider"
          />
          <HoverButton
            text="About Us"
            className="w-fit text-[1.2rem] leading-[2.4rem] px-5 font-normal tracking-wider"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

