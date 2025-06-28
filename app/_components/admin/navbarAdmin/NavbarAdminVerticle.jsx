// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { HiOutlineHome } from "react-icons/hi2";
// import Image from "next/image";

// const navData = [
//   { id: 0, name: "Properties", link: "/admin/properties" },
//   { id: 1, name: "Agents", link: "/admin/agents" },
//   { id: 2, name: "News", link: "/admin/news" },
//   { id: 3, name: "Inquiries", link: "/admin/inquiries" },
//   { id: 4, name: "Offplan Properties", link: "/admin/offplan" },
//   { id: 5, name: "List Property", link: "/admin/listproperty" },
//   { id: 6, name: "Areas", link: "/admin/area" },
//   { id: 6, name: "Whtsapp Inquiry", link: "/admin/whtsapp" },
// ];

// function NavbarAdminVerticle() {
//   const pathname = usePathname();

//   return (
//     <aside className="bg-blue-950 border-r border-gray-200 h-screen p-6 flex flex-col space-y-6 overflow-auto">
//       <div className="relative flex items-center w-44 h-20">
//         <Image
//           src="/logo.png"
//           alt="Logo"
//           width={95}
//           height={85}
//           className="object-cover object-center w-[95%] h-[68%]"
//         />
//       </div>

//       <ul className="flex flex-col space-y-2 group">
//         {navData.map((el) => {
//           const isActive = pathname === el.link;

//           return (
//             <li key={el.id}>
//               <Link
//                 href={el.link}
//                 className={`flex items-center gap-3 font-medium px-4 py-2 rounded-lg transition hover:bg-blue-600 
//                   ${isActive ? "bg-blue-900 text-white" : "text-white"}
//                 `}
//               >
//                 <HiOutlineHome className="w-5 h-5 transition" />
//                 <span>{el.name}</span>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// }

// export default NavbarAdminVerticle;
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";

const navData = [
  { id: 0, name: "Properties", link: "/admin/properties" },
  { id: 1, name: "Agents", link: "/admin/agents" },
  { id: 2, name: "News", link: "/admin/news" },
  {
    id: 3,
    name: "Inquiries",
    link: "#",
    isParent: true,
    child: [
      { id: 6, name: "WhatsApp Inquiry", link: "/admin/whtsap" },
      { id: 7, name: "Broushers", link: "/admin/broushers" },
      { id: 8, name: "Contact", link: "/admin/inquiries" },
      { id: 9, name: "Newsletter", link: "/admin/newsletter" },
    ],
  },
  { id: 4, name: "Offplan Properties", link: "/admin/offplan" },
  { id: 5, name: "List Property", link: "/admin/listproperty" },
  { id: 6, name: "Areas", link: "/admin/area" },
];

function NavbarAdminVerticle() {
  const pathname = usePathname();
  const [openInquiries, setOpenInquiries] = useState(false);

  return (
    <aside className="bg-blue-950 border-r border-gray-200 h-screen p-6 flex flex-col space-y-6 overflow-auto">
      <div className="relative flex items-center w-44 h-20">
        <Image
          src="/logo.png"
          alt="Logo"
          width={95}
          height={85}
          className="object-cover object-center w-[95%] h-[68%]"
        />
      </div>

      <ul className="flex flex-col space-y-2 group">
        {navData.map((el) => {
          const isActive = pathname === el.link;

          // Handle parent item with child links (Inquiries)
          if (el.isParent) {
            return (
              <li key={el.id}>
                <button
                  onClick={() => setOpenInquiries(!openInquiries)}
                  className={`flex items-center gap-3 font-medium px-4 py-2 rounded-lg transition w-full text-white ${
                    isActive ? "bg-blue-900" : ""
                  }`}
                >
                  <HiOutlineHome className="w-5 h-5 transition" />
                  <span>{el.name}</span>
                  <HiOutlineChevronDown
                    className={`w-5 h-5 transition ${
                      openInquiries ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openInquiries && (
                  <ul className="pl-6 space-y-2 mt-2">
                    {el.child.map((child) => {
                      const isChildActive = pathname === child.link;
                      return (
                        <li key={child.id}>
                          <Link
                            href={child.link}
                            className={`flex items-center gap-3 font-medium px-4 py-2 rounded-lg transition hover:bg-blue-600 ${
                              isChildActive
                                ? "bg-blue-900 text-white"
                                : "text-white"
                            }`}
                          >
                            <HiOutlineHome className="w-5 h-5 transition" />
                            <span>{child.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          }

          return (
            <li key={el.id}>
              <Link
                href={el.link}
                className={`flex items-center gap-3 font-medium px-4 py-2 rounded-lg transition hover:bg-blue-600 ${
                  isActive ? "bg-blue-900 text-white" : "text-white"
                }`}
              >
                <HiOutlineHome className="w-5 h-5 transition" />
                <span>{el.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default NavbarAdminVerticle;
