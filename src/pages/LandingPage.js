import React from "react";
import { Box, Typography, Button } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#f5f5f5", // Light grey background
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#333", // Dark grey text
        fontFamily: "'Josefin Sans', sans-serif",
      }}
    >
      {/* Main Title */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: 60,
          fontFamily: "'Josefin Sans Bold', sans-serif",
        }}
      >
        Welcome to GetFit
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          maxWidth: 600,
          fontWeight: 600, // Semi-bold weight for the subtitle
          mb: 3,
          fontFamily: "'Josefin Sans ', sans-serif",
        }}
      >
        Let's get some gains
      </Typography>

      {/* Get Started Button */}
      <Button
        variant="outlined"
        color="error"
        size="large"
        sx={{
          fontWeight: 600, // Semi-bold for the button
          fontSize: "1rem",
          borderWidth: "2px",
          ":hover": {
            backgroundColor: "rgba(244, 67, 54, 0.1)", // Light red hover effect
          },
        }}
        onClick={() => (window.location.href = "/signup")}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default LandingPage;
