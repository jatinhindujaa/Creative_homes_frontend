import React from "react";

const Heading = ({ as: Tag = "h1", children }) => {
  const baseStyles = "leading-snug";
  const styles = {
    h1: "text-5xl font-semibold",
    h2: "text-3xl font-semibold",
    h3: "text-3xl font-medium",
    h4: "text-3xl font-semibold text-center",
  };

  return (
    <Tag className={`${baseStyles} ${styles[Tag] || styles.h1}`}>
      {children}
    </Tag>
  );
};

export default Heading;
