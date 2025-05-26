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

const CreateAgentForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });

  const { errors } = formState;
  const { createAgents, isCreating } = useCreateAgent();

  if (isCreating) return <Spinner />;

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("phoneNo", data.phoneNo);
    formData.append("designation", data.designation);
    formData.append("type", data.type); // ✅ Add category
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

        {/* ✅ Category Dropdown */}
        <div>
          <label className="text-sm font-medium text-gray-700">Type</label>
          <select
            {...register("type", { required: "This field is required" })}
            className="border w-full border-gray-300 bg-gray-50 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select type</option>
            <option value="off plan">Off plan</option>
            <option value="Ready">Ready</option>
            <option value="Rental">Rental</option>
            <option value="Commercial">Commercial</option>
            <option value="Plots">Plots</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm">
              {errors.cattypeegory.message}
            </p>
          )}
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
