// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import mainImage from "../assets/3.png"; // Replace with actual image path
// import thumb1 from "../assets/4.png"; // Replace with actual image path
// import thumb2 from "../assets/4.png"; // Replace with actual image path

// export default function PropertyGallery({data}) {
//   console.log("data", data);
//   const [selectedImage, setSelectedImage] = useState(mainImage);

//   const thumbnails = [thumb1, thumb2];

//   return (
//     <div className=" text-white p-6 md:p-10 rounded-xl">
//       <div className="flex flex-col md:flex-row gap-6 mt-[80px]">
//         {/* Left: Main Property Image */}
//         <div className="relative w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden mb-6 md:mb-0">
//           <Image
//             src={data.multipleImages[0]}
//             alt="Main Property"
//             layout="fill"
//             className="object-cover rounded-lg"
//           />
//           <div className="flex gap-4 mt-4 absolute bottom-5 left-5">
//             <button className="bg-[white] text-black px-6 py-1 rounded-full hover:bg-[#d39c5b] text-sm font-medium">
//               {data.multipleImages.length} Photos
//             </button>
//             <button className="bg-white border border-[#f1c376] text-black px-6 py-1 rounded-full hover:bg-[#f1c376] hover:text-black text-sm font-medium">
//               Map View
//             </button>
//           </div>
//         </div>

//         {/* Right: Thumbnail Images and Buttons */}
//         <div className="flex flex-col gap-4 md:w-1/3">
//           {/* Thumbnail Images */}
//           <div className="flex flex-wrap gap-4 flex-col">
//             {data.multipleImages.map((thumb, index) => (
//               <div
//                 key={index}
//                 className="relative w-full h-[120px] md:h-[190px] rounded-lg overflow-hidden cursor-pointer"
//                 onClick={() => setSelectedImage(thumb)}
//               >
//                 <Image
//                   src={thumb}
//                   alt={`Thumbnail ${index + 1}`}
//                   layout="fill"
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function PropertyGallery({ data }) {
//   const [selectedImage, setSelectedImage] = useState(data?.multipleImages[0]);

//   const remainingCount = data?.multipleImages.length - 3;

//   return (
//     <div className="text-white p-6 md:p-10 rounded-xl">
//       <div className="flex flex-col md:flex-row gap-6 mt-[80px]">
//         {/* Left: Main Image */}
//         <div className="relative w-full md:w-2/3 h-[400px] rounded-lg overflow-hidden mb-6 md:mb-0">
//           <Image
//             src={data?.multipleImages[0]}
//             alt="Selected Property"
//             layout="fill"
//             className="object-cover rounded-lg"
//           />
//           <div className="flex gap-4 mt-4 absolute bottom-5 left-5">
//             <button className="bg-white text-black px-6 py-1 rounded-full hover:bg-[#d39c5b] text-sm font-medium">
//               {data?.multipleImages.length} Photos
//             </button>
//             <button className="bg-white border border-[#f1c376] text-black px-6 py-1 rounded-full hover:bg-[#f1c376] text-sm font-medium">
//               Map View
//             </button>
//           </div>
//         </div>

//         {/* Right: Thumbnail section */}
//         <div className="flex flex-col gap-4 md:w-1/3">
//           <div className="flex flex-col gap-4">
//             {/* First 2 thumbnails */}
//             {data?.multipleImages.slice(1, 2).map((thumb, index) => (
//               <div
//                 key={index}
//                 className="relative w-full h-[120px] md:h-[190px] rounded-lg overflow-hidden cursor-pointer"
//                 onClick={() => setSelectedImage(thumb)}
//               >
//                 <Image
//                   src={thumb}
//                   alt={`Thumb ${index + 1}`}
//                   layout="fill"
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             ))}

//             {/* Final “+X” thumbnail if more images exist */}
//             {data?.multipleImages.length > 3 && (
//               <div
//                 className="relative w-full h-[120px] md:h-[190px] rounded-lg overflow-hidden bg-black/50 flex items-center justify-center text-white text-xl font-semibold cursor-pointer"
//                 onClick={() => setSelectedImage(data.multipleImages[3])}
//               >
//                 +{remainingCount}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";
import { useState } from "react";
import Image from "next/image";

export default function PropertyGallery({ data }) {
  const images = data?.multipleImages || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => setViewerOpen(false);

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const remainingCount = images.length - 3;

  return (
    <div className="text-white p-6 md:p-10 rounded-xl">
      <div className="flex flex-col md:flex-row gap-6 mt-[80px]">
        {/* Left: Main Image */}
        <div
          className="relative w-full md:w-2/3 h-[600px] rounded-lg overflow-hidden mb-6 md:mb-0 cursor-pointer"
          onClick={() => openViewer(0)}
        >
          <Image
            src={images[0]}
            alt="Main Image"
            layout="fill"
            className="object-cover rounded-lg"
          />
          <div className="flex gap-4 mt-4 absolute bottom-5 left-5">
            <button className="bg-white text-black px-6 py-1 rounded-full hover:bg-[#d39c5b] text-sm font-medium">
              {images.length} Photos
            </button>
            <button className="bg-white border border-[#f1c376] text-black px-6 py-1 rounded-full hover:bg-[#f1c376] text-sm font-medium">
              Map View
            </button>
          </div>
        </div>

        {/* Right: Thumbnail section */}
        <div className="flex flex-col gap-4 md:w-1/3 ">
          <div className="flex flex-col gap-4 h-full">
            {/* First 2 thumbnails */}
            {images.slice(1, 2).map((thumb, i) => (
              <div
                key={i}
                className="relative w-full md:h-[50%] h-[120px] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openViewer(i + 1)}
              >
                <Image
                  src={thumb}
                  alt={`Thumbnail ${i + 1}`}
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
            ))}

            {/* Final “+X” thumbnail */}
            {images.length > 3 && (
              <div
                className="relative w-full md:h-[50%] h-[120px] rounded-lg overflow-hidden bg-black/50 flex items-center justify-center text-white text-xl font-semibold cursor-pointer"
                onClick={() => openViewer(3)}
              >
                +{remainingCount}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Viewer with Carousel */}
      {viewerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeViewer}
            className="absolute top-4 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>

          {/* Left arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 text-white text-4xl font-bold z-50"
          >
            &#8592;
          </button>

          {/* Image */}
          <div className="relative w-[90%] h-[80%] max-w-4xl">
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              layout="fill"
              className="object-contain"
            />
          </div>

          {/* Right arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 text-white text-4xl font-bold z-50"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}
