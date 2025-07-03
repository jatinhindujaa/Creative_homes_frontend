"use client"
import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { usegetLogin } from "./useLogin";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const { getNewLogin, isCreating } = usegetLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const res = await getNewLogin({ email, password });
//         console.log("res",res)
//         localStorage.setItem("accessToken", res.data.accessToken);
//       router.push("/admin/agents");

//     } catch (error) {
//       setError(error.message);
//     }
//   };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      router.push("/admin/agents");
    }
  }, []);
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await getNewLogin({ email, password });

    // Log full response to confirm structure
    console.log("Login Result:", res);

    // ✅ Correctly extract token
    const accessToken = res?.data?.accessToken;
    console.log("ac",accessToken)
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      router.push("/admin/agents");
    } else {
      setError("Access token not received.");
    }
  } catch (error) {
    console.error("Login Error:", error);
    setError(error.message || "Login failed");
  }
};

const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: 3,
          borderRadius: 2,
          boxShadow: 1,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="h5" color="#ff6b6b" mb={2}>
          Log in to the CHRE Admin Portal
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"} // Change type based on showPassword
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <MdOutlineVisibilityOff />
                  ) : (
                    <MdOutlineVisibility />
                  )}
                </IconButton>
              ),
            }}
          />
          {error && <Typography color="error">{error}</Typography>}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mb: 2,
              backgroundColor: "#ff6b6b",
              "&:hover": { backgroundColor: "#e55a5a" },
            }}
          >
            Log in
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
