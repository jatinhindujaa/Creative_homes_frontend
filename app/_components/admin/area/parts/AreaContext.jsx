import React, { createContext, useContext, useState } from "react";

// Create the context
const AreasContext = createContext();

// Create the provider component
export const AreasProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <AreasContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </AreasContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAreasContext = () => useContext(AreasContext);
