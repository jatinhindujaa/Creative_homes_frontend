import Header from "../../ui/Header";
import NavbarAdminVerticle from "./NavbarAdminVerticle";

const navData = [
  { id: 0, name: "Properties", link: "/admin/properties" },
  { id: 1, name: "Agents", link: "/admin/agents" },
];

function AppLayout({ children }) {
  return (
    <div className="grid grid-cols-[14rem_1fr] grid-rows-[auto_1fr] h-[90vh]">
      <NavbarAdminVerticle />
      <main className="bg-gray-50 overflow-scroll">
        <Header />
        <div className="max-w-[120rem] mx-auto flex flex-col gap-8 p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
