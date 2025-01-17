import React from "react";

const Button = ({
  text = "Submit",
  onClick,
  className = "",
  additionalStyles = {},
}) => {
  return (
    <button
      onClick={onClick}
      className={` font-outfit font-semibold text-[1.2rem] leading-[1.5rem] text-white border-[1.5px] border-white hover:bg-white hover:text-black rounded-[41px] ${className}`}
      style={additionalStyles}
    >
      {text}
    </button>
  );
};

export default Button;
