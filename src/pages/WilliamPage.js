import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import willImage from "../assets/will2.jpg";
import "../assets/animations.css"; // Import CSS animations

// FadeInSection Component
const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

const WilliamPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", padding: "40px" }}>
      {/* Back Button */}
      <Button
        variant="outlined"
        onClick={() => navigate(-1)} // Navigate to the previous route
        sx={{
          marginBottom: "20px",
          color: "#000",
          borderColor: "#000",
          textTransform: "none",
          fontFamily: "'Josefin Sans', sans-serif",
          ":hover": {
            backgroundColor: "#000",
            color: "#fff",
          },
        }}
      >
        Go Back
      </Button>

      <FadeInSection>
        {/* First Section (Introduction) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {/* Image Card */}
          <Card
            sx={{
              maxWidth: "400px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            <img
              src={willImage}
              alt="William"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "scale-down",
              }}
            />
          </Card>

          {/* Text Section */}
          <Box
            sx={{
              padding: "25px",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontFamily: "'Cooper Hewitt Heavy', sans-serif",
                marginBottom: "16px",
                color: "#000",
              }}
            >
              HI I'M WILL
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 400,
                color: "#666",
                lineHeight: 1.5,
              }}
            >
              I can help you increase your SBD total, build muscle mass, compete
              in powerlifting, and more.
            </Typography>
          </Box>
        </Box>
      </FadeInSection>

      <FadeInSection>
        {/* Second Section (Specializations) */}
        <Box
          sx={{
            marginTop: "80px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Cooper Hewitt Heavy', sans-serif",
              marginBottom: "40px",
              color: "#000",
            }}
          >
            I SPECIALIZE IN
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: "40px" }}>
            {["Powerlifting", "Bodybuilding", "Strength"].map(
              (specialty, index) => (
                <Card
                  key={index}
                  sx={{
                    padding: "20px",
                    width: "200px",
                    backgroundColor: "#f0f0f0",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Josefin Sans', sans-serif",
                      color: "#000",
                    }}
                  >
                    {specialty.toUpperCase()}
                  </Typography>
                </Card>
              )
            )}
          </Box>
        </Box>
      </FadeInSection>

      <FadeInSection>
        {/* Third Section (About Me with Video) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginTop: "80px",
            gap: "40px",
          }}
        >
          {/* About Me Section */}
          <Box
            sx={{
              padding: "25px",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontFamily: "'Cooper Hewitt Heavy', sans-serif",
                marginBottom: "16px",
                color: "#000",
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 400,
                color: "#666",
                lineHeight: 1.5,
              }}
            >
              I began coaching others after training and competing myself for
              several years. My mission is to help clients reach new levels in
              their training while also creating sustainable programs that will
              enable long-term success.
            </Typography>
          </Box>

          {/* Video Section */}
          <Box sx={{ flex: 1 }}>
            <video
              src={require("../assets/bench.mp4")}
              controls
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>
        </Box>
      </FadeInSection>
    </Box>
  );
};

export default WilliamPage;
