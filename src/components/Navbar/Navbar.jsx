import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();

  // Update active menu based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setMenu("home");
    else if (path.includes("/about")) setMenu("about");
    else if (path.includes("/work")) setMenu("work");
    else if (path.includes("/blog")) setMenu("blog");
    else if (path.includes("/contact")) setMenu("contact");
  }, [location]);

  return (
    <nav className="transparent-nav py-4 px-24 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-gray-800">PORT</span>
        <span className="text-gray-400">FOLIO</span>
      </div>

      {/* Navbar Links */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link className="nav-link" to="/">
            Home
            {menu === "home" && <hr className="custom-hr" />}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
            {menu === "about" && <hr className="custom-hr" />}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/work">
            Projects
            {menu === "work" && <hr className="custom-hr" />}
          </Link>
        </li>
        
        <li>
          <Link className="nav-link" to="/contact">
            Contact
            {menu === "contact" && <hr className="custom-hr" />}
          </Link>
        </li>
      </ul>

      {/* Mobile menu (Hamburger icon) */}
      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
