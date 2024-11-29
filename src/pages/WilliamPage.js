import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import willImage from "../assets/will2.jpg";
import uoftLogo from "../assets/University_of_Toronto-Logo.png"; // Import U of T Logo
import "../assets/animations.css"; // Import CSS animations
import "react-alice-carousel/lib/alice-carousel.css";

// FadeInSection Component
const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

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
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${
        props.fadeRight ? "fade-right" : ""
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

// Variants for Framer Motion to achieve the rattling effect
const boxVariants = {
  hover: {
    scale: 1.05,
    rotate: [1, -1, 1, -1, 0],
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const WilliamPage = () => {
  const navigate = useNavigate();
  const videos = [
    require("../assets/bench.mp4"),
    require("../assets/IMG_4244.mp4"),
  ];

  // Function to handle video slider items
  const videoItems = videos.map((videoSrc, index) => (
    <video
      key={index}
      src={videoSrc}
      controls
      style={{
        width: "50%", // Reduced size
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        marginBottom: "20px",
      }}
    />
  ));

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
              textAlign: "center", // Center the text
            }}
          >
            <Typography
              variant="h3"
              component={motion.div}
              whileHover={{ color: "#ff0000" }} // Turns red on hover
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
                fontSize: "1.2em", // Make the text slightly bigger
              }}
            >
              I have been helping individuals to reach their peak fitness
              potential. I specialize in strength coaching, muscle building, and
              powerlifting training. With a solid foundation in exercise science
              from The University of Toronto and extensive practical experience,
              I design programs that cater to the unique needs of each
              individual, ensuring they achieve their goals efficiently and
              sustainably.
            </Typography>
            {/* University of Toronto Logo (fade-right animation) */}
            <FadeInSection fadeRight>
              <Box
                sx={{
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src={uoftLogo}
                  alt="University of Toronto Logo"
                  style={{ maxWidth: "200px", height: "auto" }}
                />
              </Box>
            </FadeInSection>
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
            component={motion.div}
            whileHover={{ color: "#ff0000" }} // Turns red on hover
            sx={{
              fontWeight: "bold",
              fontFamily: "'Cooper Hewitt Heavy', sans-serif",
              marginBottom: "40px",
              color: "#000",
            }}
          >
            I SPECIALIZE IN
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {["Powerlifting", "Bodybuilding", "Strength"].map(
              (specialty, index) => (
                <motion.div
                  key={index}
                  variants={boxVariants}
                  whileHover="hover"
                  style={{
                    padding: "20px",
                    width: "200px",
                    backgroundColor: "#f0f0f0",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: "20px",
                    cursor: "pointer",
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
                </motion.div>
              )
            )}
          </Box>
        </Box>
      </FadeInSection>

      <FadeInSection>
        {/* Third Section (About Me) */}
        <Box
          sx={{
            marginTop: "80px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "3px",
              backgroundColor: "#ff6600",
              marginBottom: "16px",
            }}
          />

          <Typography
            variant="h4"
            component={motion.div}
            whileHover={{ color: "#ff0000" }} // Turns red on hover
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
              fontSize: "1.2em",
              maxWidth: "800px",
              margin: "0 auto",
              marginBottom: "20px", // Add some margin-bottom for spacing
            }}
          >
            I began coaching others after training and competing myself for
            several years. My journey started when I was studying Kinesiology at
            Ohio State University, where I developed a passion for understanding
            the biomechanics behind strength training. I have been coaching
            clients both online and in person for over 12 years. My mission is
            to help individuals reach new levels in their training while also
            creating sustainable fitness programs that will lead to long-term
            success. I combine scientific principles with practical experience
            to ensure my clients see results, no matter where they are on their
            fitness journey.
          </Typography>
        </Box>
      </FadeInSection>

      <FadeInSection>
        {/* Best Lifts Section */}
        <Box
          sx={{
            marginTop: "80px",
            textAlign: "center",
            backgroundColor: "#f7f7f7",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
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
            BEST LIFTS
          </Typography>
          <Box
            sx={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              padding: "20px 0",
              display: "flex",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {[
              { lift: "Squat", weight: "622 lbs" },
              { lift: "Bench Press", weight: "468 lbs" },
              { lift: "Deadlift", weight: "733 lbs" },
            ].map((item, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: "200px",
                  padding: "20px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "20px",
                  backgroundColor: "#fff",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "'Josefin Sans', sans-serif",
                    color: "#ff6600",
                    marginBottom: "8px",
                  }}
                >
                  {item.lift.toUpperCase()}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#000",
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontSize: "1.2em",
                  }}
                >
                  {item.weight}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </FadeInSection>

      <FadeInSection>
        {/* Video Slideshow Section */}
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
            TRAINING VIDEOS
          </Typography>
          <AliceCarousel
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableButtonsControls
            items={videoItems}
          />
        </Box>
      </FadeInSection>

      <FadeInSection>
        {/* Book Now Section */}
        <Box
          variant="contained"
          onClick={() => navigate(`/book-now/William`)}
          sx={{
            marginTop: "40px",
            textAlign: "center",
            padding: "40px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle White Lines */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "repeating-linear-gradient(white, transparent 1px, transparent 10px)",
              opacity: 0.1,
              pointerEvents: "none",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Cooper Hewitt Heavy', sans-serif",
              marginBottom: "20px",
              zIndex: 1,
              position: "relative",
            }}
          >
            Ready to Transform Your Body?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 400,
              lineHeight: 1.5,
              fontSize: "1.2em",
              marginBottom: "20px",
              zIndex: 1,
              position: "relative",
            }}
          >
            Book a personalized training session now to unlock your full
            potential and achieve the results you deserve!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff0000",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              fontFamily: "'Josefin Sans', sans-serif",
              zIndex: 1,
              position: "relative",
              ":hover": {
                backgroundColor: "#ff3333",
                color: "#fff",
              },
            }}
          >
            Book Now
          </Button>
        </Box>
      </FadeInSection>
    </Box>
  );
};

export default WilliamPage;
