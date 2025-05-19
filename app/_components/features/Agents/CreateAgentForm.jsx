"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateAgent } from "../../admin/agents/useAgents";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Spinner from "../../ui/Spinner";
import TagInput from "../../ui/TagInput";
// import TipTapEditor from "../../ui/tiptapEditor";

const CreateAgentForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const [tags, setTags] = useState([]);
  const { errors } = formState;
  const { createAgents, isCreating } = useCreateAgent();
  // const [content, setContent] = useState("");

  if (isCreating) return <Spinner />;

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    // formData.append("nationality", data.nationality);

    // tags.forEach((tag) => {
    //   formData.append("languages[]", tag);
    // });
    formData.append("phoneNo", data.phoneNo);
    formData.append("whatsapp", data.whatsapp);
    formData.append("designation", data.designation);
    // formData.append("experience", data.experience);
    // formData.append("brokerLicense", data.brokerLicense);
    // formData.append("reraNumber", data.reraNumber);
    formData.append("about", data.about);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    createAgents(formData, {
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

        {/* <div>
          <label className=" text-sm font-medium text-gray-700">
            Nationality
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="nationality"
            {...register("nationality", { required: "This field is required" })}
          />
          {errors.nationality && (
            <p className="text-red-500 text-sm">{errors.nationality.message}</p>
          )}
        </div> */}

        {/* <div>
          <label className=" text-sm font-medium text-gray-700">
            Languages
          </label>
          <TagInput tags={tags} setTags={setTags} />
          {errors.languages && (
            <p className="text-red-500 text-sm">{errors.languages.message}</p>
          )}
        </div> */}

        <div>
          <label className=" text-sm font-medium text-gray-700">
            Phone No.
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="phoneNo"
            {...register("phoneNo", { required: "This field is required" })}
          />
          {errors.phoneNo && (
            <p className="text-red-500 text-sm">{errors.phoneNo.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">
            Whatsapp No.
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="whatsapp"
            {...register("whatsapp", { required: "This field is required" })}
          />
          {errors.whatsapp && (
            <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">
            Designation
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="designation"
            {...register("designation", { required: "This field is required" })}
          />
          {errors.designation && (
            <p className="text-red-500 text-sm">{errors.designation.message}</p>
          )}
        </div>

        {/* <div>
          <label className=" text-sm font-medium text-gray-700">
            Experience
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="experience"
            {...register("experience", { required: "This field is required" })}
          />
          {errors.experience && (
            <p className="text-red-500 text-sm">{errors.experience.message}</p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">
            Broker License
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="brokerLicense"
            {...register("brokerLicense", {
              required: "This field is required",
            })}
          />
          {errors.brokerLicense && (
            <p className="text-red-500 text-sm">
              {errors.brokerLicense.message}
            </p>
          )}
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">
            Rera Number
          </label>
          <Input
            disabled={isCreating}
            type="text"
            id="reraNumber"
            {...register("reraNumber", { required: "This field is required" })}
          />
          {errors.reraNumber && (
            <p className="text-red-500 text-sm">{errors.reraNumber.message}</p>
          )}
        </div>

       */}
        <div>
          <label className=" text-sm font-medium text-gray-700">About</label>
          <Input
            disabled={isCreating}
            type="text"
            id="about"
            {...register("about", {
              required: "This field is required",
            })}
          />
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
            {...register("image", {
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
            Create Agent
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateAgentForm;
