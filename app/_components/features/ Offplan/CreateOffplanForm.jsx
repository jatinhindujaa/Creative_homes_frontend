// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Input from "../../ui/Input";
// import FileInput from "../../ui/FileInput";
// import Spinner from "../../ui/Spinner";
// import TagInput from "../../ui/TagInput";
// import { useAgents } from "../../admin/agents/useAgents";
// import TiptapEditor from "../../admin/news/Tiptapeditor";
// import { useCreateOffplan } from "../../admin/offplan/useOffplan";
// // import TipTapEditor from "../../ui/tiptapEditor";

// const CreateOffplanForm = ({ onCloseModal, resourceName }) => {
//   const { register, handleSubmit, reset, formState } = useForm({
//     defaultValues: {},
//   });
//   const [tags, setTags] = useState([]);
//   const [amenities, setAmenities] = useState([]);

//   const { errors } = formState;
//   const { createOffplanp, isCreating } = useCreateOffplan();
//   // const [content, setContent] = useState("");
//   const { data: agents = [], isLoading: loadingAgents } = useAgents();
//   const [selectedAgent, setSelectedAgent] = useState("");
//   const [content, setContent] = useState("");

//   if (isCreating) return <Spinner />;

//   const onSubmit = (data) => {
//     const multipleFiles = data.multipleImages
//       ? Array.from(data.multipleImages)
//       : [];
//     const formData = new FormData();

//     formData.append("name", data.name);

//     tags.forEach((tag) => {
//       formData.append("features[]", tag);
//     });
//     amenities.forEach((amenity) => {
//       formData.append("amenities[]", amenity);
//     });

//     formData.append("price", data.price);
//     formData.append("type", data.type);
//     formData.append("reference", data.reference);
//     formData.append("dld", data.dld);
//     formData.append("zone", data.zone);
//     formData.append("bed", data.bed);
//     formData.append("shower", data.shower);
//     formData.append("bua", data.bua);
//     formData.append("plot", data.plot);
//     formData.append("agent", selectedAgent);
//     formData.append("shortDescription", data.shortDescription);
//     formData.append("description", content);
//     formData.append("dealType", data.dealType);

//     multipleFiles.forEach((file) => {
//       formData.append("multipleImages", file);
//     });
//     if (data.image[0]) {
//       formData.append("image", data.image[0]);
//     }

//     createOffplanp(formData, {
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
//         <div className="gap-2 flex flex-row">
//           <div className="w-[50%]">
//             <label className=" text-sm font-medium text-gray-700">Title</label>
//             <Input
//               type="text"
//               id="name"
//               {...register("name", { required: "This field is required" })}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm">{errors.name.message}</p>
//             )}
//           </div>

//           <div className="w-[50%]">
//             <label className=" text-sm font-medium text-gray-700">
//               Location
//             </label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="dealType"
//               {...register("dealType", { required: "This field is required" })}
//             />
//             {errors.dealType && (
//               <p className="text-red-500 text-sm">{errors.dealType.message}</p>
//             )}
//           </div>
//         </div>

//         <div>
//           <label className=" text-sm font-medium text-gray-700">Amenities</label>
//           <TagInput tags={tags} setTags={setTags} />
//           {errors.features && (
//             <p className="text-red-500 text-sm">{errors.features.message}</p>
//           )}
//         </div>
//         <div className="gap-2 flex flex-row">
//           <div className="w-[33%]">
//             <label className=" text-sm font-medium text-gray-700">Price</label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="price"
//               {...register("price", { required: "This field is required" })}
//             />
//             {errors.price && (
//               <p className="text-red-500 text-sm">{errors.price.message}</p>
//             )}
//           </div>

//           <div className="w-[33%]">
//             <label className=" text-sm font-medium text-gray-700">
//               What's App
//             </label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="type"
//               {...register("type", { required: "This field is required" })}
//             />
//             {errors.type && (
//               <p className="text-red-500 text-sm">{errors.type.message}</p>
//             )}
//           </div>
//           <div className="w-[33%]">
//             <label className=" text-sm font-medium text-gray-700">Call</label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="plot"
//               {...register("plot", { required: "This field is required" })}
//             />
//             {errors.plot && (
//               <p className="text-red-500 text-sm">{errors.plot.message}</p>
//             )}
//           </div>
//         </div>

//         <div className="gap-2 flex flex-row">
//           <div className="w-[33%]">
//             <label className=" text-sm font-medium text-gray-700">
//               First Installment
//             </label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="bua"
//               {...register("bua", { required: "This field is required" })}
//             />
//             {errors.bua && (
//               <p className="text-red-500 text-sm">{errors.bua.message}</p>
//             )}
//           </div>
//           <div className="w-[33%]">
//             <label className=" text-sm font-medium text-gray-700">
//               Under Construction
//             </label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="bed"
//               {...register("bed", { required: "This field is required" })}
//             />
//             {errors.bed && (
//               <p className="text-red-500 text-sm">{errors.bed.message}</p>
//             )}
//           </div>

//           <div className="w-[33%]">
//             <label className=" text-sm font-medium text-gray-700">
//               On Handover
//             </label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="shower"
//               {...register("shower", { required: "This field is required" })}
//             />
//             {errors.shower && (
//               <p className="text-red-500 text-sm">{errors.shower.message}</p>
//             )}
//           </div>
//         </div>
//         <div className="gap-2 flex flex-row">
//           <div className="w-[33%]">
//             <label className=" text-sm font-medium text-gray-700">
//               Reference
//             </label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="reference"
//               {...register("reference", { required: "This field is required" })}
//             />
//             {errors.reference && (
//               <p className="text-red-500 text-sm">{errors.reference.message}</p>
//             )}
//           </div>

//           <div className="w-[33%]">
//             <label className=" text-sm font-medium text-gray-700">Zone</label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="zone"
//               {...register("zone", { required: "This field is required" })}
//             />
//             {errors.zone && (
//               <p className="text-red-500 text-sm">{errors.zone.message}</p>
//             )}
//           </div>

//           <div className="w-[33%]">
//             <label className=" text-sm font-medium text-gray-700">DLD</label>
//             <Input
//               disabled={isCreating}
//               type="text"
//               id="dld"
//               {...register("dld", { required: "This field is required" })}
//             />
//             {errors.dld && (
//               <p className="text-red-500 text-sm">{errors.dld.message}</p>
//             )}
//           </div>
//         </div>
//         <div className="gap-3 flex flex-row">
//           <div className="w-[50%]">
//             <label className="text-sm font-medium text-gray-700">
//               Select Agent
//             </label>
//             <select
//               className="w-full border px-3 py-2 rounded-md"
//               value={selectedAgent}
//               onChange={(e) => setSelectedAgent(e.target.value)}
//               required
//             >
//               <option value="">-- Select Agent --</option>
//               {agents.map((agent) => (
//                 <option key={agent._id} value={agent._id}>
//                   {agent.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="w-[50%]">
//             <label className=" text-sm font-medium text-gray-700">
//               Browsher upload
//             </label>
//             <FileInput
//               id="image"
//               accept="pdf/*"
//               type="file"
//               multiple
//               {...register("image", {
//                 required: "This field is required",
//               })}
//             />
//           </div>
//         </div>

       
//         <div>
//           <label className=" text-sm font-medium text-gray-700">
//             Short Description
//           </label>
//           <Input
//             disabled={isCreating}
//             type="text"
//             id="shortDescription"
//             {...register("shortDescription", {
//               required: "This field is required",
//             })}
//           />
//           {errors.shortDescription && (
//             <p className="text-red-500 text-sm">
//               {errors.shortDescription.message}
//             </p>
//           )}
//         </div>

//         <div>
//           <label className=" text-sm font-medium text-gray-700">
//             Description
//           </label>
//           <TiptapEditor content={content} setContent={setContent} />
//           {errors.description && (
//             <p className="text-red-500 text-sm">{errors.description.message}</p>
//           )}
//         </div>

//         <div className="space-x-12">
//           <label className=" text-sm font-medium text-gray-700">
//             Offplan Images
//           </label>
//           <FileInput
//             id="multipleImages"
//             accept="multipleImages/*"
//             type="file"
//             multiple
//             {...register("multipleImages", {
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
//             Create Offplan
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default CreateOffplanForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Spinner from "../../ui/Spinner";
import TagInput from "../../ui/TagInput";
import { useAgents } from "../../admin/agents/useAgents";
import TiptapEditor from "../../admin/news/Tiptapeditor";
import { useCreateOffplan } from "../../admin/offplan/useOffplan";
import { FloorPlanCategoriesInput } from "./FloorPlanCategoriesInput";

// const FloorPlanCategoriesInput = ({ value, onChange }) => {
//   const [categories, setCategories] = useState(value || []);

//   const updateParent = (newCategories) => {
//     setCategories(newCategories);
//     onChange(newCategories);
//   };

//   const addCategory = () => {
//     updateParent([...categories, { categoryName: "", floorPlans: [] }]);
//   };

//   const removeCategory = (catIndex) => {
//     updateParent(categories.filter((_, i) => i !== catIndex));
//   };

//   const updateCategoryName = (catIndex, val) => {
//     const newCategories = [...categories];
//     newCategories[catIndex].categoryName = val;
//     updateParent(newCategories);
//   };

//   const addFloorPlan = (catIndex) => {
//     const newCategories = [...categories];
//     newCategories[catIndex].floorPlans.push({
//       beds: "",
//       minSizeSqft: "",
//       maxSizeSqft: "",
//       icon: "",
//       description: "",
//     });
//     updateParent(newCategories);
//   };

//   const removeFloorPlan = (catIndex, fpIndex) => {
//     const newCategories = [...categories];
//     newCategories[catIndex].floorPlans.splice(fpIndex, 1);
//     updateParent(newCategories);
//   };

//   const updateFloorPlanField = (catIndex, fpIndex, field, val) => {
//     const newCategories = [...categories];
//     newCategories[catIndex].floorPlans[fpIndex][field] = val;
//     updateParent(newCategories);
//   };

//   return (
//     <div className="border p-4 rounded-md space-y-6">
//       <h4 className="text-lg font-semibold mb-2">Floor Plan Categories</h4>
//       {categories.map((cat, catIndex) => (
//         <div key={catIndex} className="border p-3 rounded-md bg-gray-50">
//           <div className="flex justify-between items-center mb-3">
//             <input
//               type="text"
//               placeholder="Category Name"
//               className="border px-3 py-1 rounded w-full max-w-xs"
//               value={cat.categoryName}
//               onChange={(e) => updateCategoryName(catIndex, e.target.value)}
//               required
//             />
//             <button
//               type="button"
//               onClick={() => removeCategory(catIndex)}
//               className="ml-4 text-red-600 font-bold"
//             >
//               Remove Category
//             </button>
//           </div>

//           <div className="space-y-4">
//             {cat.floorPlans.map((fp, fpIndex) => (
//               <div
//                 key={fpIndex}
//                 className="border p-3 rounded bg-white flex flex-wrap gap-4 items-end"
//               >
//                 <input
//                   type="number"
//                   placeholder="Beds"
//                   min="0"
//                   value={fp.beds}
//                   onChange={(e) =>
//                     updateFloorPlanField(
//                       catIndex,
//                       fpIndex,
//                       "beds",
//                       e.target.value
//                     )
//                   }
//                   className="border px-2 py-1 rounded w-24"
//                   required
//                 />
//                 <input
//                   type="number"
//                   placeholder="Min Sqft"
//                   min="0"
//                   value={fp.minSizeSqft}
//                   onChange={(e) =>
//                     updateFloorPlanField(
//                       catIndex,
//                       fpIndex,
//                       "minSizeSqft",
//                       e.target.value
//                     )
//                   }
//                   className="border px-2 py-1 rounded w-24"
//                   required
//                 />
//                 <input
//                   type="number"
//                   placeholder="Max Sqft"
//                   min="0"
//                   value={fp.maxSizeSqft}
//                   onChange={(e) =>
//                     updateFloorPlanField(
//                       catIndex,
//                       fpIndex,
//                       "maxSizeSqft",
//                       e.target.value
//                     )
//                   }
//                   className="border px-2 py-1 rounded w-24"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Icon URL"
//                   value={fp.icon}
//                   onChange={(e) =>
//                     updateFloorPlanField(
//                       catIndex,
//                       fpIndex,
//                       "icon",
//                       e.target.value
//                     )
//                   }
//                   className="border px-2 py-1 rounded w-48"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Description"
//                   value={fp.description}
//                   onChange={(e) =>
//                     updateFloorPlanField(
//                       catIndex,
//                       fpIndex,
//                       "description",
//                       e.target.value
//                     )
//                   }
//                   className="border px-2 py-1 rounded w-full max-w-md"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removeFloorPlan(catIndex, fpIndex)}
//                   className="text-red-600 font-bold"
//                 >
//                   Remove Floor Plan
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addFloorPlan(catIndex)}
//               className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
//             >
//               + Add Floor Plan
//             </button>
//           </div>
//         </div>
//       ))}
//       <button
//         type="button"
//         onClick={addCategory}
//         className="px-4 py-2 bg-green-600 text-white rounded"
//       >
//         + Add Category
//       </button>
//     </div>
//   );
// };

const CreateOffplanForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const [tags, setTags] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const { errors } = formState;
  const { createOffplanp, isCreating } = useCreateOffplan();
  const { data: agents = [], isLoading: loadingAgents } = useAgents();
  const [selectedAgent, setSelectedAgent] = useState("");
  const [content, setContent] = useState("");
  const [floorPlanCategories, setFloorPlanCategories] = useState([]);

  if (isCreating) return <Spinner />;

  const onSubmit = (data) => {
    const multipleFiles = data.multipleImages
      ? Array.from(data.multipleImages)
      : [];
    const formData = new FormData();

    formData.append("name", data.name);

    tags.forEach((views) => {
      formData.append("views[]", views);
    });
    amenities.forEach((amenity) => {
      formData.append("amenities[]", amenity);
    });

    formData.append("price", data.price);
    formData.append("agent", selectedAgent);
    formData.append("shortDescription", data.shortDescription);
    formData.append("description", content);
    formData.append("status", data.status ? "true" : "false");
    // formData.append("views", JSON.stringify(data.views || [])); // Assuming you add views input below

    // Append floorPlanCategories as JSON string
    formData.append("floorPlanCategories", JSON.stringify(floorPlanCategories));

    multipleFiles.forEach((file) => {
      formData.append("multipleImages", file);
    });
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    createOffplanp(formData, {
      onSuccess: () => {
        reset();
        setFloorPlanCategories([]);
        setTags([]);
        setAmenities([]);
        setSelectedAgent("");
        setContent("");
        onCloseModal?.();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4 "
    >
      <h3 className="text-lg font-semibold text-blue-950">
        Add {resourceName}
      </h3>

      <div className="space-y-4">
        {/* Title and Location */}
        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="text-sm font-medium text-gray-700">Title</label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: "This field is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="text-sm font-medium text-gray-700">
              Location
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="dealType"
              {...register("dealType", { required: "This field is required" })}
            />
            {errors.dealType && (
              <p className="text-red-500 text-sm">{errors.dealType.message}</p>
            )}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label className="text-sm font-medium text-gray-700">Amenities</label>
          <TagInput tags={amenities} setTags={setAmenities} />
          {errors.features && (
            <p className="text-red-500 text-sm">{errors.features.message}</p>
          )}
        </div>

        {/* Price and Reference */}
        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="text-sm font-medium text-gray-700">Price</label>
            <Input
              disabled={isCreating}
              type="text"
              id="price"
              {...register("price", { required: "This field is required" })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>
        </div>

        {/* Views Input - simple tags for example */}
        <div>
          <label className="text-sm font-medium text-gray-700">Views</label>
          <TagInput tags={tags} setTags={setTags} />
          {errors.views && (
            <p className="text-red-500 text-sm">{errors.views.message}</p>
          )}
        </div>

        {/* Agent select and Brochure upload */}
        <div className="flex gap-3">
          <div className="w-1/2">
            <label className="text-sm font-medium text-gray-700">
              Select Agent
            </label>
            <select
              className="w-full border px-3 py-2 rounded-md"
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value)}
              required
            >
              <option value="">-- Select Agent --</option>
              {agents.map((agent) => (
                <option key={agent._id} value={agent._id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-1/2">
            <label className="text-sm font-medium text-gray-700">
              Brochure upload
            </label>
            <FileInput
              id="image"
              accept="pdf/*"
              type="file"
              multiple
              {...register("image", { required: "This field is required" })}
            />
          </div>
        </div>

        {/* Short Description */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Short Description
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="shortDescription"
            {...register("shortDescription", {
              required: "This field is required",
            })}
          />
          {errors.shortDescription && (
            <p className="text-red-500 text-sm">
              {errors.shortDescription.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <TiptapEditor content={content} setContent={setContent} />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Floor Plan Categories */}
        <FloorPlanCategoriesInput
          value={floorPlanCategories}
          onChange={setFloorPlanCategories}
        />

        {/* Multiple Images */}
        <div className="space-x-12">
          <label className="text-sm font-medium text-gray-700">
            Offplan Images
          </label>
          <FileInput
            id="multipleImages"
            accept="image/*"
            type="file"
            multiple
            {...register("multipleImages", {
              required: "This field is required",
            })}
          />
        </div>

        {/* Submit buttons */}
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
            Create Offplan
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateOffplanForm;
