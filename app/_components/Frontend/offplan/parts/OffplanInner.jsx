// "use client"
// import { useParams } from 'next/navigation';
// import React from 'react'
// import InterestSection from '../../meettheteam/parts/GotQues';
// import MarqueeSection from '../../meettheteam/parts/marque';
// import OffplanGallery from './Offplangallery';
// import OffplanDetail from './Offplandetails';
// import OffplanExtras from './SecondSections';
// import { useOffplanById } from '@/app/_components/admin/offplan/useOffplan';
// import { IoCallOutline } from 'react-icons/io5';
// import { FaWhatsapp } from 'react-icons/fa';

// const OffplanInner = () => {
//     const { _id } = useParams();
//     const { data, isLoading, error } = useOffplanById(_id);
//     console.log("data", data);
//   return (
//     <div className="bg-[#282927]">
//           <OffplanGallery data={data} />
//       <div className='flex flex-row'>
//         <div className='w-[70%]'>
//           <OffplanDetail data={data} />
//           <OffplanExtras data={data} />
//         </div>
//         <div className="w-full md:w-[30%] flex flex-col gap-6 sticky">
//           {/* Agent Card */}
//           <div className=" border rounded-xl p-5 flex flex-col gap-4">
//             <div className=" text-white rounded-xl flex flex-col gap-4">
//               <h3 className="text-lg font-semibold text-gray-400">
//                 Starting Price
//               </h3>
//               <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//                 AED {data?.price}
//               </h1>

//               <div className="flex gap-4 mt-2">
//                 <a href={`tel:${"+971585611099"}`} className="w-[25%]">
//                   <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//                     <IoCallOutline size={20} /> Call
//                   </button>
//                 </a>
//                 <a
//                   className="w-[50%]"
//                   href={`https://wa.me/${"+971585611099"}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//                     <FaWhatsapp size={20} /> WhatsApp
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Mortgage Card */}
//           <div className="border rounded-xl p-5 text-center flex flex-col items-center gap-3">
//             <p className="text-sm text-gray-400">Need A Mortgage?</p>
//             <h4 className="text-md font-medium">
//               Estimated Mortgage is <br />{" "}
//               <span className="text-white">AED {data?.price}</span>
//             </h4>
//             <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition">
//               Try Our Calculator
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#282927] gap-2 flex items-center flex-col">
//         <InterestSection />
//         <MarqueeSection />
//       </div>
//     </div>
//   );
// }

// export default OffplanInner




"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import InterestSection from "../../meettheteam/parts/GotQues";
import MarqueeSection from "../../meettheteam/parts/marque";
import OffplanGallery from "./Offplangallery";
import OffplanDetail from "./Offplandetails";
import OffplanExtras from "./SecondSections";
import { useOffplanById } from "@/app/_components/admin/offplan/useOffplan";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const OffplanInner = () => {
  const { _id } = useParams();
  const router = useRouter()
  const { data, isLoading, error } = useOffplanById(_id);
  console.log("data", data);

  return (
    <div className="bg-[#282927] flex items-center flex-col">
      <OffplanGallery data={data} />
      <div className="flex flex-row w-[80%] justify-between">
        <div className="w-[66%]">
          <OffplanDetail data={data} />
          <OffplanExtras data={data} />
        </div>

        {/* Right Column (Fixed) */}
        <div className="w-full md:w-[30%] flex flex-col gap-6 sticky top-6">
          {/* Agent Card */}
          <div className="border rounded-xl p-5 flex flex-col gap-4">
            <div className="text-white rounded-xl flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-gray-400">
                Starting Price
              </h3>
              <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
                AED {data?.price}
              </h1>

              <div className="flex gap-4 mt-2">
                <a href={`tel:${"+971585611099"}`} className="w-[25%]">
                  <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                    <IoCallOutline size={20} /> Call
                  </button>
                </a>
                <a
                  className="w-[50%]"
                  href={`https://wa.me/${"+971585611099"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                    <FaWhatsapp size={20} /> WhatsApp
                  </button>
                </a>
              </div>
              <button
                className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition"
                onClick={() => router.push(`/brousher/${data._id}`)}
              >
                Brousher Download
              </button>
            </div>
          </div>

          {/* Mortgage Card */}
          <div className="border rounded-xl p-5 text-center flex flex-col items-center gap-3">
            <p className="text-sm text-gray-400">Need A Mortgage?</p>
            <h4 className="text-md font-medium">
              Estimated Mortgage is <br />{" "}
              <span className="text-white">AED {data?.price}</span>
            </h4>
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition">
              Try Our Calculator
            </button>
          </div>
        </div>
      </div>

        <InterestSection />
        <MarqueeSection />
      <div className="bg-[#282927] gap-2 flex items-center flex-col">
      </div>
    </div>
  );
};

export default OffplanInner;





// "use client";
// import { useParams, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import InterestSection from "../../meettheteam/parts/GotQues";
// import MarqueeSection from "../../meettheteam/parts/marque";
// import OffplanGallery from "./Offplangallery";
// import OffplanDetail from "./Offplandetails";
// import OffplanExtras from "./SecondSections";
// import { useOffplanById } from "@/app/_components/admin/offplan/useOffplan";
// import { IoCallOutline } from "react-icons/io5";
// import { FaWhatsapp } from "react-icons/fa";

// const OffplanInner = () => {
//   const { _id } = useParams();
//   const router = useRouter();
//   const { data, isLoading, error } = useOffplanById(_id);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     // Attach scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const isSticky = scrollY > 600;
//   const isOpacityZero = scrollY > 1800;

//   return (
//     <div className="bg-[#282927] flex items-center flex-col">
//       <OffplanGallery data={data} />
//       <div className="flex flex-row w-[80%] justify-between">
//         <div className="w-[66%]">
//           <OffplanDetail data={data} />
//           <OffplanExtras data={data} />
//         </div>

//         {/* Right Column (Fixed) */}
//         <div
//           className={`w-full md:w-[30%] flex flex-col gap-6 ${
//             isSticky ? "fixed top-[34.5rem] left-[999px] w-[20%]" : ""
//           } ${isOpacityZero ? "opacity-0" : ""}`}
//         >
//           {/* Agent Card */}
//           <div className="border rounded-xl p-5 flex flex-col gap-4">
//             <div className="text-white rounded-xl flex flex-col gap-4">
//               <h3 className="text-lg font-semibold text-gray-400">
//                 Starting Price
//               </h3>
//               <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//                 AED {data?.price}
//               </h1>

//               <div className="flex gap-4 mt-2">
//                 <a href={`tel:${"+971585611099"}`} className="w-[25%]">
//                   <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//                     <IoCallOutline size={20} /> Call
//                   </button>
//                 </a>
//                 <a
//                   className="w-[50%]"
//                   href={`https://wa.me/${"+971585611099"}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
//                     <FaWhatsapp size={20} /> WhatsApp
//                   </button>
//                 </a>
//               </div>
//               <button
//                 className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition"
//                 onClick={() => router.push(`/brousher/${data._id}`)}
//               >
//                 Brousher Download
//               </button>
//             </div>
//           </div>

//           {/* Mortgage Card */}
//           <div className="border rounded-xl p-5 text-center flex flex-col items-center gap-3">
//             <p className="text-sm text-gray-400">Need A Mortgage?</p>
//             <h4 className="text-md font-medium">
//               Estimated Mortgage is <br />{" "}
//               <span className="text-white">AED {data?.price}</span>
//             </h4>
//             <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition">
//               Try Our Calculator
//             </button>
//           </div>
//         </div>
//       </div>

//       <InterestSection />
//       <MarqueeSection />
//       <div className="bg-[#282927] gap-2 flex items-center flex-col"></div>
//     </div>
//   );
// };

// export default OffplanInner;
