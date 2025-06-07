"use client";
import { useState } from "react";
import Image from "next/image";
import mainImage from "../assets/3.png"; // Replace with actual image path
import thumb1 from "../assets/4.png"; // Replace with actual image path
import thumb2 from "../assets/4.png"; // Replace with actual image path

export default function OffplanGallery({data}) {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  const thumbnails = [thumb1, thumb2];

  return (
    <div className=" text-white p-6 md:p-10 rounded-xl">
      <div className="flex flex-col md:flex-row gap-6 mt-[80px]">
        {/* Left: Main Offplan Image */}
        <div className="relative w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden mb-6 md:mb-0">
          <Image
            src={data?.multipleImages[0]}
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
            {data?.multipleImages?.slice(0,2).map((thumb, index) => (
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

// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function OffplanGallery({ data }) {
//   const [selectedImage, setSelectedImage] = useState(
//     data?.multipleImages[0] || ""
//   );
//   const [isMapView, setIsMapView] = useState(false);

//   const handleThumbnailClick = (thumb) => {
//     setSelectedImage(thumb);
//   };

//   const renderThumbnails = () => {
//     const totalImages = data?.multipleImages.length || 0;
//     return data?.multipleImages.map((thumb, index) => {
//       if (index === 0) {
//         return (
//           <div
//             key={index}
//             className="relative w-full h-[120px] md:h-[190px] rounded-lg overflow-hidden cursor-pointer"
//             onClick={() => setSelectedImage(thumb)}
//           >
//             <Image
//               src={thumb}
//               alt={`Thumbnail ${index + 1}`}
//               layout="fill"
//               className="object-cover rounded-lg"
//             />
//           </div>
//         );
//       } else {
//         return (
//           <div
//             key={index}
//             className="relative w-full h-[120px] md:h-[190px] rounded-lg overflow-hidden cursor-pointer"
//             onClick={() => setSelectedImage(thumb)}
//           >
//             <Image
//               src={thumb}
//               alt={`Thumbnail ${index + 1}`}
//               layout="fill"
//               className="object-cover rounded-lg"
//             />
//             {index === 1 && totalImages > 1 && (
//               <div className="absolute top-0 right-0 bg-black text-white p-2 rounded-bl-lg">
//                 +{totalImages - 1}
//               </div>
//             )}
//           </div>
//         );
//       }
//     });
//   };

//   return (
//     <div className="text-white p-6 md:p-10 rounded-xl">
//       <div className="flex flex-col md:flex-row gap-6 mt-[80px]">
//         {/* Left: Main Offplan Image */}
//         <div className="relative w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden mb-6 md:mb-0">
//           <Image
//             src={selectedImage}
//             alt="Main Offplan"
//             layout="fill"
//             className="object-cover rounded-lg"
//           />
//           <div className="flex gap-4 mt-4 absolute bottom-5 left-5">
//             <button className="bg-[white] text-black px-6 py-1 rounded-full hover:bg-[#d39c5b] text-sm font-medium">
//               14 Photos
//             </button>
//             <button
//               className="bg-white border border-[#f1c376] text-black px-6 py-1 rounded-full hover:bg-[#f1c376] hover:text-black text-sm font-medium"
//               onClick={() => setIsMapView(true)}
//             >
//               Map View
//             </button>
//           </div>
//         </div>

//         {/* Right: Thumbnail Images and Buttons */}
//         <div className="flex flex-col gap-4 md:w-1/3">
//           {/* Thumbnail Images */}
//           <div className="flex flex-wrap gap-4 flex-col">
//             {renderThumbnails()}
//           </div>

//           {/* Buttons */}
//         </div>
//       </div>

//       {isMapView && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg text-black">
//             <h3 className="text-xl mb-4">Map View</h3>
//             {/* Here you can render your map view or any content */}
//             <button
//               className="px-6 py-2 bg-[#d39c5b] text-white rounded-full"
//               onClick={() => setIsMapView(false)}
//             >
//               Close Map View
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
