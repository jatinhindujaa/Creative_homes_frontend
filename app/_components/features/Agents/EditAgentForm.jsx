

"use client";

import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";
import ImagePreviewContainer from "../../ui/ImagePreviewContainer";
import { useUpdateAgentImage } from "../../admin/agents/useAgents";
import Spinner from "../../ui/Spinner";
import Select from "react-select";
import { Controller } from "react-hook-form";

// Type options for select
const typeOptions = [
  { value: "off plan", label: "Off Plan" },
  { value: "ready", label: "Ready" },
  { value: "rental", label: "Rental" },
  { value: "commercial", label: "Commercial" },
  { value: "plots", label: "Plots" },
];

// Error Modal Component
const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <h4 className="text-red-600 text-lg font-semibold">Error</h4>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// EditAgentForm Component
const EditAgentForm = ({
  id,
  resourceName,
  editData,
  setEditData,
  onConfirm,
  onCloseModal,
  control,
}) => {
  const { mutate: updateAgentImage, isPending: isImageUpdating } =
    useUpdateAgentImage();
  const [tags, setTags] = useState(editData.languages || []);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setEditData((prev) => ({ ...prev, languages: tags }));
  }, [tags, setEditData]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle multi-select type change
  const handleTypeChange = (selectedOptions) => {
    const values = selectedOptions
      ? selectedOptions.map((opt) => opt.value)
      : [];
    setEditData((prev) => ({ ...prev, type: values }));
  };

  // Check if order number exists
  const checkOrderNumberExists = () => {
    // This is where you can check if the order number exists before hitting the backend
    // For example, you can check if the order number is already in a local state or database.
    // In your case, you might be comparing against a list of existing order numbers or querying the API.

    if (editData.order === "existingOrderNumber") {
      setErrorMessage(
        "This order number already exists. Please choose a different one."
      );
      setErrorModalVisible(true);
      return false; // Prevent the form submission
    }

    return true; // Proceed with the form submission
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if order number exists before submitting
    if (!checkOrderNumberExists()) return; // If order number exists, stop submission

    onConfirm(editData, (error) => {
      if (
        error?.response?.data?.message ===
        "This order number already exists. Please choose a different one."
      ) {
        setErrorMessage(
          "This order number already exists. Please choose a different one."
        );
        setErrorModalVisible(true); // Show the error modal on error
      }
    });
  };

  // Handle image change
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
          <label className="text-sm font-medium text-gray-700">Languages</label>
          <TagInput tags={tags} setTags={setTags} />
        </div>

        <div className="gap-2 flex flex-row">
          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">
              Experience
            </label>
            <Input
              type="text"
              name="experience"
              value={editData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">Order</label>
            <Input
              type="text"
              name="order"
              value={editData.order}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Show the error modal when error occurs */}
        {errorModalVisible && (
          <ErrorModal
            message={errorMessage}
            onClose={() => setErrorModalVisible(false)}
          />
        )}

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
        <div className="text-red-600 text-[0.8rem] mb-[20px]">
          <p>Propery images for Mobile will be: 500 * 700</p>
          <p>Propery images for Desktop will be: 300 * 400</p>
          <p>File size should be less than 10MB.</p>
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
            Update Agent
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditAgentForm;

