// import React, { useEffect, useState } from "react";
// import Input from "../../ui/Input";
// import TagInput from "../../ui/TagInput";
// import ImagePreviewContainer from "../../ui/ImagePreviewContainer";
// import { useUpdateAgentImage } from "../../admin/agents/useAgents";
// import Spinner from "../../ui/Spinner";

// const EditAgentForm = ({
//   id,
//   resourceName,
//   editData,
//   setEditData,
//   onConfirm,
//   onCloseModal,
// }) => {
//   const { mutate: updateAgentImage, isPending: isImageUpdating } =
//     useUpdateAgentImage();
//   const [tags, setTags] = useState(editData.languages || []);

//   useEffect(() => {
//     setEditData((prev) => ({ ...prev, languages: tags }));
//   }, [tags, setEditData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onConfirm(editData);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     const formDataImage = new FormData();
//     formDataImage.append("image", file);

//     updateAgentImage({
//       id,
//       formData: formDataImage,
//     });
//     if (file) {
//       setEditData({ ...editData, image: file });
//     }
//   };

//   if (isImageUpdating) return <Spinner />;

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
//     >
//       <h3 className="text-lg font-semibold text-blue-950">
//         Edit {resourceName}
//       </h3>

//       <div className="space-y-4">
//         <div>
//           <label className="text-sm font-medium text-gray-700">Name</label>
//           <Input
//             type="text"
//             name="name"
//             value={editData.name}
//             onChange={handleChange}
//           />
//         </div>


//         <div>
//           <label className="text-sm font-medium text-gray-700">Phone No.</label>
//           <Input
//             type="text"
//             name="phoneNo"
//             value={editData.phoneNo}
//             onChange={handleChange}
//           />
//         </div>


//         <div>
//           <label className="text-sm font-medium text-gray-700">
//             Designation
//           </label>
//           <Input
//             type="text"
//             name="designation"
//             value={editData.designation}
//             onChange={handleChange}
//           />
//         </div>


//         <div>
//           <label className="text-sm font-medium text-gray-700">About</label>
//           <Input
//             type="text"
//             name="about"
//             value={editData.about}
//             onChange={handleChange}
//           />
//         </div>

//         <ImagePreviewContainer
//           image={editData.image}
//           onImageChange={handleImageChange}
//         />

//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             onClick={onCloseModal}
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
//           >
//             Update Agent
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default EditAgentForm;


// import React, { useEffect, useState } from "react";
// import Input from "../../ui/Input";
// import TagInput from "../../ui/TagInput";
// import ImagePreviewContainer from "../../ui/ImagePreviewContainer";
// import { useUpdateAgentImage } from "../../admin/agents/useAgents";
// import Spinner from "../../ui/Spinner";

// const EditAgentForm = ({
//   id,
//   resourceName,
//   editData,
//   setEditData,
//   onConfirm,
//   onCloseModal,
// }) => {
//   const { mutate: updateAgentImage, isPending: isImageUpdating } =
//     useUpdateAgentImage();
//   const [tags, setTags] = useState(editData.languages || []);

//   useEffect(() => {
//     setEditData((prev) => ({ ...prev, languages: tags }));
//   }, [tags, setEditData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onConfirm(editData);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     const formDataImage = new FormData();
//     formDataImage.append("image", file);

//     updateAgentImage({
//       id,
//       formData: formDataImage,
//     });
//     if (file) {
//       setEditData({ ...editData, image: file });
//     }
//   };

//   if (isImageUpdating) return <Spinner />;

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
//     >
//       <h3 className="text-lg font-semibold text-blue-950">
//         Edit {resourceName}
//       </h3>

//       <div className="space-y-4">
//         <div>
//           <label className="text-sm font-medium text-gray-700">Name</label>
//           <Input
//             type="text"
//             name="name"
//             value={editData.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label className="text-sm font-medium text-gray-700">Phone No.</label>
//           <Input
//             type="text"
//             name="phoneNo"
//             value={editData.phoneNo}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label className="text-sm font-medium text-gray-700">
//             Designation
//           </label>
//           <Input
//             type="text"
//             name="designation"
//             value={editData.designation}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label className="text-sm font-medium text-gray-700">About</label>
//           <Input
//             type="text"
//             name="about"
//             value={editData.about}
//             onChange={handleChange}
//           />
//         </div>

//         {/* ✅ Category Dropdown */}
//         <div>
//           <label className="text-sm font-medium text-gray-700">Category</label>
//           <select
//             name="type"
//             value={editData.type || ""}
//             onChange={handleChange}
//             className="border w-full border-gray-300 bg-gray-50 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select type</option>
//             <option value="off plan">Off plan</option>
//             <option value="Ready">Ready</option>
//             <option value="Rental">Rental</option>
//             <option value="Commercial">Commercial</option>
//             <option value="Plots">Plots</option>
//           </select>
//         </div>

//         <ImagePreviewContainer
//           image={editData.image}
//           onImageChange={handleImageChange}
//         />

//         <div className="flex justify-end space-x-3">
//           <button
//             type="button"
//             onClick={onCloseModal}
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
//           >
//             Update Agent
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default EditAgentForm;







"use client";

import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";
import ImagePreviewContainer from "../../ui/ImagePreviewContainer";
import { useUpdateAgentImage } from "../../admin/agents/useAgents";
import Spinner from "../../ui/Spinner";
import Select from "react-select";
import { Controller } from "react-hook-form";

const typeOptions = [
  { value: "off plan", label: "Off Plan" },
  { value: "ready", label: "Ready" },
  { value: "rental", label: "Rental" },
  { value: "commercial", label: "Commercial" },
  { value: "plots", label: "Plots" },
];

const EditAgentForm = ({
  id,
  resourceName,
  editData,
  setEditData,
  onConfirm,
  onCloseModal,
  control, // expect control prop for react-hook-form Controller (optional, explained below)
}) => {
  const { mutate: updateAgentImage, isPending: isImageUpdating } =
    useUpdateAgentImage();
  const [tags, setTags] = useState(editData.languages || []);

  useEffect(() => {
    setEditData((prev) => ({ ...prev, languages: tags }));
  }, [tags, setEditData]);

  // Handler for standard inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for multi-select changes
  const handleTypeChange = (selectedOptions) => {
    // selectedOptions is array of objects {value, label}
    const values = selectedOptions
      ? selectedOptions.map((opt) => opt.value)
      : [];
    setEditData((prev) => ({ ...prev, type: values }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(editData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const formDataImage = new FormData();
    formDataImage.append("image", file);

    updateAgentImage({
      id,
      formData: formDataImage,
    });

    if (file) {
      setEditData({ ...editData, image: file });
    }
  };

  if (isImageUpdating) return <Spinner />;

  // Prepare selected options for react-select
  const selectedTypeOptions = typeOptions.filter((option) =>
    editData.type?.includes(option.value)
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
    >
      <h3 className="text-lg font-semibold text-blue-950">
        Edit {resourceName}
      </h3>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Phone No.</label>
          <Input
            type="text"
            name="phoneNo"
            value={editData.phoneNo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Designation
          </label>
          <Input
            type="text"
            name="designation"
            value={editData.designation}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">About</label>
          <Input
            type="text"
            name="about"
            value={editData.about}
            onChange={handleChange}
          />
        </div>

        {/* Multi-select Type field */}
        <div>
          <label className="text-sm font-medium text-gray-700">Type</label>
          <Select
            options={typeOptions}
            isMulti
            value={selectedTypeOptions}
            onChange={handleTypeChange}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select type(s)"
          />
        </div>

        <ImagePreviewContainer
          image={editData.image}
          onImageChange={handleImageChange}
        />

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCloseModal}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
          >
            Update Agent
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditAgentForm;
