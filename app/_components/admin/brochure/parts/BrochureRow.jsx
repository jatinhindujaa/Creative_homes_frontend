import { useState } from "react";
import Table from "@/app/_components/ui/Table";
import Tag from "@/app/_components/ui/Tag";
import Modal from "@/app/_components/ui/Modal";
import Menus from "@/app/_components/ui/Menus";
import { HiTrash, HiPencil } from "react-icons/hi2";
import { FaRegImages } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Spinner from "@/app/_components/ui/Spinner";
import ConfirmDelete from "@/app/_components/ui/ConfirmDelete";
import Image from "next/image";
import toast from "react-hot-toast";

function BrochureRow({
  brochure: { _id, email, name, phone, message, propertyid },
}) {
  const [show, setShow] = useState(false);

  const expandDescription = () => {
    setShow((prev) => !prev);
  };

  // for propery listing [Implement in Admin ]
  // const handleToggleStatus = () => {
  //   updateBrochure({ id: _id, data: { status: !status } });
  // };
  const handleToggleStatus = () => {
    console.log("Toggling status for:", _id, "Current status:", status);
    const formData = new FormData();
    formData.append("status", !status); // string "true"/"false"
    updateBrochure({ id: _id, formData });
  };
  const handleDelete = () => {
    deleteBrochure(_id);
  };

  const convertedStatus = !status ? "active" : "inactive";

  const statusColors = {
    active: "success",
    inactive: "danger",
    unconfirmed: "warning",
  };

  return (
    <Table.Row>

      <div className="text-sm">{email}</div>
      <div className="text-sm">{name}</div>

      <div className="text-sm">{phone}</div>
      <div className="text-sm">{propertyid}</div>
      <div className="text-sm">{message}</div>

    </Table.Row>
  );
}

export default BrochureRow;
