import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, amount) => {
    if (!isInCart(item.id)) {
      setCart(prevState => [...prevState, { ...item, amount }]);
    } else {
      console.error("Producto ya fue agregado al carrito");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(({ item }) => item.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(({ item }) => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
