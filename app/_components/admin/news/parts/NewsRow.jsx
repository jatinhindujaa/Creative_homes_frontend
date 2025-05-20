import { useState } from "react";
import Table from "@/app/_components/ui/Table";
import Tag from "@/app/_components/ui/Tag";
import Modal from "@/app/_components/ui/Modal";
import Menus from "@/app/_components/ui/Menus";
import { HiTrash, HiPencil } from "react-icons/hi2";
import { FaRegImages } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDeleteNews, useUpdateNews } from "../useNews";
import Spinner from "@/app/_components/ui/Spinner";
import ConfirmDelete from "@/app/_components/ui/ConfirmDelete";
import Image from "next/image";
import TruncatedHtml from "./ContentLimit";
import EditNewsForm from "@/app/_components/features/News/EditNewsForm";

function NewsRow({
  News: {
    _id,
    title,
    date,
    description,
    image,
    status,
  },
}) {
  const { mutate: updateNews, isPending: isUpdatingNews } = useUpdateNews();
  const { mutate: deleteNews, isPending: isDeleting } = useDeleteNews();
  const [show, setShow] = useState(false);

  //   const [descContent, setDescContent] = useState(description);

  const [editData, setEditData] = useState({
    _id,
    title,
    date,
    description,
    image,
    status,
  });
  const [aboutContent, setAboutContent] = useState(description);

  const expandDescription = () => {
    setShow((prev) => !prev);
  };

  // for propery listing [Implement in Admin ]
  // const handleToggleStatus = () => {
  //   updateNews({ id: _id, data: { status: !status } });
  // };

  const handleDelete = () => {
    deleteNews(_id);
  };

  const handleConfirmEdit = () => {
    const formData = new FormData();

    formData.append("name", editData.title);
    formData.append("date", editData.date);
    formData.append("description", aboutContent);
    formData.append("status", editData.status);

    updateNews({ id: _id, formData });
  };

  if (isUpdatingNews) return <Spinner />;

  const convertedStatus = status ? "active" : "inactive";

  const statusColors = {
    active: "success",
    inactive: "danger",
    unconfirmed: "warning",
  };

  return (
    <Table.Row>
      <div className="flex flex-col gap-1 text-sm ">
        <span className="font-medium">{title}</span>
      </div>

      <div className="text-sm">{date}</div>

      {/* <div className="text-sm">{experience}</div> */}

      <div className="text-sm">
        <TruncatedHtml html={description} limit={50} />
      </div>
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
            alt={title}
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
          {/* <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
          /> */}
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>

          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />} />
          </Modal.Open>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="News"
            disabled={isDeleting}
            onConfirm={handleDelete}
          />
        </Modal.Window>

        <Modal.Window name="edit">
          <EditNewsForm
            id={_id}
            resourceName="News"
            editData={editData}
            setEditData={setEditData}
            aboutContent={aboutContent}
            setAboutContent={setAboutContent}
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

export default NewsRow;
