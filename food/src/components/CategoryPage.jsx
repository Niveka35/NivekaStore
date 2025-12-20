import {Link} from "react-router-dom";
import "../pages/Home.css";
import fruits from "../assets/categories/fruits.png";
import vegetables from "../assets/categories/vegetables.png";
import dairy from "../assets/categories/dairy.png";
import beverages from "../assets/categories/beverages.png";
import snacks from "../assets/categories/snacks.png";
import cans from "../assets/categories/cans.png";
import household from "../assets/categories/household.png";
import baby from "../assets/categories/baby.png";

const CategoryPage = () => {

  return (
    <div>
      <section className="section" id="categories" >
  <h2>Groceries by Category</h2>
  <div className="category-grid">

    <Link to="/category/Fruits" onClick={() => {
    sessionStorage.setItem("homeScroll",window.scrollY);
  }} className="category-card">
      <img src={fruits} alt="Fruits" />
      <p>Fruits</p>
    </Link>

    <Link to="/category/Vegetables" onClick={() => {
    sessionStorage.setItem("homeScroll", window.scrollY);
  }} className="category-card">
      <img src={vegetables} alt="Vegetables" />
      <p>Vegetables</p>
    </Link>

    <Link to="/category/Dairy" onClick={() => {
    sessionStorage.setItem("homeScroll", window.scrollY);
  }} className="category-card">
      <img src={dairy} alt="Dairy" />
      <p>Dairy</p>
    </Link>

    <Link to="/category/Beverages" className="category-card" onClick={() => {
    sessionStorage.setItem("homeScroll", window.scrollY);
  }}>
      <img src={beverages} alt="Beverages" />
      <p>Beverages</p>
    </Link>

    <Link to="/category/Snacks" className="category-card" onClick={() => {
    sessionStorage.setItem("homeScroll", window.scrollY);
  }}>
      <img src={snacks} alt="Snacks" />
      <p>Snacks</p>
    </Link>

    <Link to="/category/CansAndJars" className="category-card" onClick={() => {
    sessionStorage.setItem("homeScroll", window.scrollY);
  }}>
      <img src={cans} alt="Cans" />
      <p>Cans & Jars</p>
    </Link>

    <Link to="/category/Household" className="category-card" onClick={() => {
    sessionStorage.setItem("homeScroll", window.scrollY);
  }}>
      <img src={household} alt="Household" />
      <p>Household & Cleaning</p>
    </Link>

    <Link to="/category/Baby" className="category-card" onClick={() => {
    sessionStorage.setItem("homeScroll", window.scrollY);
  }}>
      <img src={baby} alt="Baby" />
      <p>Baby Items</p>
    </Link>

  </div>
</section>
    </div>
  )
}

export default CategoryPage


