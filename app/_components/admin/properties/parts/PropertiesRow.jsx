import { useState } from "react";
import Table from "@/app/_components/ui/Table";
import Tag from "@/app/_components/ui/Tag";
import Modal from "@/app/_components/ui/Modal";
import Menus from "@/app/_components/ui/Menus";
import { HiTrash, HiPencil } from "react-icons/hi2";
import { FaRegImages } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDeleteProperty, useUpdateProperty } from "../useProperties";
import Spinner from "@/app/_components/ui/Spinner";
import ConfirmDelete from "@/app/_components/ui/ConfirmDelete";
import EditPropertyForm from "@/app/_components/features/Properties/EditPropertyForm";
import Image from "next/image";
import toast from "react-hot-toast";
import ImagesFormProperty from "@/app/_components/features/Properties/ImagesFormProperty";

function PropertiesRow({
  property: {
    _id,
    name,
    features,
    price,
    type,
    bed,
    shower,
    bua,
    plot,
    shortDescription,
    description,
    dealType,
    multipleImages,
    status,
  },
}) {
  const { mutate: updateProperty, isPending: isUpdatingProperty } =
    useUpdateProperty();
  const { mutate: deleteProperty, isPending: isDeleting } = useDeleteProperty();
  const [show, setShow] = useState(false);

  //   const [descContent, setDescContent] = useState(description);

  // 1) Convert string to array if needed:
  let parsedFeatures = features;
  try {
    // If `features` is a string like '["2 Floors","Nice View"]', parse it
    if (typeof features === "string") {
      parsedFeatures = JSON.parse(features);
    }
  } catch (err) {
    parsedFeatures = [];
  }

  const [editData, setEditData] = useState({
    name,
    features: parsedFeatures,
    price,
    type,
    bed,
    shower,
    bua,
    plot,
    shortDescription,
    description,
    dealType,
    multipleImages,
  });

  const expandDescription = () => {
    setShow((prev) => !prev);
  };

  // for propery listing [Implement in Admin ]
  // const handleToggleStatus = () => {
  //   updateProperty({ id: _id, data: { status: !status } });
  // };

  const handleDelete = () => {
    deleteProperty(_id);
  };

  const handleConfirmEdit = () => {
    const formData = new FormData();

    formData.append("name", editData.name);
    editData.features.forEach((feature) => {
      formData.append("features[]", feature);
    });
    formData.append("price", editData.price);
    formData.append("type", editData.type);
    formData.append("bed", editData.bed);
    formData.append("shower", editData.shower);
    formData.append("bua", editData.bua);
    formData.append("plot", editData.plot);
    formData.append("shortDescription", editData.shortDescription);
    formData.append("description", editData.description);
    formData.append("dealType", editData.dealType);

    updateProperty({ id: _id, formData });
  };

  if (isUpdatingProperty) return <Spinner />;

  const convertedStatus = status ? "active" : "inactive";

  const statusColors = {
    active: "success",
    inactive: "danger",
    unconfirmed: "warning",
  };

  return (
    <Table.Row>
      <div className="flex flex-col gap-1 text-sm ">
        <span className="font-medium">{name}</span>
      </div>

      <div className="text-sm">{dealType}</div>

      <div className="text-sm">{price}</div>

      <div className="text-sm">{type}</div>

      <div className="text-sm">{shortDescription}</div>

      <div className="text-sm ">
        {show
          ? description
          : `${description.slice(0, 100)}${
              description.length > 100 ? "..." : ""
            }`}
        <span
          className="text-blue-500 cursor-pointer ml-2"
          onClick={expandDescription}
        >
          {show ? "Show less" : "Show more"}
        </span>
      </div>

      {/* <div className="text-sm">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="rounded-lg"
          />
        ) : (
          <span>No Image</span>
        )}
      </div> */}

      <div>
        <Tag type={statusColors[convertedStatus] || "info"}>
          {convertedStatus.replace("-", " ")}
        </Tag>
      </div>

      <Modal>
        <Menus.Menu>
          {/* <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
          /> */}
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Open opens="images-form">
            <Menus.Button icon={<FaRegImages />} />
          </Modal.Open>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />} />
          </Modal.Open>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Property"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>

        <Modal.Window name="edit">
          <EditPropertyForm
            id={_id}
            resourceName="Property"
            editData={editData}
            setEditData={setEditData}
            onConfirm={handleConfirmEdit}
            // disabled={false}
            // descContent={descContent}
            // setDescContent={setDescContent}
          />
        </Modal.Window>

        <Modal.Window name="images-form">
          <ImagesFormProperty
            id={_id}
            resourceName="Property"
            editData={editData}
            setEditData={setEditData}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default PropertiesRow;
