import React, { createContext, useContext, useState } from "react";

// Create the context
const CareersContext = createContext();

// Create the provider component
export const CareersProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <CareersContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </CareersContext.Provider>
  );
};

// Custom hook for consuming the context
export const useCareersContext = () => useContext(CareersContext);
