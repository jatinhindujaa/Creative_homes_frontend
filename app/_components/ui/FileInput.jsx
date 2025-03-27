const FileInput = ({ className = "", ...props }) => {
  return (
    <input
      type="file"
      className={`text-lg rounded-md  file:px-3 file:py-2 file:mr-3 
        file:rounded-md file:border-none file:text-white file:bg-blue-900 
        file:cursor-pointer file:transition file:duration-200 
        hover:file:bg-blue-800 ${className}`}
      {...props}
    />
  );
};

export default FileInput;
