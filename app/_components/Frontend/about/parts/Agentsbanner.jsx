import Image from "next/image";
import React from "react";

import background from "../assets/3.png";
import manish from "../assets/4.png"; // Add your founders' images here
import yogesh from "../assets/5.png";

const Agentsbanner = () => {
  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="w-full md:w-[95%] relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
        {/* Background image */}
        <Image
          src={background}
          alt="Business Team Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay container for founders */}
        <div className="absolute inset-0 flex items-center justify-center gap-10 md:gap-20 px-4">
          {/* Founder 1 */}
          <div className="relative w-[250px] md:w-[320px] rounded-lg p-4 flex flex-col items-center text-white shadow-lg">
            <Image
              src={manish}
              alt="Manish Nagpal"
              width={300}
              height={360}
              className="rounded-lg"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-5 bg-black bg-opacity-50 rounded-b-lg px-4">
              <p className="mt-4 font-semibold text-center text-white">
                Manish Nagpal
              </p>
              <p className="text-sm text-center text-white">
                Co-Founder | Managing Director
              </p>
            </div>
            
          </div>

          {/* Founder 2 */}
          <div className="relative w-[250px] md:w-[320px]  rounded-lg p-4 flex flex-col items-center text-white shadow-lg">
            <Image
              src={yogesh}
              alt="Yogesh Khemani"
              width={300}
              height={360}
              className="rounded-lg"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-5 bg-black bg-opacity-50 rounded-b-lg px-4">
              <p className="mt-4 font-semibold text-center">Yogesh Khemani</p>
              <p className="text-sm text-center">
                Co-Founder | Executive Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agentsbanner;
