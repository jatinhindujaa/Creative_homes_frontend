// "use client";
// import React, { useState } from "react";
// import img1 from "../assets/property/img1.png";
// import img2 from "../assets/property/img2.png";
// import img3 from "../assets/property/img3.png";
// import Button from "@/app/_components/ui/Button";

// const propertyData = [
//   {
//     id: 1,
//     name: "Mayfair Gardens",
//     location: "Emirates Hill",
//     developer: "Majid Development",
//     price: "From AED 875,000",
//     handoverDate: "August 2025",
//     phoneNo: "123456789",
//     email: "example@example.com",
//     whatsapp: "123456789",
//     image: img1,
//   },
//   {
//     id: 2,
//     name: "Ellinton Cove",
//     location: "Dubai Islands",
//     developer: "Ellinton",
//     price: "From AED 268,000",
//     handoverDate: "Q3 2028",
//     phoneNo: "123456789",
//     email: "example@example.com",
//     whatsapp: "123456789",
//     image: img2,
//   },
//   {
//     id: 3,
//     name: "Avant Garde Residences",
//     location: "Dubai South",
//     developer: "Skyline",
//     price: "From AED 900,000",
//     handoverDate: "July 2026",
//     phoneNo: "123456789",
//     email: "example@example.com",
//     whatsapp: "123456789",
//     image: img3,
//   },
//   {
//     id: 4,
//     name: "Residences",
//     location: "Dubai South",
//     developer: "Skyline",
//     price: "From AED 900,000",
//     handoverDate: "July 2026",
//     phoneNo: "123456789",
//     email: "example@example.com",
//     whatsapp: "123456789",
//     image: img1,
//   },
//   {
//     id: 5,
//     name: "Ellinton Cove",
//     location: "Dubai Islands",
//     developer: "Ellinton",
//     price: "From AED 268,000",
//     handoverDate: "Q3 2028",
//     phoneNo: "123456789",
//     email: "example@example.com",
//     whatsapp: "123456789",
//     image: img2,
//   },
//   {
//     id: 6,
//     name: "Ellinton Cove",
//     location: "Dubai Islands",
//     developer: "Ellinton",
//     price: "From AED 268,000",
//     handoverDate: "Q3 2028",
//     phoneNo: "123456789",
//     email: "example@example.com",
//     whatsapp: "123456789",
//     image: img3,
//   },
// ];

// const Offplan_property = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const propertyPerPage = 4;

//   const totalPages = Math.ceil(propertyData.length / propertyPerPage);

//   const startIndex = (currentPage - 1) * propertyPerPage;
//   const currentProperties = propertyData.slice(
//     startIndex,
//     startIndex + propertyPerPage
//   );

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };
//   return (
//     <div className="bg-[#282927] text-white flex flex-col px-20 py-12">
//       <div className=" flex justify-between ">
//         <div className="flex space-x-6">
//           <span className="text-[1.4rem] font-medium leading-none">
//             Off Plan Properties
//           </span>
//           <span className="text-[1.4rem] font-medium leading-none">|</span>
//           <span className="text-[1.4rem] font-medium leading-none  text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//             128 Results
//           </span>
//         </div>

//         <div className="flex space-x-6">
//           <div className="relative">
//             <select
//               className="bg-white text-black  py-2 pl-4 pr-8 cursor-pointer appearance-none focus:outline-none rounded-full"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Most Recent
//               </option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//             </select>
//             <svg
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none"
//               width="13"
//               height="10"
//               viewBox="0 0 13 10"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M1 1L6.5 8L12 1" stroke="black" strokeWidth="1.5" />
//             </svg>
//           </div>

//           <button className="group flex gap-2 whitespace-nowrap px-4 py-2 border border-white rounded-full text-white cursor-pointer hover:bg-white hover:text-black ">
//             <div>
//               <svg
//                 width="19"
//                 height="19"
//                 viewBox="0 0 19 19"
//                 fill="white"
//                 className="group-hover:fill-black"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M14.8438 0C12.5519 0 10.6875 1.86438 10.6875 4.15625C10.6875 6.289 14.022 10.0664 14.402 10.4904C14.5148 10.6151 14.6751 10.6875 14.8438 10.6875C15.0124 10.6875 15.1727 10.6151 15.2855 10.4904C15.6655 10.0664 19 6.289 19 4.15625C19 1.86438 17.1356 0 14.8438 0ZM14.8438 5.9375C13.8605 5.9375 13.0625 5.1395 13.0625 4.15625C13.0625 3.173 13.8605 2.375 14.8438 2.375C15.827 2.375 16.625 3.173 16.625 4.15625C16.625 5.1395 15.827 5.9375 14.8438 5.9375ZM0.372875 6.97538C0.262761 7.01976 0.168428 7.09605 0.101987 7.19444C0.0355466 7.29283 3.07986e-05 7.40884 0 7.52756L0 18.4062C0 18.6034 0.0985625 18.7874 0.26125 18.8979C0.361 18.9644 0.476187 19 0.59375 19C0.668562 19 0.743375 18.9858 0.814625 18.9573L5.9375 16.9076V4.75L0.372875 6.97538Z" />
//                 <path d="M16.169 11.2836C15.8317 11.6589 15.3484 11.875 14.8438 11.875C14.3391 11.875 13.8557 11.6589 13.5185 11.2836C13.3974 11.1494 13.2418 10.9725 13.0625 10.7623V19L18.6271 16.7746C18.8527 16.6856 19 16.4659 19 16.2236V7.49431C18.0274 9.14137 16.7271 10.6614 16.169 11.2836ZM9.87406 5.84963L7.125 4.75V16.9076L11.875 18.8076V9.272C11.1162 8.24956 10.3241 7.01813 9.87406 5.84963Z" />
//               </svg>
//             </div>
//             <span>Map view</span>
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center space-x-6">
//         {currentProperties.map((property) => (
//           <PropertyCard key={property.id} el={property} />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-between mt-8 gap-4 items-center">
//         <Button
//           onClick={handlePrev}
//           text="Previous"
//           className={`px-4 text-[1rem] py-1 text-white ${
//             currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={currentPage === 1}
//         />

//         <span className="text-white">
//           Page {currentPage} of {totalPages}
//         </span>

//         <Button
//           onClick={handleNext}
//           text="Next"
//           className={`px-5 text-[1rem] py-[0.15rem] text-white ${
//             currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={currentPage === totalPages}
//         />
//       </div>
//     </div>
//   );
// };

// export default Offplan_property;

// const PropertyCard = ({ el }) => {
//   const {
//     location,
//     name,
//     price,
//     developer,
//     image,
//     handoverDate,
//     phoneNo,
//     email,
//     whatsapp,
//   } = el;

//   const handleCall = () => {
//     window.location.href = `tel:${phoneNo}`;
//   };

//   const handleEmail = () => {
//     window.location.href = `mailto:${email}`;
//   };

//   const handleWhatsapp = () => {
//     window.open(`https://wa.me/${whatsapp}`, "_blank");
//   };

//   return (
//     <div className="flex flex-col gap-4 p-4 border border-white rounded-[20px] w-[30%] mt-12">
//       {/* Image*/}
//       <div className="relative">
//         <img
//           src={image.src}
//           alt={name}
//           className="w-[22rem] xl:w-[25rem] h-[20rem] object-cover rounded-[20px]"
//         />
//         <span className="absolute top-12 bg-gradient-to-r from-[rgba(0,0,0,0.5)_0.07%] to-[rgba(0,0,0,0.3)_97%] text-white text-[1rem] font-medium px-3 py-2 rounded-r-full">
//           COMING SOON
//         </span>
//       </div>

//       {/* Property Details */}
//       <div className="flex flex-col gap-2">
//         <span className="text-[1.6rem] font-medium leading-none">{name}</span>
//         <span className="text-[0.9rem] flex items-center space-x-1">
//           <svg
//             width="10"
//             height="16"
//             viewBox="0 0 14 19"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M6.88108 0C3.08683 0 0 3.08683 0 6.88104C0 11.5898 6.15789 18.5025 6.42007 18.7945C6.66633 19.0687 7.09628 19.0682 7.34209 18.7945C7.60427 18.5025 13.7622 11.5898 13.7622 6.88104C13.7621 3.08683 10.6753 0 6.88108 0ZM6.88108 10.3431C4.9721 10.3431 3.41907 8.79002 3.41907 6.88104C3.41907 4.97206 4.97214 3.41904 6.88108 3.41904C8.79002 3.41904 10.3431 4.9721 10.3431 6.88108C10.3431 8.79006 8.79002 10.3431 6.88108 10.3431Z"
//               fill="white"
//             />
//           </svg>
//           <span>{location}</span>
//         </span>
//         <span className="text-[1.1rem] flex w-[90%]">
//           <span className="w-[40%]">Developer:</span>
//           <span className="w-[60%]">{developer}</span>
//         </span>
//         <span className="text-[1.1rem] flex w-[90%]">
//           <span className="w-[40%]">Price:</span>
//           <span className="w-[60%]">{price}</span>
//         </span>
//         <span className="text-[1.1rem] flex w-[90%]">
//           <span className="w-[40%]">Handover Date:</span>
//           <span className="w-[60%]">{handoverDate}</span>
//         </span>
//       </div>

//       {/*  Buttons */}
//       <div className="flex space-x-4 mt-2">
//         <button
//           onClick={handleCall}
//           className="flex items-center gap-2 bg-transparent border border-white  px-4 py-2 rounded-full hover:text-black hover:bg-white group"
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 20 20"
//             fill="white"
//             className="group-hover:fill-black"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M19.4755 14.678L16.6786 11.8869C15.6797 10.8901 13.9816 11.2889 13.582 12.5847C13.2823 13.4818 12.2834 13.9802 11.3844 13.7808C9.38661 13.2824 6.68957 10.6907 6.19012 8.59745C5.89045 7.70029 6.48979 6.70348 7.3888 6.40448C8.68738 6.00575 9.08694 4.31119 8.08804 3.31438L5.2911 0.523323C4.49198 -0.174441 3.29329 -0.174441 2.59406 0.523323L0.696143 2.41725C-1.20177 4.41087 0.895924 9.69394 5.59077 14.3789C10.2856 19.0639 15.5798 21.2569 17.5776 19.2633L19.4755 17.3693C20.1748 16.5719 20.1748 15.3757 19.4755 14.678Z" />
//           </svg>

//           <span>Call</span>
//         </button>
//         <button
//           onClick={handleEmail}
//           className="group flex items-center gap-2 bg-transparent border border-white px-4 py-2 rounded-full hover:text-black hover:bg-white"
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 29 20"
//             fill="white"
//             className="group-hover:fill-black"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M18.9328 11.1805L16.5506 13.5709C15.5845 14.5403 13.8847 14.5612 12.8978 13.5709L10.5154 11.1805L1.95898 19.7648C2.27748 19.912 2.62865 19.9999 3.00198 19.9999H26.4464C26.8197 19.9999 27.1708 19.9121 27.4892 19.7648L18.9328 11.1805Z" />
//             <path d="M26.4463 0H3.00187C2.62854 0 2.27737 0.0878888 1.95898 0.235166L11.1021 9.40865C11.1027 9.40926 11.1035 9.40938 11.1041 9.40999C11.1047 9.4106 11.1048 9.41143 11.1048 9.41143L14.0777 12.3942C14.3935 12.71 15.0547 12.71 15.3705 12.3942L18.3428 9.41193C18.3428 9.41193 18.3436 9.4106 18.3442 9.40999C18.3442 9.40999 18.3455 9.40926 18.3461 9.40865L27.4891 0.235111C27.1707 0.0877778 26.8196 0 26.4463 0Z" />
//             <path d="M0.765888 1.40076C0.601111 1.73398 0.5 2.10387 0.5 2.50009V17.5001C0.5 17.8963 0.601 18.2662 0.765833 18.5994L9.3371 10.0004L0.765888 1.40076Z" />
//             <path d="M28.6786 1.40051L20.1074 10.0002L28.6786 18.5994C28.8434 18.2662 28.9445 17.8963 28.9445 17.4999V2.49996C28.9445 2.10362 28.8434 1.73373 28.6786 1.40051Z" />
//           </svg>
//           <span>Email</span>
//         </button>
//         <button
//           onClick={handleWhatsapp}
//           className="group flex items-center gap-2 bg-transparent border border-white hover:text-black px-4 py-2 rounded-full hover:bg-white"
//         >
//           <svg
//             width="16"
//             height="16"
//             viewBox="0 0 20 20"
//             fill="white"
//             className="group-hover:fill-black"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M10.0025 0H9.9975C4.48375 0 0 4.485 0 10C0 12.1875 0.705 14.215 1.90375 15.8612L0.6575 19.5763L4.50125 18.3475C6.0825 19.395 7.96875 20 10.0025 20C15.5162 20 20 15.5138 20 10C20 4.48625 15.5162 0 10.0025 0ZM15.8212 14.1213C15.58 14.8025 14.6225 15.3675 13.8587 15.5325C13.3363 15.6437 12.6537 15.7325 10.3562 14.78C7.4175 13.5625 5.525 10.5763 5.3775 10.3825C5.23625 10.1887 4.19 8.80125 4.19 7.36625C4.19 5.93125 4.91875 5.2325 5.2125 4.9325C5.45375 4.68625 5.8525 4.57375 6.235 4.57375C6.35875 4.57375 6.47 4.58 6.57 4.585C6.86375 4.5975 7.01125 4.615 7.205 5.07875C7.44625 5.66 8.03375 7.095 8.10375 7.2425C8.175 7.39 8.24625 7.59 8.14625 7.78375C8.0525 7.98375 7.97 8.0725 7.8225 8.2425C7.675 8.4125 7.535 8.5425 7.3875 8.725C7.2525 8.88375 7.1 9.05375 7.27 9.3475C7.44 9.635 8.0275 10.5937 8.8925 11.3637C10.0087 12.3575 10.9137 12.675 11.2375 12.81C11.4787 12.91 11.7662 12.8863 11.9425 12.6988C12.1663 12.4575 12.4425 12.0575 12.7238 11.6638C12.9237 11.3813 13.1763 11.3462 13.4412 11.4462C13.7113 11.54 15.14 12.2462 15.4338 12.3925C15.7275 12.54 15.9212 12.61 15.9925 12.7338C16.0625 12.8575 16.0625 13.4388 15.8212 14.1213Z" />
//           </svg>
//           <span>WhatsApp</span>
//         </button>
//       </div>
//     </div>
//   );
// };

"use client";
import React, { useState } from "react";
import img1 from "../assets/property/img1.png";
import img2 from "../assets/property/img2.png";
import img3 from "../assets/property/img3.png";
import Button from "@/app/_components/ui/Button";

const propertyData = [
  {
    id: 1,
    name: "Trump Tower",
    location: "World Trade Centre",
    developer: "Dar Al-Arkan",
    price: "From AED 4M",
    handoverDate: "Q3 2028",
    phoneNo: "123456789",
    email: "example@example.com",
    whatsapp: "123456789",
    image: img1,
  },
  {
    id: 2,
    name: "Atelis at D3",
    location: "Dubai Design District",
    developer: "Meraas",
    price: "From AED 2.1M",
    handoverDate: "Q2 2028",
    phoneNo: "123456789",
    email: "example@example.com",
    whatsapp: "123456789",
    image: img2,
  },
  {
    id: 3,
    name: "Mr C Residences Downtown Dubai",
    location: "Downtown Dubai",
    developer: "Alta Real Estate",
    price: "From AED 8.1M",
    handoverDate: "Q1 2027",
    phoneNo: "123456789",
    email: "example@example.com",
    whatsapp: "123456789",
    image: img3,
  },
  {
    id: 4,
    name: "Ellington Cove",
    location: "Dubai Islands",
    developer: "Ellington",
    price: "From AED 2.3M",
    handoverDate: "Q3 2028",
    phoneNo: "123456789",
    email: "example@example.com",
    whatsapp: "123456789",
    image: img3,
  },
  // Add other properties here...
];

const Offplan_property = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertyPerPage = 4;

  const totalPages = Math.ceil(propertyData.length / propertyPerPage);

  const startIndex = (currentPage - 1) * propertyPerPage;
  const currentProperties = propertyData.slice(
    startIndex,
    startIndex + propertyPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#282927] text-white flex flex-col px-5 py-12">
      <div className=" flex justify-between mb-6 flex-col lg:gap-10 gap-5">
        <div className="flex space-x-6">
          <div className="relative">
            <select
              className="bg-white text-black py-2 pl-4 pr-8 cursor-pointer appearance-none focus:outline-none rounded-full"
              defaultValue=""
            >
              <option value="" disabled>
                Most Recent
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black pointer-events-none"
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6.5 8L12 1" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>

          <button className="group flex gap-2 whitespace-nowrap px-4 py-2 border border-white rounded-full text-white cursor-pointer hover:bg-white hover:text-black">
            <div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="white"
                className="group-hover:fill-black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.8438 0C12.5519 0 10.6875 1.86438 10.6875 4.15625C10.6875 6.289 14.022 10.0664 14.402 10.4904C14.5148 10.6151 14.6751 10.6875 14.8438 10.6875C15.0124 10.6875 15.1727 10.6151 15.2855 10.4904C15.6655 10.0664 19 6.289 19 4.15625C19 1.86438 17.1356 0 14.8438 0ZM14.8438 5.9375C13.8605 5.9375 13.0625 5.1395 13.0625 4.15625C13.0625 3.173 13.8605 2.375 14.8438 2.375C15.827 2.375 16.625 3.173 16.625 4.15625C16.625 5.1395 15.827 5.9375 14.8438 5.9375ZM0.372875 6.97538C0.262761 7.01976 0.168428 7.09605 0.101987 7.19444C0.0355466 7.29283 3.07986e-05 7.40884 0 7.52756L0 18.4062C0 18.6034 0.0985625 18.7874 0.26125 18.8979C0.361 18.9644 0.476187 19 0.59375 19C0.668562 19 0.743375 18.9858 0.814625 18.9573L5.9375 16.9076V4.75L0.372875 6.97538Z" />
                <path d="M16.169 11.2836C15.8317 11.6589 15.3484 11.875 14.8438 11.875C14.3391 11.875 13.8557 11.6589 13.5185 11.2836C13.3974 11.1494 13.2418 10.9725 13.0625 10.7623V19L18.6271 16.7746C18.8527 16.6856 19 16.4659 19 16.2236V7.49431C18.0274 9.14137 16.7271 10.6614 16.169 11.2836ZM9.87406 5.84963L7.125 4.75V16.9076L11.875 18.8076V9.272C11.1162 8.24956 10.3241 7.01813 9.87406 5.84963Z" />
              </svg>
            </div>
            <span>Map view</span>
          </button>
        </div>

        <div className="flex space-x-6">
          <span className="text-[1.4rem] font-medium leading-none">
            Off Plan Properties
          </span>
          <span className="text-[1.4rem] font-medium leading-none">|</span>
          <span className="text-[1.4rem] font-medium leading-none text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            {propertyData.length} Results
          </span>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} el={property} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-8 gap-4 items-center">
        <Button
          onClick={handlePrev}
          text="Previous"
          className={`px-4 text-[1rem] py-1 text-white ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        />

        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          onClick={handleNext}
          text="Next"
          className={`px-5 text-[1rem] py-[0.15rem] text-white ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
};

export default Offplan_property;

const PropertyCard = ({ el }) => {
  const {
    location,
    name,
    price,
    developer,
    image,
    handoverDate,
    phoneNo,
    email,
    whatsapp,
  } = el;

  const handleCall = () => {
    window.location.href = `tel:${phoneNo}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsapp = () => {
    window.open(`https://wa.me/${whatsapp}`, "_blank");
  };

  return (
    <div className="flex flex-col gap-4 p-4 border border-white rounded-[20px] w-full sm:w-[45%] md:w-[90%] lg:w-[100%]">
      <div className="relative">
        <img
          src={image.src}
          alt={name}
          className="w-full h-[200px] object-cover rounded-[20px]"
        />
        <span className="absolute top-4 left-4 bg-gradient-to-r from-[rgba(0,0,0,0.5)_0.07%] to-[rgba(0,0,0,0.3)_97%] text-white text-[1rem] font-medium px-3 py-2 rounded-full">
          COMING SOON
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[1.2rem] font-medium leading-none">{name}</span>
        <span className="text-[0.9rem] flex items-center space-x-1">
          <svg
            width="10"
            height="16"
            viewBox="0 0 14 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.88108 0C3.08683 0 0 3.08683 0 6.88104C0 11.5898 6.15789 18.5025 6.42007 18.7945C6.66633 19.0687 7.09628 19.0682 7.34209 18.7945C7.60427 18.5025 13.7622 11.5898 13.7622 6.88104C13.7621 3.08683 10.6753 0 6.88108 0ZM6.88108 10.3431C4.9721 10.3431 3.41907 8.79002 3.41907 6.88104C3.41907 4.97206 4.97214 3.41904 6.88108 3.41904C8.79002 3.41904 10.3431 4.9721 10.3431 6.88108C10.3431 8.79006 8.79002 10.3431 6.88108 10.3431Z"
              fill="white"
            />
          </svg>
          <span>{location}</span>
        </span>
        <span className="text-[1rem] flex justify-between w-full">
          <span>Developer: {developer}</span>
          <span>Price: {price}</span>
        </span>
        <span className="text-[1rem] flex justify-between w-full">
          <span>Handover Date: {handoverDate}</span>
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleCall}
          className="flex items-center gap-2 bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black"
        >
          Call
        </button>
        <button
          onClick={handleEmail}
          className="flex items-center gap-2 bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black"
        >
          Email
        </button>
        <button
          onClick={handleWhatsapp}
          className="flex items-center gap-2 bg-transparent border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black"
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
};
