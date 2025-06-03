"use client"
import { useAgentById } from "@/app/_components/admin/agents/useAgents";
// import { useParams } from 'next/navigation';
// import React from 'react'
// const AgentsInner = () => {
//      const { _id } = useParams();
//   return (
    
//     <div>AgentsInner</div>
//   )
// }

// export default AgentsInner



import { useParams } from "next/navigation";
import React from "react";

export default function AgentsInner() {

    const { _id } = useParams();
      const { data: agents, isLoading: isAgentLoading } = useAgentById(_id);
      console.log("data", agents);
  return (
    <div className=" mx-auto">
      {/* Background banner */}
      <div
        className="h-48 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        {/* Agent avatar */}
        <div className="absolute left-52 -bottom-16 w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
          <img
            src={agents?.image}
            alt="Agent"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content below banner */}
      <div className="pt-20 px-[15rem] pb-12 bg-[#282927]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left text block */}
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-white">
              Hi <span className="inline-block align-middle">👋</span>,<br />I
              am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
                {agents?.name}
              </span>
            </h1>
            <p className="text-lg font-medium mt-2 text-white">
              {agents?.designation}
            </p>
            <div className="mt-2 flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.951a1 1 0 00-.364-1.118L3.668 9.377c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.285-3.95z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Right buttons */}
          <div className="mt-8 md:mt-0 flex gap-4">
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
          </div>
        </div>

        {/* Services text */}
        <div className="mt-12 text-center text-white font-semibold tracking-wide">
          My Services
          <div className="text-2xl font-bold mt-1">
            {agents?.type?.join(", ")}
          </div>
        </div>

        <div className="mt-8 px-2 text-center text-white mx-auto">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>{agents?.about}</p>
        </div>
      </div>
    </div>
  );
}
