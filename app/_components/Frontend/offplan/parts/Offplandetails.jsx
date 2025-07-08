"use client";
import Image from "next/image";
import agentImage from "../assets/1.png"; // Replace with actual path
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export default function OffplanDetail({ data }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between text-white p-6 md:p-10 md:px-0 rounded-xl">
      {/* Left Column */}
      <div className="w-full md:w-[100%] flex flex-col gap-4">
        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          AED {data?.price}
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
      
    </div>
  );
}
