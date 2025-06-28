
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";
import Spinner from "../../ui/Spinner";
import TagInput from "../../ui/TagInput";
import { useAgents } from "../../admin/agents/useAgents";
import TiptapEditor from "../../admin/news/Tiptapeditor";
import { useCreateOffplan } from "../../admin/offplan/useOffplan";
import { FloorPlanCategoriesInput } from "./FloorPlanCategoriesInput";


const CreateOffplanForm = ({ onCloseModal, resourceName }) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });
  const [tags, setTags] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const { errors } = formState;
  const { createOffplanp, isCreating } = useCreateOffplan();
  const { data: agents = [], isLoading: loadingAgents } = useAgents();
  const [selectedAgent, setSelectedAgent] = useState("");
  const [content, setContent] = useState("");
  const [floorPlanCategories, setFloorPlanCategories] = useState([]);

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

    tags.forEach((views) => {
      formData.append("views[]", views);
    });
    amenities.forEach((amenity) => {
      formData.append("amenities[]", amenity);
    });

    formData.append("price", data.price);
    formData.append("agent", selectedAgent);
    formData.append("firstpay", data.firstpay);
    formData.append("underpay", data.underpay);
    formData.append("handoverpay", data.handoverpay);
    formData.append("developer", data.developer);
    formData.append("handoverin", data.handoverin);
    formData.append("maplink", data.maplink);
    formData.append("address", data.address);

    formData.append("order", data.order);


   formData.append("description", content);
    formData.append("status", data.status ? "true" : "false");
    // formData.append("views", JSON.stringify(data.views || [])); // Assuming you add views input below

    // Append floorPlanCategories as JSON string
    formData.append("floorPlanCategories", JSON.stringify(floorPlanCategories));

    multipleFiles.forEach((file) => {
      formData.append("multipleImages", file);
    });
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    createOffplanp(formData, {
      onSuccess: () => {
        reset();
        setFloorPlanCategories([]);
        setTags([]);
        setAmenities([]);
        setSelectedAgent("");
        setContent("");
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
        {/* Title and Location */}
        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="text-sm font-medium text-gray-700">Title</label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: "This field is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="text-sm font-medium text-gray-700">
              Location
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="address"
              {...register("address", { required: "This field is required" })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label className="text-sm font-medium text-gray-700">Amenities</label>
          <TagInput tags={amenities} setTags={setAmenities} />
          {errors.features && (
            <p className="text-red-500 text-sm">{errors.features.message}</p>
          )}
        </div>

        {/* Price and Reference */}
        <div className="flex gap-2">
          <div className="w-1/3">
            <label className="text-sm font-medium text-gray-700">Price</label>
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
          <div className="w-1/3">
            <label className="text-sm font-medium text-gray-700">Order</label>
            <Input
              disabled={isCreating}
              type="text"
              id="order"
              {...register("order", { required: "This field is required" })}
            />
            {errors.order && (
              <p className="text-red-500 text-sm">{errors.order.message}</p>
            )}
          </div>
          <div className="w-1/3">
            <label className="text-sm font-medium text-gray-700">
              Google Map link
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="maplink"
              {...register("maplink", { required: "This field is required" })}
            />
            {errors.maplink && (
              <p className="text-red-500 text-sm">{errors.maplink.message}</p>
            )}
          </div>
        </div>

        {/* Views Input - simple tags for example */}
        <div>
          <label className="text-sm font-medium text-gray-700">Views</label>
          <TagInput tags={tags} setTags={setTags} />
          {errors.views && (
            <p className="text-red-500 text-sm">{errors.views.message}</p>
          )}
        </div>

        {/* Agent select and Brochure upload */}
        <div className="flex gap-3">
          <div className="w-1/2">
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

          <div className="w-1/2">
            <label className="text-sm font-medium text-gray-700">
              Qr Image
            </label>
            <FileInput
              id="image"
              accept="pdf/*"
              type="file"
              multiple
              {...register("image", { required: "This field is required" })}
            />
          </div>
        </div>

        <div className="gap-2 flex flex-row">
          <div className="w-[33%]">
            <label className=" text-sm font-medium text-gray-700">
              Payment First pay
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="firstpay"
              {...register("firstpay", { required: "This field is required" })}
            />
            {errors.firstpay && (
              <p className="text-red-500 text-sm">{errors.firstpay.message}</p>
            )}
          </div>

          <div className="w-[33%]">
            <label className=" text-sm font-medium text-gray-700">
              Payment Under pay
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="underpay"
              {...register("underpay", { required: "This field is required" })}
            />
            {errors.underpay && (
              <p className="text-red-500 text-sm">{errors.underpay.message}</p>
            )}
          </div>

          <div className="w-[33%]">
            <label className=" text-sm font-medium text-gray-700">
              Payment Handover pay
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="handoverpay"
              {...register("handoverpay", {
                required: "This field is required",
              })}
            />
            {errors.handoverpay && (
              <p className="text-red-500 text-sm">
                {errors.handoverpay.message}
              </p>
            )}
          </div>
        </div>
        <div className="gap-2 flex flex-row">
          <div className="w-[33%]">
            <label className=" text-sm font-medium text-gray-700">
              Developer
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="developer"
              {...register("developer", { required: "This field is required" })}
            />
            {errors.developer && (
              <p className="text-red-500 text-sm">{errors.developer.message}</p>
            )}
          </div>

          <div className="w-[33%]">
            <label className=" text-sm font-medium text-gray-700">
              Handover In
            </label>
            <Input
              disabled={isCreating}
              type="text"
              id="handoverin"
              {...register("handoverin", {
                required: "This field is required",
              })}
            />
            {errors.handoverin && (
              <p className="text-red-500 text-sm">
                {errors.handoverin.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <TiptapEditor content={content} setContent={setContent} />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Floor Plan Categories */}
        <FloorPlanCategoriesInput
          value={floorPlanCategories}
          onChange={setFloorPlanCategories}
        />

        {/* Multiple Images */}
        <div className="space-x-12">
          <label className="text-sm font-medium text-gray-700">
            Offplan Images
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
        <div className="text-red-600 text-[0.8rem] mb-[20px]">
          <p>Propery images for Desktop will be: 1000 * 1000</p>
          <p>File size should be less than 5mb.</p>
        </div>
        <div>
          <label className=" text-sm font-medium text-gray-700">
            Mobile Property Images
          </label>
          <FileInput
            id="mobilemultipleImages"
            accept="image/*"
            type="file"
            multiple
            {...register("mobilemultipleImages")}
          />
        </div>
        <div className="text-red-600 text-[0.8rem] mb-[20px]">
          <p>Propery images for Mobile will be: 700 * 700</p>
          <p>File size should be less than 5mb.</p>
        </div>
        {/* Submit buttons */}
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
            Create Offplan
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateOffplanForm;
