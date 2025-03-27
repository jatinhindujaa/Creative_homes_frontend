function Tag({ type, children }) {
  const colors = {
    success: "text-green-700 bg-green-100",
    danger: "text-red-700 bg-red-100",
    warning: "text-yellow-700 bg-yellow-100",
    info: "text-blue-700 bg-blue-100",
  };

  return (
    <span
      className={`px-2 py-2 w-fit text-xs font-semibold uppercase rounded-full ${
        colors[type] || "text-gray-700 bg-gray-100"
      }`}
    >
      {children}
    </span>
  );
}

export default Tag;
