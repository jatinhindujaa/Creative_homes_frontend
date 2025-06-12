import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";
import { useAgents } from "../../admin/agents/useAgents";
import TiptapEditor from "../../admin/news/Tiptapeditor";
import FileInput from "../../ui/FileInput";

import Select from "react-select";
const EditPropertyForm = ({
  resourceName,
  editData,
  setEditData,
  onConfirm,
  onCloseModal,
}) => {
  const [newQrImage, setNewQrImage] = useState(null);
  const [propertyImages, setPropertyImages] = useState(
    editData.multipleImages || []
  );
  const [mobilemultipleImages, setmobilemultipleImages] = useState(
    editData.mobilemultipleImages || []
  );

  const [newImages, setNewImages] = useState([]);
  const [mobilenewImages, setmobileNewImages] = useState([]);

  useEffect(() => {
    setEditData((prev) => ({
      ...prev,
      multipleImages: propertyImages,
      mobilemultipleImages: mobilemultipleImages,
    }));
  }, [
    propertyImages,
    mobilemultipleImages,
  ]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(editData);
  };

  // Handle mobile image selection
  const handleMobileImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert the file list to an array
    console.log("Selected mobile images:", files); // Check if files are selected correctly
    setmobilemultipleImages(files); // Update state with selected files

    // Also update editData to reflect the new images
    setEditData((prev) => ({
      ...prev,
      mobilemultipleImages: files,
    }));
  };

  // Handle removal of mobile image
  const handleRemoveMobileImage = (index) => {
    const updatedImages = mobilemultipleImages.filter(
      (_, idx) => idx !== index
    ); // Remove image at the given index
    setmobilemultipleImages(updatedImages); // Update state with the remaining images

    // Update editData with the new image array
    setEditData((prev) => ({
      ...prev,
      mobilemultipleImages: updatedImages,
    }));
  };

  useEffect(() => {
    // Ensure the state is initialized correctly with existing images
    setmobilemultipleImages(editData.mobilemultipleImages || []);
  }, [editData]);
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
    >
      <h3 className="text-lg font-semibold text-blue-950">
        Edit {resourceName}
      </h3>

      <div className="space-y-4">
        <div className="gap-2 flex flex-row">
          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <Input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
            />
          </div>

          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">
              Order
            </label>
            <Input
              type="text"
              name="order"
              value={editData.order}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Existing Property Images
          </label>
          <div className="flex flex-wrap gap-3">
            {propertyImages.map((img, idx) => (
              <div key={idx} className="relative w-24 h-24">
                <img
                  src={img}
                  alt={`property-${idx}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() =>
                    setPropertyImages(
                      propertyImages.filter((_, i) => i !== idx)
                    )
                  }
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mt-4 block">
            Add New Property Images
          </label>
          <FileInput
            id="multipleImages"
            accept="image/*"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setNewImages(files);
              setEditData((prev) => ({ ...prev, newImages: files }));
            }}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Existing Mobile Property Images
          </label>
          <div className="flex flex-wrap gap-3">
            {mobilemultipleImages.map((img, idx) => (
              <div key={idx} className="relative w-24 h-24">
                <img
                  src={img} // Create an object URL for the image file (if it's a new file)
                  alt={`property-mobile-image-${idx}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveMobileImage(idx)} // Remove image on click
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mt-4 block">
            Add New Property Images
          </label>
          <FileInput
            id="mobileMultipleImages"
            accept="image/*"
            multiple
            onChange={handleMobileImageChange} // Trigger the handler when files are selected
          />
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
            Update Property
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditPropertyForm;
