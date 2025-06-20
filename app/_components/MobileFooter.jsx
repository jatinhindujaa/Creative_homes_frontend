import Button from "./ui/Button";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";

const socialMediaLinks = [
  {
    id: 1,
    icon: <FaInstagram color="black" size={"25px"} />,
    link: "https://www.instagram.com/",
    name: "Instagram",
  },
  {
    id: 2,
    icon: <RiFacebookFill color="black" size={"25px"} />,
    link: "https://www.facebook.com/",
    name: "facebook",
  },
  {
    id: 3,
    icon: <FaLinkedinIn color="black" size={"25px"} />,
    link: "https://www.linkedin.com/",
    name: "LinkedIn",
  },
  {
    id: 4,
    icon: <FaYoutube color="black" size={"25px"} />,
    link: "https://www.youtube.com",
    name: "Youtube",
  },
];

const dropdownData = [
  {
    title: "Services",
    items: [
      { id: 1, name: "Home", link: "" },
      { id: 2, name: "Properties", link: "" },
      { id: 3, name: "Rent Properties", link: "" },
      { id: 4, name: "Buy Properties", link: "" },
      { id: 5, name: "Off Plan Properties", link: "" },
    ],
  },
  {
    title: "About",
    items: [
      { id: 1, name: "About Us", link: "" },
      { id: 2, name: "News", link: "" },
      { id: 3, name: "Contact Us", link: "" },
      { id: 4, name: "Privacy Policy", link: "" },
    ],
  },
  {
    title: "Contact Us",
    items: [
      {
        id: 1,
        icon: <MdLocationOn size={15} />,
        link: "",
        name: "Office 3107, BLDG 3, Gold & Diamond Park, Sheikh Zayed Road 37468 Dubai, United Arab Emirates",
      },
      {
        id: 2,
        icon: <CgMail size={15} />,
        link: "",
        name: "info@creativehomes.ae",
      },

      {
        id: 3,
        icon: <IoMdCall size={15} />,
        link: "",
        name: "+9714 238 7671",
      },
    ],
  },
];

export default function MobileFooter() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="lg:hidden w-full p-10 flex flex-col space-y-10 bg-black text-white">
      {/* Dropdown Menu */}
      <div>
        {dropdownData.map((section, index) => (
          <div key={index} className="border-b border-gray-600 py-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span className="max-sm:text-[14px] text-[1rem] font-semibold">
                {section.title}
              </span>
              {openDropdown === index ? (
                <FaMinus size={18} />
              ) : (
                <FaPlus size={18} />
              )}
            </div>
            {openDropdown === index && (
              <div className="mt-2 space-y-2">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <span className="max-sm:text-[12px] text-[0.8rem]">
                      {typeof item === "string" ? item : item.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-around w-full space-y-8">
        <div className="flex flex-col">
          <div>
            <a href={"/"}>
              <Image src={logo} alt="Logo" className=" w-auto h-[3.5rem]" />
            </a>
          </div>
          <span className="font-semibold max-sm:text-[0.8rem] text-[1rem] leading-6 mb-1">
            Stay in the loop
          </span>
          <span className="max-sm:text-[0.8rem] text-[1rem] leading-6">
            Sign up to our weekly newsletter for market updates
          </span>
        </div>
        <div className="flex space-x-3">
          <input
            type="text"
            className="max-sm:w-[13.6rem] max-sm:rounded-[10px] w-[22.7rem] rounded-[20px] p-3 text-black"
            placeholder="Email Address"
          />
          <Button
            text="Send"
            className="max-sm:w-[3.2rem]  max-sm:rounded-[10px]  w-20 p-2 rounded-[18px] text-[0.9rem]"
          />
        </div>
        <div className="flex flex-col">
          <span className="max-sm:text-[0.8rem] text-[0.9rem] leading-6 mb-1">
            Follow Us On:
          </span>
          <div className="flex space-x-2 gap-2">
            {socialMediaLinks.map((social, index) => (
              <div
                key={social.id || index}
                className="w-[1.8rem] h-[1.8rem] bg-white flex justify-center items-center rounded-lg "
              >
                <a href={social.link} className="text-black">
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="max-sm:text-[0.8rem] text-[1rem] text-[#FFFFFFB2] leading-6">
            © All Right Reserved By Creative Homes Real Estate, 2025
          </span>
        </div>
      </div>
    </div>
  );
}
