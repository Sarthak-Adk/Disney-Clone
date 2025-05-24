import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  py-10 px-6 text-sm">
        <div className="border-2 mb-12"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Help</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">View</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Movies</a></li>
              <li><a href="#" className="hover:text-white">TV Shows</a></li>
              <li><a href="#" className="hover:text-white">Originals</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-start justify-center gap-4 text-xl text-gray-400">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaYoutube /></a>
          <a href="#" className="hover:text-white"><FaTiktok /></a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-500 mt-8 text-xs">
        © {new Date().getFullYear()} Disney Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
