// import React from "react";
// import News from "../assets/1.png";
// import Image from "next/image";
// import Button from "@/app/_components/ui/Button";
// import HoverButton from "@/app/_components/ui/HoverButton";

// const Hero = () => {
//   return (
//     <div className="relative h-screen flex flex-col items-center justify-center bg-black">
//       <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
//       <Image
//         src={News.src}
//         alt="The Elan"
//         layout="fill"
//         objectPosition="center"
//         priority
//       />
//       <div className="relative z-10 flex w-[77%] flex-col items-center justify-center text-white text-center px-4 gap-4">
//         <h1 className="text-[5.5rem] font-normal uppercase">
//           Why Invest In Dubai?
//         </h1>
//         <h1 className="text-xl font-normal">
//           Stay informed with the latest updates, trends, and insights from the
//           real estate world. Whether you're a homebuyer, investor, or industry
//           professional, our news page brings you expert analysis, market
//           reports, and emerging opportunities.
//         </h1>
//         <div className="bg-white bg-opacity-20 backdrop-blur-lg py-5 rounded-full px-20 gap-[2rem] flex">
//           <Button
//             text="Properties"
//             className="w-fit text-[1.2rem] text-black bg-white leading-[2.4rem] px-5 font-normal tracking-wider"
//           />
//           <HoverButton
//             text="Off plan"
//             className="w-fit text-[1.2rem] leading-[2.4rem] px-5 font-normal tracking-wider"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client"
import React from "react";
import News from "../assets/1.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black">
      <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
      <Image
        src={News.src}
        alt="The Elan"
        layout="fill"
        objectPosition="center"
        priority
        className="object-cover"
      />
      <div className="relative z-10 flex w-[100%] md:w-[77%] flex-col items-center justify-center text-white text-center lg:px-4 px-4 gap-4">
        {/* Title */}
        <h1 className="text-[2rem] sm:text-[4rem] md:text-[5.5rem] font-normal uppercase">
          Why Invest In Dubai?
        </h1>
        {/* Description */}
        <h1 className="text-[0.8rem] sm:text-lg md:text-xl font-normal max-w-[80%] mx-auto">
          Dubai offers a highly rewarding real estate market—if approached
          wisely. Whether you're a first-time buyer or a seasoned investor,
          investing in Dubai can provide strong returns, financial security, and
          growth opportunities. Our guide will help you make informed decisions,
          maximize profits, and minimize risks.
        </h1>
        {/* Button Section */}
        {/* <div className="bg-white bg-opacity-20 lg:w-[45%] w-[100%] justify-center backdrop-blur-lg py-5 rounded-full lg:px-20 px-1 gap-[2rem] flex">
          <Button
            text="Properties"
            className="w-fit text-[1.2rem] text-black bg-white leading-[2.4rem] px-5 font-normal tracking-wider"
            onClick={() => router.push("/property")}
          />
          <HoverButton
            text="Off plan"
            className="w-fit text-[1.2rem] leading-[2.4rem] px-5 font-normal tracking-wider"
            onClick={() => router.push("/off-plan-properties")}
          />
        </div> */}

        <div className="bg-white bg-opacity-20 w-[100%] xl:w-[40%] md:w-[70%] justify-center backdrop-blur-lg py-5 rounded-full lg:px-20 px-1 gap-[2rem] flex">
          <Button
            text="Properties"
            onClick={() => router.push("/property")}
            className="w-fit text-[1rem] text-black bg-white leading-[2.4rem] px-5 font-normal tracking-wider"
          />
          <HoverButton
            text="Off plan"
            onClick={() => router.push("/off-plan-properties")}
            className="w-fit text-[1rem] leading-[2.4rem] px-5 font-normal tracking-wider"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
