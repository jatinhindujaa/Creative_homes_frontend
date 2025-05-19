// "use client";

// import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa6";

// export default function TimelineStep({ step, title, content, position }) {
//   const [open, setOpen] = useState(false);

//   const isLeft = position === "left";

//   return (
//     <div
//       className={`flex w-full items-center relative ${
//         isLeft ? "justify-start" : "justify-end"
//       } ${isLeft ? "pl-0" : "pl-[0.5rem]"} `}
//     >
//       {isLeft && (
//         <div className="w-1/2 pr-8 text-right">
//           <div className="bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-full">
//             <button
//               onClick={() => setOpen(!open)}
//               className="relative w-full flex justify-between items-center px-6 py-2 bg-white rounded-full text-black text-lg font-medium shadow-lg transition-all"
//             >
//               {title}
//               <span
//                 className={`w-[1.8rem] h-[1.8rem] flex items-center justify-center rounded-full border border-black ${
//                   open ? "bg-black text-white" : "bg-white text-black"
//                 }`}
//               >
//                 {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
//               </span>
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="relative w-1 h-32 flex flex-col items-center">
//         <div className="absolute top-0 bottom-0 w-px bg-white z-0" />
//         <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-800 flex items-center justify-center text-sm font-bold text-black z-10">
//           {step}
//         </div>
//       </div>

//       {!isLeft && (
//         <div
//           className={`overflow-hidden transition-all duration-300 ${
//             open ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="bg-white text-black text-md px-6 py-6 rounded-[60px] leading-relaxed shadow-md mt-3 text-left">
//             <p className="whitespace-pre-line">{content}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function TimelineStep({ step, title, content, position }) {
  const [open, setOpen] = useState(false);

  const isLeft = position === "left";

  return (
    <div
      className={`flex w-full items-start relative ${
        isLeft ? "justify-start" : "justify-end"
      } ${isLeft ? "pl-0" : "pl-[0.5rem]"}`}
    >
      {/* {isLeft && (
        <div className="w-1/2 pr-8 text-right">
          <button
            onClick={() => setOpen(!open)}
            className="w-full bg-white p-4 rounded shadow text-black"
          >
            <strong>{title}</strong>
            {open && <p className="text-sm mt-2 text-gray-700">{content}</p>}
          </button>
        </div>
      )} */}
      {isLeft && (
        <div className="w-1/2 pr-8 text-right">
          <div className="bg-white bg-opacity-20 rounded-full">
            <button
              onClick={() => setOpen(!open)}
              className="relative w-full flex justify-between items-start px-6 py-2 bg-white rounded-full text-black text-lg font-medium shadow-lg transition-all"
            >
              {title}
              <span
                className={`w-[1.8rem] h-[1.8rem] flex items-center justify-center rounded-full border border-black ${
                  open ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
              </span>
            </button>
          </div>
          {/* Answer */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white text-black text-md px-6 py-3 rounded-[60px] leading-relaxed shadow-md text-left">
              <p className="whitespace-pre-line">{content}</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative w-1 h-32 flex flex-col items-center">
        <div className="absolute top-0 bottom-0 w-px bg-white z-0" />
        <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-800 flex items-center justify-center text-sm font-bold text-black z-10">
          {step}
        </div>
      </div>

      {/* {!isLeft && (
        <div className="w-1/2 pl-8 text-left">
          <button
            onClick={() => setOpen(!open)}
            className="w-full bg-white p-4 rounded shadow text-black"
          >
            <strong>{title}</strong>
            {open && <p className="text-sm mt-2 text-gray-700">{content}</p>}
          </button>
        </div>
      )} */}
      {!isLeft && (
        <div className="w-1/2 pl-8 text-left">
          <div className="bg-white bg-opacity-20 rounded-full">
            <button
              onClick={() => setOpen(!open)}
              className="relative w-full flex justify-between items-center px-6 py-2 bg-white rounded-full text-black text-lg font-medium shadow-lg transition-all"
            >
              {title}
              <span
                className={`w-[1.8rem] h-[1.8rem] flex items-center justify-center rounded-full border border-black ${
                  open ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
              </span>
            </button>
          </div>
          {/* Answer */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white text-black text-md px-6 py-3 rounded-[60px] leading-relaxed shadow-md mt-3 text-left">
              <p className="whitespace-pre-line">{content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
