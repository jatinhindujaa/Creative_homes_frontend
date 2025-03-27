import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateProperty } from "../../admin/properties/useProperties";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Spinner from "../../ui/Spinner";
import TagInput from "../../ui/TagInput";
// import TipTapEditor from "../../ui/tiptapEditor";

const CreatePropertyForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const [tags, setTags] = useState([]);
  const { errors } = formState;
  const { createProperties, isCreating } = useCreateProperty();
  // const [content, setContent] = useState("");

  if (isCreating) return <Spinner />;

  const onSubmit = (data) => {
    const multipleFiles = data.multipleImages
      ? Array.from(data.multipleImages)
      : [];
    const formData = new FormData();

    formData.append("name", data.name);

    tags.forEach((tag) => {
      formData.append("features[]", tag);
    });
    formData.append("price", data.price);
    formData.append("type", data.type);
    formData.append("bed", data.bed);
    formData.append("shower", data.shower);
    formData.append("bua", data.bua);
    formData.append("plot", data.plot);
    formData.append("shortDescription", data.shortDescription);
    formData.append("description", data.description);
    formData.append("dealType", data.dealType);

    multipleFiles.forEach((file) => {
      formData.append("multipleImages", file);
    });

    createProperties(formData, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto space-y-4 "
    >
      <h3 className="text-lg font-semibold text-blue-950">
        Add {resourceName}
      </h3>

      <div className="space-y-4">
        <div>
          <label className=" text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            id="name"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">
            Deal type
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="dealType"
            {...register("dealType", { required: "This field is required" })}
          />
          {errors.dealType && (
            <p className="text-red-500 text-sm">{errors.dealType.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">features</label>
          <TagInput tags={tags} setTags={setTags} />
          {errors.features && (
            <p className="text-red-500 text-sm">{errors.features.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">Price</label>
          <Input
            disabled={isCreating}
            type="text"
            id="price"
            {...register("price", { required: "This field is required" })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">Type</label>
          <Input
            disabled={isCreating}
            type="text"
            id="type"
            {...register("type", { required: "This field is required" })}
          />
          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">Bed</label>
          <Input
            disabled={isCreating}
            type="text"
            id="bed"
            {...register("bed", { required: "This field is required" })}
          />
          {errors.bed && (
            <p className="text-red-500 text-sm">{errors.bed.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">Shower</label>
          <Input
            disabled={isCreating}
            type="text"
            id="shower"
            {...register("shower", { required: "This field is required" })}
          />
          {errors.shower && (
            <p className="text-red-500 text-sm">{errors.shower.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">Bua</label>
          <Input
            disabled={isCreating}
            type="text"
            id="bua"
            {...register("bua", { required: "This field is required" })}
          />
          {errors.bua && (
            <p className="text-red-500 text-sm">{errors.bua.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">Plot</label>
          <Input
            disabled={isCreating}
            type="text"
            id="plot"
            {...register("plot", { required: "This field is required" })}
          />
          {errors.plot && (
            <p className="text-red-500 text-sm">{errors.plot.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">
            Short Description
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="shortDescription"
            {...register("shortDescription", {
              required: "This field is required",
            })}
          />
          {errors.shortDescription && (
            <p className="text-red-500 text-sm">
              {errors.shortDescription.message}
            </p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">
            Description
          </label>
          {/* <TipTapEditor content={content} setContent={setContent} /> */}
          <Input
            disabled={isCreating}
            type="text"
            id="description"
            {...register("description", {
              required: "This field is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="space-x-12">
          <label className=" text-sm font-medium text-gray-700">
            Multiple Images
          </label>
          <FileInput
            id="multipleImages"
            accept="image/*"
            type="file"
            multiple
            {...register("multipleImages", {
              required: "This field is required",
            })}
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </button>
          <button
            disabled={isCreating}
            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Property
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePropertyForm;
