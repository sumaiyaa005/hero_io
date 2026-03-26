import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <img src={logo} className="w-9 h-9 sm:w-10 sm:h-10" alt="Logo" />
              <span className="text-white-200">HERO.IO</span>
            </Link>

            <p className="text-gray-400 leading-relaxed mt-3">
              We build productive and innovative apps that make everyday life
              simpler, smarter, and more exciting.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/sumaiyaa005"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaGithub size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebook size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="items-center">
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/app" className="hover:text-white transition-colors">
                  All Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="hover:text-white transition-colors"
                >
                  Installation
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="items-center">
            <h3 className="text-white font-semibold text-lg mb-5">
              Our Products
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  HERO Flow
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  HERO Tasks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Productivity Suite
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="items-center">
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>support@hero.io</li>
              <li>Dhaka, Bangladesh</li>
            </ul>

            <div className="mt-8">
              <h4 className="text-white font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center gap-4 text-sm text-gray-500">
          <p>© 2026 HERO.IO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
