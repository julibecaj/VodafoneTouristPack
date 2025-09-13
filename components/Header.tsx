"use client";
import img from "./../public/assets/logo.webp";

import Link from "next/link";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "eShop", href: "/eShop/page" },
    { name: "Tourist Pack", href: "/TouristsPack" },
    { name: "Support", href: "/Support" },
    { name: "Log In", href:"/LogIn"},
    { name: "Profile", href:"/User" },
  ];

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <Image
          src={img}
          objectFit="contain"
          alt="vodafone logo"
          width={50}
          height={50}
        />

        {/* Desktop Navigation */}
        <nav className="nav">
          {menuItems.map((item) => (
            <ul key={item.name} className="nav-link">
              {/* check this*/}
              <Link href = {item.href} className = "nav-link">
                {item.name}
              </Link>
            </ul>
          ))}
        </nav>

        {/* Header Buttons */}
        <div className="header-buttons">
          <button className="header-button">🔍</button>
          <div className="search-container">
            <input type="text" placeholder="Search"/>
          </div>
          <button className="header-button">🛒</button>
          <Link href={"./User"} className="profile-button">👤</Link>
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
