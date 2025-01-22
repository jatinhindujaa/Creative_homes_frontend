import Button from "./ui/Button";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const socialMediaLinks = [
  {
    id: 1,
    icon: <FaInstagram color="black" size={"25px"} />,
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: <RiFacebookFill color="black" size={"25px"} />,
    link: "https://www.facebook.com/",
  },
  {
    id: 3,
    icon: <FaLinkedinIn color="black" size={"25px"} />,
    link: "https://www.linkedin.com/",
  },
  {
    id: 4,
    icon: <FaYoutube color="black" size={"25px"} />,
    link: "https://www.youtube.com",
  },
];

const quickLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "" },
  { id: 3, name: "Blog", link: "" },
  { id: 4, name: "Events", link: "" },
  { id: 5, name: "Our Team", link: "" },
  { id: 6, name: "Contact Us", link: "" },
];

const popularSearches = [
  { id: 1, name: "Al Furjan", link: "" },
  { id: 2, name: "Aldar", link: "" },
  { id: 3, name: "Alhabtoor", link: "" },
  { id: 4, name: "Arabian Ranches", link: "" },
  { id: 5, name: "Arjan", link: "" },
  { id: 6, name: "Binghatti Developers", link: "" },
  { id: 7, name: "Business Bay", link: "" },
  { id: 8, name: "Dubai Marina", link: "" },
  { id: 9, name: "Townsquare", link: "" },
];

export default function Footer() {
  return (
    <div className="w-full  p-7 flex justify-around bg-black text-white  ">
      <div className="flex flex-col justify-around">
        <div>
          <a href={"/"}>
            <Image src={logo} alt="Logo" className="w-[7rem] h-[7rem]" />
          </a>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[1.3rem] leading-6 mb-1">
            Stay in the loop
          </span>
          <span className="text-[1.3rem] leading-6">
            Sign up to our weekly newsletter for market updates
          </span>
        </div>
        <div className="flex space-x-3">
          <input
            type="text"
            className="w-[22.7rem] rounded-[20px] p-3 text-black"
            placeholder="Email Address"
          />
          <Button text="Send" className="w-20 p-2 rounded-[20px]" />
        </div>
        <div className="flex flex-col">
          <span className="text-[1.3rem] leading-6 mb-1">Follow Us On:</span>
          <div className="flex space-x-2">
            {socialMediaLinks.map((social) => (
              <div
                key={social.id}
                className="w-[1.9rem] h-[1.9rem] bg-white flex justify-center items-center rounded-lg "
              >
                <a href={social.link} className="text-black">
                  {social.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[1.3rem] leading-6">
            © All Right Reserved By Creative Homes Real Estate, 2024
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-8 relative pt-8">
        <span className="font-medium text-[1.1rem] leading-6 mb-1">
          Quick Links
        </span>
        <ul className="flex flex-col space-y-4">
          {quickLinks.map((link) => (
            <li key={link.id} className="text-[1rem] leading-6 font-light">
              <a
                href={link.link}
                className="no-underline text-white hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-8 relative pt-8">
        <span className="font-medium text-[1.1rem] leading-6 mb-1 ">
          Popular Searches
        </span>
        <ul className="flex flex-col space-y-4">
          {popularSearches.map((search) => (
            <li key={search.id} className="text-[1rem] leading-6 font-light">
              <a
                href={search.link}
                className="no-underline text-white hover:text-gray-300 transition-colors"
              >
                {search.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-around text-white">
        <div className="flex flex-col space-y-2">
          <span className="font-medium text-[1.1rem] leading-6 mb-1">
            Email:
          </span>
          <a
            href="mailto:info@creativehomes.ae"
            className=" no-underline hover:text-gray-300 transition-colors text-[1rem] leading-6"
          >
            info@creativehomes.ae
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-medium text-[1.1rem] leading-6 mb-1">
            Phone:
          </span>
          <span className="text-[1rem] leading-6 ">Dubai: +97142387671</span>
        </div>
        <div className="flex flex-col space-y-2">
          <span className="font-medium text-[1.1rem] leading-6 mb-1">
            Address:
          </span>
          <span className="text-[1rem] leading-6 ">
            Office 3107, BLDG 3, Gold & <br /> Diamond Park, Sheikh Zayed Road{" "}
            <br /> 37468 Dubai, United Arab Emirates
          </span>
        </div>
      </div>
    </div>
  );
}
