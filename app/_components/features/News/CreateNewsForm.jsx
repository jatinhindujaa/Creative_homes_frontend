"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateNews } from "../../admin/news/useNews";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Spinner from "../../ui/Spinner";
import TagInput from "../../ui/TagInput";
import TiptapEditor from "../../admin/news/Tiptapeditor";
// import TipTapEditor from "../../ui/tiptapEditor";

const CreateNewsForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const [tags, setTags] = useState([]);
  const { errors } = formState;
  const { createNewNews, isCreating } = useCreateNews();
  const [content, setContent] = useState("");

  if (isCreating) return <Spinner />;

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("description", content);
    formData.append("status", true);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    createNewNews(formData, {
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
            id="title"
            {...register("title", { required: "This field is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">Date</label>
          <Input
            disabled={isCreating}
            type="text"
            id="date"
            {...register("date", { required: "This field is required" })}
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.phoneNo.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">About</label>
          <TiptapEditor content={content} setContent={setContent} />
          {errors.about && (
            <p className="text-red-500 text-sm">{errors.about.message}</p>
          )}
        </div>

        <div className="space-x-12">
          <label className=" text-sm font-medium text-gray-700">Image</label>
          <FileInput
            id="image"
            accept="image/*"
            type="file"
            multiple
            {...register("image")}
          />
        </div>
        <div className="text-red-600 text-[0.8rem] mb-[20px]">
          <p>Propery images for Mobile will be: 700 * 700</p>
          <p>Propery images for Desktop will be: 1500 * 1000</p>
          <p>File size should be less than 5MB.</p>
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
            Create News
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateNewsForm;
