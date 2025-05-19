// import React from "react";
// import Name from "../assets/group.png";
// import Image from "next/image";
// import Button from "@/app/_components/ui/Button";
// import HoverButton from "@/app/_components/ui/HoverButton";
// import sm_banner from "../assets/sm_banner.png";

// const Hero = () => {
//   return (
//     <div className="relative h-screen  flex flex-col items-center justify-center bg-black">
//       <div className="max-md:hidden">
//         <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
//         <Image
//           src={Name.src}
//           alt="The Elan"
//           layout="fill"
//           objectPosition="center"
//           priority
//         />
//       </div>
//       <div className="md:hidden">
//         <Image
//           src={sm_banner.src}
//           alt="The Elan"
//           layout="fill"
//           objectPosition="center"
//           priority
//         />
//       </div>

//       <div className="relative z-10 flex max-md:w-[90%] w-3/5 flex-col items-center justify-center text-white text-center px-4 gap-4">
//         <h1 className="max-md:text-[1.9rem] text-[4.1rem] font-normal uppercase">
//           contact US
//         </h1>
//         <h1 className="max-md:text-[0.9rem] text-xl font-normal">
//           Need expert advice? Our team of property consultants, marketing
//           specialists, and customer service experts is here to help and guide
//           you to the right support.
//         </h1>
//         <div className="bg-white-glass-gradient border border-white-glass-gradient backdrop-blur-sm py-5 rounded-full max-md:px-4 max-md:py-2 px-10 gap-4 flex">
//           <Button
//             text="General Enquiry"
//             className="w-fit max-md:text-[0.9rem] max-md:px-3 text-[1.2rem] text-black bg-white hover:text-white  leading-none px-5 py-4 font-normal tracking-wider"
//           />
//           <HoverButton
//             text="Find  A Consultant"
//             className="w-fit max-md:text-[0.9rem] max-md:px-3  text-[1.2rem] leading-none px-5 py-4 font-normal tracking-wider"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Name from "../assets/group.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";
import sm_banner from "../assets/sm_banner.png";
const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
      <div className="max-md:hidden">
        <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
        <Image
          src={Name.src}
          alt="The Elan"
          layout="fill"
          objectPosition="center"
          priority
        />
      </div>
      <div className="md:hidden">
        <Image
          src={sm_banner.src}
          alt="The Elan"
          layout="fill"
          objectPosition="center"
          priority
        />
      </div>
      <div className="relative z-10 flex w-[100%] sm:w-[77%] flex-col items-center justify-center text-white text-center px-4 gap-4">
        {/* Title */}
        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] font-normal uppercase">
          contact US
        </h1>
        {/* Description */}
        <h1 className="text-base sm:text-lg md:text-xl font-normal max-w-[80%] mx-auto">
          Need expert advice? Whether you’re exploring new investment options or
          seeking advice on the best property deals, our experienced team is
          here to help you with all your property needs.
        </h1>
        <div className="bg-white bg-opacity-20 w-[100%] xl:w-[50%] md:w-[70%] justify-center backdrop-blur-lg py-5 rounded-full lg:px-20 px-1 gap-[0.5rem] flex">
          <Button
            text="General Enquiry"
            className="w-fit text-[1rem] text-black bg-white leading-[1.4rem] px-3 py-2 font-normal tracking-wider"
          />
          <HoverButton
            text="Find A Consultant"
            className="w-fit text-[1rem] leading-[1.4rem] px-3 font-normal tracking-wider"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

