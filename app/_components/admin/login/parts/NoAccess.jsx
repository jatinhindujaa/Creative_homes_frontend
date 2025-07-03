"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaLock } from "react-icons/fa";
const NoAccess = () => {
  const router = useRouter();

  const handleBackToLogin = () => {
    router.push("/admin/login"); // adjust if your login route is different
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <FaLock sx={{ fontSize: 60, color: "#ff6b6b", mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        Access Denied
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        You must be logged in to view this page.
      </Typography>
      <Button
        variant="contained"
        onClick={handleBackToLogin}
        sx={{
          backgroundColor: "#ff6b6b",
          "&:hover": { backgroundColor: "#e55a5a" },
        }}
      >
        Go to Login
      </Button>
    </Box>
  );
};

export default NoAccess;
