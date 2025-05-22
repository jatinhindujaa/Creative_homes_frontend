import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ open, close, openId, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className="flex text-2xl">{children}</div>;
}

function Toggle({ id }) {
  const { open, close, openId, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded transition hover:bg-gray-100"
    >
      <HiEllipsisVertical className="w-6 h-6 text-gray-700" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(() => close(), false);

  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      className="fixed bg-white shadow-md rounded-md p-2"
      style={{ right: `${position?.x}px`, top: `${position?.y}px` }}
    >
      {children}
    </ul>,
    document.body
  );
}

// function Button({ children, icon, onClick }) {
//   const { close } = useContext(MenusContext);

//   function handleClick() {
//     onClick?.();
//     close();
//   }

//   return (
//     <li className="list-none">
//       <button
//         onClick={handleClick}
//         className="flex items-center gap-4 p-2 w-full text-left transition hover:bg-gray-100"
//       >
//         {icon}
//         <span>{children}</span>
//       </button>
//     </li>
//   );
// }
function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li className="list-none">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 p-2 w-full text-left transition hover:bg-gray-100"
      >
        {icon && <span className="text-xl">{icon}</span>}
        {children && <span>{children}</span>}
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
