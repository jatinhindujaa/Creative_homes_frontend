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
import { useDeleteListProperty } from "../useListproperty";

function ListpropertyRow({
  Listproperty: { _id, name, phone, email, category, message },
}) {
  const { mutate: deleteListproperty, isPending: isDeleting } = useDeleteListProperty();
  const [show, setShow] = useState(false);

  //   const [descContent, setDescContent] = useState(description);

  // const [editData, setEditData] = useState({
  //   _id,
  //   title,
  //   date,
  //   description,
  //   image,
  //   status,
  // });

  const expandDescription = () => {
    setShow((prev) => !prev);
  };

  // for propery listing [Implement in Admin ]
  // const handleToggleStatus = () => {
  //   updateListproperty({ id: _id, data: { status: !status } });
  // };

  const handleDelete = () => {
    deleteListproperty(_id);
  };

  // const handleConfirmEdit = () => {
  //   const formData = new FormData();

  //   formData.append("name", editData.title);
  //   formData.append("phone", editData.date);
  //   formData.append("email", aboutContent);
  //   formData.append("category", editData.status);
  //   formData.append("category", editData.status);

  //   updateListproperty({ id: _id, formData });
  // };

  if (isDeleting) return <Spinner />;

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

      <div className="text-sm">{phone}</div>

      <div className="text-sm">{email}</div>
      <div className="text-sm">{category}</div>
      <div className="text-sm">{message}</div>

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

      <Modal>
        <Menus.Menu>
          {/* <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
          />
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open> */}

          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />} />
          </Modal.Open>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Listproperty"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>

        {/* <Modal.Window name="edit">
          <EditListpropertyForm
            id={_id}
            resourceName="Listproperty"
            editData={editData}
            setEditData={setEditData}
            aboutContent={aboutContent}
            setAboutContent={setAboutContent}
            onConfirm={handleConfirmEdit}
            // disabled={false}
            // descContent={descContent}
            // setDescContent={setDescContent}
          />
        </Modal.Window> */}
      </Modal>
    </Table.Row>
  );
}

export default ListpropertyRow;
