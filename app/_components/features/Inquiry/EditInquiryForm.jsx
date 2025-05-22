import React, { useEffect, useState } from "react";
import Input from "../../ui/Input";
import TagInput from "../../ui/TagInput";
import ImagePreviewContainer from "../../ui/ImagePreviewContainer";
import Spinner from "../../ui/Spinner";
import { useUpdateInquiryImage } from "../../admin/inquiries/useInquiry";

const EditInquiryForm = ({
  id,
  resourceName,
  editData,
  setEditData,
  aboutContent,
  setAboutContent,
  onConfirm,
  onCloseModal,
}) => {
  const { mutate: updateInquiryImage, isPending: isImageUpdating } =
    useUpdateInquiryImage();
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

    updateInquiryImage({
      id,
      formData: formDataImage,
    });
    if (file) {
      setEditData({ ...editData, image: file });
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
            Update Inquiry
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditInquiryForm;
