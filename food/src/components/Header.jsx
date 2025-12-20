import React from 'react'
import "../pages/Home.css";
import { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const [aboutOpen, setAboutOpen] = useState(false);
    const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  return (
    <header className="home-header">
        <div className="header-left">
          <span className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </span>
          <span
            className="location-icon"
            onClick={() =>
              window.open("https://maps.app.goo.gl/D4RLpoE5EyozvK2K8", "_blank")
            }
          >
            📍Location
          </span>
        </div>
        <div className="header-right">
          <span className="icon" onClick={() => navigate("/cart")}>🛒</span>
          <span className="icon" onClick={() => setAboutOpen(true)}>👤</span>
        </div>
        {menuOpen && (
          <div className={`menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
            <a onClick={() => scrollToSection("search")}>Search</a>
            <a onClick={() => scrollToSection("popular")}>All Groceries</a>
            <a onClick={() => scrollToSection("categories")}>Grocery Category</a>
            <a onClick={() => scrollToSection("brands")}>Brands</a>
            <a onClick={() => scrollToSection("reviews")}>Reviews</a>
          </div>
        )}
        {aboutOpen && (
  <div className="about-overlay" onClick={() => setAboutOpen(false)}>
    <div className="about-box" onClick={(e) => e.stopPropagation()}>
      <h2>About Our Store</h2>

      <p>
        Our store was created to reduce your waiting time at the shop.
        Normally, when customers physically visit, they must walk around,
        find items, wait in line, and spend extra time.
      </p>

      <p>
        With our website, you can order your groceries from home. After your
        order is prepared, you will receive an email saying:
        <strong> "Your Order Is Ready for Pickup"</strong>.  
        Then you can come to the shop and pick it up immediately.
      </p>

      <p><strong>No Delivery — Pickup Only.</strong></p>

      <h3>Contact Details</h3>
      <p><strong>Email:</strong> k.niveka03@gmail.com</p>
      <p><strong>Phone:</strong> +94 76 339 7481</p>
      <p><strong>Location:</strong> Karanvavaai south karaveddy</p>

      <button className="close-btn" onClick={() => setAboutOpen(false)}>
        Close
      </button>
    </div>
  </div>
)}


      </header>

  )
}

export default Header