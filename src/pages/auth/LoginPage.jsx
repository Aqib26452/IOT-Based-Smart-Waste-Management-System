import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/auth/Login_Logo.png";
import img from "../../assets/auth/Right_Img.png";
import "../../style/auth.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  const handleForgot = () => {
    navigate("/forget");
  };
  return (
    <div className="h-screen w-full bg-white flex   p-0 m-0">
      {/* Main Card */}
      <div className="flex w-full  bg-white  shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
        {/* LEFT SIDE */}
        <div
          className="w-1/2 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#22C55E" }}
        >
          <img
            src={img}
            alt="illustration"
            className="w-[1020px] object-contain animate-float"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex flex-col justify-center md:px-12">
          {/* Back Button */}
          <div
            className="text-green-600 cursor-pointer  mt-4"
            onClick={handleBack}
          >
            <ArrowLeft size={26} />
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-[220px] mb-[-30px]" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center">Welcome Back</h1>

          <p className="text-center text-gray-500 mb-6">
            Enter your email and password to sign in
          </p>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label className="text-sm font-semibold mb-2">
              Email / Username
            </label>

            <input
              type="text"
              placeholder="Enter email"
              className="border border-gray-300 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-2">
            <label className="text-sm font-semibold mb-2">Password</label>

            <input
              type="password"
              placeholder="Enter password"
              className="border border-gray-300 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center mb-6 mt-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">Remember me</span>
            </div>
            <span
              onClick={handleForgot}
              className="text-green-600 text-sm cursor-pointer"
            >
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <button className="bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-full text-lg font-semibold">
            LOG IN
          </button>

          {/* Signup */}
          <div className="flex justify-center items-center gap-2 mt-5">
            <p className="text-sm">Don't have an account?</p>
            <span
              onClick={handleSignup}
              className="text-green-600 text-sm font-medium cursor-pointer"
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
