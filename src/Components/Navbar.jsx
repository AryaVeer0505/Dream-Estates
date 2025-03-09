import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/—Pngtree—simple house logo design_3633814 (1).png";

const Navbar = () => {
  const getActiveClass = ({ isActive }) => 
    isActive ? "text-green-400 underline font-bold bg-black py-2 px-3 text-xl" : "text-xl text-white font-bold hover:bg-green-400 rounded-xl py-2 px-3";

  return (
    <nav className="w-full bg-black text-white flex justify-between items-center py-3 px-6">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="Dream Estates Logo" className="w-10 h-10" />
        <h2 className="text-2xl font-bold">
          <span className="text-green-400">Dream</span>Estates
        </h2>
      </div>
      <ul className="flex gap-20">
        <li><NavLink to="/" className={getActiveClass}>Home</NavLink></li>
        <li><NavLink to="/listing" className={getActiveClass}>Listing</NavLink></li>
        <li><NavLink to="/about" className={getActiveClass}>About</NavLink></li>
        <li><NavLink to="/contact" className={getActiveClass}>Contact</NavLink></li>
      </ul>
      <div>
        <NavLink to="/login" className="bg-green-500 text-white px-4 py-2 rounded-lg text-lg font-bold transition duration-300 hover:bg-gray-600">
          Login
        </NavLink>
      </div>

    </nav>
  );
}

export default Navbar;
