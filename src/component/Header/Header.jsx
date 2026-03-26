import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/app">App</NavLink>
      </li>
      <li>
        <NavLink to="/installation">Installation</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      {/* container */}
      <div className="navbar max-w-6xl mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 w-52 p-2 shadow bg-base-100 rounded-box"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <img src={logo} className="w-10 h-10" alt="Logo" />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F3] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </Link>
        </div>

        {/* CENTER (Desktop menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          {/* button */}
          <Link
            to="https://github.com/sumaiyaa005"
            target="blank"
            className="btn !px-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none"
          >
            <FaGithub /> Contribute
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
