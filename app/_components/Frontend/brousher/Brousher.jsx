// "use client"
// import React from 'react'
// import { useOffplanById } from '../../admin/offplan/useOffplan';
// import { useParams } from 'next/navigation';

// const Brochure = () => {
//       const { _id } = useParams();
//       const { data, isLoading, error } = useOffplanById(_id);
//       console.log("data", data);
//   return (
//     <div>Brochure</div>
//   )
// }

// export default Brochure



// "use client";
// import React, { useState } from "react";
// import { useParams } from "next/navigation";
// import { useOffplanById } from "../../admin/offplan/useOffplan";

// const Brochure = () => {
//         const { _id } = useParams();
//         const { data, isLoading, error } = useOffplanById(_id);
//         console.log("data", data);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     note: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // TODO: integrate API here
//     setShowModal(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#282927] p-8 flex flex-col items-center justify-center">
//       <h2 className="text-3xl mb-6 text-white">{data?.name}</h2>

//       <p className="text-lg mb-8 text-center text-white">
//         Please, choose multiple or a single brochure then click the{" "}
//         <strong>Download</strong> button below.
//       </p>


//       <button
//         className="w-32 h-32 bg-blue-700 text-white rounded-full text-lg flex items-center justify-center shadow-lg"
//         onClick={() => setShowModal(true)}
//       >
//         ↓<br />
//         Download
//       </button>

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 text-xl"
//               onClick={() => setShowModal(false)}
//             >
//               ✕
//             </button>
//             <h3 className="text-xl font-semibold mb-4">
//               Please fill up the form to get the brochure.
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 required
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 required
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//               />
//               <textarea
//                 name="note"
//                 placeholder="Note"
//                 className="w-full border p-2 rounded"
//                 rows="3"
//                 onChange={handleChange}
//               ></textarea>
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
//               >
//                 SEND ENQUIRY
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Brochure;



// "use client";
// import React, { useState } from "react";
// import { useParams } from "next/navigation";
// import { useOffplanById } from "../../admin/offplan/useOffplan";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const Brochure = () => {
//   const { _id } = useParams();
//   const { data, isLoading, error } = useOffplanById(_id);

//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     note: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handlePhoneChange = (phone) => {
//     setFormData((prev) => ({ ...prev, phone }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // TODO: integrate API here
//     setShowModal(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#282927] p-8 flex flex-col items-center justify-center">
//       <h2 className="text-3xl mb-6 text-white">{data?.name}</h2>

//       <p className="text-lg mb-8 text-center text-white">
//         Please, choose multiple or a single brochure then click the{" "}
//         <strong>Download</strong> button below.
//       </p>

//       <div className="text-white text-sm mb-6">No data found.</div>

//       <button
//         className="w-32 h-32 bg-blue-700 text-white rounded-full text-lg flex items-center justify-center shadow-lg"
//         onClick={() => setShowModal(true)}
//       >
//         ↓<br />
//         Download
//       </button>

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 text-xl"
//               onClick={() => setShowModal(false)}
//             >
//               ✕
//             </button>
//             <h3 className="text-xl font-semibold mb-4">
//               Please fill up the form to get the brochure.
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 required
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//               />

//               <PhoneInput
//                 country={"ae"}
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 inputProps={{
//                   name: "phone",
//                   required: true,
//                 }}
//                 containerStyle={{ width: "100%" }}
//                 inputStyle={{
//                   width: "100%",
//                   borderRadius: "0.375rem",
//                   padding: "0.5rem",
//                   border: "1px solid #d1d5db",
//                   paddingLeft:"45px"
//                 }}
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 required
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//               />
//               <textarea
//                 name="note"
//                 placeholder="Note"
//                 className="w-full border p-2 rounded"
//                 rows="3"
//                 onChange={handleChange}
//               ></textarea>
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
//               >
//                 SEND ENQUIRY
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Brochure;






// "use client";
// import React, { useState } from "react";
// import { useParams } from "next/navigation";
// import { useOffplanById } from "../../admin/offplan/useOffplan";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { useCreateBrochure } from "../../admin/inquiries/useInquiry";

// const Brochure = () => {
//   const { _id } = useParams();
//   const { data, isLoading, error } = useOffplanById(_id);
//   const { createNewBrochure, isCreating } = useCreateBrochure();

//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handlePhoneChange = (phone) => {
//     setFormData((prev) => ({ ...prev, phone }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//       propertyid: _id,
//     };

//     createNewBrochure(payload);
//     setShowModal(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#282927] p-8 flex flex-col items-center justify-center">
//       <h2 className="text-3xl mb-6 text-white">{data?.name}</h2>

//       <p className="text-lg mb-8 text-center text-white">
//         Please, choose multiple or a single brochure then click the{" "}
//         <strong>Download</strong> button below.
//       </p>

//       <div className="text-white text-sm mb-6">No data found.</div>

//       <button
//         className="w-32 h-32 bg-blue-700 text-white rounded-full text-lg flex items-center justify-center shadow-lg"
//         onClick={() => setShowModal(true)}
//       >
//         ↓<br />
//         Download
//       </button>

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 text-xl"
//               onClick={() => setShowModal(false)}
//             >
//               ✕
//             </button>
//             <h3 className="text-xl font-semibold mb-4">
//               Please fill up the form to get the brochure.
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 required
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//               />

//               <PhoneInput
//                 country={"ae"}
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 inputProps={{
//                   name: "phone",
//                   required: true,
//                 }}
//                 containerStyle={{ width: "100%" }}
//                 inputStyle={{
//                   width: "100%",
//                   borderRadius: "0.375rem",
//                   padding: "0.5rem",
//                   border: "1px solid #d1d5db",
//                   paddingLeft: "45px",
//                 }}
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 required
//                 className="w-full border p-2 rounded"
//                 onChange={handleChange}
//               />
//               <textarea
//                 name="message"
//                 placeholder="message"
//                 className="w-full border p-2 rounded"
//                 rows="3"
//                 onChange={handleChange}
//               ></textarea>
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
//                 disabled={isCreating}
//               >
//                 {isCreating ? "Sending..." : "SEND ENQUIRY"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Brochure;



"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useOffplanById } from "../../admin/offplan/useOffplan";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useCreateBrochure } from "../../admin/Brochure/useBrochure";

const Brochure = () => {
  const { _id } = useParams();
  const { data, isLoading, error } = useOffplanById(_id);
  const { createNewBrochure, isCreating } = useCreateBrochure();

  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prev) => ({ ...prev, phone }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      propertyid: data.name,
    };

    createNewBrochure(payload, {
      onSuccess: () => {
        setShowModal(false);
        setShowSuccess(true);
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#282927] p-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl mb-6 text-white">{data?.name}</h2>

      <p className="text-lg mb-8 text-center text-white">
        Please, choose multiple or a single brochure then click the{" "}
        <strong>Download</strong> button below.
      </p>

      <div className="text-white text-sm mb-6">No data found.</div>

      <button
        className="w-32 h-32 bg-blue-700 text-white rounded-full text-lg flex items-center justify-center shadow-lg"
        onClick={() => setShowModal(true)}
      >
        ↓<br />
        Download
      </button>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Please fill up the form to get the brochure.
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full border p-2 rounded"
                onChange={handleChange}
              />

              <PhoneInput
                country={"ae"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                containerStyle={{ width: "100%" }}
                inputStyle={{
                  width: "100%",
                  borderRadius: "0.375rem",
                  padding: "0.5rem",
                  border: "1px solid #d1d5db",
                  paddingLeft: "45px",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border p-2 rounded"
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full border p-2 rounded"
                rows="3"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                disabled={isCreating}
              >
                {isCreating ? "Sending..." : "SEND ENQUIRY"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white max-w-md w-full p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700 mb-4">
              Your response has been saved. Our team will send you the brochure
              on your email shortly.
            </p>
            <button
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brochure;
