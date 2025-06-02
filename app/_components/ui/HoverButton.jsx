import React from "react";

const HoverButton = ({
  text = "Submit",
  onClick,
  className = "",
  additionalStyles = {},
}) => {
  return (
    <button
      onClick={onClick}
      className={` font-outfit font-light text-[0.8rem] leading-[1.5rem] border-[1.5px] hover:bg-transparent hover:text-white rounded-[41px] ${className}`}
      style={additionalStyles}
    >
      {text}
    </button>
  );
};

export default HoverButton;
