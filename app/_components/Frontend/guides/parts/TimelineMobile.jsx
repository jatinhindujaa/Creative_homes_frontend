"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function TimelineStepMobile({ step, title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col w-full mb-6">
      {/* Timeline step number */}
      <div>
      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-800 flex items-center justify-center text-sm font-bold text-black z-10">
        {step}
      </div>

      {/* Vertical line connecting the steps */}
      <div className=" w-px bg-white z-0"></div>
      </div>
      <div>
        {/* Step content */}
        <div className="flex w-full mt-4 px-4">
          <div className="flex w-full justify-between items-center">
            <button
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center w-full bg-white p-4 rounded-full text-black text-lg font-medium shadow-lg transition-all"
            >
              <span>{title}</span>
              <span
                className={`w-[1.8rem] h-[1.8rem] flex items-center justify-center rounded-full border border-black ${
                  open ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
              </span>
            </button>
          </div>
        </div>

        {/* Answer content */}
        <div
          className={`overflow-hidden transition-all px-4 duration-300 ${
            open ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white text-black text-md px-6 py-3 rounded-[60px] leading-relaxed shadow-md text-left mt-2">
            <p className="whitespace-pre-line">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
