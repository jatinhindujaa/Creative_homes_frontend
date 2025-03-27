import React from "react";

const SortBy = ({ options, sort, setSort }) => {
  function handleChange(e) {
    setSort(e.target.value);
  }

  return (
    <select
      className="bg-white border cursor-pointer border-gray-300 text-black py-2 px-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
      value={sort}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortBy;
