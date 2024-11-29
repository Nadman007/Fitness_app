import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const BookPersonalTrainer = () => {
  const { trainerName } = useParams(); // Get the trainer's name from the URL parameters

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        color: "#000",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontFamily: "'Cooper Hewitt Heavy', sans-serif",
          marginBottom: "20px",
        }}
      >
        Book a Session with {trainerName}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 400,
          color: "#666",
          lineHeight: 1.5,
          fontSize: "1.2em",
          maxWidth: "800px",
          margin: "0 auto",
          marginBottom: "40px",
        }}
      >
        Are you ready to start your journey towards becoming the best version of
        yourself? Book a session with {trainerName} and take the first step to
        achieving your fitness goals!
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff0000",
          color: "#fff",
          padding: "15px 30px",
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 600,
          textTransform: "none",
          borderRadius: "5px",
          ":hover": {
            backgroundColor: "#ff3333",
          },
        }}
      >
        Confirm Booking
      </Button>
    </Box>
  );
};

export default BookPersonalTrainer;
