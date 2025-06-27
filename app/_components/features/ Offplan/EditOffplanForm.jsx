import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";
import { useAgents } from "../../admin/agents/useAgents";
import TiptapEditor from "../../admin/news/Tiptapeditor";
import FileInput from "../../ui/FileInput";
import { FloorPlanCategoriesInput } from "./FloorPlanCategoriesInput";
import { useAreas } from "../../admin/area/useArea";

const EditOffplanForm = ({
  resourceName,
  editData,
  setEditData,
  onConfirm,
  onCloseModal,
  isUpdating,
}) => {
  const { data: agents = [], isLoading: loadingAgents } = useAgents();
  const { data: areas = [], isLoading: loadingAreas } = useAreas();


  // Controlled states initialized with fallback defaults
  const [views, setViews] = useState(editData.views || []);
  const [amenities, setAmenities] = useState(editData.amenities || []);
  const [description, setDescription] = useState(editData.description || "");
  const [mobilemultipleImages, setmobilemultipleImages] = useState(
      editData.mobilemultipleImages || []
    );
  const [floorPlanCategories, setFloorPlanCategories] = useState(
    editData.floorPlanCategories || []
  );
  const [selectedAgent, setSelectedAgent] = useState(editData.agent || "");
  const [selectedArea, setSelectedArea] = useState(editData.area || "");

  const [shortDescription, setShortDescription] = useState(
    editData.shortDescription || ""
  );
  const [name, setName] = useState(editData.name || "");
  const [order, setOrder] = useState(editData.order || "");
  const [firstpay, setfirstpay] = useState(editData.firstpay || "");
  const [address, setaddress] = useState(editData.address || "");
  const [underpay, setunderpay] = useState(editData.underpay || "");
  const [handoverpay, sethandoverpay] = useState(editData.handoverpay || "");
  const [developer, setdeveloper] = useState(editData.developer || "");
  const [handoverin, sethandoverin] = useState(editData.handoverin || "");
  const [maplink, setMap] = useState(editData.maplink || "");

  const [price, setPrice] = useState(editData.price || "");
  const [status, setStatus] = useState(!!editData.status);
  const [existingMultipleImages, setExistingMultipleImages] = useState(
    editData.multipleImages || []
  );
  const [newMultipleImages, setNewMultipleImages] = useState([]);
  // const [brochureFile, setBrochureFile] = useState(null);

  // Sync controlled states back to parent editData
  useEffect(() => {
    setEditData((prev) => ({
      ...prev,
      name,
      firstpay,
      underpay,
      handoverpay,
      developer,
      handoverin,
      amenities,
      price,
      views,
      order,
      maplink,
      agent: selectedAgent,
      shortDescription,
      description,
      floorPlanCategories,
      status,
      multipleImages: existingMultipleImages,
      mobilemultipleImages: mobilemultipleImages,
      newMultipleImages,
      // image: brochureFile || editData.image,
      address
    }));
  }, [
    name,
    amenities,
    firstpay,
    underpay,
    handoverpay,
    price,
    developer,
    handoverin,
    views,
    order,
    maplink,
    selectedAgent,
    shortDescription,
    description,
    floorPlanCategories,
    status,
    existingMultipleImages,
    mobilemultipleImages,
    newMultipleImages,
    // brochureFile,
    address,
    setEditData,
    editData.image,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(editData);
  };
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
  const updatedImages = mobilemultipleImages.filter((_, idx) => idx !== index); // Remove image at the given index
  setmobilemultipleImages(updatedImages); // Update state with the remaining images

  // Update editData with the new image array
  setEditData((prev) => ({
    ...prev,
    mobilemultipleImages: updatedImages,
  }));
};
  const handleRemoveExistingImage = (index) => {
    setExistingMultipleImages((images) => images.filter((_, i) => i !== index));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4"
    >
      <h3 className="text-lg font-semibold text-blue-950">
        Edit {resourceName}
      </h3>

      {/* Name and Location (dealType) */}
      <div className="flex gap-2">
        <div className="w-1/2">
          <label className="text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <label className=" text-sm font-medium text-gray-700">Location</label>
          <Input
            type="text"
            id="address"
            name="address"
            value={editData.address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>
      </div>

      {/* Amenities */}
      <div>
        <label className="text-sm font-medium text-gray-700">Amenities</label>
        <TagInput tags={amenities} setTags={setAmenities} />
      </div>

      {/* Price */}
      <div className="flex gap-3">
        <div>
          <label className="text-sm font-medium text-gray-700">Price</label>
          <Input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-[33%]">
          <label className="text-sm font-medium text-gray-700">
            Google Map link
          </label>
          <Input
            type="text"
            name="maplink"
            value={editData.maplink}
            onChange={(e) => setMap(e.target.value)}
          />
        </div>

        <div className="w-[33%]">
          <label className="text-sm font-medium text-gray-700">Order</label>
          <Input
            type="text"
            name="order"
            value={editData.order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>
      </div>

      {/* Views */}
      <div>
        <label className="text-sm font-medium text-gray-700">Views</label>
        <TagInput tags={views} setTags={setViews} />
      </div>

      {/* Agent Select */}
      <div className="flex gap-2">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Select Agent
          </label>
          <select
            className="w-full border px-3 py-2 rounded-md"
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
          >
            <option value="">-- Select Agent --</option>
            {agents.map((agent) => (
              <option key={agent._id} value={agent._id}>
                {agent.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            Select Area
          </label>
          <select
            className="w-full border px-3 py-2 rounded-md"
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            <option value="">-- Select Area --</option>
            {areas.map((agent) => (
              <option key={agent._id} value={agent._id}>
                {agent.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="gap-3 flex flex-row">
        <div className="w-[33%]">
          <label className=" text-sm font-medium text-gray-700">
            Payment First pay
          </label>
          <Input
            type="text"
            id="firstpay"
            name="firstpay"
            value={editData.firstpay}
            onChange={(e) => setfirstpay(e.target.value)}
          />
        </div>

        <div className="w-[33%]">
          <label className=" text-sm font-medium text-gray-700">
            Payment Under pay
          </label>
          <Input
            type="text"
            id="underpay"
            name="underpay"
            value={editData.underpay}
            onChange={(e) => setunderpay(e.target.value)}
          />
        </div>

        <div className="w-[33%]">
          <label className=" text-sm font-medium text-gray-700">
            Payment Handover pay
          </label>
          <Input
            type="text"
            id="handoverpay"
            name="handoverpay"
            value={editData.handoverpay}
            onChange={(e) => sethandoverpay(e.target.value)}
          />
        </div>
      </div>

      <div className="gap-2 flex flex-row">
        <div className="w-[33%]">
          <label className=" text-sm font-medium text-gray-700">
            Developer
          </label>
          <Input
            type="text"
            id="developer"
            name="developer"
            value={editData.developer}
            onChange={(e) => setdeveloper(e.target.value)}
          />
        </div>

        <div className="w-[33%]">
          <label className=" text-sm font-medium text-gray-700">
            Handover In
          </label>
          <Input
            type="text"
            id="handoverin"
            name="handoverin"
            value={editData.handoverin}
            onChange={(e) => sethandoverin(e.target.value)}
          />
        </div>
      </div>
      {/* Brochure Upload */}
      {/* <div>
        <label className="text-sm font-medium text-gray-700">
          Brochure Upload
        </label>
        {editData.image && !brochureFile && (
          <img
            src={editData.image}
            alt="Current Brochure"
            className="w-32 h-32 object-cover rounded-md mb-2"
          />
        )}
        <FileInput
          id="image"
          accept="application/pdf"
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            setBrochureFile(file || null);
          }}
        />
      </div> */}
      {/* Short Description */}
      {/* <div>
        <label className="text-sm font-medium text-gray-700">
          Short Description
        </label>
        <Input
          type="text"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        />
      </div> */}

      {/* Description */}
      <div>
        <label className="text-sm font-medium text-gray-700">Description</label>
        <TiptapEditor content={description} setContent={setDescription} />
      </div>

      {/* Floor Plan Categories */}
      <FloorPlanCategoriesInput
        value={floorPlanCategories}
        onChange={setFloorPlanCategories}
      />

      {/* Existing Multiple Images */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Existing Offplan Images
        </label>
        <div className="flex flex-wrap gap-3">
          {existingMultipleImages.map((img, idx) => (
            <div key={idx} className="relative w-24 h-24">
              <img
                src={img}
                alt={`offplan-${idx}`}
                className="w-full h-full object-cover rounded"
              />
              <button
                type="button"
                onClick={() => handleRemoveExistingImage(idx)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Multiple Images */}
      <div>
        <label className="text-sm font-medium text-gray-700 mt-4 block">
          Add New Offplan Images
        </label>
        <FileInput
          id="multipleImages"
          accept="image/*"
          multiple
          onChange={(e) => setNewMultipleImages(Array.from(e.target.files))}
        />
      </div>

      {/* Status */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="status"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
        />
        <label htmlFor="status" className="text-sm font-medium text-gray-700">
          Status (Active)
        </label>
      </div>

      {/* Submit Buttons */}
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          disabled={isUpdating}
          type="submit"
          className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Update Offplan
        </button>
      </div>
    </form>
  );
};

export default EditOffplanForm;
