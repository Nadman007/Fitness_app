import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    heightUnit: "cm",
    weightUnit: "kg",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    navigate("/dashboard"); // Redirect to the dashboard after form submission
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5", // Light background
      }}
    >
      {/* Centered Form */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 700,
            marginBottom: "24px",
            textAlign: "center",
            color: "#000",
          }}
        >
          Personal Information
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px", // Space between elements
          }}
        >
          {/* Height */}
          <Box sx={{ display: "flex", gap: "16px" }}>
            <TextField
              fullWidth
              label="Height"
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
              sx={{
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                input: { color: "#000" },
                label: { color: "#777" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ddd", borderRadius: "8px" },
                  "&:hover fieldset": { borderColor: "#000" },
                },
              }}
              inputProps={{
                step: "any",
              }}
            />
            <FormControl
              sx={{
                minWidth: 120,
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
              }}
              disabled
            >
              <InputLabel
                sx={{ color: "#777", "&.Mui-focused": { color: "#000" } }}
              >
                Unit
              </InputLabel>
              <Select
                name="heightUnit"
                value="cm"
                sx={{
                  color: "#000",
                  ".MuiOutlinedInput-notchedOutline": { borderColor: "#ddd" },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000",
                  },
                }}
              >
                <MenuItem value="cm">cm</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Weight */}
          <Box sx={{ display: "flex", gap: "16px" }}>
            <TextField
              fullWidth
              label="Weight"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              sx={{
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                input: { color: "#000" },
                label: { color: "#777" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ddd", borderRadius: "8px" },
                  "&:hover fieldset": { borderColor: "#000" },
                },
              }}
              inputProps={{
                step: "any",
              }}
            />
            <FormControl
              sx={{
                minWidth: 120,
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              <InputLabel
                sx={{ color: "#777", "&.Mui-focused": { color: "#000" } }}
              >
                Unit
              </InputLabel>
              <Select
                name="weightUnit"
                value={formData.weightUnit}
                onChange={handleChange}
                sx={{
                  color: "#000",
                  ".MuiOutlinedInput-notchedOutline": { borderColor: "#ddd" },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000",
                  },
                }}
              >
                <MenuItem value="kg">kg</MenuItem>
                <MenuItem value="lbs">lbs</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Age */}
          <TextField
            fullWidth
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            sx={{
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              input: { color: "#000" },
              label: { color: "#777" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ddd", borderRadius: "8px" },
                "&:hover fieldset": { borderColor: "#000" },
              },
            }}
            inputProps={{
              step: "any",
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: 600,
              fontFamily: "'Josefin Sans', sans-serif",
              borderRadius: "30px",
              padding: "12px 0",
              ":hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Questionnaire;
