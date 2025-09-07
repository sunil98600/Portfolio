import React, { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[rgb(8,12,20)] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-white text-black p-2 rounded-lg">
            <FaCode className="text-xl" />
          </div>
          <span className="font-bold text-lg">Sunil Patil</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={800}
              offset={-70} // adjust for navbar height
              spy={true}
              activeClass="text-blue-400"
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Theme Icon */}
          <div className="text-xl cursor-pointer hover:text-blue-400 transition">
            <FiSun />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[rgb(8,12,20)] border-t border-gray-700 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-blue-400"
              className="block cursor-pointer hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
