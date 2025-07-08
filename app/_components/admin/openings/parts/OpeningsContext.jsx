import React, { createContext, useContext, useState } from "react";

// Create the context
const OpeningsContext = createContext();

// Create the provider component
export const OpeningsProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <OpeningsContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </OpeningsContext.Provider>
  );
};

// Custom hook for consuming the context
export const useOpeningsContext = () => useContext(OpeningsContext);
