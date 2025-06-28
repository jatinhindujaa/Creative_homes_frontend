import React, { createContext, useContext, useState } from "react";

// Create the context
const WhatsapContext = createContext();

// Create the provider component
export const WhatsapProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <WhatsapContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </WhatsapContext.Provider>
  );
};

// Custom hook for consuming the context
export const useWhatsapContext = () => useContext(WhatsapContext);
