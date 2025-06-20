import { useState } from "react";
import Table from "@/app/_components/ui/Table";
import Tag from "@/app/_components/ui/Tag";
import Modal from "@/app/_components/ui/Modal";
import Menus from "@/app/_components/ui/Menus";
import { HiTrash, HiPencil } from "react-icons/hi2";
import { FaRegImages } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDeleteOffplan, useUpdateOffplan } from "../useOffplan";
import Spinner from "@/app/_components/ui/Spinner";
import ConfirmDelete from "@/app/_components/ui/ConfirmDelete";
import Image from "next/image";
import toast from "react-hot-toast";
import EditOffplanForm from "@/app/_components/features/ Offplan/EditOffplanForm";
import ImagesFormOffplan from "@/app/_components/features/ Offplan/ImagesFormProperty";

function OffplanRow({
  offplan: {
    _id,
    name,
    features,
    amenities,
    price,
    type,
    bed,
    shower,
    bua,
    plot,
    reference,
    zone,
    dld,
    shortDescription,
    description,
    dealType,
    agent,
    status,
    multipleImages,
    image,
    maplink,
    order
  },
}) {
  const { mutate: updateOffplan, isPending: isUpdatingOffplan } =
    useUpdateOffplan();
  const { mutate: deleteOffplan, isPending: isDeleting } = useDeleteOffplan();
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
    features,
    amenities,
    price,
    type,
    bed,
    shower,
    bua,
    plot,
    reference,
    zone,
    dld,
    shortDescription,
    description,
    dealType,
    agent,
    status,
    multipleImages,
    image,
    maplink,
    order,
  });

  const expandDescription = () => {
    setShow((prev) => !prev);
  };

  // for propery listing [Implement in Admin ]
  // const handleToggleStatus = () => {
  //   updateOffplan({ id: _id, data: { status: !status } });
  // };

  const handleDelete = () => {
    deleteOffplan(_id);
  };

  
const handleConfirmEdit = () => {
  const formData = new FormData();

  formData.append("name", editData.name);
  formData.append("dealType", editData.dealType);
  formData.append("price", editData.price);
  formData.append("type", editData.type);
  formData.append("reference", editData.reference);
  formData.append("dld", editData.dld);
  formData.append("zone", editData.zone);
  formData.append("bed", editData.bed);
  formData.append("shower", editData.shower);
  formData.append("bua", editData.bua);
  formData.append("plot", editData.plot);
  formData.append("shortDescription", editData.shortDescription);
  formData.append("description", editData.description);
  formData.append("agent", editData.agent);
  formData.append("maplink", editData.maplink);
  formData.append("order", editData.order);


  

  (editData.features || []).forEach((f) => formData.append("features[]", f));

  (editData.amenities || []).forEach((a) => formData.append("amenities[]", a));

  // 🔁 Append all selected offplan images (replaces old)
  if (
    editData.multipleImages instanceof FileList ||
    Array.isArray(editData.multipleImages)
  ) {
    Array.from(editData.multipleImages).forEach((img) =>
      formData.append("multipleImages", img)
    );
  }

  // ✅ Append QR image only if changed
  if (editData.newQrImage instanceof File) {
    formData.append("image", editData.newQrImage);
  }

  updateOffplan({ id: _id, formData });
};

  if (isUpdatingOffplan) return <Spinner />;

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

      <div className="text-sm">
        <div
          dangerouslySetInnerHTML={{
            __html: show
              ? description
              : `${description?.slice(0, 100)}${
                  description?.length > 100 ? "..." : ""
                }`,
          }}
        />
        {description?.length > 100 && (
          <span
            className="text-blue-500 cursor-pointer ml-2"
            onClick={expandDescription}
          >
            {show ? "Show less" : "Show more"}
          </span>
        )}
      </div>

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
            resourceName="Offplan"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>

        <Modal.Window name="edit">
          <EditOffplanForm
            id={_id}
            resourceName="Offplan"
            editData={editData}
            setEditData={setEditData}
            onConfirm={handleConfirmEdit}
            // disabled={false}
            // descContent={descContent}
            // setDescContent={setDescContent}
          />
        </Modal.Window>

        <Modal.Window name="images-form">
          <ImagesFormOffplan
            id={_id}
            resourceName="Offplan"
            editData={editData}
            setEditData={setEditData}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default OffplanRow;
