import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import personalTrainingImage from "../assets/personal.jpg";
import functionalTrainingImage from "../assets/functional.jpg";
import vandenreichLogo from "../assets/Vandenreich_symbol.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login"); // Redirect to login if no user is authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out!");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
      alert("Failed to log out. Please try again.");
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", color: "#000" }}>
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
              onClick={scrollToAbout}
              sx={{ textTransform: "none", fontWeight: 600, color: "#000" }}
            >
              About
            </Button>
            <Button
              sx={{ textTransform: "none", fontWeight: 600, color: "#000" }}
              onClick={() => navigate("/training")}
            >
              Training
            </Button>
            <Button
              sx={{ textTransform: "none", fontWeight: 600, color: "#000" }}
              onClick={() => navigate("/subscribe")}
            >
              Subscription
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
            <Button
              onClick={handleLogout}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                textTransform: "none",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: 600,
                fontFamily: "'Josefin Sans', sans-serif",
                ":hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: "60px 20px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Cooper Hewitt Heavy', sans-serif",
            fontWeight: 700,
            color: "#000",
            marginBottom: "16px",
          }}
        >
          FIND YOUR STRENGTH
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 400,
            color: "#000",
            marginBottom: "32px",
          }}
        >
          Inside and Out.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 400,
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          We are dedicated to helping you achieve your fitness goals and improve
          your general health and well-being.
        </Typography>
      </Box>

      {/* Trainings Section */}
      <Box
        sx={{
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Cooper Hewitt Heavy', sans-serif",
            fontWeight: 700,
            color: "#000",
            marginBottom: "24px",
          }}
        >
          Trainings
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Personal Training */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: "100%",
                height: "250px",
                backgroundImage: `url(${personalTrainingImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                padding: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)", // Hover effect
                  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => navigate("/personal-training")}
            >
              <Typography
                sx={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                Personal Training
              </Typography>
            </Box>
          </Grid>
          {/* Functional Training */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: "100%",
                height: "250px",
                backgroundImage: `url(${functionalTrainingImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                padding: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)", // Hover effect
                  boxShadow: "0 6px 30px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => navigate("/personal-training")}
            >
              <Typography
                sx={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                Functional Training
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* About Section */}
      <Box
        id="about-section"
        sx={{
          backgroundColor: "#f4f4f4",
          padding: "60px 20px",
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        <img
          src={vandenreichLogo}
          alt="Vandenreich Logo"
          style={{ width: "200px", marginBottom: "20px" }}
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 600,
            marginBottom: "16px",
            color: "#000",
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Josefin Sans', sans-serif",
            maxWidth: "600px",
            margin: "0 auto",
            color: "#666",
          }}
        >
          At GETFIT, we believe in empowering everyone to reach their peak
          fitness potential. Join us today and discover the best version of
          yourself.
        </Typography>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "40px 20px",
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Cooper Hewitt Heavy', sans-serif",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          Your Body is Your Temple
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Josefin Sans', sans-serif",
            marginBottom: "24px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Whether you're just starting out or looking to reach new heights, our
          team is here to help.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/subscribe")}
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "30px",
            padding: "12px 24px",
            ":hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          Join Today
        </Button>
      </Box>

      {/* Back-to-Top Button */}
      {showTopButton && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#000",
            color: "#fff",
            ":hover": { backgroundColor: "#333" },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Dashboard;
