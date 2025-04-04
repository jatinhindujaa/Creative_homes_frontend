import Image from "next/image";
import React from "react";
import form from "../assets/form.png";

const GotQues = () => {
  return (
    <>
      <p className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] text-center">
        Got Any{" "}
        <span className=" leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          Quesions?
        </span>
      </p>
      <div className="flex flex-row justify-evenly items-center gap-2 max-md:py-4 py-8">
        <div className="max-md:hidden h-[67vh] w-[40%] relative">
          <Image
            src={form.src}
            alt={form}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[20px]"
          />
        </div>
        <form className="max-md:w-[100%] w-[45%] max-md:py-4 px-6 py-6 rounded-lg space-y-4 text-white">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />

          {/* Phone Number Field with Flag */}
          <div className="flex items-center space-x-2 w-full">
            <input
              type="tel"
              placeholder="+971"
              className="flex-1 rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <select className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white">
            <option value="">Select Category</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>

          <textarea
            placeholder="Message"
            className="w-full max-lg:rounded-2xl rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white h-[128px] max-lg:h-[96px]"
          ></textarea>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-center justify-center space-x-2 text-sm">
            <input type="checkbox" className="w-4 h-4 accent-white" />
            <span className="text-white max-lg:text-[0.9rem] text-[1.3rem]">
              I hereby agree to our{" "}
              <span className="font-bold ">Privacy Policy</span> terms
            </span>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-fit max-lg:text-[0.9rem] max-lg:px-4 max-lg:py-1  text-[1.3rem] rounded-full bg-white text-black px-6 py-2 hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GotQues;
