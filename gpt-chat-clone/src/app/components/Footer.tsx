import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50 text-gray-600 text-sm py-4 px-6 mt-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* App info */}
        <div className="mb-2 sm:mb-0">
          ChatGPT Clone © {new Date().getFullYear()} — v1.0.0
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <Link to="/terms" className="hover:underline hover:text-purple-800">
            Terms & Conditions
          </Link>
          <Link to="/about" className="hover:underline hover:text-purple-800">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
