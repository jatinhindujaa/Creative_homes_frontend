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
 const propertytypeOptions = [
   { value: "apartment", label: "Apartment" },
   { value: "penthouse", label: "Penthouse" },
   { value: "compound", label: "Compound" },
   { value: "villa", label: "Villa" },
   { value: "duplex", label: "Duplex" },
   { value: "townhouse", label: "Townhouse" },
   { value: "fullfloor", label: "Full Floor" },
   { value: "halffloor", label: "Half Floor" },
   { value: "wholebuilding", label: "Whole Building" },
   { value: "bulkrentunit", label: "Bulk Rent Unit" },
   { value: "bungalow", label: "Bungalow" },
   { value: "hotelandhotelapartment", label: "Hotel & Hotel Apratment" },
 ];

 const furnishingtypeOptions = [
   { value: "fully furnished", label: "Fully Furnished" },
   { value: "semi furnished", label: "Semi Furnished" },
   { value: "furnished", label: "Furnished" },
   { value: "unfurnished", label: "Unfurnished" },
 ];

 const offeringtypeOptions = [
   { value: "buy", label: "Buy" },
   { value: "sale", label: "Sale" },
   { value: "rent", label: "Rent" },
   { value: "offplan", label: "Offplan" },
 ];

 const propertycategoryOptions = [
   { value: "commercial", label: "Commercial" },
   { value: "residential", label: "Residential" },
 ];
  const [tags, setTags] = useState(editData.features || []);
  const [description, setDescription] = useState(editData.description || "");
  const [amenities, setAmenities] = useState(editData.amenities || []);
  const [selectedAgent, setSelectedAgent] = useState(editData.agent || "");
  const [newQrImage, setNewQrImage] = useState(null);
  const [propertyImages, setPropertyImages] = useState(
    editData.multipleImages || []
  );
    const [mobilemultipleImages, setmobilemultipleImages] = useState(
      editData.mobilemultipleImages || []
    );
 const [propertytype, setPropertyType] = useState(editData.propertytype || []);
 const [furnishingtype, setFurnishingType] = useState(
   editData.furnishingtype || []
 );
 const [offeringtype, setOfferingType] = useState(editData.offeringtype || []);
 const [propertycategory, setPropertyCategory] = useState(
   editData.propertycategory || []
 );



  const [newImages, setNewImages] = useState([]);
  const [mobilenewImages, setmobileNewImages] = useState([]);


  const { data: agents = [], isLoading: loadingAgents } = useAgents();
  useEffect(() => {
    setPropertyType(
      Array.isArray(editData.propertytype)
        ? editData.propertytype
        : editData.propertytype
        ? [editData.propertytype]
        : []
    );
    setFurnishingType(
      Array.isArray(editData.furnishingtype)
        ? editData.furnishingtype
        : editData.furnishingtype
        ? [editData.furnishingtype]
        : []
    );
    setOfferingType(
      Array.isArray(editData.offeringtype)
        ? editData.offeringtype
        : editData.offeringtype
        ? [editData.offeringtype]
        : []
    );
    setPropertyCategory(
      Array.isArray(editData.propertycategory)
        ? editData.propertycategory
        : editData.propertycategory
        ? [editData.propertycategory]
        : []
    );
  }, [
    editData.propertytype,
    editData.furnishingtype,
    editData.offeringtype,
    editData.propertycategory,
  ]);


  
  useEffect(() => {
    setEditData((prev) => ({
      ...prev,
      features: tags,
      amenities,
      description,
      agent: selectedAgent,
      multipleImages: propertyImages,
      mobilemultipleImages: mobilemultipleImages,
      propertytype,
      furnishingtype,
      offeringtype,
      propertycategory,
    }));
  }, [
    tags,
    amenities,
    description,
    selectedAgent,
    propertyImages,
    mobilemultipleImages,
    propertytype,
    furnishingtype,
    offeringtype,
    propertycategory,
    setEditData,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(editData);
  };

  const handleMobileImageChange = (e) => {
    const files = Array.from(e.target.files); // Convert the file list to an array
    console.log("Selected mobile images:", files); // Check if files are selected correctly


    // Also update editData so that it reflects the changes in the parent component
    setEditData((prev) => ({
      ...prev,
      mobileMultipleImages: files, // Update editData with the selected mobile images
    }));
  };


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
              Deal Type
            </label>
            <Input
              type="text"
              name="dealType"
              value={editData.dealType}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Features</label>
          <TagInput tags={tags} setTags={setTags} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            Property Type
          </label>
          <Select
            options={propertytypeOptions}
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(selected) =>
              setPropertyType(selected.map((s) => s.value))
            }
            value={propertytypeOptions.filter((option) =>
              propertytype.includes(option.value)
            )}
            placeholder="Select property type(s)"
          />
        </div>

        {/* Furnishing Type */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Furnishing Type
          </label>
          <Select
            options={furnishingtypeOptions}
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(selected) =>
              setFurnishingType(selected.map((s) => s.value))
            }
            value={furnishingtypeOptions.filter((option) =>
              furnishingtype.includes(option.value)
            )}
            placeholder="Select furnishing type(s)"
          />
        </div>

        {/* Offering Type */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Offering Type
          </label>
          <Select
            options={offeringtypeOptions}
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(selected) =>
              setOfferingType(selected.map((s) => s.value))
            }
            value={offeringtypeOptions.filter((option) =>
              offeringtype.includes(option.value)
            )}
            placeholder="Select offering type(s)"
          />
        </div>

        {/* Property Category */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Property Category
          </label>
          <Select
            options={propertycategoryOptions}
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(selected) =>
              setPropertyCategory(selected.map((s) => s.value))
            }
            value={propertycategoryOptions.filter((option) =>
              propertycategory.includes(option.value)
            )}
            placeholder="Select property category(s)"
          />
        </div>
        <div className="gap-2 flex flex-row">
          <div className="w-[33%]">
            <label className="text-sm font-medium text-gray-700">Price</label>
            <Input
              type="text"
              name="price"
              value={editData.price}
              onChange={handleChange}
            />
          </div>

          <div className="w-[33%]">
            <label className="text-sm font-medium text-gray-700">Plot</label>
            <Input
              type="text"
              name="plot"
              value={editData.plot}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="gap-2 flex flex-row">
          <div className="w-[33%]">
            <label className="text-sm font-medium text-gray-700">Bed</label>
            <Input
              type="text"
              name="bed"
              value={editData.bed}
              onChange={handleChange}
            />
          </div>

          <div className="w-[33%]">
            <label className="text-sm font-medium text-gray-700">Shower</label>
            <Input
              type="text"
              name="shower"
              value={editData.shower}
              onChange={handleChange}
            />
          </div>

          <div className="w-[33%]">
            <label className="text-sm font-medium text-gray-700">Bua</label>
            <Input
              type="text"
              name="bua"
              value={editData.bua}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="gap-2 flex flex-row">
          <div className="w-[33%]">
            <label className="text-sm font-medium text-gray-700">
              Reference
            </label>
            <Input
              type="text"
              name="reference"
              value={editData.reference}
              onChange={handleChange}
            />
          </div>

          <div className="w-[33%]">
            <label className="text-sm font-medium text-gray-700">Zone</label>
            <Input
              type="text"
              name="zone"
              value={editData.zone}
              onChange={handleChange}
            />
          </div>

          <div className="w-[33%]">
            <label className="text-sm font-medium text-gray-700">Dld</label>
            <Input
              type="text"
              name="bua"
              value={editData.bua}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="gap-3 flex flex-row">
          <div className="w-[50%]">
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

          <div className="w-[50%]">
            <label className="text-sm font-medium text-gray-700">
              QR Image
            </label>
            {editData.image && !newQrImage && (
              <img
                src={editData.image}
                alt="Current QR"
                className="w-32 h-32 object-cover rounded-md mb-2"
              />
            )}
            <FileInput
              id="image"
              accept="image/*"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setNewQrImage(file);
                  setEditData((prev) => ({ ...prev, newQrImage: file }));
                }
              }}
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Amenities</label>
          <TagInput tags={amenities} setTags={setAmenities} />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Short Description
          </label>
          <Input
            type="text"
            name="shortDescription"
            value={editData.shortDescription}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <TiptapEditor content={description} setContent={setDescription} />
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
                  src={img}
                  alt={`property-${idx}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() =>
                    setmobilemultipleImages(
                      mobilemultipleImages.filter((_, i) => i !== idx)
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
            id="mobileMultipleImages"
            accept="image/*"
            type="file"
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
