import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PlaceOrder from "../components/PlaceOrder";
import "./Cart.css";
import empty from "../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, updateQty, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="cart-page">
      <h2>Confirm your pickup order</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart-box">
          <img src={empty} alt="empty cart" />
          <p>Your cart is empty</p>
          <button className="close-btn" onClick={() => navigate("/home")}>
            Close
          </button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-product" key={item._id}>
                <span>{item.name}</span>

                <div className="qty-controls">
                  <button onClick={() => updateQty(item._id, item.qty - 1)}>
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item._id, item.qty + 1)}>
                    +
                  </button>
                </div>

                <span className="price">Rs. {item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <h3>Total: Rs. {total}</h3>

          <div className="payment-box">
            <h4>Payment Method</h4>
            <p className="cash-only">Cash on Pickup Only ✔</p>
          </div>
          <PlaceOrder cartItems={cartItems} total={total} />
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <button className="close-btn" onClick={() => navigate("/home")}>
            Close
          </button>
        </>
      )}
    </div>
  );
}
