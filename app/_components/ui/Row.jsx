import React from "react";

const Row = ({ type = "verticle", children }) => {
  return (
    <div
      className={
        type === "horizontal"
          ? "flex justify-between items-center p-8"
          : "flex flex-col gap-4"
      }
    >
      {children}
    </div>
  );
};

export default Row;
