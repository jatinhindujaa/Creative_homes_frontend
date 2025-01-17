import Button from "./ui/Button";
import Image from "next/image";
import logo from "@/public/logo.png";

const navLinks = [
  { id: 1, name: "Home", link: "" },
  {
    id: 2,
    name: "Contact",
    items: [
      { itemName: "Contact Us", link: "" },
      { itemName: "Career", link: "" },
      { itemName: "Testimonials", link: "" },
      { itemName: "Our Stories", link: "" },
    ],
  },
  {
    id: 3,
    name: "Features",
    items: [
      { itemName: "By Property", link: "" },
      { itemName: "By Agent", link: "" },
      { itemName: "By Post", link: "" },
    ],
  },
  { id: 4, name: "Mortgage Calculator", link: "" },
  { id: 5, name: "logo", link: "/" },
  { id: 6, name: "Meet the team", link: "" },
  { id: 7, name: "Blog", link: "" },
  { id: 8, name: "Our Listings", link: "" },
];

export default function Header() {
  return (
    <div className="w-full h-25 flex flex-row items-center justify-between px-8 bg-black">
      <div className="space-x-16 flex flex-row items-center">
        {navLinks.map((nav) =>
          nav.id === 5 ? (
            <a key={nav.id} href={nav.link} className="flex items-center">
              <Image src={logo} alt="Logo" width={120} height={120} />
            </a>
          ) : (
            <a
              key={nav.id}
              href={nav.link}
              className="no-underline flex items-center text-white font-semibold text-[1.2rem]"
            >
              {nav.name}
              {/* <div>
                <svg
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L6.5 8L12 1" stroke="white" strokeWidth="1.5" />
                </svg>
              </div> */}
            </a>
          )
        )}
      </div>
      <Button text="Submit Property" className="p-2" />
    </div>
  );
}
