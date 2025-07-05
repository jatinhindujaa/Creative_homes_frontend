// import Image from "next/image";
// import React from "react";
// import form from "../assets/form.png";

// const GotQues = () => {
//   return (
//     <>
//       <p className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] text-center">
//         Got Any{" "}
//         <span className=" leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           Quesions?
//         </span>
//       </p>
//       <div className="flex flex-row justify-evenly items-center gap-2 max-md:py-4 py-8">
//         <div className="max-md:hidden h-[67vh] w-[40%] relative">
//           <Image
//             src={form.src}
//             alt={form}
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             className="rounded-[20px]"
//           />
//         </div>
//         <form className="max-md:w-[100%] w-[45%] max-md:py-4 px-6 py-6 rounded-lg space-y-4 text-white">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
//           />

//           {/* Phone Number Field with Flag */}
//           <div className="flex items-center space-x-2 w-full">
//             <input
//               type="tel"
//               placeholder="+971"
//               className="flex-1 rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
//             />
//           </div>

//           <select className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white">
//             <option value="">Select Category</option>
//             <option value="general">General Inquiry</option>
//             <option value="support">Support</option>
//             <option value="feedback">Feedback</option>
//           </select>

//           <textarea
//             placeholder="Message"
//             className="w-full max-lg:rounded-2xl rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white h-[128px] max-lg:h-[96px]"
//           ></textarea>

//           {/* Privacy Policy Checkbox */}
//           <div className="flex items-center justify-center space-x-2 text-sm">
//             <input type="checkbox" className="w-4 h-4 accent-white" />
//             <span className="text-white max-lg:text-[0.9rem] text-[1.3rem]">
//               I hereby agree to our{" "}
//               <span className="font-bold ">Privacy Policy</span> terms
//             </span>
//           </div>

//           {/* Submit Button */}
//           <div className="w-full flex justify-center">
//             <button
//               type="submit"
//               className="w-fit max-lg:text-[0.9rem] max-lg:px-4 max-lg:py-1  text-[1.3rem] rounded-full bg-white text-black px-6 py-2 hover:bg-gray-200 transition"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default GotQues;





// "use client"
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Image from "next/image";
// import form from "../assets/form.png";
// import { useCreateInquiry } from "@/app/_components/admin/inquiries/useInquiry";
// import Spinner from "@/app/_components/ui/Spinner";

// const GotQues = () => {
//   const { register, handleSubmit, reset, formState } = useForm({
//     defaultValues: {},
//   });
//   const { errors } = formState;
//   const { createNewInquiry, isCreating } = useCreateInquiry();
//   const [content, setContent] = useState("");

//   // Spinner is shown while the request is being made
//   if (isCreating) return <Spinner />;

//   const onSubmit = (data) => {
//     const formData = new FormData();

//     formData.append("title", data.title);
//     formData.append("date", data.date);
//     formData.append("description", content);
//     formData.append("status", true);
//     if (data.image[0]) {
//       formData.append("image", data.image[0]);
//     }

//     createNewInquiry(formData, {
//       onSuccess: () => {
//         reset();
//       },
//     });
//   };

//   return (
//     <>
//       <p className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] text-center">
//         Got Any{" "}
//         <span className="leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           Questions?
//         </span>
//       </p>
//       <div className="flex flex-row justify-evenly items-center gap-2 max-md:py-4 py-8">
//         <div className="max-md:hidden h-[67vh] w-[40%] relative">
//           <Image
//             src={form.src}
//             alt="Form Image"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             className="rounded-[20px]"
//           />
//         </div>

//         {/* Form Section */}
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="max-md:w-[100%] w-[45%] max-md:py-4 px-6 py-6 rounded-lg space-y-4 text-white"
//         >
//           <input
//             type="text"
//             placeholder="Title"
//             className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
//             {...register("title", { required: "This field is required" })}
//           />
//           {errors.title && (
//             <p className="text-red-500 text-sm">{errors.title.message}</p>
//           )}

//           <input
//             type="text"
//             placeholder="Email"
//             className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
//             {...register("date", { required: "This field is required" })}
//           />
//           {errors.date && (
//             <p className="text-red-500 text-sm">{errors.date.message}</p>
//           )}

//           {/* Description textarea */}
//           <textarea
//             placeholder="Description"
//             className="w-full max-lg:rounded-2xl rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white h-[128px] max-lg:h-[96px]"
//             {...register("description", { required: "This field is required" })}
//           />
//           {errors.description && (
//             <p className="text-red-500 text-sm">{errors.description.message}</p>
//           )}


//           <div className="flex justify-end space-x-3">
//             <button
//               type="button"
//               className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
//             >
//               Cancel
//             </button>
//             <button
//               disabled={isCreating}
//               type="submit"
//               className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Create Inquiry
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default GotQues;


// "use client"

// import React, { useState } from "react";
// import Image from "next/image";
// import form from "../assets/form.png";
// import { useCreateInquiry } from "@/app/_components/admin/inquiries/useInquiry";

// const GotQues = () => {
//   const { createNewInquiry, isCreating } = useCreateInquiry();


//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     category: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createNewInquiry(formData);
//   };

//   return (
//     <>
//       <p className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] text-center">
//         Got Any{" "}
//         <span className=" leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//           Questions?
//         </span>
//       </p>
//       <div className="flex flex-row justify-evenly items-center gap-2 max-md:py-4 py-8">
//         <div className="max-md:hidden h-[67vh] w-[40%] relative">
//           <Image
//             src={form.src}
//             alt="form"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             className="rounded-[20px]"
//           />
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="max-md:w-[100%] w-[45%] max-md:py-4 px-6 py-6 rounded-lg space-y-4 text-white"
//         >
//           <input
//             name="name"
//             type="text"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500"
//           />

//           <input
//             name="email"
//             type="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500"
//           />

//           <input
//             name="phone"
//             type="tel"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black placeholder-gray-500"
//           />

//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full rounded-full max-lg:py-2 py-3 px-4 text-black"
//           >
//             <option value="">Select Category</option>
//             <option value="general">General Inquiry</option>
//             <option value="support">Support</option>
//             <option value="feedback">Feedback</option>
//           </select>

//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Message"
//             className="w-full max-lg:rounded-2xl rounded-lg px-4 py-3 text-black h-[128px]"
//           ></textarea>

//           <div className="flex items-center justify-center space-x-2 text-sm">
//             <input type="checkbox" className="w-4 h-4 accent-white" required />
//             <span className="text-white max-lg:text-[0.9rem] text-[1.3rem]">
//               I hereby agree to our{" "}
//               <span className="font-bold">Privacy Policy</span> terms
//             </span>
//           </div>

//           <div className="w-full flex justify-center">
//             <button
//               type="submit"
//               className="w-fit text-[1.3rem] rounded-full bg-white text-black px-6 py-2 hover:bg-gray-200"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default GotQues;


"use client"


import React, { useState } from "react";
import Image from "next/image";
import form from "../assets/form.png";
import toast from "react-hot-toast";
import { MuiTelInput } from "mui-tel-input"; 
import { useCreateInquiry } from "@/app/_components/admin/inquiries/useInquiry";

const GotQues = () => {
  const { createNewInquiry } = useCreateInquiry();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewInquiry(formData, {
      onSuccess: () => {
        toast.success("Message sent successfully!");
        // Reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: "",
          message: "",
        });
      },
    });
  };

  return (
    <>
      <p className="text-[#fff] max-md:text-[1.2rem] text-[2.5rem] text-center">
        Got Any{" "}
        <span className=" leading-10 max-md:text-[1.2rem] text-[2.5rem] text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
          Questions?
        </span>
      </p>
      <div className="flex flex-row justify-evenly items-center gap-2 max-md:py-4 py-10 md:w-[80%]">
        <div className="max-md:hidden h-[67vh] w-[40%] relative">
          <Image
            src={form.src}
            alt="form"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[20px]"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-md:w-[100%] w-[45%] max-md:py-4 px-6 py-6 rounded-lg space-y-4 text-white"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-full py-3 px-4 text-black placeholder-gray-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-full py-3 px-4 text-black placeholder-gray-500"
          />

          <MuiTelInput
            value={formData.phone}
            onChange={handlePhoneChange}
            defaultCountry="AE"
            fullWidth
            placeholder="Phone Number"
            className="w-full rounded-full py-3 px-4 text-black placeholder-gray-500"
            sx={{
              backgroundColor: "white",
              borderRadius:"30px",
              "& .MuiInputBase-input::placeholder": {
                color: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                color: "black",
                borderRadius:"30px",
                "& fieldset": {
                  borderColor: "#ddd",
                },
                "&:hover fieldset": {
                  borderColor: "#aaa",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#fff",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#fff",
              },
            }}
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-full py-3 px-4 text-black"
          >
            <option value="">Select Category</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full rounded-lg px-4 py-3 text-black h-[128px]"
          ></textarea>

          <div className="flex items-center justify-center space-x-2 text-sm">
            <input type="checkbox" className="w-4 h-4 accent-white" required />
            <span className="text-white text-[1.3rem]">
              I hereby agree to our{" "}
              <span className="font-bold">Privacy Policy</span> terms
            </span>
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-fit text-[1.3rem] rounded-full bg-white text-black px-6 py-2 hover:bg-gray-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GotQues;
