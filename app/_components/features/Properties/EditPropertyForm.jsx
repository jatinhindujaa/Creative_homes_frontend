import React, { useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";

const EditPropertyForm = ({
  id,
  resourceName,
  editData,
  setEditData,
  onConfirm,
  onCloseModal,
}) => {
  const [tags, setTags] = useState(editData.features || []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...editData,
      features: tags,
    };
    onConfirm(updatedData);
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
          <label className="text-sm font-medium text-gray-700">Deal Type</label>
          <Input
            type="text"
            name="dealType"
            value={editData.dealType}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Features</label>
          <TagInput tags={tags} setTags={setTags} />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Price</label>
          <Input
            type="text"
            name="price"
            value={editData.price}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Type</label>
          <Input
            type="text"
            name="type"
            value={editData.type}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Bed</label>
          <Input
            type="text"
            name="bed"
            value={editData.bed}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Shower</label>
          <Input
            type="text"
            name="shower"
            value={editData.shower}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Bua</label>
          <Input
            type="text"
            name="bua"
            value={editData.bua}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Plot</label>
          <Input
            type="text"
            name="plot"
            value={editData.plot}
            onChange={handleChange}
          />
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
          <Input
            type="text"
            name="description"
            value={editData.description}
            onChange={handleChange}
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
