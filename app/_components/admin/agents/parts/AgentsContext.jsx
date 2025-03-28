import React, { createContext, useContext, useState } from "react";

// Create the context
const AgentsContext = createContext();

// Create the provider component
export const AgentsProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <AgentsContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </AgentsContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAgentsContext = () => useContext(AgentsContext);
