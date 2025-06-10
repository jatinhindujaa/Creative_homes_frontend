// "use client";

// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppIcon = () => {
//   return (
//     <a
//       href="https://wa.me/+91-9829231118"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
//     >
//       {/* <i className="fab fa-whatsapp text-white text-3xl"></i> */}
//       <FaWhatsapp size={30} color="white"/>
//     </a>
//   );
// };

// export default WhatsAppIcon;
"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/919829231118" // Replace with your correct WhatsApp number in international format
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all cursor-pointer z-50"
    >
      <FaWhatsapp size={30} color="white" />
      {/* WhatsApp icon from react-icons */}
    </a>
  );
};

export default WhatsAppIcon;
