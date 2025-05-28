import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateProperty } from "../../admin/properties/useProperties";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Spinner from "../../ui/Spinner";
import TagInput from "../../ui/TagInput";
import { useAgents } from "../../admin/agents/useAgents";
import TiptapEditor from "../../admin/news/Tiptapeditor";
// import TipTapEditor from "../../ui/tiptapEditor";

const CreatePropertyForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const [tags, setTags] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const { errors } = formState;
  const { createProperties, isCreating } = useCreateProperty();
  // const [content, setContent] = useState("");
const { data: agents = [], isLoading: loadingAgents } = useAgents();
const [selectedAgent, setSelectedAgent] = useState("");
 const [content, setContent] = useState("");

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
    amenities.forEach((amenity) => {
      formData.append("amenities[]", amenity);
    });

    formData.append("price", data.price);
    formData.append("type", data.type);
    formData.append("reference", data.reference);
    formData.append("dld", data.dld);
    formData.append("zone", data.zone);
    formData.append("bed", data.bed);
    formData.append("shower", data.shower);
    formData.append("bua", data.bua);
    formData.append("plot", data.plot);
    formData.append("agent", selectedAgent);
    formData.append("shortDescription", data.shortDescription);
    formData.append("description", content);
    formData.append("dealType", data.dealType);

    multipleFiles.forEach((file) => {
      formData.append("multipleImages", file);
    });
     if (data.image[0]) {
       formData.append("image", data.image[0]);
     }

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

          <div className="w-[50%]">
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
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">features</label>
          <TagInput tags={tags} setTags={setTags} />
          {errors.features && (
            <p className="text-red-500 text-sm">{errors.features.message}</p>
          )}
        </div>
        <div className="gap-2 flex flex-row">
          <div className="w-[33%]">
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

          <div className="w-[33%]">
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
          <div className="w-[33%]">
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
        </div>
        <div className="gap-2 flex flex-row">
          <div className="w-[33%]">
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

          <div className="w-[33%]">
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

          <div className="w-[33%]">
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
        </div>
        <div className="gap-2 flex flex-row">
          <div className="w-[33%]">
            <label className=" text-sm font-medium text-gray-700">
              Reference
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="reference"
              {...register("reference", { required: "This field is required" })}
            />
            {errors.reference && (
              <p className="text-red-500 text-sm">{errors.reference.message}</p>
            )}
          </div>

          <div className="w-[33%]">
            <label className=" text-sm font-medium text-gray-700">Zone</label>
            <Input
              disabled={isCreating}
              type="text"
              id="zone"
              {...register("zone", { required: "This field is required" })}
            />
            {errors.zone && (
              <p className="text-red-500 text-sm">{errors.zone.message}</p>
            )}
          </div>

          <div className="w-[33%]">
            <label className=" text-sm font-medium text-gray-700">DLD</label>
            <Input
              disabled={isCreating}
              type="text"
              id="dld"
              {...register("dld", { required: "This field is required" })}
            />
            {errors.dld && (
              <p className="text-red-500 text-sm">{errors.dld.message}</p>
            )}
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
              required
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
            <label className=" text-sm font-medium text-gray-700">
              Qr Image
            </label>
            <FileInput
              id="image"
              accept="image/*"
              type="file"
              multiple
              {...register("image", {
                required: "This field is required",
              })}
            />
            <div className="text-red-600 text-[0.8rem] mb-[20px]">
              <p>Propery images for Mobile will be: 700 * 700</p>
              <p>Propery images for Desktop will be: 1000 * 1000</p>
              <p>File size should be less than 5mb.</p>
            </div>
          </div>
        </div>

        <div>
          <label className=" text-sm font-medium text-gray-700">
            Amenities
          </label>
          <TagInput tags={amenities} setTags={setAmenities} />
          {errors.features && (
            <p className="text-red-500 text-sm">{errors.features.message}</p>
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
          <TiptapEditor content={content} setContent={setContent} />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="space-x-12">
          <label className=" text-sm font-medium text-gray-700">
            Property Images
          </label>
          <FileInput
            id="multipleImages"
            accept="multipleImages/*"
            type="file"
            multiple
            {...register("multipleImages", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="text-red-600 text-[0.8rem]">
          <p>Qr size for Mobile & desktop will be: 300 * 300</p>
          <p>File size should be less than 10MB.</p>
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
