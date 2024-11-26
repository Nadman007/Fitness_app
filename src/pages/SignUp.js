import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert("Sign-up successful!");
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Cooper Hewitt Heavy', sans-serif",
            fontWeight: 700,
            marginBottom: "24px",
            textAlign: "center",
            color: "#000",
          }}
        >
          Create Account
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Cooper Hewitt Thin', sans-serif",
            textAlign: "center",
            color: "#444",
            marginBottom: "24px",
          }}
        >
          Enter your details to get started.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            variant="outlined"
            value={formData.username}
            onChange={handleChange}
            sx={{
              marginBottom: "20px",
              input: { color: "#000" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#000" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            sx={{
              marginBottom: "20px",
              input: { color: "#000" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#000" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={passwordVisible ? "text" : "password"}
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            sx={{
              marginBottom: "20px",
              input: { color: "#000" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#000" },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    edge="end"
                  >
                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: 600,
              fontFamily: "'Cooper Hewitt Heavy', sans-serif",
              padding: "12px 0",
              borderRadius: "30px",
              ":hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Sign Up
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            marginTop: "16px",
            color: "#444",
            fontFamily: "'Cooper Hewitt Thin', sans-serif",
          }}
        >
          Already have an account?{" "}
          <Button
            size="small"
            sx={{
              color: "#000",
              textTransform: "none",
              fontWeight: 600,
              fontFamily: "'Cooper Hewitt Heavy', sans-serif",
            }}
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
