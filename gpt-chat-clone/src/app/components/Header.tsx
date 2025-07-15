import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated, onLogin, onLogout }) {
  return (
    <header className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-50">
      {/* Logo - links to home page */}
      <div className="text-2xl font-bold text-purple-800">
        <Link to="/" className="text-purple-700 hover:text-purple-950">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4"
              y="8"
              width="56"
              height="40"
              rx="8"
              ry="8"
              fill="currentColor"
              stroke="#5B21B6"
              stroke-width="2"
            />
            <path
              d="M20 48 L28 56 L28 48 Z"
              fill="currentColor"
              stroke="#5B21B6"
              stroke-width="2"
            />
            <path
              d="M24 20 h12 a6 6 0 1 1 -6 6"
              stroke="white"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
            />
            <path
              d="M36 20 v12 a6 6 0 1 1 -6 -6"
              stroke="white"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
            />
            <path
              d="M42 20 h8 M46 20 v16"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </Link>
      </div>

      {/* Navigation links */}
      <nav className="flex space-x-6 text-purple-600 font-medium">
        <Link to="/" className="hover:text-purple-800">
          Home
        </Link>
        <Link to="/profile" className="hover:text-purple-800">
          Profile
        </Link>
        <Link to="/chat" className="hover:text-purple-800">
          Chat
        </Link>
      </nav>

      {/* Login / Logout button based on authentication */}
      <div>
        {isAuthenticated ? (
          <button
            onClick={onLogout}
            className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={onLogin}
            className="px-4 py-2 text-sm font-semibold text-white bg-purple-700 rounded hover:bg-purple-950 transition"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
