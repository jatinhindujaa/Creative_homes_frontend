// "use client"
// import React from "react";
// import property_1 from "../assets/property/property_1.png";
// import property_2 from "../assets/property/property_2.png";
// import property_3 from "../assets/property/property_3.png";
// import Image from "next/image";
// import Button from "@/app/_components/ui/Button";
// import { useRouter } from "next/navigation";

// const Property = () => {
//   const router = useRouter();
//  const handleNavigate = (propertyType) => {
//    router.push(`/list-your-property?propertytype=${propertyType}`);
//  };

//  return (
//    <div className="flex flex-col gap-5 lg:gap-[0px] mt-[100px]">
//      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[1.5rem] lg:text-[2.5rem] lg:leading-[3.3rem] leading-[2] font-semibold text-center">
//        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//          LIST YOUR
//        </span>
//        <span>PROPERTY</span>
//      </div>
//      <div className="w-[90%] mx-auto space-x-20 sm:flex hidden">
//        <div
//          className="h-[750px] w-[33.33%] flex items-end"
//          onClick={() => handleNavigate("apartment")}
//        >
//          <div className="relative w-full h-[500px] hover:motion-scale-out-105 cursor-pointer">
//            <Image
//              src={property_1.src}
//              alt="Apartments"
//              width={487}
//              height={562}
//              objectPosition="center"
//              className="rounded-t-[300px] rounded-b-[20px]"
//            />
//            <div className="absolute h-[88%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-all duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
//              <span className="text-white text-[1.4rem] leading-[2.4rem]">
//                Apartments
//              </span>
//            </div>
//          </div>
//        </div>

//        <div
//          className="h-[750px] w-[33.33%] flex flex-col top-14 relative"
//          onClick={() => handleNavigate("penthouse")}
//        >
//          <div className="h-[70%]">
//            <div className="relative w-full h-[500px] hover:motion-scale-out-105 cursor-pointer">
//              <Image
//                src={property_2.src}
//                alt="Mansions/villas/Penthouses"
//                width={487}
//                height={562}
//                objectPosition="center"
//                className="rounded-t-[300px] rounded-b-[20px]"
//              />
//              <div className="absolute h-[88%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
//                <span className="text-white text-[1.4rem] leading-[2.4rem]">
//                  Mansions/villas/Penthouses
//                </span>
//              </div>
//            </div>
//          </div>
//          <div className="h-[30%] w-full flex flex-col justify-start items-center space-y-6 -top-12 relative">
//            <span className="text-[1.2rem] leading-[2.3rem]">
//              Get the right valuation for your property
//            </span>
//            <Button text="Submit Property" className="px-3 py-1 font-light" />
//          </div>
//        </div>

//        <div
//          className="h-[750px] w-[33.33%] flex items-end"
//          onClick={() => handleNavigate("townhouse")}
//        >
//          <div className="relative w-full h-[500px] hover:motion-scale-out-105 cursor-pointer">
//            <Image
//              src={property_3.src}
//              alt="Townhouses"
//              width={487}
//              height={562}
//              objectPosition="center"
//              className="rounded-t-[300px] rounded-b-[20px]"
//            />
//            <div className="absolute h-[88%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
//              <span className="text-white text-[1.4rem] leading-[2.4rem]">
//                Townhouses
//              </span>
//            </div>
//          </div>
//        </div>
//      </div>

//      <div className="w-[90%] mx-auto sm:hidden flex flex-col items-center gap-5 lg:gap-0">
//        <div className="w-[100%] flex relative flex-col justify-center">
//          <div className="w-[100%] flex justify-center">
//            <div className="relative w-full h-[161px] md:h-[300px] xs:w-[40%] md:w-[47%] lg:w-[48%] xl:w-[23%]">
//              <Image
//                src={property_1.src}
//                alt="Apartments"
//                fill
//                className="object-cover object-center rounded-t-[300px] rounded-b-[20px]"
//              />
//              <div className="absolute h-[161px] w-[100%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-all duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
//                <span className="text-white text-[1.2rem] leading-[2.4rem]">
//                  Apartments
//                </span>
//              </div>
//            </div>
//          </div>
//          {/* <span className="text-white text-[1.2rem] sm:text-[1.4rem] px-3 text-center">
//             Apartments
//           </span> */}
//        </div>
//        <div className="flex flex-row w-[100%]">
//          <div className=" w-[50%] flex flex-col items-center">
//            <div className="relative w-full h-[161px] md:h-[300px] xs:w-[80%] md:w-[47%] lg:w-[48%] xl:w-[23%]">
//              <Image
//                src={property_2.src}
//                alt="Apartments"
//                fill
//                className="object-cover object-center rounded-t-[300px] rounded-b-[20px]"
//              />
//              <div className="absolute h-[161px] w-[100%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-all duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
//                <span className="text-white text-[1.2rem] leading-[2.4rem]">
//                  Apartments
//                </span>
//              </div>
//            </div>
//          </div>

//          <div className="w-[50%] flex flex-col items-center">
//            <div className="relative w-full h-[161px] md:h-[300px] xs:w-[80%] md:w-[47%] lg:w-[48%] xl:w-[23%]">
//              <Image
//                src={property_3.src}
//                alt="Apartments"
//                fill
//                className="object-cover object-center rounded-t-[300px] rounded-b-[20px]"
//              />
//              <div className="absolute h-[161px] w-[100%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-all duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
//                <span className="text-white text-[1.2rem] leading-[2.4rem]">
//                  Apartments
//                </span>
//              </div>
//            </div>
//            {/* <span className="text-white text-[1.4rem] leading-[2.4rem]">
//               Townhouses
//             </span> */}
//          </div>
//        </div>
//      </div>

//      <div className="h-[30%] w-full lg:hidden flex flex-col justify-start items-center space-y-6  relative">
//        <span className="text-[1.2rem] leading-[2.3rem]">
//          Get the Best Price for Your Property.
//        </span>
//        <Button text="Submit Property" className="px-3 py-1 font-light" />
//      </div>
//    </div>
//  );
// };

// export default Property;


"use client";
import React from "react";
import property_1 from "../assets/property/property_1.png";
import property_2 from "../assets/property/property_2.png";
import property_3 from "../assets/property/property_3.png";
import Image from "next/image";
import Button from "@/app/_components/ui/Button";
import { useRouter } from "next/navigation";

const Property = () => {
  const router = useRouter();
  const handleNavigate = (propertyType) => {
    router.push(`/list-your-property?propertytype=${propertyType}`);
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-[0px] mt-[100px]">
      <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-[1.5rem] lg:text-[2.5rem] lg:leading-[3.3rem] leading-[2] font-semibold text-center max-w-[1200px]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          LIST YOUR
        </span>
        <span>PROPERTY</span>
      </div>

      <div className="w-[90%] mx-auto space-x-20 sm:flex hidden max-w-[1200px]">
        <div
          className="h-[750px] w-[33.33%] flex items-end"
          onClick={() => handleNavigate("apartment")}
        >
          <div className="relative w-full h-[500px] hover:motion-scale-out-105 cursor-pointer">
            <Image
              src={property_1.src}
              alt="Apartments"
              width={487}
              height={562}
              objectPosition="center"
              className="rounded-t-[300px] rounded-b-[20px]"
            />
            <div className="absolute h-[80%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-all duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                Apartments
              </span>
            </div>
          </div>
        </div>

        <div
          className="h-[750px] w-[33.33%] flex flex-col top-14 relative"
          onClick={() => handleNavigate("penthouse")}
        >
          <div className="h-[70%]">
            <div className="relative w-full h-[500px] hover:motion-scale-out-105 cursor-pointer">
              <Image
                src={property_2.src}
                alt="Mansions/villas/Penthouses"
                width={487}
                height={562}
                objectPosition="center"
                className="rounded-t-[300px] rounded-b-[20px]"
              />
              <div className="absolute h-[80%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
                <span className="text-white text-[1.4rem] leading-[2.4rem]">
                  Mansions/villas/Penthouses
                </span>
              </div>
            </div>
          </div>
          <div className="h-[30%] w-full flex flex-col justify-start items-center space-y-6 -top-12 relative">
            <span className="text-[1.2rem] leading-[2.3rem]">
              Get the right valuation for your property
            </span>
            <Button text="Submit Property" className="px-3 py-1 font-light" />
          </div>
        </div>

        <div
          className="h-[750px] w-[33.33%] flex items-end"
          onClick={() => handleNavigate("townhouse")}
        >
          <div className="relative w-full h-[500px] hover:motion-scale-out-105 cursor-pointer">
            <Image
              src={property_3.src}
              alt="Townhouses"
              width={487}
              height={562}
              objectPosition="center"
              className="rounded-t-[300px] rounded-b-[20px]"
            />
            <div className="absolute h-[80%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                Townhouses
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto sm:hidden flex flex-col items-center gap-5 lg:gap-0 max-w-[1200px]">
        <div className="w-[100%] flex relative flex-col justify-center">
          <div className="w-[100%] flex justify-center">
            <div className="relative w-full h-[161px] md:h-[300px] xs:w-[40%] md:w-[47%] lg:w-[48%] xl:w-[23%]">
              <Image
                src={property_1.src}
                alt="Apartments"
                fill
                className="object-cover object-center rounded-t-[300px] rounded-b-[20px]"
              />
              <div className="absolute h-[161px] w-[100%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-all duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
                <span className="text-white text-[1.2rem] leading-[2.4rem]">
                  Apartments
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-[100%]">
          <div className=" w-[50%] flex flex-col items-center">
            <div className="relative w-full h-[161px] md:h-[300px] xs:w-[80%] md:w-[47%] lg:w-[48%] xl:w-[23%]">
              <Image
                src={property_2.src}
                alt="Apartments"
                fill
                className="object-cover object-center rounded-t-[300px] rounded-b-[20px]"
              />
              <div className="absolute h-[161px] w-[100%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-all duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
                <span className="text-white text-[1.2rem] leading-[2.4rem]">
                  Apartments
                </span>
              </div>
            </div>
          </div>

          <div className="w-[50%] flex flex-col items-center">
            <div className="relative w-full h-[161px] md:h-[300px] xs:w-[80%] md:w-[47%] lg:w-[48%] xl:w-[23%]">
              <Image
                src={property_3.src}
                alt="Apartments"
                fill
                className="object-cover object-center rounded-t-[300px] rounded-b-[20px]"
              />
              <div className="absolute h-[161px] w-[100%] inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-all duration-300 delay-150 rounded-t-[300px] rounded-b-[20px]">
                <span className="text-white text-[1.2rem] leading-[2.4rem]">
                  Apartments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[30%] w-full lg:hidden flex flex-col justify-start items-center space-y-6 relative max-w-[1200px]">
        <span className="text-[1.2rem] leading-[2.3rem]">
          Get the Best Price for Your Property.
        </span>
        <Button text="Submit Property" className="px-3 py-1 font-light" />
      </div>
    </div>
  );
};

export default Property;
