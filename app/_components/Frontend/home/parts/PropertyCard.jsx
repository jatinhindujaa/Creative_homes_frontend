"use client";
import Image from "next/image";

export default function PropertyCard() {
  return (
    <div className="bg-gray-900 text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-start gap-6">
      {/* Left - Image Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Main Image */}
        <div className="relative w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/property-main.jpg" // Replace with actual image path
            alt="Luxury Villa"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Small Images Grid */}
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="relative w-full h-[80px] md:h-[100px] rounded-lg overflow-hidden"
            >
              <Image
                src={`/property-${num}.jpg`} // Replace with actual images
                alt={`Interior ${num}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right - Details Section */}
      <div className="w-full md:w-1/2 flex flex-col">
        {/* Price and Title */}
        <h2 className="text-2xl md:text-3xl font-bold">AED 29,950,000</h2>
        <p className="text-lg md:text-xl font-semibold mt-1">
          Upgraded | Three Bedroom | Exclusive
        </p>
        <p className="text-gray-400 text-sm mt-1">
          📍 The Sundials, Jumeirah Golf Estates, Dubai
        </p>

        {/* Property Info */}
        <div className="flex items-center gap-4 text-gray-300 text-sm mt-4">
          <p>🏡 Villa</p>
          <p>🚗 6</p>
          <p>🛁 6</p>
          <p>BUA: 7,535 sq.ft</p>
          <p>Plot: 6,900 sq.ft</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mt-4">
          Escape to the luxurious lifestyle of Jumeirah Golf Estates with this
          stunning 6-bedroom home located in "The Sundials".
        </p>

        {/* Agent Info */}
        <div className="flex items-center gap-4 mt-6">
          {/* Agent Image */}
          <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src="/agent.jpg" // Replace with actual agent image
              alt="Agent"
              fill
              className="object-cover rounded-full"
            />
          </div>
          {/* Agent Name */}
          <p className="text-lg font-medium">Ghizlane Haddi</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
            📞 Call
          </button>
          <button className="border border-gray-400 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
            💬 WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
