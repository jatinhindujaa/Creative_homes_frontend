import React, { createContext, useContext, useState } from "react";

// Create the context
const InquiryContext = createContext();

// Create the provider component
export const InquiryProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("startDate-desc");

  return (
    <InquiryContext.Provider value={{ filter, setFilter, sort, setSort }}>
      {children}
    </InquiryContext.Provider>
  );
};

// Custom hook for consuming the context
export const useInquiryContext = () => useContext(InquiryContext);
