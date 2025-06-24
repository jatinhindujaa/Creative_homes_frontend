"use client";
import Image from "next/image";
import agentImage from "../assets/1.png"; // Replace with actual path
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export default function OffplanDetail({ data }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between text-white p-6 md:p-10 rounded-xl">
      {/* Left Column */}
      <div className="w-full md:w-[60%] flex flex-col gap-4">
        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          AED {data?.price}M
        </h1>
        <p className="text-gray-400 text-md">
          📍 The Sundials, Jumeirah Golf Estates, Dubai
        </p>

        <div className="text-gray-300 mt-4 text-sm leading-relaxed space-y-3">
          <p>
            Creative Homes is proud to present to market this stunning 6 Villa
            in the most desirable community and new tower F in Jumeirah Golf
            Estates. This Offplan features open-plan kitchen/dining/living, a
            spacious bedroom with en-suite and balcony. Call now to view or make
            an offer.
          </p>
          <p>
            Al Andalus apartments feature a stunning, brand-new, state of the
            art gym and swimming pool with steam room and sauna.
          </p>
          <p>
            Situated next to Centro shopping mall, you have all you need at your
            fingertips.
          </p>
          <p>
            Please call for more information, to arrange a viewing or to make an
            offer.
          </p>
          <p>
            Finance is available on this Offplan through haus & haus partners.
          </p>
          <p>
            For further details, please drop into our flagship office at the
            Gold & Diamond Park – or browse the incredible selection of
            properties we maintain at the haus & haus website. Our specialist
            brokers will be happy to answer any industry related query you have.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-[30%] flex flex-col gap-6">
        {/* Agent Card */}
        <div className=" border rounded-xl p-5 flex flex-col gap-4">
          <div className=" text-white rounded-xl flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-400">
              Starting Price
            </h3>
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
              AED {data?.price}
            </h1>

            <div className="flex gap-4 mt-2">
              <a href={`tel:${""}`} className="w-[25%]">
                <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                  <IoCallOutline size={20} /> Call
                </button>
              </a>
              <a
                className="w-[50%]"
                href={`https://wa.me/${""}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                  <FaWhatsapp size={20} /> WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Mortgage Card */}
        <div className="border rounded-xl p-5 text-center flex flex-col items-center gap-3">
          <p className="text-sm text-gray-400">Need A Mortgage?</p>
          <h4 className="text-md font-medium">
            Estimated Mortgage is <br />{" "}
            <span className="text-white">AED {data?.price}M</span>
          </h4>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition">
            Try Our Calculator
          </button>
        </div>
      </div>
    </div>
  );
}
