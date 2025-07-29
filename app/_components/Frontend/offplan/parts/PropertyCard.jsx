import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

const PropertyCard = ({ el }) => {
  const router = useRouter();
   const sliderRef = useRef(null);
     const [arrowStyle1, setArrowStyle1] = useState("text-white text-2xl");
     const [arrowStyle2, setArrowStyle2] = useState("text-white text-2xl");
  const {
    _id,
    name,
    price,
    developer,
    handoverDate,
    phoneNo,
    email,
    whatsapp,
    multipleImages,
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

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      //  autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 1 },
        },
      ],
    };

  return (
    <div className="flex flex-col gap-4 p-4 border border-white rounded-[20px] w-full sm:w-[45%] md:w-[90%] lg:w-[100%] cursor-pointer">
      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          {multipleImages?.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={name}
                className="w-full h-[200px] object-cover rounded-[20px]"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-[40%] -left-1 flex gap-2">
          <div
            className="border-2 border-white rounded-full flex justify-center items-center p-0.5 cursor-pointer hover:bg-transparent"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoIosArrowBack
              className={arrowStyle1}
              onMouseEnter={() => setArrowStyle1("text-gray-400 text-2xl")}
              onMouseLeave={() => setArrowStyle1("text-white text-2xl")}
            />
          </div>
        </div>

        <div className="absolute bottom-[40%] -right-1 flex gap-2">
          <div
            className="border-2 border-white rounded-full flex justify-center items-center p-0.5 cursor-pointer hover:bg-transparent"
            onClick={() => sliderRef.current.slickNext()}
          >
            <IoIosArrowForward
              className={arrowStyle2}
              onMouseEnter={() => setArrowStyle2("text-gray-400 text-2xl")}
              onMouseLeave={() => setArrowStyle2("text-white text-2xl")}
            />
          </div>
        </div>
        <span className="absolute top-4 left-4 bg-gradient-to-r from-[rgba(0,0,0,0.5)_0.07%] to-[rgba(0,0,0,0.3)_97%] text-white text-[1rem] font-medium px-3 py-2 rounded-full">
          {el.firstpay}
          {"%"} / {el.handoverpay}
          {"%"} / {el.underpay}
          {"%"} Payment plan
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span
          className="text-[1.2rem] font-medium leading-none"
          onClick={() => router.push(`/off-plan-properties/${_id}`)}
        >
          {name}
        </span>
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
          <span>{el.address}</span>
        </span>
        <span className="text-[1rem] flex justify-between w-full">
          <span>Developer: {developer}</span>
          <span>Price: {price}</span>
        </span>
        <span className="text-[1rem] flex justify-between w-full">
          <span>Handover Date: {handoverDate}</span>
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
