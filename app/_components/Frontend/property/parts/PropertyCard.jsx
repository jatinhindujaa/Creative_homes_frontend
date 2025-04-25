"use client";
import Image from "next/image";
import villah from "../assets/villah.png"
import int from "../assets/int.png"
import agent from "../assets/1.png";



export default function PropertyCard() {
  return (
    <div className=" text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center gap-6">
      {/* Left - Image Section */}
      <div className="w-full md:w-1/2 flex flex-row gap-4">
        {/* Main Image */}
        <div className="relative w-[80%] h-[250px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer">
          <Image
            src={villah}
            alt="Luxury Villa"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Small Images Grid */}
        <div className="flex flex-col gap-2 w-[20%] ">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative w-[80%] h-[80px] md:h-[95px] rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={int}
                alt={`Interior ${num}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-bold">AED 29,950,000</h2>
        <p className="text-xl md:text-xl font-semibold mt-1">
          Upgraded | Three Bedroom | Exclusive
        </p>
        <p className="text-gray-400 text-lg mt-1">
          📍 The Sundials, Jumeirah Golf Estates, Dubai
        </p>
        <div className="flex items-center gap-32 text-gray-300 text-lg mt-4">
          <div className="flex flex-row gap-4">
            <p>🏡 Villa</p>
            <p>🚗 6</p>
            <p>🛁 6</p>
          </div>
          <div className="flex flex-row gap-6">
            <p>BUA: 7,535 sq.ft</p>
            <p>|</p>
            <p>Plot: 6,900 sq.ft</p>
          </div>
        </div>

        <p className="text-gray-300 text-md mt-4 w-[80%]">
          Escape to the luxurious lifestyle of Jumeirah Golf Estates with this
          stunning 6-bedroom home located in "The Sundials".
        </p>

        <div className="flex gap-32 mt-4 items-center">
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-[50px] h-[50px] overflow-hidden">
              <Image
                src={agent} // Replace with actual agent image
                alt="Agent"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-lg font-medium">Ghizlane Haddi</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
              📞 Call
            </button>
            <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
              💬 WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
