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
      className={` font-outfit font-light text-[0.8rem]  leading-[1.5rem] border-[1.5px] border-white hover:bg-transparent hover:text-black rounded-[41px] ${className}`}
      style={additionalStyles}
    >
      {text}
    </button>
  );
};

export default Button;
