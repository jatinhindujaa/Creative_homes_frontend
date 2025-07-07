import React, { createContext, useContext, useState } from "react";

// Create the context
const BrousherContext = createContext();

// Create the provider component
export const BrousherProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <BrousherContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </BrousherContext.Provider>
  );
};

// Custom hook for consuming the context
export const useBrousherContext = () => useContext(BrousherContext);
