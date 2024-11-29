import React from "react";
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AliceCarousel from "react-alice-carousel";
import "../assets/animations.css";
import "react-alice-carousel/lib/alice-carousel.css";

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

// SubscriptionPage Component
const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [selectedPlanName, setSelectedPlanName] = React.useState("");

  const subscriptionPlans = [
    {
      name: "1 Month Subscription",
      price: "$75/month",
      description: "Pay every month. Subscription continues until cancelled.",
      savingText: "",
    },
    {
      name: "3 Month Subscription",
      price: "$270/3 months",
      description:
        "Pay every 3 months. Subscription continues until cancelled.",
      savingText: "SAVE 20%",
    },
    {
      name: "12 Month Subscription",
      price: "$540/year",
      description: "Save 40% on the yearly cost compared to monthly payments.",
      savingText: "SAVE 40%",
    },
  ];

  // Dummy reviews for carousel
  const reviews = [
    {
      name: "Behtash Chowdhury",
      review:
        "Absolutely love the program! The trainers are amazing and helped me achieve my fitness goals.",
    },
    {
      name: "Selemun Paris",
      review:
        "Great experience! I really enjoyed the personalized workout and nutrition plans.",
    },
    {
      name: "Alex Wang",
      review:
        "Joining GetFit Premium was one of the best decisions I’ve made. Highly recommend to anyone serious about fitness!",
    },
  ];

  // Review Items for Carousel
  const reviewItems = reviews.map((review, index) => (
    <Box
      key={index}
      sx={{
        padding: "20px",
        borderRadius: "16px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
        width: "350px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 600,
          color: "#ffcc00",
          marginBottom: "8px",
        }}
      >
        {review.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "'Josefin Sans', sans-serif",
          color: "#000",
        }}
      >
        {review.review}
      </Typography>
    </Box>
  ));

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", padding: "40px" }}>
      {/* Back Button */}
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
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

      {/* Membership Cards Section */}
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Cooper Hewitt Heavy', sans-serif",
            fontWeight: 800,
            fontSize: "60px",
            color: "#000",
            marginBottom: "8px",
          }}
        >
          CHOOSE YOUR MEMBERSHIP PLAN
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 400,
            color: "#666",
            marginTop: "20px",
            marginBottom: "60px",
          }}
        >
          It is a disgrace to grow old through sheer carelessness before seeing
          what manner of man you may become by developing your bodily strength
          and beauty to their highest limit.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={boxVariants}
              whileHover="hover"
              style={{
                minWidth: "300px",
                padding: "20px",
                borderRadius: "16px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
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
                {plan.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: "1.2em",
                  marginBottom: "8px",
                }}
              >
                {plan.price}
              </Typography>
              {plan.savingText && (
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: "bold",
                    color: "#ff3333",
                  }}
                >
                  {plan.savingText}
                </Typography>
              )}
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Choose a Subscription Plan with Subscription Benefits */}
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          padding: "40px 20px",
          alignItems: "flex-start",
          backgroundColor: "#f8f8f8",
          borderRadius: "16px",
        }}
      >
        {/* Subscription Benefits */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Cooper Hewitt Heavy', sans-serif",
              fontWeight: 700,
              color: "#000",
              marginBottom: "16px",
            }}
          >
            Subscription Benefits
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 400,
              color: "#666",
              lineHeight: 1.5,
              marginBottom: "20px",
            }}
          >
            Enjoy all the benefits of GetFit Premium:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FitnessCenterIcon sx={{ color: "#ff6600" }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  color: "#000",
                }}
              >
                24/7 Assistance and Training
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FitnessCenterIcon sx={{ color: "#ff6600" }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  color: "#000",
                }}
              >
                Personalized Workout Plan that adapts to your needs and progress
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FitnessCenterIcon sx={{ color: "#ff6600" }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  color: "#000",
                }}
              >
                Tailored Nutrition Guidance to complement your fitness goals
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FitnessCenterIcon sx={{ color: "#ff6600" }} />
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  color: "#000",
                }}
              >
                Access to a dedicated Life Coach to help you stay motivated
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Subscription Plan Options */}
        <Paper
          elevation={3}
          sx={{
            padding: "30px",
            borderRadius: "16px",
            maxWidth: "450px",
            flexGrow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Cooper Hewitt Heavy', sans-serif",
              fontWeight: 700,
              marginBottom: "16px",
              color: "#000",
            }}
          >
            Choose a subscription plan
          </Typography>
          <RadioGroup
            name="subscription-plan"
            onChange={(e) => setSelectedPlanName(e.target.value)}
          >
            {subscriptionPlans.map((plan, index) => (
              <FormControlLabel
                key={index}
                value={plan.name}
                control={<Radio />}
                label={
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      {plan.name}
                    </Typography>
                    <Typography variant="body2">{plan.price}</Typography>
                    <Typography variant="caption" sx={{ color: "#999" }}>
                      {plan.description}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </RadioGroup>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff0000",
              color: "#fff",
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "5px",
              fontFamily: "'Josefin Sans', sans-serif",
              ":hover": {
                backgroundColor: "#ff3333",
                color: "#fff",
              },
            }}
            onClick={() => navigate(`/payment/${selectedPlanName}`)}
          >
            Checkout
          </Button>
        </Paper>
      </Box>

      {/* Carousel of Google Reviews */}
      <Box sx={{ marginTop: "100px", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Cooper Hewitt Heavy', sans-serif",
            fontWeight: 800,
            fontSize: "36px", // Increased font size for "What Our Members Are Saying"
            marginBottom: "20px",
            color: "#000",
          }}
        >
          What Our Members Are Saying
        </Typography>
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          infinite
          disableButtonsControls
          items={reviewItems}
        />
      </Box>
    </Box>
  );
};

export default SubscriptionPage;
