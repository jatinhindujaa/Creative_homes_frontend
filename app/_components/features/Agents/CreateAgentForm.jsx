// "use client"

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useCreateAgent } from "../../admin/agents/useAgents";
// import Input from "../../ui/Input";
// import FileInput from "../../ui/FileInput";
// import Spinner from "../../ui/Spinner";
// import TagInput from "../../ui/TagInput";
// // import TipTapEditor from "../../ui/tiptapEditor";

// const CreateAgentForm = ({ onCloseModal, resourceName }) => {
//   const { register, handleSubmit, reset, formState } = useForm({
//     defaultValues: {},
//   });
//   const [tags, setTags] = useState([]);
//   const { errors } = formState;
//   const { createAgents, isCreating } = useCreateAgent();
//   // const [content, setContent] = useState("");

//   if (isCreating) return <Spinner />;

//   const onSubmit = (data) => {
//     const formData = new FormData();

//     formData.append("name", data.name);
//     formData.append("phoneNo", data.phoneNo);
//     formData.append("designation", data.designation);
//     formData.append("status", true);
//     formData.append("about", data.about);
//     if (data.image[0]) {
//       formData.append("image", data.image[0]);
//     }

//     createAgents(formData, {
//       onSuccess: () => {
//         reset();
//         onCloseModal?.();
//       },
//     });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4 "
//     >
//       <h3 className="text-lg font-semibold text-blue-950">
//         Add {resourceName}
//       </h3>

//       <div className="space-y-4">
//         <div>
//           <label className=" text-sm font-medium text-gray-700">Name</label>
//           <Input
//             type="text"
//             id="name"
//             {...register("name", { required: "This field is required" })}
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm">{errors.name.message}</p>
//           )}
//         </div>

//         <div>
//           <label className=" text-sm font-medium text-gray-700">
//             Phone No.
//           </label>
//           <Input
//             disabled={isCreating}
//             type="text"
//             id="phoneNo"
//             {...register("phoneNo", { required: "This field is required" })}
//           />
//           {errors.phoneNo && (
//             <p className="text-red-500 text-sm">{errors.phoneNo.message}</p>
//           )}
//         </div>

//         <div>
//           <label className=" text-sm font-medium text-gray-700">
//             Designation
//           </label>
//           <Input
//             disabled={isCreating}
//             type="text"
//             id="designation"
//             {...register("designation", { required: "This field is required" })}
//           />
//           {errors.designation && (
//             <p className="text-red-500 text-sm">{errors.designation.message}</p>
//           )}
//         </div>
      
//         <div>
//           <label className=" text-sm font-medium text-gray-700">About</label>
//           <Input
//             disabled={isCreating}
//             type="text"
//             id="about"
//             {...register("about", {
//               required: "This field is required",
//             })}
//           />
//           {errors.about && (
//             <p className="text-red-500 text-sm">{errors.about.message}</p>
//           )}
//         </div>

//         <div className="space-x-12">
//           <label className=" text-sm font-medium text-gray-700">Image</label>
//           <FileInput
//             id="image"
//             accept="image/*"
//             type="file"
//             multiple
//             {...register("image", {
//               required: "This field is required",
//             })}
//           />
//         </div>

//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
//             onClick={() => onCloseModal?.()}
//           >
//             Cancel
//           </button>
//           <button
//             disabled={isCreating}
//             className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Create Agent
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default CreateAgentForm;

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateAgent } from "../../admin/agents/useAgents";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Spinner from "../../ui/Spinner";
import Select from "react-select";
import { Controller } from "react-hook-form";
import TagInput from "../../ui/TagInput";
const CreateAgentForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState, control } = useForm({
    defaultValues: {},
  });
  const [languages, setlanguages] = useState([])
const typeOptions = [
  { value: "off plan", label: "Off Plan" },
  { value: "ready", label: "Ready" },
  { value: "rental", label: "Rental" },
  { value: "commercial", label: "Commercial" },
  { value: "plots", label: "Plots" },
];
  const { errors } = formState;
  const { createAgents, isCreating } = useCreateAgent();

  if (isCreating) return <Spinner />;

  const onSubmit = (data) => {
    const formData = new FormData();
 languages.forEach((language) => {
   formData.append("languages[]", language);
 });
    formData.append("name", data.name);
    formData.append("phoneNo", data.phoneNo);
    formData.append("designation", data.designation);
    formData.append("experience", data.experience);
    formData.append("order", data.order);

    if (data.type && Array.isArray(data.type)) {
      data.type.forEach((t) => formData.append("type", t));
    }

    formData.append("status", true);
    formData.append("about", data.about);

    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    createAgents(formData, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
    >
      <h3 className="text-lg font-semibold text-blue-950">
        Add {resourceName}
      </h3>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            id="name"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Phone No.</label>
          <Input
            disabled={isCreating}
            type="text"
            id="phoneNo"
            {...register("phoneNo", { required: "This field is required" })}
          />
          {errors.phoneNo && (
            <p className="text-red-500 text-sm">{errors.phoneNo.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Designation
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="designation"
            {...register("designation", { required: "This field is required" })}
          />
          {errors.designation && (
            <p className="text-red-500 text-sm">{errors.designation.message}</p>
          )}
        </div>
        <div className="gap-2 flex flex-row">
          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">
              Experience
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="experience"
              {...register("experience", {
                required: "This field is required",
              })}
            />
            {errors.designation && (
              <p className="text-red-500 text-sm">
                {errors.experience.message}
              </p>
            )}
          </div>

          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">Order</label>
            <Input
              disabled={isCreating}
              type="text"
              id="order"
              {...register("order", {
                required: "This field is required",
              })}
            />
            {errors.order && (
              <p className="text-red-500 text-sm">{errors.order.message}</p>
            )}
          </div>
        </div>
        <div>
          <label className=" text-sm font-medium text-gray-700">
            Languages
          </label>
          <TagInput tags={languages} setTags={setlanguages} />
          {errors.languages && (
            <p className="text-red-500 text-sm">{errors.languages.message}</p>
          )}
        </div>
        {/* ✅ Category Dropdown */}
        <div>
          <label className="text-sm font-medium text-gray-700">Type</label>
          <Controller
            name="type"
            control={control}
            // rules={{ required: "This field is required" }}
            render={({ field }) => (
              <Select
                {...field}
                options={typeOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(selected) =>
                  field.onChange(selected.map((s) => s.value))
                }
                value={typeOptions.filter((option) =>
                  field.value?.includes(option.value)
                )}
                placeholder="Select type(s)"
              />
            )}
          />
          {/* {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )} */}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">About</label>
          <Input
            disabled={isCreating}
            type="text"
            id="about"
            {...register("about", { required: "This field is required" })}
          />
          {errors.about && (
            <p className="text-red-500 text-sm">{errors.about.message}</p>
          )}
        </div>

        <div className="space-x-12">
          <label className="text-sm font-medium text-gray-700">Image</label>
          <FileInput
            id="image"
            accept="image/*"
            type="file"
            multiple
            {...register("image", { required: "This field is required" })}
          />
        </div>
        <div className="text-red-600 text-[0.8rem] mb-[20px]">
          <p>Propery images for Mobile will be: 500 * 700</p>
          <p>Propery images for Desktop will be: 300 * 400</p>
          <p>File size should be less than 10MB.</p>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </button>
          <button
            disabled={isCreating}
            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Agent
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateAgentForm;
