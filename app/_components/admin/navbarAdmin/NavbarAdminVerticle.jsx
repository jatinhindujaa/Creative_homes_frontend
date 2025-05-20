"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi2";
import Image from "next/image";

const navData = [
  { id: 0, name: "Properties", link: "/admin/properties" },
  { id: 1, name: "Agents", link: "/admin/agents" },
  { id: 1, name: "News", link: "/admin/news" },
];

function NavbarAdminVerticle() {
  const pathname = usePathname();

  return (
    <aside className="bg-blue-950 border-r border-gray-200 h-screen p-6 flex flex-col space-y-6 overflow-auto">
      <div className="relative flex items-center w-20 h-20 ml-7">
        <Image
          src="/logo.png"
          alt="Logo"
          fill
          className="object-cover object-center"
        />
      </div>

      <ul className="flex flex-col space-y-2 group">
        {navData.map((el) => {
          const isActive = pathname === el.link;

          return (
            <li key={el.id}>
              <Link
                href={el.link}
                className={`flex items-center gap-3 font-medium px-4 py-2 rounded-lg transition hover:bg-blue-600 
                  ${isActive ? "bg-blue-900 text-white" : "text-white"}
                `}
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
