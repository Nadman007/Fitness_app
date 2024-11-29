import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase login method
import { auth } from "../firebase"; // Firebase auth object

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Attempt to log in the user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // If login is successful
      console.log("Login Successful:", userCredential.user.email);
      alert("Login Successful! Redirecting...");
      navigate("/questionnaire"); // Redirect to the questionnaire page
    } catch (error) {
      // If login fails, display an error message
      console.error("Login failed:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // Original background color
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: "40px",
          backgroundColor: "#fff", // Original white background
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Original shadow
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
            color: "#000", // Original black text color
          }}
        >
          Welcome Back
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
          Enter your email and password to access your account.
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            value={formData.email}
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
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ marginBottom: "20px", color: "#444" }}
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
            Sign In
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
          Don’t have an account?{" "}
          <Button
            size="small"
            sx={{
              color: "#000",
              textTransform: "none",
              fontWeight: 600,
              fontFamily: "'Cooper Hewitt Heavy', sans-serif",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
