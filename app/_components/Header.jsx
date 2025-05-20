// "use client"

// import { useState } from "react";
// import Button from "./ui/Button";
// import Image from "next/image";
// import logo from "@/public/logo.png";
// import { Menu, X } from "lucide-react";

// const navLinks = [
//   { id: 1, name: "Buy", link: "" },
//   { id: 2, name: "Rent", link: "" },
//   { id: 3, name: "Meet the team", link: "" },

//   {
//     id: 4,
//     name: "Features",
//     items: [
//       { itemName: "By Property", link: "" },
//       { itemName: "By Agent", link: "" },
//       { itemName: "By Post", link: "" },
//     ],
//   },
//   { id: 5, name: "Mortgage Calculator", link: "" },
//   { id: 6, name: "Guides", link: "" },
//   { id: 7, name: "News", link: "" },
//   {
//     id: 8,
//     name: "Contact",
//     items: [
//       { itemName: "Contact Us", link: "" },
//       { itemName: "Career", link: "" },
//       { itemName: "Testimonials", link: "" },
//       { itemName: "Our Stories", link: "" },
//     ],
//   },
// ];

// export default function Header() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [openSubMenu, setOpenSubMenu] = useState()
//   return (
//     <div className="absolute w-full h-24 flex items-center justify-between px-10 bg-transparent z-40">
//       <a href={"/"} className="flex items-center">
//         <Image src={logo} alt="Logo" className="w-20 h-20" />
//       </a>
//       <div className="space-x-8 flex items-center">
//         {navLinks.map((nav) => (
//           <div key={nav.id} className="relative group">
//             <a
//               href={nav.link}
//               className="no-underline flex items-center text-white font-semibold text-[1rem] hover:text-gray-300 transition-colors"
//             >
//               {nav.name}
//               {(nav.name === "Contact" || nav.name === "Features") && (
//                 <div className="ml-1 transition-transform transform group-hover:rotate-180">
//                   <svg
//                     width="13"
//                     height="10"
//                     viewBox="0 0 13 10"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M1 1L6.5 8L12 1"
//                       stroke="white"
//                       strokeWidth="1.5"
//                     />
//                   </svg>
//                 </div>
//               )}
//             </a>
//             {nav.items && (
//               <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gradient-to-r from-[rgba(255,255,255,0.3)_0.07%] to-[rgba(255,255,255,0.2)_97%] mt-2 space-y-5 p-4 rounded-[1.3rem] min-w-[10rem] transition-all duration-300 delay-300 ">
//                 {nav.items.map((item) => (
//                   <a
//                     key={item.itemName}
//                     href={item.link}
//                     className="flex text-white text-[1rem] hover:text-black hover:bg-white hover:rounded-[41px] p-2 w-fit"
//                   >
//                     <span className="w-34 h-6 leading-6 text-[1.3rem] flex">
//                       {item.itemName}
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <Button
//         text="Sell Your Property"
//         className="px-4 text-[1rem] py-1 text-white"
//       />
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";
// import Button from "./ui/Button";
// import Image from "next/image";
// import logo from "@/public/logo.png";
// import { Menu, X } from "lucide-react"; // Optional: for hamburger icon

// const navLinks = [
//   { id: 1, name: "Buy", link: "" },
//   { id: 2, name: "Rent", link: "" },
//   { id: 3, name: "Meet the team", link: "" },
//   {
//     id: 4,
//     name: "Features",
//     items: [
//       { itemName: "By Property", link: "" },
//       { itemName: "By Agent", link: "" },
//       { itemName: "By Post", link: "" },
//     ],
//   },
//   { id: 5, name: "Mortgage Calculator", link: "" },
//   { id: 6, name: "Guides", link: "" },
//   { id: 7, name: "News", link: "" },
//   {
//     id: 8,
//     name: "Contact",
//     items: [
//       { itemName: "Contact Us", link: "" },
//       { itemName: "Career", link: "" },
//       { itemName: "Testimonials", link: "" },
//       { itemName: "Our Stories", link: "" },
//     ],
//   },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openSubMenu, setOpenSubMenu] = useState();

//   return (
//     <header className="absolute w-full h-24 flex items-center justify-between px-6 md:px-10 bg-transparent z-40">
//       <a href="/" className="flex items-center">
//         <Image src={logo} alt="Logo" className="w-16 h-16" />
//       </a>

//       {/* Desktop Navigation */}
//       <nav className="hidden md:flex space-x-8 items-center">
//         {navLinks.map((nav) => (
//           <div key={nav.id} className="relative group">
//             <a
//               href={nav.link}
//               className="text-white font-semibold text-[1rem] hover:text-gray-300 transition-colors flex items-center"
//             >
//               {nav.name}
//               {nav.items && (
//                 <span className="ml-1 transform transition-transform group-hover:rotate-180">
//                   ▼
//                 </span>
//               )}
//             </a>
//             {nav.items && (
//               <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white bg-opacity-10 mt-2 space-y-2 p-4 rounded-xl min-w-[10rem] backdrop-blur-md transition-all duration-300">
//                 {nav.items.map((item) => (
//                   <a
//                     key={item.itemName}
//                     href={item.link}
//                     className="block text-white hover:text-black hover:bg-white hover:rounded-full p-2 transition"
//                   >
//                     {item.itemName}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//         <Button
//           text="Sell Your Property"
//           className="px-4 text-[1rem] py-1 text-white"
//         />
//       </nav>

//       {/* Mobile Menu Toggle */}
//       <button
//         className="md:hidden text-white"
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//       >
//         {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {/* Mobile Navigation */}
//       {mobileMenuOpen && (
//         <div className="absolute top-24 left-0 w-full bg-black bg-opacity-90 p-6 z-50 flex flex-col space-y-4 md:hidden">
//           {navLinks.map((nav) => (
//             <div key={nav.id}>
//               <div
//                 onClick={() =>
//                   nav.items
//                     ? setOpenSubMenu(openSubMenu === nav.id ? null : nav.id)
//                     : setMobileMenuOpen(false)
//                 }
//                 className="flex justify-between items-center text-white font-semibold text-lg cursor-pointer"
//               >
//                 <a href={nav.link}>{nav.name}</a>
//                 {nav.items && (
//                   <span className="ml-2 text-sm">
//                     {openSubMenu === nav.id ? "▲" : "▼"}
//                   </span>
//                 )}
//               </div>
//               {nav.items && openSubMenu === nav.id && (
//                 <div className="ml-4 mt-2 space-y-2">
//                   {nav.items.map((item) => (
//                     <a
//                       key={item.itemName}
//                       href={item.link}
//                       className="block text-white text-base hover:underline"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       {item.itemName}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//           <Button
//             text="Sell Your Property"
//             className="text-white border border-white mt-4 py-2"
//           />
//         </div>
//       )}
//     </header>
//   );
// }



"use client";
import { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Buy", link: "" },
  { id: 2, name: "Rent", link: "" },
  { id: 3, name: "Meet the team", link: "/meet-the-team" },
  {
    id: 4,
    name: "Features",
    items: [
      { itemName: "By Property", link: "/property" },
      { itemName: "By Agent", link: "/property" },
      { itemName: "By Post", link: "/property" },
    ],
  },
  { id: 5, name: "Mortgage Calculator", link: "/mortgage-calculator" },
  // { id: 6, name: "Guides", link: "" },
  { id: 7, name: "News", link: "/news" },
  {
    id: 8,
    name: "Contact",
    items: [
      { itemName: "Contact Us", link: "/contact-us" },
      // { itemName: "Career", link: "" },
      { itemName: "Testimonials", link: "/about" },
      { itemName: "Our Stories", link: "/about" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState()

  return (
    <header className="absolute w-full h-24 flex items-center justify-between px-6 md:px-10 bg-transparent z-40">
      <a href="/" className="flex items-center">
        <Image src={logo} alt="Logo" className="w-16 h-16" />
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
                <span className="ml-1 transform transition-transform group-hover:rotate-180">
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
      <Button
        text="Sell Your Property"
        className="px-4 text-[1rem] py-1 text-white hidden md:flex"
      />

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
                  <span className="ml-2 text-sm">
                    {openSubMenu === nav.id ? "▲" : "▼"}
                  </span>
                )}
              </div>
              {nav.items && openSubMenu === nav.id && (
                <div className="ml-4 mt-2 space-y-2">
                  {nav.items.map((item , index) => (
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
          <Button
            text="Sell Your Property"
            className="text-white border border-white mt-4 py-2"
          />
        </div>
      </div>
    </header>
  );
}
