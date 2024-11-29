import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";

const PaymentPage = () => {
  const { planName } = useParams();

  // Mock data for subscription plans
  const subscriptionPlans = {
    "1 Month Subscription": {
      price: "$75",
      description: "Pay every month. Subscription continues until cancelled.",
    },
    "3 Month Subscription": {
      price: "$270",
      description:
        "Pay every 3 months. Subscription continues until cancelled.",
    },
    "12 Month Subscription": {
      price: "$540",
      description: "Save 40% on the yearly cost compared to monthly payments.",
    },
  };

  const selectedPlan = subscriptionPlans[planName] || {};

  return (
    <Box
      sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "40px" }}
    >
      <Paper
        elevation={3}
        sx={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Cooper Hewitt Heavy', sans-serif",
            marginBottom: "20px",
          }}
        >
          Checkout
        </Typography>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h6">Selected Plan: {planName}</Typography>
          <Typography variant="body1">Price: {selectedPlan.price}</Typography>
          <Typography variant="body2">{selectedPlan.description}</Typography>
        </Box>
        {/* Payment Details Form */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TextField label="Card Number" variant="outlined" fullWidth />
          <TextField label="Expire Date" variant="outlined" fullWidth />
          <TextField label="CVC/CVV" variant="outlined" fullWidth />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff0000",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              fontFamily: "'Josefin Sans', sans-serif",
              ":hover": {
                backgroundColor: "#ff3333",
                color: "#fff",
              },
            }}
          >
            Pay Now
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default PaymentPage;
