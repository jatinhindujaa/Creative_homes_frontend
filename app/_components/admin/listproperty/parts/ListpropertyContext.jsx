import React, { createContext, useContext, useState } from "react";

// Create the context
const ListpropertyContext = createContext();

// Create the provider component
export const ListpropertyProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <ListpropertyContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </ListpropertyContext.Provider>
  );
};

// Custom hook for consuming the context
export const useListpropertyContext = () => useContext(ListpropertyContext);
