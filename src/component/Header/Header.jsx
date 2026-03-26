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
        <NavLink to="/allAppPage">App</NavLink>
      </li>
      <li>
        <NavLink to="/installApp">Installation</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      {/* container */}
      <div className="navbar max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
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
              className="menu menu-sm dropdown-content mt-3 z-[50] w-52 p-2 shadow bg-base-100 rounded-box"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <img src={logo} className="w-9 h-9 sm:w-10 sm:h-10" alt="Logo" />
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
          <a
            href="https://github.com/sumaiyaa005"
            target="_blank"
            className="btn !px-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none"
          >
            <FaGithub />
            <span className="hidden sm:inline ml-2">Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
