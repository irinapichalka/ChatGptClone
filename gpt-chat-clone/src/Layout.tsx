import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './app/components/Header';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';

function Layout() {
  // Manage authentication state here (or use context, redux, etc)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <div className="flex">
        <Sidebar />
        {/* Outlet renders the matched child route component */}
        <main className="flex-9">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
