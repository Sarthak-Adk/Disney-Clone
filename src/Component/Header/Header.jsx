import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // ✅ CORRECT for menu icons
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiMiniUser,
  HiTv,
} from "react-icons/hi2"; // ✅ keep other icons from hi2

import logo from "/src/assets/Images/logo.png";

// Header item component with navigation
const HeaderItem = ({ name, Icon, to, onClick }) => (
  <Link to={to} onClick={onClick}>
    <div className="flex items-center gap-3 text-white cursor-pointer text-lg font-semibold hover:text-gray-300">
      <Icon className="w-5 h-5" />
      <p className="hidden md:block">{name}</p>
    </div>
  </Link>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome, to: "/" },
    { name: "SEARCH", icon: HiMagnifyingGlass, to: "/search" },
    { name: "WATCH LIST", icon: HiStar, to: "/watchlist" },
    { name: "ORIGINALS", icon: HiPlayCircle, to: "/originals" },
    { name: "MOVIES", icon: HiTv, to: "/movies" },
  ];

  return (
    <header className="px-4 py-3 flex items-center justify-between w-full">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt="logo"
        />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {menu.map((item, index) => (
          <HeaderItem
            key={index}
            name={item.name}
            Icon={item.icon}
            to={item.to}
          />
        ))}
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <HiMiniUser className="text-white w-6 h-6 cursor-pointer" />
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-slate-800 flex flex-col items-center justify-center space-y-6 md:hidden z-50">
          {menu.map((item, index) => (
            <HeaderItem
              key={index}
              name={item.name}
              Icon={item.icon}
              to={item.to}
              onClick={() => setMenuOpen(false)}
            />
          ))}
          <button
            className="text-white text-lg mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
