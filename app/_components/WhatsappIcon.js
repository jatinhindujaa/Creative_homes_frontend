
// "use client";

// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppIcon = () => {
//   return (
//     <a
//       href="https://wa.me/919829231118" // Replace with your correct WhatsApp number in international format
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all cursor-pointer z-50"
//     >
//       <FaWhatsapp size={30} color="white" />
//       {/* WhatsApp icon from react-icons */}
//     </a>
//   );
// };

// export default WhatsAppIcon;




// "use client";

// import React, { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";

// const WhatsAppIcon = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpen = () => setIsModalOpen(true);
//   const handleClose = () => setIsModalOpen(false);

//   return (
//     <>
//       {/* Floating WhatsApp Button */}
//       <button
//         onClick={handleOpen}
//         className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all cursor-pointer z-50"
//       >
//         <FaWhatsapp size={30} color="white" />
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="relative bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
//             {/* Close Button */}
//             <button
//               onClick={handleClose}
//               className="absolute top-3 right-3 text-2xl"
//             >
//               <IoClose />
//             </button>

//             {/* Modal Content */}
//             <div className="text-center">
//               {/* WhatsApp Icon */}
//               <div className="flex justify-center mb-4 absolute -top-7 left-[43%]">
//                 <div className="bg-white border-[5px] border-white shadow-md rounded-full p-2">
//                   <FaWhatsapp size={40} color="green" />
//                 </div>
//               </div>

//               <h2 className="text-xl font-semibold mb-4 pt-10">
//                 Get Faster Response!
//               </h2>

//               {/* Interests */}
//               <div className="mb-4 text-left">
//                 <p className="mb-2 font-medium">What are you interested in?</p>
//                 <div className="flex flex-wrap gap-2">
//                   {["Buy", "Rent", "Residential", "Commercial"].map((opt) => (
//                     <button
//                       key={opt}
//                       className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100"
//                     >
//                       {opt}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* WhatsApp Input */}
//               <div className="mb-4 text-left">
//                 <p className="mb-2 font-medium">Type your WhatsApp number</p>
//                 <div className="flex items-center border rounded-md overflow-hidden">
//                   <span className="px-3 bg-gray-100">🇦🇪</span>
//                   <input
//                     type="text"
//                     placeholder="+971 50 123 4567"
//                     className="w-full px-3 py-2 outline-none text-sm"
//                   />
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <button className="bg-green-500 text-white w-full py-2 rounded-md flex justify-center items-center gap-2 hover:bg-green-600 transition">
//                 <FaWhatsapp size={20} />
//                 WhatsApp Us
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default WhatsAppIcon;



"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

const WhatsAppIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedType2, setSelectedType2] = useState("");

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleSubmit = async () => {
    if (!selectedType || !selectedType2 || !phone) {
      toast.error("Please select an interest and enter your phone number.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:7000/api/v1/contact/whatsp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type1: selectedType, type2:selectedType2, phone }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Redirecting to WhatsApp...");
        window.location.href = "https://wa.me/971585611099";
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all cursor-pointer z-50"
      >
        <FaWhatsapp size={30} color="white" />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="relative bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-2xl"
            >
              <IoClose />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              {/* WhatsApp Icon */}
              <div className="flex justify-center mb-4 absolute -top-7 left-[43%]">
                <div className="bg-white border-[5px] border-white shadow-md rounded-full p-2">
                  <FaWhatsapp size={40} color="green" />
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-4 pt-10">
                Get Faster Response!
              </h2>

              {/* Interests */}
              <div className="mb-4 text-left flex flex-col gap-2">
                <p className="mb-2 font-medium">What are you interested in?</p>
                <div className="flex flex-wrap gap-2 flex-row items-center">
                  <p className="font-normal">A.</p>
                  {["Buy", "Rent"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedType(opt)}
                      className={`border px-4 py-2 rounded-md text-sm ${
                        selectedType === opt
                          ? "bg-green-500 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 flex-row items-center">
                  <p className="font-normal">B.</p>
                  {["Residential", "Commercial"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedType2(opt)}
                      className={`border px-4 py-2 rounded-md text-sm ${
                        selectedType2 === opt
                          ? "bg-green-500 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* WhatsApp Input */}
              <div className="mb-4 text-left">
                <p className="mb-2 font-medium">Type your WhatsApp number</p>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <span className="px-3 bg-gray-100">🇦🇪</span>
                  <input
                    type="text"
                    placeholder="+971501234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 outline-none text-sm"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`bg-green-500 text-white w-full py-2 rounded-md flex justify-center items-center gap-2 hover:bg-green-600 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FaWhatsapp size={20} />
                {loading ? "Please wait..." : "WhatsApp Us"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppIcon;
