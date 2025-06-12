import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Spinner from "../../ui/Spinner";
import TagInput from "../../ui/TagInput";
import { useAgents } from "../../admin/agents/useAgents";
import TiptapEditor from "../../admin/news/Tiptapeditor";
// import TipTapEditor from "../../ui/tiptapEditor";
import Select from "react-select";
import { useCreateAreas } from "../../admin/area/useArea";
const CreateArea = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState, control } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const { createNewAreas, isCreating } = useCreateAreas();

  if (isCreating) return <Spinner />;

  const onSubmit = (data) => {
    const multipleFiles = data.multipleImages
      ? Array.from(data.multipleImages)
      : [];
    const mobileMultipleFiles = data.mobilemultipleImages
      ? Array.from(data.mobilemultipleImages)
      : [];
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("order", data.order);
       multipleFiles.forEach((file) => {
         formData.append("multipleImages", file);
       });
       mobileMultipleFiles.forEach((file) => {
         formData.append("mobilemultipleImages", file);
       });

    createNewAreas(formData, {
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
        <div className="gap-2 flex flex-row">
          <div className="w-[50%]">
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
        </div>
        <div className="gap-2 flex flex-row">
          <div className="w-[50%]">
            <label className=" text-sm font-medium text-gray-700">order</label>
            <Input
              type="number"
              id="order"
              {...register("order", { required: "This field is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div className="space-x-12">
          <label className=" text-sm font-medium text-gray-700">
            Area Image
          </label>
          <FileInput
            id="image"
            accept="image/*" // fix accept type to 'image/*'
            type="file"
            {...register("multipleImages")} // Remove required here
          />
        </div>

        <div className="text-red-600 text-[0.8rem] mb-[20px]">
          <p>Propery images for Desktop will be: 1000 * 1000</p>
          <p>File size should be less than 5mb.</p>
        </div>
        <div className="space-x-12">
          <label className=" text-sm font-medium text-gray-700">
            Area Mobile Image
          </label>
          <FileInput
            id="mobilemultipleImages"
            accept="image/*" // fix accept type to 'image/*'
            type="file"
            {...register("mobilemultipleImages")} // Remove required here
          />
        </div>
        <div className="text-red-600 text-[0.8rem] mb-[20px]">
          <p>Propery images for Desktop will be: 1000 * 1000</p>
          <p>File size should be less than 5mb.</p>
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

export default CreateArea;
