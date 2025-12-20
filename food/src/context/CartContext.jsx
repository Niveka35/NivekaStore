import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i._id === item._id);

      if (existing) {
        return prev.map((i) =>
          i._id === item._id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCartItems(prev =>
      prev.map(item => item._id === id ? { ...item, qty } : item)
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQty, total }}>
      {children}
    </CartContext.Provider>
  );
};
