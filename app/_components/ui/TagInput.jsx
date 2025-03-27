import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

const TagInput = ({
  tags,
  setTags,
  placeholder = "Add a tag and press Enter",
}) => {
  const [inputValue, setInputValue] = useState("");

  const addTag = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="flex flex-wrap gap-2 p-2 border rounded-lg">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center gap-1 px-2 py-1 text-sm text-white bg-blue-900 rounded-full"
          >
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="text-white hover:text-gray-200"
            >
              <HiXMark size={14} />
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={addTag}
          placeholder={placeholder}
          className="flex-1 p-1 text-sm outline-none"
        />
      </div>
    </div>
  );
};

export default TagInput;
