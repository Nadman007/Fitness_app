import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";
import willPfpImage from "../assets/will_pfp.png";
import princeImage from "../assets/prince1.jpg";
import chrisImage from "../assets/chris2.jpg";

// Trainers' data
const trainers = [
  {
    id: "william-v",
    name: "William V.",
    alias: "Strength Expert",
    specialties: ["Powerlifting", "Bodybuilding", "Strength Training"],
    image: willPfpImage,
  },
  {
    id: "prince-n",
    name: "Prince N.",
    alias: "Your Motivator",
    specialties: ["Endurance", "Cardio", "Functional Training"],
    image: princeImage,
  },
  {
    id: "chris-b",
    name: "Chris B.",
    alias: "Fitness Strategist",
    specialties: ["Weight Loss", "Muscle Gain", "General Fitness"],
    image: chrisImage,
  },
];

const TrainingPage = () => {
  const navigate = useNavigate();

  const handleProfileClick = (trainerId) => {
    navigate(`/trainer/${trainerId}`);
  };

  return (
    <Box sx={{ backgroundColor: "#fff", color: "#000", minHeight: "100px" }}>
      {/* Header */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 40px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontFamily: "'Cooper Hewitt Heavy', sans-serif",
              color: "#000",
            }}
          >
            GETFIT
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              onClick={() => navigate("/about")}
              sx={{ textTransform: "none", fontWeight: 600, color: "#000" }}
            >
              About
            </Button>
            <Button
              onClick={() => navigate("/training")}
              sx={{ textTransform: "none", fontWeight: 600, color: "#000" }}
            >
              Training
            </Button>
            <Button
              onClick={() => navigate("/find-pt")}
              sx={{ textTransform: "none", fontWeight: 600, color: "#000" }}
            >
              FindPT
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar sx={{ bgcolor: "#000", width: 32, height: 32 }}>U</Avatar>
            <Typography
              sx={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600,
                color: "#000",
              }}
            >
              Your Profile
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ padding: "40px" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            fontSize: "60px",
            marginBottom: "30px",
            fontFamily: "'Cooper Hewitt Heavy', sans-serif",
          }}
        >
          MEET THE COACHES
        </Typography>

        <Grid container spacing={4}>
          {trainers.map((trainer) => (
            <Grid item xs={12} sm={6} md={4} key={trainer.id}>
              <Paper
                elevation={4}
                sx={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  ":hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
                onClick={() => handleProfileClick(trainer.id)}
              >
                {/* Trainer Image */}
                <Box
                  sx={{
                    height: "475px",
                    backgroundImage: `url(${trainer.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Trainer Details */}
                <Box sx={{ padding: "16px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'Josefin Sans', sans-serif",
                      color: "#fff",
                    }}
                  >
                    {trainer.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      color: "#aaa",
                      marginBottom: "16px",
                    }}
                  >
                    {trainer.alias}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      fontFamily: "'Josefin Sans', sans-serif",
                      marginBottom: "8px",
                      color: "#fff",
                    }}
                  >
                    Specialties:
                  </Typography>

                  {/* Specialties */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {trainer.specialties.map((specialty, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        sx={{
                          fontFamily: "'Josefin Sans', sans-serif",
                          color: "#fff",
                          borderColor: "#444",
                          textTransform: "none",
                          ":hover": {
                            backgroundColor: "#444",
                            borderColor: "#fff",
                          },
                        }}
                      >
                        {specialty}
                      </Button>
                    ))}
                  </Box>

                  {/* See Profile Button */}
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "16px",
                      backgroundColor: "#e50914",
                      color: "#fff",
                      fontWeight: 600,
                      fontFamily: "'Josefin Sans', sans-serif",
                      textTransform: "none",
                      ":hover": {
                        backgroundColor: "#b00711",
                      },
                    }}
                  >
                    See Profile
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TrainingPage;
