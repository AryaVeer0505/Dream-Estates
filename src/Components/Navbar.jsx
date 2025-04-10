import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from "../assets/logo.png";

const LoginDropdown = () => (
  <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-48 z-50 transition-opacity duration-200 ease-in-out">
    <NavLink
      to="/login/user"
      className="block px-4 py-2 hover:bg-gray-200 font-medium"
    >
      Login as User
    </NavLink>
    <NavLink
      to="/login/owner"
      className="block px-4 py-2 hover:bg-gray-200 font-medium"
    >
      Login as Property Owner
    </NavLink>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLoginDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".login-dropdown")) {
        setIsLoginDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const getActiveClass = ({ isActive }) =>
    isActive
      ? "text-green-400 font-bold text-lg transition ease-in-out duration-150"
      : "text-lg text-white font-bold hover:text-green-500 transition ease-in-out duration-150";

  return (
    <nav
      className="w-full bg-black text-white flex items-center justify-between py-3 px-6 relative"
      aria-label="Main Navigation"
      aria-expanded={isMenuOpen}
    >

      <NavLink to="/" className="flex items-center gap-3">
        <img src={Logo} alt="Dream Estates Logo" className="w-10 h-10" />
        <h2 className="text-2xl font-bold">
          <span className="text-green-400">Dream</span>Estates
        </h2>
      </NavLink>

      <div className="md:hidden">
        {isMenuOpen ? (
          <CloseOutlined
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
            aria-label="Close menu"
          />
        ) : (
          <MenuOutlined
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
            aria-label="Open menu"
          />
        )}
      </div>

      <ul
        className={`flex gap-15 ${
          isMenuOpen
            ? 'absolute top-16 left-0 w-full bg-black flex-col items-center py-4 transition-all duration-300 ease-in-out z-50 h-screen overflow-hidden'
            : 'hidden'
        } md:flex md:static md:flex-row md:items-center`}
      >
        <li><NavLink to="/" className={getActiveClass}>Home</NavLink></li>
        <li><NavLink to="/listing" className={getActiveClass}>Listing</NavLink></li>
        <li><NavLink to="/about" className={getActiveClass}>About</NavLink></li>
        <li><NavLink to="/contact" className={getActiveClass}>Contact</NavLink></li>
        <li><NavLink to="/addProperty" className={getActiveClass}>Add Property</NavLink></li>

        <li className="block md:hidden relative login-dropdown">
          <button
            onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-lg font-bold transition duration-300 hover:bg-gray-600"
            aria-haspopup="true"
            aria-expanded={isLoginDropdownOpen}
          >
            Login
          </button>
          {isLoginDropdownOpen && <LoginDropdown />}
        </li>
      </ul>


      <div className="hidden md:block relative login-dropdown">
        <button
          onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-lg font-bold transition duration-300 hover:bg-gray-600"
          aria-haspopup="true"
          aria-expanded={isLoginDropdownOpen}
        >
          Login
        </button>
        {isLoginDropdownOpen && <LoginDropdown />}
      </div>
    </nav>
  );
};
export default Navbar; 


