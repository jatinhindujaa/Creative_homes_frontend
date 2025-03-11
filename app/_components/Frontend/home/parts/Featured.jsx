import Image from "next/image";
import Featured_1 from "../assets/featured/featured_1.png";
import Featured_2 from "../assets/featured/featured_2.png";
import Featured_3 from "../assets/featured/featured_3.png";
import Featured_4 from "../assets/featured/featured_4.png";
import Featured_5 from "../assets/featured/featured_5.png";
import Button from "@/app/_components/ui/Button";
import { FcGoogle } from "react-icons/fc";

const Featured = () => {
  return (
    <div className="flex flex-col items-center relative ">
      <div className="bg-[#202120] text-white p-6 rounded-lg border border-[#FCD15B] w-[60%] text-center absolute -top-[6rem]">
        <p className="text-[1.5rem] space-x-4 tracking-wider">
          <span className="text-[#FCD15B]">AWARDED</span> TOP AGENT:
          <span className="text-[#A97C50]">EXCELLENCE</span> AT TOWN SQUARE
          <span className="text-[#FCD15B]">DUBAI</span>
        </p>
        <div className="flex items-center justify-center mt-2 space-x-2">
          <FcGoogle size={40} />
          <p className="text-[1.5rem] font-semibold">
            Reviews <span className="text-gray-300">11,000+</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center space-x-4 text-[2.5rem] pt-40 font-medium">
        <span>FEATURED </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          PROPERTIES
        </span>
      </div>
      <div className="flex w-[90%] mx-auto pt-4">
        <div className="flex flex-col w-[33.33%] p-2 space-y-4">
          {/* <div
            style={{
              backgroundImage: `url(${Featured_1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "50%",
              width: "100%",
            }}
          >
            <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300 ">
              <span>The Elan</span>
              <span>AED 15,900,000</span>
            </div>
          </div> */}
          <div className="relative h-[30%] w-full ">
            <Image
              src={Featured_1.src}
              alt="The Elan"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="rounded-[20px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[20px] backdrop-blur-[2px]">
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                The Elan
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 15,900,000
              </span>
            </div>
          </div>
          <div className="relative h-[70%] w-full ">
            <Image
              src={Featured_2.src}
              alt="Harmony"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="rounded-[20px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[20px] backdrop-blur-[2px]">
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                Harmony
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 20,600,000
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[33.33%] p-2 space-y-16 items-center">
          <div className="relative h-[75%] w-full ">
            <Image
              src={Featured_3.src}
              alt="Harmony"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="rounded-[20px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[20px] backdrop-blur-[2px]">
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                The Sundials
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 29,800,000
              </span>
            </div>
          </div>
          <Button text="VIEW ALL" className="px-4 w-fit py-1 text-[0.9rem]" />
        </div>
        <div className="flex flex-col w-[33.33%] p-2 space-y-4">
          <div className="relative h-[32.4rem] w-full  ">
            <Image
              src={Featured_4.src}
              alt="Aseel"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="rounded-[20px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[20px] backdrop-blur-[2px]">
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                Aseel
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 24,400,000
              </span>
            </div>
          </div>

          <div className="relative h-[15rem] w-full  ">
            <Image
              src={Featured_5.src}
              alt="Mira"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="rounded-[20px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[20px] backdrop-blur-[2px]">
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                Mira
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 35,100,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
