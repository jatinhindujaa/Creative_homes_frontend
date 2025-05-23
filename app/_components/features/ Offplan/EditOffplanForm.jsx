import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";
import { useAgents } from "../../admin/agents/useAgents";
import TiptapEditor from "../../admin/news/Tiptapeditor";
import FileInput from "../../ui/FileInput";

const EditOffplanForm = ({
  resourceName,
  editData,
  setEditData,
  onConfirm,
  onCloseModal,
}) => {
  const [tags, setTags] = useState(editData.features || []);
  const [description, setDescription] = useState(editData.description || "");
  const [amenities, setAmenities] = useState(editData.amenities || []);
  const [selectedAgent, setSelectedAgent] = useState(editData.agent || "");
  const [newQrImage, setNewQrImage] = useState(null);
  const [offplanImages, setOffplanImages] = useState(
    editData.multipleImages || []
  );
  const [newImages, setNewImages] = useState([]);

  const { data: agents = [], isLoading: loadingAgents } = useAgents();
  useEffect(() => {
    setEditData((prev) => ({
      ...prev,
      features: tags,
      amenities,
      description,
      agent: selectedAgent,
      multipleImages: offplanImages,
    }));
  }, [
    tags,
    amenities,
    description,
    selectedAgent,
    offplanImages,
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
            <label className="text-sm font-medium text-gray-700">Type</label>
            <Input
              type="text"
              name="type"
              value={editData.type}
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
            <label className="text-sm font-medium text-gray-700">Bua</label>
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
            Existing Offplan Images
          </label>
          <div className="flex flex-wrap gap-3">
            {offplanImages.map((img, idx) => (
              <div key={idx} className="relative w-24 h-24">
                <img
                  src={img}
                  alt={`offplan-${idx}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() =>
                    setOffplanImages(
                      offplanImages.filter((_, i) => i !== idx)
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
            Add New Offplan Images
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
            Update Offplan
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditOffplanForm;
