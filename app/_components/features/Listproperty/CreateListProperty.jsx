

// "use client";

// import { useForm } from "react-hook-form";
// import { useCreateListproperty } from "../../admin/listproperty/useListproperty";
// import Spinner from "../../ui/Spinner";
// import toast, { Toaster } from "react-hot-toast";
// import PhoneInput from "react-phone-input-2";

// export default function ValuationForm() {
//   const { register, handleSubmit, reset, formState } = useForm({
//     defaultValues: {},
//   });
//   const { errors } = formState;
//   const { createNewListproperty, isCreating } = useCreateListproperty();

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
//         // onCloseModal?.(); // uncomment if you want to close modal after submit
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
//             List Your Property
//           </span>
//         </div>
//         <p className="text-center text-sm mb-6 text-white">
//           {/* Ready to make your move? Start with a free property valuation. It’s
//           quick, easy, and informative. */}
//           Looking to sell or rent your property in Dubai? Please complete the
//           form below, and we will contact you promptly to facilitate the
//           process.
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
//           <div className="w-full flex items-center space-x-2">
//             <PhoneInput
//               country={"us"} // default country, you can make it dynamic or leave it
//               {...register("phone", { required: true })}
//               inputProps={{
//                 name: "phone",
//                 required: true,
//               }}
//               className="w-full px-4 py-2 border rounded"
//               specialLabel="Mobile*"
//               dropdownClass="country-dropdown" // Optional, for custom styling
//             />
//           </div>
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

"use client";

import { Controller, useForm } from "react-hook-form";
import { useCreateListproperty } from "../../admin/listproperty/useListproperty";
import Spinner from "../../ui/Spinner";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";

export default function ValuationForm() {
  const { register, control, handleSubmit, reset, formState } = useForm({
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
      },
      onError: () => {
        toast.error("Submission failed. Please try again.");
      },
    });
  };

  return (
    <div className="bg-[#333] flex justify-end flex-col h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-[#272727] p-8 pt-10 rounded-lg shadow-lg max-w-md mx-auto ">
        <div className="flex justify-center text-[2rem] font-medium">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-bronze to-gold">
            List Your Property
          </span>
        </div>
        <p className="text-center text-sm mb-6 text-white">
          Looking to sell or rent your property in Dubai? Please complete the
          form below, and we will contact you promptly to facilitate the
          process.
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

          {/* Use Controller to integrate PhoneInput with react-hook-form */}
          <div className="w-full flex items-center space-x-2">
            <Controller
              name="phone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <PhoneInput
                  {...field} // Bind field properties from react-hook-form
                  country={"us"}
                  inputProps={{
                    name: "phone",
                    required: true,
                    placeholder: "Mobile Number*",
                  }}
                  containerClass="w-full"
                  inputClass="!w-full px-4 !py-2 !border !rounded !text-black "
                  buttonClass="!border !border-r !rounded-l"
                  dropdownClass="country-dropdown"
                />
              )}
            />
          </div>

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
