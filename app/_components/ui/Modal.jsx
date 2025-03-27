import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName);
    },
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        ref={ref}
        className="bg-white max-h-[90vh] rounded-lg shadow-lg p-6 relative w-full max-w-3xl flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-1 right-4 p-1 rounded hover:bg-gray-200"
        >
          <HiXMark className="w-6 h-6 text-gray-500" />
        </button>

        {/* Scrollable Content */}
        <div className="max-h-[75vh] overflow-y-auto">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
