import Heading from "../../ui/Heading";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import {
  useDeleteMultiImageFromProperty,
  useUpdateMultiImagesFromProperty,
} from "../../admin/properties/useProperties";
import FileInput from "../../ui/FileInput";

const ImagesFormProperty = ({
  id,
  onConfirm,
  disabled,
  editData,
  setEditData,
  onCloseModal,
}) => {
  const { mutate: removeMultiImageFromProperty } =
    useDeleteMultiImageFromProperty();
  const { mutate: updateMultiImagesFromProperty, isPending: isAddingImages } =
    useUpdateMultiImagesFromProperty();

  if (isAddingImages) return <Spinner />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Convert existing image URLs to File objects
    const allImages = await Promise.all(
      editData.multipleImages.map(async (image) => {
        if (typeof image === "string") {
          const response = await fetch(image);
          const blob = await response.blob();
          return new File([blob], `existing-image-${Date.now()}.jpg`, {
            type: blob.type,
          });
        }
        return image;
      })
    );

    allImages.forEach((image) => {
      formData.append("multipleImages", image);
    });

    updateMultiImagesFromProperty(
      { id, multipleImages: formData },
      {
        onSuccess: () => {
          onCloseModal?.();
          onConfirm?.();
        },
        onError: (error) => {
          console.error("Failed to update images:", error);
        },
      }
    );
  };

  const handleDeleteImage = (index) => {
    removeMultiImageFromProperty({ id, formData: { index } });

    const updatedImages = editData.multipleImages.filter((_, i) => i !== index);
    setEditData({ ...editData, multipleImages: updatedImages });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <Heading as="h3">Update Images</Heading>

      {/* Image Preview */}
      <div className="flex flex-wrap gap-3 py-5">
        {editData?.multipleImages?.map((image, index) => (
          <div key={index} className="relative w-[150px] h-[150px]">
            <img
              src={
                typeof image === "string"
                  ? image.startsWith("http")
                    ? image
                    : `${process.env.NEXT_PUBLIC_BASE_URL}${image}`
                  : URL.createObjectURL(image)
              }
              alt={`Preview ${index}`}
              className="w-full h-full object-cover rounded-md"
            />

            <button
              type="button"
              onClick={() => handleDeleteImage(index)}
              className="absolute top-0 right-0 bg-white bg-opacity-70 text-red-500 rounded-3xl p-1 hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* File Input */}
      <div className="pb-2">
        <label className="block font-medium text-gray-700">
          Add New Images
        </label>
        <FileInput
          id="images"
          accept="image/*"
          multiple
          onChange={(e) => {
            const files = Array.from(e.target.files);
            setEditData({
              ...editData,
              multipleImages: [...editData.multipleImages, ...files],
            });
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => onCloseModal?.()}
          disabled={disabled}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={disabled || isAddingImages}
          className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 disabled:opacity-50"
        >
          {isAddingImages ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default ImagesFormProperty;
