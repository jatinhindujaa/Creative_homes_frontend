"use client";
import { useState } from "react";
import Image from "next/image";
import mainImage from "../assets/3.png"; // Replace with actual image path
import thumb1 from "../assets/4.png"; // Replace with actual image path
import thumb2 from "../assets/4.png"; // Replace with actual image path

export default function OffplanGallery() {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  const thumbnails = [thumb1, thumb2];

  return (
    <div className=" text-white p-6 md:p-10 rounded-xl">
      <div className="flex flex-col md:flex-row gap-6 mt-[80px]">
        {/* Left: Main Offplan Image */}
        <div className="relative w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden mb-6 md:mb-0">
          <Image
            src={selectedImage}
            alt="Main Offplan"
            layout="fill"
            className="object-cover rounded-lg"
          />
          <div className="flex gap-4 mt-4 absolute bottom-5 left-5">
            <button className="bg-[white] text-black px-6 py-1 rounded-full hover:bg-[#d39c5b] text-sm font-medium">
              14 Photos
            </button>
            <button className="bg-white border border-[#f1c376] text-black px-6 py-1 rounded-full hover:bg-[#f1c376] hover:text-black text-sm font-medium">
              Map View
            </button>
          </div>
        </div>

        {/* Right: Thumbnail Images and Buttons */}
        <div className="flex flex-col gap-4 md:w-1/3">
          {/* Thumbnail Images */}
          <div className="flex flex-wrap gap-4 flex-col">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                className="relative w-full h-[120px] md:h-[190px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(thumb)}
              >
                <Image
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Buttons */}
        </div>
      </div>
    </div>
  );
}
