
"use client";
import React, { useState } from "react";
import img_1 from "../assets/neighbourhood/img_1.png";
import img_2 from "../assets/neighbourhood/img_2.png";
import img_3 from "../assets/neighbourhood/img_3.png";
import img_4 from "../assets/neighbourhood/img_4.png";
import { useAgents } from "@/app/_components/admin/agents/useAgents";
import Spinner from "@/app/_components/ui/Spinner";

const Neighbourhoods = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);
 const { data: agents, isLoading } = useAgents();
  // const images = [
  //   { img: img_1, title: "Dubai Marina", listings: 18, defaultWidth: "25%" },
  //   { img: img_2, title: "Downtown Dubai", listings: 12, defaultWidth: "30%" },
  //   { img: img_3, title: "Palm Jumeirah", listings: 23, defaultWidth: "20%" },
  //   { img: img_4, title: "Jumeirah Beach", listings: 31, defaultWidth: "10%" },
  // ];
  const images = [
    {
      img: img_1,
      title: "Dubai Marina",
      listings: 18,
      defaultWidth: "25%",
      agent: {
        name: "Eman Mohammed Saad",
        role: "Sr. Property Consultant",
        language: "Speaks English",
        rera: "55365",
      },
    },
    {
      img: img_2,
      title: "Downtown Dubai",
      listings: 12,
      defaultWidth: "30%",
      agent: {
        name: "Adel Karam",
        role: "Luxury Consultant",
        language: "Speaks Arabic & English",
        rera: "45872",
      },
    },
    {
      img: img_3,
      title: "Palm Jumeirah",
      listings: 23,
      defaultWidth: "20%",
      agent: {
        name: "Sara Al Mazrouei",
        role: "Property Expert",
        language: "Speaks English & French",
        rera: "34219",
      },
    },
    {
      img: img_4,
      title: "Jumeirah Beach",
      listings: 31,
      defaultWidth: "10%",
      agent: {
        name: "Maya Rahim",
        role: "Sr. Property Consultant",
        language: "Speaks Hindi & English",
        rera: "59810",
      },
    },
  ];
const defaultWidths = ["25%", "30%", "20%", "10%"];
// const modifiedAgents = agents?.map((agent, index) => ({
//   ...agent,
//   defaultWidth: defaultWidths[index] || "18%", // fallback width for extra agents
// }));
const sortedTopAgents = agents
  ?.slice() // to avoid mutating original array
  .sort((a, b) => a.order - b.order) // ascending order
  .slice(0, 4) // take top 4 agents
  .map((agent, index) => ({
    ...agent,
    defaultWidth: defaultWidths[index] || "18%",
  }));
  const leftPositions = [20, 45, 68, 80];
  console.log("sortedTopAgents", sortedTopAgents);
if (isLoading) return <Spinner />;

  return (
    <div className="md:flex hidden flex-col items-center w-[100%]">
      {/* Heading */}
      <div className="w-[90%] mx-auto gap-2 text-white flex flex-row justify-center items-center text-[2.5rem] leading-[3.3rem] font-semibold mt-6">
        <span>FEATURED {""}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          {""} AGENTS
        </span>
      </div>
      <div className="flex flex-row  bg-[#202120] w-[95%] rounded-xl my-10">
        {/* <div className="text-[2.5rem] font-light text-white transition-all duration-500 ease-in-out z-10 w-[25%] flex flex-col items-center text-center space-y-2">
          <span>
            {images[hoverIndex !== null ? hoverIndex : lastActiveIndex].title}
          </span>
          <button className="text-[1.3rem] font-medium leading-[1.6rem] w-fit px-6 py-3 border-[1.5px] bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] border-white hover:bg-white hover:text-black rounded-[41px]">
            {
              images[hoverIndex !== null ? hoverIndex : lastActiveIndex]
                .listings
            }{" "}
            LISTINGS
          </button>
        </div> */}
        {/* Left Agent Detail */}
        <div className="text-white transition-all duration-500 ease-in-out z-10 w-[30%] flex flex-col items-start justify-center px-6 py-10 space-y-3">
          <h2 className="text-[1.8rem] font-bold bg-gradient-to-r from-[#F1C376] to-[#C89249] bg-clip-text text-transparent">
            {
              sortedTopAgents[
                hoverIndex !== null ? hoverIndex : lastActiveIndex
              ].name
            }
          </h2>
          <p className="text-lg border-b border-white pb-1 w-fit">
            {
              sortedTopAgents[
                hoverIndex !== null ? hoverIndex : lastActiveIndex
              ].designation
            }
          </p>
          <p>
            {
              sortedTopAgents[
                hoverIndex !== null ? hoverIndex : lastActiveIndex
              ].language
            }
          </p>
          <p className="capitalize">
            {sortedTopAgents[
              hoverIndex !== null ? hoverIndex : lastActiveIndex
            ].type?.join(", ")}
          </p>

          <div className="mt-8 md:mt-0 flex gap-4">
            <a
              href={`https://wa.me/${agents?.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="flex items-center gap-2 border bg-white border-black text-black px-5 py-2 rounded-md font-semibold hover:border-white hover:bg-transparent hover:text-white transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.483a3.355 3.355 0 00-4.67-.126l-1.012 1.012a.906.906 0 00-.26.682c0 .248.1.48.264.653l1.307 1.56a.835.835 0 01-.006 1.12l-1.59 1.61a4.272 4.272 0 01-5.72 0 8.674 8.674 0 01-3.457-5.78c-.07-.49.3-.937.8-.937h2.08a.793.793 0 01.738.523c.386.88 1.204 1.536 2.129 1.536a2.492 2.492 0 001.74-.788l1.167-1.195a3.348 3.348 0 001.086-2.351 3.35 3.35 0 00-1.08-2.32zM7.33 18.116a7.353 7.353 0 01-4.904-2.13l-1.03 1.032a3.36 3.36 0 005.995 2.206 6.538 6.538 0 01.512-1.108zm8.77 3.483a3.318 3.318 0 01-1.4-.308c-2.038-1.053-5.522-5.182-6.573-7.22a3.317 3.317 0 01-.312-1.415 3.33 3.33 0 011.092-2.407l1.586-1.596a4.564 4.564 0 006.354 6.378l1.61-1.59a.844.844 0 011.14.006l1.536 1.308c.173.165.4.266.65.266a.897.897 0 00.68-.264l1.012-1.012a3.356 3.356 0 00-.13-4.67l-1.048-1.048a.91.91 0 00-1.284 0l-1.5 1.5-1.037-1.037a4.503 4.503 0 00-6.586 0 5.9 5.9 0 00-1.81 4.13c0 .792.218 1.544.63 2.188 1.056 2.05 4.344 5.56 6.467 6.604a3.318 3.318 0 011.4.31l.09.04z" />
                </svg>
                Whatsapp
              </button>
            </a>
            <a href={`tel:${agents?.phoneNo}`}>
              <button
                type="button"
                className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4" />
                  <path d="M12 12v8m0-8L8 16m4-4l4 4" />
                </svg>
                Call
              </button>
            </a>
          </div>
        </div>

        <div className="flex w-[70%] h-[400px]  space-x-4 mt-4 py-4 relative">
          {sortedTopAgents.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "100%",
                width: activeIndex === index ? "37%" : item.defaultWidth,
              }}
              className={`rounded-[20px] transition-all duration-500 ease-in-out relative overflow-hidden ${
                activeIndex === index ? "animate-scale-up-back" : ""
              }`}
              onMouseEnter={() => {
                setActiveIndex(index);
                setHoverIndex(index);
                setLastActiveIndex(index);
              }}
              onMouseLeave={() => setHoverIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Neighbourhoods;
