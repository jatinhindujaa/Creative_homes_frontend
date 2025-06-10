import { useState } from "react";
import Table from "@/app/_components/ui/Table";
import Tag from "@/app/_components/ui/Tag";
import Modal from "@/app/_components/ui/Modal";
import Menus from "@/app/_components/ui/Menus";
import { HiTrash, HiPencil } from "react-icons/hi2";
import { FaRegImages } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDeleteAgent, useUpdateAgent } from "../useAgents";
import Spinner from "@/app/_components/ui/Spinner";
import ConfirmDelete from "@/app/_components/ui/ConfirmDelete";
import EditAgentForm from "@/app/_components/features/Agents/EditAgentForm";
import Image from "next/image";

function AgentsRow({
  agent: {
    _id,
    name,
    phoneNo,
    designation,
    about,
    image,
    status,
    type,
    experience,
    order,
    languages,
  },
}) {
  const { mutate: updateAgent, isPending: isUpdatingAgent } = useUpdateAgent();
  const { mutate: deleteAgent, isPending: isDeleting } = useDeleteAgent();
  const [show, setShow] = useState(false);

  //   const [descContent, setDescContent] = useState(description);

  const [editData, setEditData] = useState({
    name,
    phoneNo,
    designation,
    about,
    image,
    type,
    experience,
    order,
    languages,
  });

  const expandDescription = () => {
    setShow((prev) => !prev);
  };

  const handleToggleStatus = () => {
    console.log("Toggling status for:", _id, "Current status:", status);
    const formData = new FormData();
    formData.append("status", !status); // string "true"/"false"
    updateAgent({ id: _id, formData });
  };

  const handleDelete = () => {
    deleteAgent(_id);
  };

  const handleConfirmEdit = () => {
    const formData = new FormData();

    formData.append("name", editData.name);
    formData.append("phoneNo", editData.phoneNo);
    formData.append("designation", editData.designation);
    formData.append("about", editData.about);
    formData.append("experience", editData.experience);
    formData.append("order", editData.order);

    if (editData.type && Array.isArray(editData.type)) {
      editData.type.forEach((t) => formData.append("type", t));
    } else if (editData.type) {
      formData.append("type", editData.type);
    }

    (editData.languages || []).forEach((a) =>
      formData.append("languages[]", a)
    );
    updateAgent({ id: _id, formData });
  };

  if (isUpdatingAgent) return <Spinner />;

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

      <div className="text-sm">{designation}</div>

      {/* <div className="text-sm">{experience}</div> */}

      <div className="text-sm">{phoneNo}</div>

      {/* <div className="text-sm ">
        {show
          ? about
          : `${about.slice(0, 100)}${about.length > 100 ? "..." : ""}`}
        <span
          className="text-blue-500 cursor-pointer ml-2"
          onClick={expandDescription}
        >
          {show ? "Show less" : "Show more"}
        </span>
      </div> */}

      <div className="text-sm">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="rounded-lg"
          />
        ) : (
          <span>No Image</span>
        )}
      </div>

      <div>
        <Tag type={statusColors[convertedStatus] || "info"}>
          {convertedStatus.replace("-", " ")}
        </Tag>
      </div>

      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
          />
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>

          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />} />
          </Modal.Open>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Agent"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>

        <Modal.Window name="edit">
          <EditAgentForm
            id={_id}
            resourceName="Agent"
            editData={editData}
            setEditData={setEditData}
            onConfirm={handleConfirmEdit}
            // disabled={false}
            // descContent={descContent}
            // setDescContent={setDescContent}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default AgentsRow;
