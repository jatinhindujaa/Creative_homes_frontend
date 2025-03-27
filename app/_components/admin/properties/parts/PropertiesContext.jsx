import React, { createContext, useContext, useState } from "react";

// Create the context
const PropertiesContext = createContext();

// Create the provider component
export const PropertiesProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <PropertiesContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </PropertiesContext.Provider>
  );
};

// Custom hook for consuming the context
export const usePropertiesContext = () => useContext(PropertiesContext);
