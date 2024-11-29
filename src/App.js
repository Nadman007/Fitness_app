import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard"; // Default import
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PersonalTraining from "./pages/PersonalTraining";
import Questionnaire from "./pages/Questionnaire";
import WilliamPage from "./pages/WilliamPage";
import PrincePage from "./pages/PrincePage";
import ChrisPage from "./pages/ChrisPage";
import BookPersonalTrainer from "./pages/BookPersonalTrainer";
import SubscribePage from "./pages/SubscribePage";
import PaymentPage from "./pages/PaymentPage";

import "./fonts/fonts.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* Sign-Up Page */}
        <Route path="/signup" element={<SignUp />} />
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        {/* Individual Trainer Pages */}
        <Route path="/trainer/william-v" element={<WilliamPage />} />
        <Route path="/trainer/prince-n" element={<PrincePage />} />
        <Route path="/trainer/chris-b" element={<ChrisPage />} />
        <Route
          path="/book-now/:trainerName"
          element={<BookPersonalTrainer />}
        />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/payment/:planName" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
