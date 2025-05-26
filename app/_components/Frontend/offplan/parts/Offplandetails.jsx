"use client";
import Image from "next/image";
import agentImage from "../assets/1.png"; // Replace with actual path

export default function OffplanDetail() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between text-white p-6 md:p-10 rounded-xl">
      {/* Left Column */}
      <div className="w-full md:w-[60%] flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-[#f1c376]">
          AED 29,950,000
        </h1>
        <div className="flex gap-6 text-gray-300 text-lg">
          <p>🏡 Villa</p>
          <p>🛏 6</p>
          <p>🛁 6</p>
        </div>
        <div className="flex gap-6 text-sm text-gray-400">
          <p>BUA: 7,535 sq.ft</p>
          <p>Plot: 6,900 sq.ft</p>
        </div>

        <h2 className="text-2xl font-semibold mt-2">
          Upgraded | Three Bedroom | Exclusive
        </h2>
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
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        {/* Agent Card */}
        <div className=" border rounded-xl p-5 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
              <Image
                src={agentImage}
                alt="Agent"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Ghizlane Haddi</h3>
              <p className="text-sm text-gray-400">Sr. Offplan Consultant</p>
              <p className="text-sm text-gray-400">Speaks English</p>
              <p className="text-sm text-gray-400">RERA Number: 55365</p>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <button className="flex-1 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition text-sm">
              📞 Call
            </button>
            <button className="flex-1 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition text-sm">
              💬 WhatsApp
            </button>
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
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition">
            Try Our Calculator
          </button>
        </div>
      </div>
    </div>
  );
}
