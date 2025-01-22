import Button from "./ui/Button";
import Image from "next/image";
import logo from "@/public/logo.png";

const navLinks = [
  { id: 1, name: "Home", link: "" },
  { id: 2, name: "Our Listings", link: "" },
  { id: 3, name: "Meet the team", link: "" },

  {
    id: 4,
    name: "Features",
    items: [
      { itemName: "By Property", link: "" },
      { itemName: "By Agent", link: "" },
      { itemName: "By Post", link: "" },
    ],
  },
  { id: 5, name: "Mortgage Calculator", link: "" },
  { id: 6, name: "News", link: "" },
  {
    id: 7,
    name: "Contact",
    items: [
      { itemName: "Contact Us", link: "" },
      { itemName: "Career", link: "" },
      { itemName: "Testimonials", link: "" },
      { itemName: "Our Stories", link: "" },
    ],
  },
];

export default function Header() {
  return (
    <div className="absolute w-full h-24 flex items-center justify-between px-10 bg-transparent z-10">
      <a href={"/"} className="flex items-center">
        <Image src={logo} alt="Logo" className="w-20 h-20" />
      </a>
      <div className="space-x-8 flex items-center">
        {navLinks.map((nav) => (
          <div key={nav.id} className="relative group">
            <a
              href={nav.link}
              className="no-underline flex items-center text-white font-semibold text-[1rem] hover:text-gray-300 transition-colors"
            >
              {nav.name}
              {(nav.name === "Contact" || nav.name === "Features") && (
                <div className="ml-1 transition-transform transform group-hover:rotate-180">
                  <svg
                    width="13"
                    height="10"
                    viewBox="0 0 13 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6.5 8L12 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              )}
            </a>
            {nav.items && (
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] mt-2 space-y-5 p-4 rounded-[1.3rem] min-w-[10rem] transition-all duration-300 delay-300 ">
                {nav.items.map((item) => (
                  <a
                    key={item.itemName}
                    href={item.link}
                    className="flex text-white text-[1rem] hover:text-black hover:bg-white hover:rounded-[41px] p-2 w-fit"
                  >
                    <span className="w-34 h-6 leading-6 text-[1.3rem] flex">
                      {item.itemName}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Button text="Submit Property" className="p-3 text-[1rem] px-8" />
    </div>
  );
}
