import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, updateQty, total } = useContext(CartContext);
  const [payment, setPayment] = useState("cash");
  const navigate = useNavigate();
  const placeOrder = async () => {
    await axios.post("/checkout", {
      items: cartItems,
      total,
      payment
    });

    alert("Order placed! Check your email.");
  };

  return (
    <div className="cart-container">
      <h2>Your Basket</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item._id}>
          <h4>{item.name}</h4>
          <p>Rs. {item.price}</p>

          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) => updateQty(item._id, Number(e.target.value))}
          />
        </div>
      ))}

      <h3>Total: Rs. {total}</h3>

      <h4>Payment Method</h4>
      <label>
        <input
          type="radio"
          checked={payment === "cash"}
          onChange={() => setPayment("cash")}
        /> Cash
      </label>
      <label>
        <input
          type="radio"
          checked={payment === "card"}
          onChange={() => setPayment("card")}
        /> Card
      </label>

      <button className="place-order-btn" onClick={placeOrder}>
        Place Order
      </button>
      <button className="back-btn" onClick={() => navigate(-1)}>
  Back
</button>

    </div>
  );
}
