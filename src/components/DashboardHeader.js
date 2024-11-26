import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2E2E2E" }}>
      <Toolbar sx={{ justifyContent: "space-around" }}>
        <IconButton
          color="inherit"
          onClick={() => navigate("/workout")}
          title="Workout"
        >
          <FitnessCenterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          onClick={() => navigate("/settings")}
          title="Settings"
        >
          <SettingsIcon />
        </IconButton>
        <IconButton
          color="inherit"
          onClick={() => navigate("/why-you-started")}
          title="Why You Started"
        >
          <EmojiObjectsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
