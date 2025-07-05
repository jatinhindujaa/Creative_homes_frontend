
// import React from "react";
// import News from "../assets/2.png";
// import Image from "next/image";
// import Button from "@/app/_components/ui/Button";
// import HoverButton from "@/app/_components/ui/HoverButton";

// const Hero = ({data}) => {
//   return (
//     <div className="relative h-screen flex flex-col items-center justify-center bg-black">
//       <div className="bg-custom-gradient w-full h-full absolute top-0 left-0 z-10"></div>
//       <Image
//         src={data?.multipleImages[0]}
//         alt="The Elan"
//         layout="fill"
//         objectPosition="center"
//         priority
//         className="object-cover"
//       />
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import HoverButton from "@/app/_components/ui/HoverButton";

const Hero = ({ data }) => {
  return (
    <div className="bg-[#282927] relative h-[80vh] flex flex-col items-center justify-end">
      <div className="relative w-[85%] h-[30rem] mt-10 rounded-xl flex items-center justify-center">
        <Image
          src={data?.multipleImages[0] || null}
          alt="The Elan"
          layout="fill"
          objectPosition="center"
          priority
          className="object-cover rounded-[2rem]"
        />
      <div className="absolute z-20 text-white text-5xl font-bold">
        {data?.title}
      </div>
      </div>
      {/* Title overlay */}
    </div>
  );
};

export default Hero;
