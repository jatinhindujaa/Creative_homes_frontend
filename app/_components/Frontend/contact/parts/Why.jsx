// import React from 'react'

// const Why = () => {
//   return (
//     <div className='flex justify-center'>
//       <span className="text-[#fff] text-[2.5rem] text-center ">
//         Why Invest{" "}
//         <span className=" leading-10 text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           In Dubai
//         </span>
//       </span>
//     </div>
//   );
// }

// export default Why

// import React from "react";

// const Why = () => {
//   const benefits = [
//     "Eligibility For Golden Visa",
//     "No Property Tax",
//     "Quick Transactions",
//     "Flexible Payment Plans",
//     "Investor-Friendly Policies",
//     "Secured Funds By Govt.",
//   ];

//   // Vertical staggering offsets (you can tweak for perfect alignment)
//   const staggerOffsets = [
//     "translate-y-6", // First box shifted down slightly
//     "translate-y-0", // Second box at normal position
//     "-translate-y-6", // Third box shifted up
//     "-translate-y-6", // Fourth box down more
//     "-translate-y-0", // Fifth box slightly up
//     "translate-y-6", // Sixth box down
//   ];

//   return (
//     <>
//       <div className="flex justify-center">
//         <span className="text-[#fff] text-[2.5rem] text-center ">
//           Why Invest{" "}
//           <span className=" leading-10 text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//             In Dubai
//           </span>
//         </span>
//       </div>
//       {/* <div className="relative py-12 flex justify-center overflow-hidden">
//         <div className="relative flex gap-3">
//           {benefits.map((text, index) => (
//             <div
//               key={index}
//               className={`w-[140px] md:w-[180px] lg:w-[200px] h-[400px] overflow-hidden rounded-[30px] ${staggerOffsets[index]}`}
//             >
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{
//                   backgroundImage: "url('/dubai.png')",
//                   backgroundPosition: `${index * 20}% center`, // Adjust each section's view into the image
//                 }}
//               />
//               <p className="text-white text-center mt-2 text-xs md:text-sm font-light z-10">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div> */}
//       <div className="relative py-12 flex justify-center overflow-hidden">
//         <div className="relative flex gap-3">
//           {benefits.map((text, index) => (
//             <div
//               key={index}
//               className={`relative group w-[140px] md:w-[180px] lg:w-[200px] h-[400px] overflow-hidden rounded-[30px] ${staggerOffsets[index]}`}
//             >
//               {/* Background Image */}
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{
//                   backgroundImage: "url('/dubai.png')",
//                   backgroundPosition: `${index * 20}% center`,
//                 }}
//               />

//               {/* Black overlay with opacity transition */}
//               <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>

//               {/* Text */}
//               <p className="bottom-2 left-1/2 -translate-x-1/2 text-white text-center text-xs md:text-sm font-light z-10">
//                 {text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Why;

import React from "react";

const Why = () => {
  const benefits = [
    "Eligibility For Golden Visa",
    "No Property Tax",
    "Quick Transactions",
    "Flexible Payment Plans",
    "Investor-Friendly Policies",
    "Secured Funds By Govt.",
  ];

  const staggerOffsets = [
    "translate-y-6",
    "translate-y-0",
    "-translate-y-6",
    "-translate-y-6",
    "-translate-y-0",
    "translate-y-6",
  ];

  return (
    <>
      <div className=" flex justify-center">
        <span className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] text-center">
          Why Invest{" "}
          <span className="leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            In Dubai
          </span>
        </span>
      </div>

      <div className="max-lg:hidden relative py-12 flex justify-center overflow-hidden">
        <div className="relative flex gap-3">
          {benefits.map((text, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${staggerOffsets[index]}`}
            >
              {/* Card container with overflow-hidden to keep rounded corners clean */}
              <div className="relative group w-[140px] md:w-[180px] lg:w-[200px] h-[400px] overflow-hidden rounded-[30px]">
                {/* Background Image */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/dubai.png')",
                    backgroundPosition: `${index * 20}% center`,
                  }}
                />

                {/* Black overlay with opacity transition */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Text - Outside the image card, centered */}
              <p className="mt-2 text-white text-center text-xs md:text-sm font-light">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden">{/**mobile section */}</div>
    </>
  );
};

export default Why;
