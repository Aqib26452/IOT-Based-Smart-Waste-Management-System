import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-500">SB</div>

          {/* Menu */}
          <div className="flex items-center gap-8 text-gray-700 font-medium">
            <Link to="/">Homepage</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/features">Features</Link>
            <Link to="/services">Services</Link>
            <Link to="/awareness">Awareness</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-green-500 text-white px-5 py-2 rounded-full font-medium hover:bg-green-600 transition"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
