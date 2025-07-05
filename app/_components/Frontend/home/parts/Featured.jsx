"use client"
import Image from "next/image";
import Featured_1 from "../assets/featured/featured_11.jpg";
import Featured_2 from "../assets/featured/featured_22Mob.jpg";
import Featured_3 from "../assets/featured/featured_55Mob.jpg";
import Featured_6 from "../assets/featured/featured_66.jpg";
import Featured_7 from "../assets/featured/featured_66Mob.jpg";

import Featured_4 from "../assets/featured/featured_33Mob.jpg";
import Featured_5 from "../assets/featured/featured_44.jpg";
import Button from "@/app/_components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Featured = () => {
const router = useRouter();

  return (
    <div className="hidden md:flex flex-col items-center relative cursor-pointer">
      <div className="flex justify-center space-x-4 text-[2.5rem] pt-[70px] font-medium">
        <span>FEATURED </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          PROPERTIES
        </span>
      </div>
      <div className="flex w-[80%] mx-auto pt-[50px]">
        <div className="flex flex-col w-[33.33%] p-2 space-y-4">
          <div
            className="relative h-[30%] w-full "
            onClick={() => router.push(`/property/683eff4393ad0b623ed8cdc7`)}
          >
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
                Grand Polo Club & Resort
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 5,670,000
              </span>
            </div>
          </div>
          <div
            className="relative h-[70%] w-full"
            onClick={() => router.push(`/property/683fee7b93ad0b623ed8cf09`)}
          >
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
                Elwood
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 7,930,000
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[33.33%] p-2 space-y-16 items-center">
          <div
            className="relative h-[75%] w-full "
            onClick={() => router.push(`/property/6846d001a627e54705c3b77f`)}
          >
            <Image
              src={Featured_6.src}
              alt="Harmony"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="rounded-[20px]"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-100 hover:opacity-0 transition-opacity duration-300  rounded-[20px] backdrop-blur-[2px]">
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                W Residences
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 3,200,000
              </span>
            </div>
          </div>
          <Button
            text="VIEW ALL"
            className="px-4 w-fit py-1 text-[0.9rem]"
            onClick={() => router.push("/property")}
          />
        </div>

        <div className="flex flex-col w-[33.33%] p-2 space-y-4">
          <div
            className="relative h-[32.4rem] w-full  "
            onClick={() => router.push(`/property/683ff3d593ad0b623ed8cf36`)}
          >
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
                Palm Jebel Ali
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 18,000,000
              </span>
            </div>
          </div>

          <div
            className="relative h-[15rem] w-full"
            onClick={() => router.push(`/property/683ee710a2552c2a789740e9`)}
          >
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
                Burj Azizi
              </span>
              <span className="text-white text-[1.4rem] leading-[2.4rem]">
                AED 7,500,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;


