import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Footer Left - Company Info */}
        <div className="mb-6 sm:mb-0 text-2xl font-bold">
        <span className="text-gray-800">PORT</span>
        <span className="text-gray-400">FOLIO</span>
        </div>

        {/* Footer Right - Links */}
        {/* <div className="flex space-x-6">
          <Link to='/' className="hover:text-white transition duration-300">Home</Link>
          <Link to='/about' className="hover:text-white transition duration-300">About Me</Link>
          <Link to='/work' className="hover:text-white transition duration-300">My Work</Link>
          <Link to='/contact' className="hover:text-white transition duration-300">Contact Me</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
