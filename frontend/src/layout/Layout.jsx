import React, { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Outlet, Link, Navigate } from "react-router-dom";

const Layout = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-content">
          <h1>Code Challenger</h1>

          <button className="mobile-nav-toggle" onClick={toggleNav}>
            ☰
          </button>

          <nav className={`nav-links ${isMobileNavOpen ? "open" : ""}`}>
            <SignedIn>
              <Link to="/" onClick={() => setIsMobileNavOpen(false)}>
                Generate Challenge
              </Link>
              <Link to="/history" onClick={() => setIsMobileNavOpen(false)}>
                History
              </Link>
              <UserButton />
            </SignedIn>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <SignedOut>
          <Navigate to="/sign-in" replace />
        </SignedOut>
        <SignedIn>
          <Outlet />
        </SignedIn>
      </main>
    </div>
  );
};

export default Layout;
