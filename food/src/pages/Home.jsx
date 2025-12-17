import React from "react";
import "./Home.css";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="home-page">

      {/* HEADER */}
      <header className="home-header">
        <div className="header-left">
          <span className="location-icon">KS</span>
          <span className="location-text" onClick={() =>
    window.open("https://maps.app.goo.gl/D4RLpoE5EyozvK2K8","_blank")}>📍</span>
        </div>

        <div className="header-right">
          <span className="icon">🛒</span>
          <span className="icon">👤</span>
        </div>
      </header>

      {/* BODY */}
      <main className="home-body">

        {/* SHOP BY CATEGORY */}
        <section className="section">
          <h2>Shop by Category</h2>
          <div className="category-grid">
            <div className="category-card">Fruits</div>
            <div className="category-card">Vegetables</div>
            <div className="category-card">Dairy</div>
            <div className="category-card">Beverages</div>
            <div className="category-card">Snacks</div>
          </div>
        </section>

        {/* SHOP BY BRAND */}
        <section className="section">
          <h2>Shop by Brand</h2>
          <div className="brand-grid">
            <div className="brand-card">Anchor</div>
            <div className="brand-card">Nestlé</div>
            <div className="brand-card">Munchee</div>
            <div className="brand-card">Maliban</div>
          </div>
        </section>

        {/* ITEMS */}
        <section className="section">
          <h2>Popular Items</h2>
          <div className="item-grid">
            <div className="item-card">
              <p>Rice 5kg</p>
              <span>Rs. 1200</span>
            </div>
            <div className="item-card">
              <p>Milk Powder</p>
              <span>Rs. 950</span>
            </div>
            <div className="item-card">
              <p>Sugar 1kg</p>
              <span>Rs. 420</span>
            </div>
            <div className="item-card">
              <p>Tea Pack</p>
              <span>Rs. 780</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
