import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TodayWorkoutCard = () => {
  const workout = ["Push-ups", "Pull-ups", "Squats"]; // Replace with dynamic data

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Today's Workout
        </Typography>
        {workout.map((exercise, index) => (
          <Typography key={index} variant="body1">
            - {exercise}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default TodayWorkoutCard;
