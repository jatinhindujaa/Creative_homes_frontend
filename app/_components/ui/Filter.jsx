import React from "react";

const Filter = ({ filterField, filter, setFilter, options }) => {
  const currentFilter = filter || options.at(0).value;

  function handleClick(value) {
    setFilter(value);
  }

  return (
    <div className="border border-gray-200 bg-gray-50 shadow-sm rounded-sm  flex gap-1">
      {options.map((option, i) => (
        <button
          key={i}
          onClick={() => handleClick(option.value)}
          className={`rounded-sm font-medium text-base px-3 py-2 transition-all 
            ${
              option.value === currentFilter
                ? "bg-blue-950 text-white"
                : "bg-gray-50 hover:bg-blue-800 hover:text-white"
            }`}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
