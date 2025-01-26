import React, { createContext, useContext, useState } from "react";

// ایجاد context
const CartContext = createContext();

// یک hook برای استفاده از context
export const useCart = () => {
  return useContext(CartContext);
};

// کامپوننت برای مدیریت سبد خرید
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productName, price, quantity) => {
    setCart((prevCart) => {
      // چک میکنیم که آیا محصول با همین نام قبلاً در سبد خرید موجود هست یا نه
      const existingProduct = prevCart.find(item => item.name === productName);

      if (existingProduct) {
        // اگر محصول موجود بود، تعدادش رو افزایش میدیم
        return prevCart.map(item =>
          item.name === productName ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        // در غیر این صورت محصول جدید به سبد خرید اضافه میشه
        return [...prevCart, { name: productName, price, quantity }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter(item => item.name !== productName));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
