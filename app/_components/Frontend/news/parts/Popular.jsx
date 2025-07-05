// import React from "react";

// const locations = [
//   "3 Bedroom Apartment Forasdasdasdasdasd Rent",
//   "Dubai Hill Estate",
//   "2 Bedroom Studio For Rent",
//   "Palm Al Jumeriah asdasdasd",
//   "Jumeriah Golf Estate",
//   "Emirate Hills dubai",
//   "Downtown Dubai",
// ];

// const Popular = () => {
//   return (
//     <div className="flex gap-2 flex-col p-10 mb-16 w-[90%] rounded-[30px] ">
//       <div className="flex justify-center">
//         <span className="text-[#fff] text-[2.5rem] text-center">
//           <span className="leading-10 text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//             Popular Searches {""}
//           </span>
//         </span>
//       </div>
//       <div className="relative overflow-hidden py-4">
//         <div className="flex flex-wrap justify-center gap-5">
//             {[...locations].map((location, index) => (
//               <div
//                 key={index}
//                 className=" w-fit mx-2 px-4 py-2 border border-white rounded-full text-white cursor-pointer hover:bg-white hover:text-black "
//               >
//                 {location}
//               </div>
//             ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Popular;


import React from "react";



const Popular = ({ locations }) => {
  return (
    <div className="flex gap-2 flex-col p-6 md:p-0 mb-16 w-[90%] md:w-[80%] rounded-[30px]">
      <div className="flex justify-center">
        <span className="text-[#fff] text-[2rem] sm:text-[2.5rem] text-center">
          <span className="leading-10 text-[2rem] sm:text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Popular Searches
          </span>
        </span>
      </div>
      <div className="relative overflow-hidden py-4">
        <div className="flex flex-wrap justify-center gap-5">
          {[...locations].map((location, index) => (
            <div
              key={index}
              className="w-fit mx-2 px-4 py-2 border border-white rounded-full text-white cursor-pointer hover:bg-white hover:text-black transition-all"
            >
              {location}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
