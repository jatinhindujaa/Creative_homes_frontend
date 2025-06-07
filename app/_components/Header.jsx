


"use client";
import { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Buy", link: "/property?offeringtype=buy" },
  { id: 2, name: "Rent", link: "/property?offeringtype=rent" },
  { id: 3, name: "Meet the team", link: "/meet-the-team" },
  {
    id: 4,
    name: "Features",
    items: [
      { itemName: "By Property", link: "/featured-property" },
      { itemName: "By Agent", link: "/featured-property" },
      { itemName: "By Post", link: "/featured-property" },
    ],
  },
  { id: 5, name: "Mortgage Calculator", link: "/mortgage-calculator" },
  // { id: 6, name: "Guides", link: "" },
  { id: 7, name: "Off plan", link: "/off-plan-properties" },
  {
    id: 8,
    name: "Contact",
    items: [
      { itemName: "Contact Us", link: "/contact-us" },
      { itemName: "Privacy Policy", link: "/privacy-policy" },
      { itemName: "Testimonials", link: "/about" },
      { itemName: "Our Stories", link: "/about" },
    ],
  },
  { id: 9, name: "Guides", link: "/guides" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState()

  return (
    <header className="absolute w-full h-24 flex items-center justify-between px-6 md:px-10 bg-transparent z-40">
      <a href="/" className="flex items-center">
        <Image src={logo} alt="Logo" className="w-[100%] h-20" />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 items-center">
        {navLinks.map((nav, index) => (
          <div key={nav.id || index} className="relative group">
            <a
              href={nav.link}
              className="text-white font-semibold text-[1rem] hover:text-gray-300 transition-colors flex items-center"
            >
              {nav.name}
              {nav.items && (
                <span className="ml-1 transform transition-transform group-hover:rotate-180 text-[0.7rem]">
                  ▼
                </span>
              )}
            </a>
            {nav.items && (
              <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white bg-opacity-10 mt-2 space-y-2 p-4 rounded-xl min-w-[10rem] backdrop-blur-md transition-all duration-300">
                {nav.items.map((item, index) => (
                  <a
                    key={item.itemName || index}
                    href={item.link}
                    className="block text-white hover:text-black hover:bg-white hover:rounded-full p-2 transition"
                  >
                    {item.itemName}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <a href="/list-your-property">
        <Button
          text="Sell Your Property"
          className="px-4 text-[1rem] py-1 text-white hidden md:flex"
        />
      </a>

      {/* Hamburger Toggle */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-black bg-opacity-90 backdrop-blur-md z-40 p-6 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-5 mt-16">
          {navLinks.map((nav, index) => (
            <div key={nav.id || index}>
              <div
                onClick={() =>
                  nav.items
                    ? setOpenSubMenu(openSubMenu === nav.id ? null : nav.id)
                    : setMobileMenuOpen(false)
                }
                className="flex justify-between items-center text-white font-semibold text-lg cursor-pointer"
              >
                <a href={nav.link}>{nav.name}</a>
                {nav.items && (
                  <span className="ml-2 text-[0.7rem]">
                    {openSubMenu === nav.id ? "▲" : "▼"}
                  </span>
                )}
              </div>
              {nav.items && openSubMenu === nav.id && (
                <div className="ml-4 mt-2 space-y-2">
                  {nav.items.map((item, index) => (
                    <a
                      key={item.itemName || index}
                      href={item.link}
                      className="block text-white text-base hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.itemName}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/list-your-property">
            <Button
              text="Sell Your Property"
              className="text-white border border-white mt-4 py-2"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
