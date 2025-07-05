// // components/Box.js
// import Image from "next/image";

// const Box = ({ title, imgSrc, altText }) => {
//   return (
//     <div className="w-[80%] rounded-lg shadow-md hover:shadow-xl transition-all">
//       <div className="w-full h-48 relative">
//         <Image
//           src={imgSrc}
//           alt={altText}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//       </div>
//       {/* <h3 className="text-xl font-semibold text-center mt-4">{title}</h3> */}
//     </div>
//   );
// };

// export default Box;



// components/Box.js
"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const Box = ({ title, imgSrc, altText, box }) => {
  const router = useRouter();
  return (
    <div
      className="relative w-[80%] shadow-md hover:shadow-xl transition-all cursor-pointer"
      onClick={() => router.push(`/guides/${altText}`)}
    >
      <div className="relative w-full h-48">
        {/* Image */}
        <Image src={imgSrc} alt={altText} layout="fill" objectFit="cover" />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Text in Center */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
          <span className="text-center">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Box;
