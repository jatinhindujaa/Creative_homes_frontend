import React, { createContext, useContext, useState } from "react";

// Create the context
const OffplanContext = createContext();

// Create the provider component
export const OffplanProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <OffplanContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </OffplanContext.Provider>
  );
};

// Custom hook for consuming the context
export const useOffplanContext = () => useContext(OffplanContext);
