import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Brand.css";

const Brand = () => {
  const { brandName } = useParams(); // Get brand name from URL
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items?brand=${brandName}`)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, [brandName]);

  return (
    <div className="brand-page">
    <h1>Brand-{brandName}</h1>
      <div className="item-grid">
        {items.length === 0 ? (
          <p class="no">No items found in this category.</p>
        ) : (
          items.map((item) => (
          <div className="item-card" key={item._id}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.quantity} &nbsp;&nbsp; Rs. {item.price}</p>
            <div className="qty-box">
              <button onClick={() => decreaseQty(item._id)}>−</button>
              <span>{quantities[item._id] || 0}</span>
              <button onClick={() => increaseQty(item._id)}>+</button>
            </div>
          </div>
        )))}
         </div>
  </div>
  );
};

export default Brand;

      

  