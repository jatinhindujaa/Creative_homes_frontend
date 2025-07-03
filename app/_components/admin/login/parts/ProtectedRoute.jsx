// components/ProtectedRoute.jsx
"use client";
import { useEffect, useState } from "react";
import NoAccess from "./NoAccess";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token); // true if token exists
  }, []);

  if (isAuthenticated === null) return null; // loading or splash
  return isAuthenticated ? children : <NoAccess />;
};

export default ProtectedRoute;
