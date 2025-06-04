// import React, { useEffect, useState } from "react";
// import Input from "../../ui/Input";
// import TagInput from "../../ui/TagInput";
// import ImagePreviewContainer from "../../ui/ImagePreviewContainer";
// import { useUpdateNewsImage } from "../../admin/news/useNews";
// import Spinner from "../../ui/Spinner";
// import TiptapEditor from "../../admin/news/Tiptapeditor";
// import FileInput from "../../ui/FileInput";

// const EditNewsForm = ({
//   id,
//   resourceName,
//   editData,
//   setEditData,
//   aboutContent,
//   setAboutContent,
//   onConfirm,
//   onCloseModal,
// }) => {
//   const { mutate: updateNewsImage, isPending: isImageUpdating } =
//     useUpdateNewsImage();
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

//     updateNewsImage({
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
//           <label className="text-sm font-medium text-gray-700">Title</label>
//           <Input
//             type="text"
//             name="name"
//             value={editData.title}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label className="text-sm font-medium text-gray-700">Date</label>
//           <Input
//             type="text"
//             name="date"
//             value={editData.date}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label className="text-sm font-medium text-gray-700">
//             Description
//           </label>
//           <TiptapEditor content={aboutContent} setContent={setAboutContent} />
//         </div>

//         {/* <ImagePreviewContainer
//           image={editData.image}
//           onImageChange={handleImageChange}
//         /> */}

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             {editData.image ? "Change Image" : "Add Image"}
//           </label>

//           {editData.image ? (
//             <div className="mb-4">
//               {/* Show preview of existing image */}
//               <ImagePreviewContainer
//                 image={editData.image}
//                 onImageChange={handleImageChange}
//               />
//             </div>
//           ) : (
//             <FileInput
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="block w-full text-sm text-gray-500
//       file:mr-4 file:py-2 file:px-4
//       file:rounded-md file:border-0
//       file:text-sm file:font-semibold
//       file:bg-blue-100 file:text-blue-700
//       hover:file:bg-blue-200
//     "
//             />
//           )}
//         </div>

//         <div className="text-red-600 text-[0.8rem] mb-[20px]">
//           <p>Propery images for Mobile will be: 700 * 700</p>
//           <p>Propery images for Desktop will be: 1500 * 1000</p>
//           <p>File size should be less than 5MB.</p>
//         </div>

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
//             Update News
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default EditNewsForm;


import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";
import ImagePreviewContainer from "../../ui/ImagePreviewContainer";
import { useUpdateNewsImage } from "../../admin/news/useNews";
import Spinner from "../../ui/Spinner";
import TiptapEditor from "../../admin/news/Tiptapeditor";
import FileInput from "../../ui/FileInput";

const EditNewsForm = ({
  id,
  resourceName,
  editData,
  setEditData,
  aboutContent,
  setAboutContent,
  onConfirm,
  onCloseModal,
}) => {
  console.log("mobile",editData)
  const { mutate: updateNewsImage, isPending: isImageUpdating } =
    useUpdateNewsImage();
  const [tags, setTags] = useState(editData.languages || []);

  useEffect(() => {
    setEditData((prev) => ({ ...prev, languages: tags }));
  }, [tags, setEditData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(editData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const formDataImage = new FormData();
    formDataImage.append("image", file);

    updateNewsImage({
      id,
      formData: formDataImage,
    });
    if (file) {
      setEditData({ ...editData, image: file });
    }
  };

  const handleMobileImageChange = (e) => {
    const file = e.target.files[0];
    const formDataImage = new FormData();
    formDataImage.append("mobileImage", file);

    updateNewsImage({
      id,
      formData: formDataImage,
    });
    if (file) {
      setEditData({ ...editData, mobileImage: file });
    }
  };

  if (isImageUpdating) return <Spinner />;

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
          <label className="text-sm font-medium text-gray-700">Title</label>
          <Input
            type="text"
            name="name"
            value={editData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Date</label>
          <Input
            type="text"
            name="date"
            value={editData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <TiptapEditor content={aboutContent} setContent={setAboutContent} />
        </div>

        {/* Regular Image Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {editData.image ? "Change Image" : "Add Image"}
          </label>

          {editData.image ? (
            <div className="mb-4">
              {/* Show preview of existing image */}
              <ImagePreviewContainer
                image={editData.image}
                onImageChange={handleImageChange}
              />
            </div>
          ) : (
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-100 file:text-blue-700
      hover:file:bg-blue-200
    "
            />
          )}
        </div>

        {/* Mobile Image Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {editData.mobileImage ? "Change Mobile Image" : "Add Mobile Image"}
          </label>

          {editData.mobileImage ? (
            <div className="mb-4">
              {/* Show preview of existing mobile image */}
              <ImagePreviewContainer
                image={editData.mobileImage}
                onImageChange={handleMobileImageChange}
              />
            </div>
          ) : (
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleMobileImageChange}
              className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-100 file:text-blue-700
      hover:file:bg-blue-200
    "
            />
          )}
        </div>

        <div className="text-red-600 text-[0.8rem] mb-[20px]">
          <p>Propery images for Mobile will be: 700 * 700</p>
          <p>Propery images for Desktop will be: 1500 * 1000</p>
          <p>File size should be less than 5MB.</p>
        </div>

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
            Update News
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditNewsForm;
