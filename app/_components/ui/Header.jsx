"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on mount and on token changes
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Logout: remove token and redirect
      localStorage.removeItem("accessToken");
      router.push("/admin/login");
      setIsLoggedIn(false);
    } else {
      // Login redirect
      router.push("/admin/login");
    }
  };

  return (
    <header className="bg-white py-2 px-12 border-b border-gray-200 flex items-center gap-6 justify-end h-12">
      <Button
        variant="outlined"
        color="primary"
        onClick={handleAuthAction}
        sx={{
          borderColor: "#ff6b6b",
          color: "#ff6b6b",
          "&:hover": {
            borderColor: "#e55a5a",
            backgroundColor: "#ffeaea",
          },
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
    </header>
  );
}

export default Header;
