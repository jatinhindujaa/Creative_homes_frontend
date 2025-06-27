"use client";
import Image from "next/image";

import agent from "../assets/1.png";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS
import { useAgentById } from "@/app/_components/admin/agents/useAgents";
import Spinner from "@/app/_components/ui/Spinner";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";



export function PropertyCard({ data }) {
  const { data: agents, isLoading: isAgentLoading } = useAgentById(data.agent);
  const router  = useRouter()
  const [isMobile, setIsMobile] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
if (isAgentLoading) {
  <Spinner />;
}
  return (
    <div className="text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center gap-6 bg-[#1c1c1c] mb-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 pt-[90px] md:pt-0">
        {isMobile ? (
          <Slider {...slickSettings}>
            {data?.multipleImages?.map((img, i) => (
              <div
                key={i}
                className="relative h-[300px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openViewer(i)}
              >
                <Image
                  src={img}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex flex-row gap-4">
            <div
              className="relative w-[80%] h-[400px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openViewer(0)}
            >
              <Image
                src={data.multipleImages[0]}
                alt="Main"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 w-[20%]">
              {data.multipleImages.slice(1, 4).map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-[95px] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openViewer(i + 1)}
                >
                  <Image
                    src={img}
                    alt={`Thumb ${i}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
              {data.multipleImages.length > 4 && (
                <div
                  className="relative w-full h-[95px] rounded-lg overflow-hidden flex items-center justify-center text-white text-xl font-semibold cursor-pointer"
                  onClick={() => openViewer(4)}
                >
                  <Image
                    src={data.multipleImages[4]} // Show the 3rd image
                    alt={`Thumbnail 3`}
                    layout="fill"
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-semibold">
                    +{data.multipleImages.length - 4}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h2
          className="text-2xl md:text-3xl font-bold cursor-pointer"
          onClick={() => router.push(`/property/${data._id}`)}
        >
          {data.name}
        </h2>
        <h2 className="text-2xl md:text2xl ">AED {data.price}</h2>
        <div className="flex flex-row gap-4">
          {data.features.slice(0, 3).map((d, i) => (
            <span key={i} className="text-[1rem]">
              {d}{" "}
            </span>
          ))}
        </div>
        {/* <p className="text-xl font-semibold mt-1">{data.title}</p> */}
        <p className="text-gray-400 text-lg mt-1">📍 {data.dealType}</p>

        <div className="flex items-center gap-6 md:gap-12 text-gray-300 text-lg mt-4 flex-wrap">
          <div className="flex flex-row gap-4">
            <p>Villa{data.villaType}</p>
            <p>|</p>
            <p>{data.shower}</p>
            <p>|</p>
            <p>{data.bed}</p>
          </div>
          <div className="flex flex-row gap-4 md:gap-6">
            <p>BUA: {data.bua}</p>
            <p>|</p>
            <p>Plot: {data.plot}</p>
          </div>
        </div>

        <p className="text-gray-300 text-md mt-4 w-[90%] md:w-[80%]">
          {data.shortDescription}
        </p>

        {/* <div className="flex gap-6 md:gap-32 mt-4 items-center flex-wrap">
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-[50px] h-[50px] overflow-hidden">
              <Image
                src={agents.image}
                alt="Agent"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium">{agents.name}</p>
              <p className="text-lg font-normal">{agents.designation}</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <a href={agents.phoneNo}>
              <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                📞 Call
              </button>
            </a>
            <a href={agents.whatsapp}>
              <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                💬 WhatsApp
              </button>
            </a>
          </div>
        </div> */}
        {agents && (
          <div className="flex gap-6 md:gap-32 mt-4 items-center flex-wrap cursor-pointer">
            <div
              className="flex flex-row items-center gap-2"
              onClick={() => router.push(`/meet-the-team/${agents._id}`)}
            >
              <div className="relative w-[50px] h-[50px] overflow-hidden">
                <Image
                  src={agents.image}
                  alt="Agent"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-medium">{agents.name}</p>
                <p className="text-lg font-normal">{agents.designation}</p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <a href={`tel:${agents.phoneNo}`}>
                <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                  <IoCallOutline size={20} /> Call
                </button>
              </a>
              <a
                href={`https://wa.me/${agents.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                  <FaWhatsapp size={20} /> WhatsApp
                </button>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Image Viewer Modal */}
      {viewerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-3xl h-[80vh]">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10"
              onClick={closeViewer}
            >
              &times;
            </button>

            {/* Previous Arrow */}
            <div
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
              onClick={() =>
                setCurrentIndex(
                  (currentIndex - 1 + data.multipleImages.length) %
                    data.multipleImages.length
                )
              }
            >
              &larr;
            </div>

            {/* Next Arrow */}
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl cursor-pointer z-10"
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % data.multipleImages.length)
              }
            >
              &rarr;
            </div>

            <Image
              src={data.multipleImages[currentIndex]}
              alt={`Viewer ${currentIndex}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
