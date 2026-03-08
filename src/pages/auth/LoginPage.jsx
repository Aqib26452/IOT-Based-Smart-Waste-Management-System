import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/auth/Logo.png";
import img from "../../assets/auth/rightpic.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go one step back
  };
  return (
    <div className="flex h-screen  items-center justify-center ">
      <div className="flex items-center justify-center  h-full w-1/2">
        <img src={img} alt="illustration" className="w-[420px]" />
      </div>
      <div className="flex flex-col justify-center w-1/2 px-10 ">
        {/* Back Icon */}
        <div className="text-green-500 cursor-pointer" onClick={handleBack}>
          <ArrowLeft size={28} />
        </div>
        {/* Logo */}
        <div className="flex items-center gap-3 ">
          <img src={logo} alt="logo" className="w-[200px] h-[330] " />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold  text-center">Welcome Back</h1>

        {/* Email */}
        <div className="flex flex-col mb-5">
          <label className="text-sm mb-2 font-semibold">Email / Username</label>
          <input
            type="text"
            className="border border-gray-300 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col mb-3">
          <label className="text-sm mb-2 font-semibold">Password</label>
          <input
            type="password"
            className="border border-gray-300 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Forgot */}
        <div className="text-right mb-6">
          <a href="#" className="text-green-500 text-sm">
            Forget password?
          </a>
        </div>

        {/* Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-full text-lg ">
          Login
        </button>
        <div className=" mb-6 flex items-center gap-2 mt-3 right-0  justify-center">
          <p>Already have an account ?</p>
          <a href="#" className="text-green-500 text-sm">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
