import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/auth/Login_Logo.png";
import img from "../../assets/auth/Right_Img.png";
import "../../style/auth.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="h-screen w-full bg-white flex   p-0 m-0">
      {/* Main Card */}
      <div className="flex w-full   S overflow-hidden ">
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
        <div className="w-1/2 flex flex-col justify-center items-center    md:px-12">
          {/* Back Button */}
          <div
            className="text-green-600 cursor-pointer  mb-[-50px] w-full "
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

          <p className="text-center text-gray-500 mb-6 font-bold">
            Create the account
          </p>

          {/* UserName */}
          <div className="flex flex-col mb-4 w-full">
            <label className="text-sm font-semibold mb-2">Name</label>

            <input
              type="text"
              placeholder="Enter Name"
              className="border border-gray-300 rounded-full  px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          {/* Email */}

          <div className="flex flex-col mb-4 w-full">
            <label className="text-sm font-semibold mb-2">Email</label>

            <input
              type="text"
              placeholder="Enter email"
              className="border border-gray-300 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-4 w-full">
            <label className="text-sm font-semibold mb-2">
              Create Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="border border-gray-300 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Login Button */}
          <button className="w-full cursor-pointer bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-full text-lg font-semibold">
            SIGN UP
          </button>

          {/* Signup */}
          <div className="flex justify-center items-center gap-2 mt-5">
            <p className="text-sm">Do you have an account..?</p>
            <span
              onClick={handleLogin}
              className="text-green-600 text-sm font-medium cursor-pointer"
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
