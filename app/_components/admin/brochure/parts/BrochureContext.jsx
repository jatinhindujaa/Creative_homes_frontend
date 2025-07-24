import React, { createContext, useContext, useState } from "react";

// Create the context
const BrochureContext = createContext();

// Create the provider component
export const BrochureProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <BrochureContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </BrochureContext.Provider>
  );
};

// Custom hook for consuming the context
export const useBrochureContext = () => useContext(BrochureContext);
