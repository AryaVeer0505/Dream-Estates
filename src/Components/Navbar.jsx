import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from "../assets/—Pngtree—simple house logo design_3633814 (1).png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getActiveClass = ({ isActive }) =>
    isActive ? "text-green-400 underline font-bold bg-black py-1 px-3 text-xl rounded-xl hover:bg-green-500 hover:text-white transition ease-in-out duration-150"
      : "text-xl text-white font-bold hover:bg-green-500 rounded-xl py-1 px-3 text-white transition ease-in-out duration-150";

  return (
    <nav className="w-full bg-black text-white flex items-center justify-between py-3 px-6 relative">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="Dream Estates Logo" className="w-10 h-10" />
        <h2 className="text-2xl font-bold">
          <span className="text-green-400">Dream</span>Estates
        </h2>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {isMenuOpen ? (
          <CloseOutlined className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(false)} />
        ) : (
          <MenuOutlined className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(true)} />
        )}
      </div>

      {/* Desktop Navigation */}
      <ul className={`flex gap-10 ${isMenuOpen ? 'absolute top-16 left-0 w-full bg-black flex-col items-center py-4' : 'hidden'} md:flex`}>
        <li><NavLink to="/" className={getActiveClass}>Home</NavLink></li>
        <li><NavLink to="/listing" className={getActiveClass}>Listing</NavLink></li>
        <li><NavLink to="/about" className={getActiveClass}>About</NavLink></li>
        <li><NavLink to="/contact" className={getActiveClass}>Contact</NavLink></li>
      </ul>

      <div className="hidden md:block">
        <NavLink
          to="/login"
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-lg font-bold transition duration-300 hover:bg-gray-600"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

