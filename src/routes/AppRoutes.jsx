import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import Signup from "../pages/auth/Signup";
import Forget from "../pages/auth/forget";
import OtpScreen from "../pages/auth/otpScreen";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/otp-Screen" element={<OtpScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
