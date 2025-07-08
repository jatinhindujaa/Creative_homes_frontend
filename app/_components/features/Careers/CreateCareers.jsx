"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateCareers } from "../../admin/careers/useCareers";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Spinner from "../../ui/Spinner";
import TagInput from "../../ui/TagInput";
import TiptapEditor from "../../admin/news/Tiptapeditor";
// import TipTapEditor from "../../ui/tiptapEditor";

const CreateCareers = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const [tags, setTags] = useState([]);
  const { errors } = formState;
  const { createNewCareers, isCreating } = useCreateCareers();
  const [content, setContent] = useState("");

  if (isCreating) return <Spinner />;

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("position", data.position);
    formData.append("location", data.location);
    formData.append("type", data.type);
    formData.append("jd", content);
    formData.append("status", true);
    createNewCareers(formData, {
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
          <label className=" text-sm font-medium text-gray-700">Title</label>
          <Input
            type="text"
            id="position"
            {...register("position", { required: "This field is required" })}
          />
          {errors.position && (
            <p className="text-red-500 text-sm">{errors.position.message}</p>
          )}
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-[50%]">
            <label className=" text-sm font-medium text-gray-700">
              Location
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="location"
              {...register("location", { required: "This field is required" })}
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>

          <div className="w-[50%]">
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
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">About</label>
          <TiptapEditor content={content} setContent={setContent} />
          {errors.about && (
            <p className="text-red-500 text-sm">{errors.about.message}</p>
          )}
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
            Create Careers
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateCareers;
