import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import Signup from "../pages/auth/Signup";
import Forget from "../pages/auth/forget";
import OtpScreen from "../pages/auth/otpScreen";
import CollectorLayout from "../layouts/CollectorLayout";
import CollectorDashboard from "../pages/dashboard/collectorDashboard/CollectorDashboard";
import Tasks from "../pages/dashboard/collectorDashboard/Tasks";
import Reports from "../pages/dashboard/collectorDashboard/Reports";
import Profile from "../pages/dashboard/collectorDashboard/Profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/otp-Screen" element={<OtpScreen />} />
        <Route path="/Collector-Dashboard" element={<CollectorLayout />}>
          <Route index element={<CollectorDashboard />} />
          <Route path="tasks" element={<Tasks />} />
          {/* <Route path="routes" element={<RoutesPage />} /> */}
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
