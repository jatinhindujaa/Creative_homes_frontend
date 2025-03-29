import { FaEdit } from "react-icons/fa";

const ImagePreviewContainer = ({ image, onImageChange }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-gray-700">Image:</label>
      <div className="relative w-full max-w-[200px] mt-2">
        {image && (
          <>
            <img
              src={
                typeof image === "string" ? image : URL.createObjectURL(image)
              }
              alt="Preview"
              className="w-full h-[110px] rounded-md object-cover"
            />
            <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 flex items-center justify-center shadow-md hover:bg-opacity-100 cursor-pointer">
              <label htmlFor="image-upload" className="cursor-pointer">
                <FaEdit size={16} />
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onImageChange}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImagePreviewContainer;
