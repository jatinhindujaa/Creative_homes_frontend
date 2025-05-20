import React, { createContext, useContext, useState } from "react";

// Create the context
const NewsContext = createContext();

// Create the provider component
export const NewsProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <NewsContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </NewsContext.Provider>
  );
};

// Custom hook for consuming the context
export const useNewsContext = () => useContext(NewsContext);
