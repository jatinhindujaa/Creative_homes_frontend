"use client";
import React, { useState } from "react";
import img1 from "../assets/property/img1.png";
import img2 from "../assets/property/img2.png";
import img3 from "../assets/property/img3.png";
import Button from "@/app/_components/ui/Button";
import { useOffplan } from "@/app/_components/admin/offplan/useOffplan";
import { useRouter } from "next/navigation";

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
  const propertyPerPage = 6;
 const {data, isLoading} = useOffplan();
 console.log("data",data)
  const totalPages = Math.ceil(data?.length / propertyPerPage);

  const startIndex = (currentPage - 1) * propertyPerPage;
  const filteredDatas = data?.filter((el, i) => el.status === false);
  const currentProperties = filteredDatas?.slice(
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
    <div className="bg-[#282927] text-white flex flex-col md:w-[80%] md:py-12 md:pt-22 pt-32">
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
            {data?.length} Results
          </span>
        </div>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {currentProperties?.map((property, index) => (
          <PropertyCard key={index} el={property} />
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
  const router = useRouter()
  const {
    _id,
    address,
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
    <div
      className="flex flex-col gap-4 p-4 border border-white rounded-[20px] w-full sm:w-[45%] md:w-[90%] lg:w-[100%] cursor-pointer"
      onClick={() => router.push(`/off-plan-properties/${_id}`)}
    >
      <div className="relative">
        <img
          src={el.multipleImages[0]}
          alt={name}
          className="w-full h-[200px] object-cover rounded-[20px]"
        />
        <span className="absolute top-4 left-4 bg-gradient-to-r from-[rgba(0,0,0,0.5)_0.07%] to-[rgba(0,0,0,0.3)_97%] text-white text-[1rem] font-medium px-3 py-2 rounded-full">
          {el.firstpay}
          {"%"} / {el.handoverpay}
          {"%"} / {el.underpay}
          {"%"} Payment plan
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
          <span>{address}</span>
        </span>
        <span className="text-[1rem] flex justify-between w-full">
          <span>Developer: {developer}</span>
          <span>Price: {price}</span>
        </span>
        <span className="text-[1rem] flex justify-between w-full">
          <span>Handover Date: {el.handoverin}</span>
        </span>
      </div>

      {/* Buttons */}
      {/* <div className="flex gap-4 mt-4">
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
      </div> */}
    </div>
  );
};
