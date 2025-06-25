"use client";
import Image from "next/image";
import agentImage from "../assets/1.png"; // Replace with actual path
import { useAgentById } from "@/app/_components/admin/agents/useAgents";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

export default function PropertyDetail({data}) {
  const router = useRouter()
   const { data: agents, isLoading: isAgentLoading } = useAgentById(data?.agent);
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between text-white p-6 md:p-10 rounded-xl">
      {/* Left Column */}
      <div className="w-full md:w-[60%] flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-[#f1c376]">{data?.name}</h1>
        <h1 className="text-3xl font-semibold text-[#f1c376]">
          AED {data?.price}
        </h1>
        <div className="flex gap-6 text-gray-300 text-lg">
          <p>🏡 {data?.type}</p>
          <p>🛏 {data?.shower}</p>
          <p>🛁 {data?.bed}</p>
        </div>
        <div className="flex gap-6 text-sm text-gray-400">
          <p>BUA: {data?.bua} sq.ft</p>
          <p>Plot: {data?.plot} sq.ft</p>
        </div>

        <h2 className="text-2xl font-semibold mt-2">
          {data?.features?.join(" | ")}
        </h2>
        {/* 
        <p className="text-gray-400 text-md">
          📍 The Sundials, Jumeirah Golf Estates, Dubai
        </p> */}
        <div className="text-gray-300 mt-4 text-sm leading-relaxed space-y-3">
          <p>{data?.shortDescription}</p>
        </div>
        <div
          className="text-gray-300 mt-4 text-sm leading-relaxed space-y-3"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        {/* Agent Card */}
        <div className=" border rounded-xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
              <Image
                src={agents?.image}
                alt="Agent"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{agents?.name}</h3>
              <p className="text-sm text-gray-400">{agents?.designation}</p>
              {/* <p className="text-sm text-gray-400">Speaks English</p>
              <p className="text-sm text-gray-400">RERA Number: 55365</p> */}
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href={`tel:${agents?.phoneNo}`} className="md:w-[25%] w-[37%]">
              <button className="w-[100%] flex-1 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition text-md flex gap-2 items-center">
               <IoCallOutline size={20}/> Call
              </button>
            </a>
            <a
              className="md:w-[35%] w-[56%]"
              href={`https://wa.me/${agents?.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full flex-1 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition text-md flex gap-2 items-center">
               <FaWhatsapp size={20}/> WhatsApp
              </button>
            </a>
          </div>
          <button className="w-full mt-2 bg-white text-black py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition">
            📅 Book A Viewing
          </button>
        </div>

        {/* Mortgage Card */}
        <div className="border rounded-xl p-5 text-center flex flex-col items-center gap-3">
          <p className="text-sm text-gray-400">Need A Mortgage?</p>
          <h4 className="text-md font-medium">
            Estimated Mortgage is <br />{" "}
            <span className="text-white">AED 129,166</span>
          </h4>
          <button
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition"
            onClick={() => router.push("/mortgage-calculator")}
          >
            Try Our Calculator
          </button>
        </div>
      </div>
    </div>
  );
}
