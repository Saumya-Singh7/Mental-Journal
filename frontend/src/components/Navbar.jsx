
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 
      bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200">
      <h1 className="text-2xl font-bold text-pink-500 tracking-wide">Mental Journal</h1>
      <ul className="flex gap-8 font-medium text-gray-700">
        <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-pink-500 transition">About</Link></li>
        <li><Link to="/login" className="hover:text-pink-500 transition">Login</Link></li>
        <li><Link to="/dashboard" className="hover:text-pink-500 transition">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;