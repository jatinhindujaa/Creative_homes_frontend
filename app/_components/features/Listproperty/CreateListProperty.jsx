

"use client";

import { useForm } from "react-hook-form";
import { useCreateListproperty } from "../../admin/listproperty/useListproperty";
import Spinner from "../../ui/Spinner";
import toast, { Toaster } from "react-hot-toast";

export default function ValuationForm() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const { createNewListproperty, isCreating } = useCreateListproperty();

  if (isCreating) return <Spinner />;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("propertyAddress", data.propertyAddress);
    formData.append("listingtype", data.listingtype);
    formData.append("propertytype", data.propertytype);
    formData.append("status", true);

    createNewListproperty(formData, {
      onSuccess: () => {
        reset(); // clear fields
        toast.success("Form submitted successfully!");
        // onCloseModal?.(); // uncomment if you want to close modal after submit
      },
      onError: () => {
        toast.error("Submission failed. Please try again.");
      },
    });
  };

  return (
    <div className="bg-[#333] flex justify-center flex-col h-screen pt-[50px]">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-[#272727] p-8 rounded-lg shadow-lg max-w-md mx-auto ">
        <div className="flex justify-center text-[2.5rem] font-medium">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            Book a Valuation
          </span>
        </div>
        <p className="text-center text-sm mb-6 text-white">
          Ready to make your move? Start with a free property valuation. It’s
          quick, easy, and informative.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Full Name*"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email Address*"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="Mobile*"
            className="w-full px-4 py-2 border rounded"
          />
          <select
            {...register("listingtype", { required: true })}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Listing Type*</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
          </select>
          <select
            {...register("propertytype", { required: true })}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Property Type*</option>
            <option value="Apartment">Apartment</option>
            <option value="Penthouse">Penthouse/Villas/Mansions</option>
            <option value="Townhouse">Townhouse</option>
          </select>
          <input
            type="text"
            {...register("propertyAddress", { required: true })}
            placeholder="Property Address*"
            className="w-full px-4 py-2 border rounded"
          />
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-fit text-[1.3rem] rounded-full bg-white text-black px-6 py-2 hover:bg-gray-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




// "use client";

// import { useForm } from "react-hook-form";
// import { useCreateListproperty } from "../../admin/listproperty/useListproperty";
// import Spinner from "../../ui/Spinner";
// import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/navigation"; // Import useRouter to access query parameters
// import React from "react";

// export default function ValuationForm() {
//   const { register, handleSubmit, reset, setValue, formState } = useForm({
//     defaultValues: {},
//   });
//   const { errors } = formState;
//   const { createNewListproperty, isCreating } = useCreateListproperty();
//   const router = useRouter();

//   // Using optional chaining to safely access the query parameter
//   const propertytype = router.query?.propertytype;

//   // Only set the default value for propertytype if it is available in the query
//   React.useEffect(() => {
//     if (propertytype) {
//       setValue(
//         "propertytype",
//         propertytype.charAt(0).toUpperCase() + propertytype.slice(1)
//       );
//     }
//   }, [propertytype, setValue]);

//   if (isCreating) return <Spinner />;

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("phone", data.phone);
//     formData.append("propertyAddress", data.propertyAddress);
//     formData.append("listingtype", data.listingtype);
//     formData.append("propertytype", data.propertytype);
//     formData.append("status", true);

//     createNewListproperty(formData, {
//       onSuccess: () => {
//         reset(); // clear fields
//         toast.success("Form submitted successfully!");
//       },
//       onError: () => {
//         toast.error("Submission failed. Please try again.");
//       },
//     });
//   };

//   return (
//     <div className="bg-[#333] flex justify-center flex-col h-screen pt-[50px]">
//       <Toaster position="top-center" reverseOrder={false} />
//       <div className="bg-[#272727] p-8 rounded-lg shadow-lg max-w-md mx-auto ">
//         <div className="flex justify-center text-[2.5rem] font-medium">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//             Book a Valuation
//           </span>
//         </div>
//         <p className="text-center text-sm mb-6 text-white">
//           Ready to make your move? Start with a free property valuation. It’s
//           quick, easy, and informative.
//         </p>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <input
//             type="text"
//             {...register("name", { required: true })}
//             placeholder="Full Name*"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <input
//             type="email"
//             {...register("email", { required: true })}
//             placeholder="Email Address*"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <input
//             type="text"
//             {...register("phone", { required: true })}
//             placeholder="Mobile*"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <select
//             {...register("listingtype", { required: true })}
//             className="w-full px-4 py-2 border rounded"
//           >
//             <option value="">Listing Type*</option>
//             <option value="Rent">Rent</option>
//             <option value="Sale">Sale</option>
//           </select>
//           <select
//             {...register("propertytype", { required: true })}
//             className="w-full px-4 py-2 border rounded"
//           >
//             <option value="">Property Type*</option>
//             <option value="apartment">Apartment</option>
//             <option value="Penthouse">Penthouse/Villas/Mansions</option>
//             <option value="Townhouse">Townhouse</option>
//           </select>
//           <input
//             type="text"
//             {...register("propertyAddress", { required: true })}
//             placeholder="Property Address*"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <div className="w-full flex justify-center">
//             <button
//               type="submit"
//               className="w-fit text-[1.3rem] rounded-full bg-white text-black px-6 py-2 hover:bg-gray-200"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useForm } from "react-hook-form";
// import { useCreateListproperty } from "../../admin/listproperty/useListproperty";
// import Spinner from "../../ui/Spinner";
// import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/navigation"; // Import useRouter to access query parameters
// import React, { useEffect } from "react";

// export default function ValuationForm() {
//   const { register, handleSubmit, reset, setValue, formState } = useForm({
//     defaultValues: {},
//   });
//   const { errors } = formState;
//   const { createNewListproperty, isCreating } = useCreateListproperty();
//   const router = useRouter();

//   // Access the query parameter 'propertytype'
//   const { propertytype } = router.query;

//   // Wait for the 'propertytype' query parameter to be available before setting the value
//   useEffect(() => {
//     if (propertytype) {
//       setValue(
//         "propertytype",
//         propertytype.charAt(0).toUpperCase() + propertytype.slice(1)
//       ); // Capitalize the first letter
//     }
//   }, [propertytype, setValue]);

//   if (isCreating) return <Spinner />;

//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("phone", data.phone);
//     formData.append("propertyAddress", data.propertyAddress);
//     formData.append("listingtype", data.listingtype);
//     formData.append("propertytype", data.propertytype);
//     formData.append("status", true);

//     createNewListproperty(formData, {
//       onSuccess: () => {
//         reset(); // clear fields
//         toast.success("Form submitted successfully!");
//       },
//       onError: () => {
//         toast.error("Submission failed. Please try again.");
//       },
//     });
//   };

//   return (
//     <div className="bg-[#333] flex justify-center flex-col h-screen pt-[50px]">
//       <Toaster position="top-center" reverseOrder={false} />
//       <div className="bg-[#272727] p-8 rounded-lg shadow-lg max-w-md mx-auto ">
//         <div className="flex justify-center text-[2.5rem] font-medium">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
//             Book a Valuation
//           </span>
//         </div>
//         <p className="text-center text-sm mb-6 text-white">
//           Ready to make your move? Start with a free property valuation. It’s
//           quick, easy, and informative.
//         </p>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <input
//             type="text"
//             {...register("name", { required: true })}
//             placeholder="Full Name*"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <input
//             type="email"
//             {...register("email", { required: true })}
//             placeholder="Email Address*"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <input
//             type="text"
//             {...register("phone", { required: true })}
//             placeholder="Mobile*"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <select
//             {...register("listingtype", { required: true })}
//             className="w-full px-4 py-2 border rounded"
//           >
//             <option value="">Listing Type*</option>
//             <option value="Rent">Rent</option>
//             <option value="Sale">Sale</option>
//           </select>
//           <select
//             {...register("propertytype", { required: true })}
//             className="w-full px-4 py-2 border rounded"
//           >
//             <option value="">Property Type*</option>
//             <option value="Apartment">Apartment</option>
//             <option value="Penthouse">Penthouse/Villas/Mansions</option>
//             <option value="Townhouse">Townhouse</option>
//           </select>
//           <input
//             type="text"
//             {...register("propertyAddress", { required: true })}
//             placeholder="Property Address*"
//             className="w-full px-4 py-2 border rounded"
//           />
//           <div className="w-full flex justify-center">
//             <button
//               type="submit"
//               className="w-fit text-[1.3rem] rounded-full bg-white text-black px-6 py-2 hover:bg-gray-200"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



