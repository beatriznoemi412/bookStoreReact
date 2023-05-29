import React, { createContext, useState } from 'react';


export const CartContext = createContext({
  cart: []
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, amount) => {
    const isInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isInCart) {
      console.log("Producto ya comprado: ", item);
    } else {
      setCart((prev) => [...prev, {...item, amount}]);
    }
  };

  const totalAmount = cart.length;

  const removeItem = (itemId) =>{
    const cartUpdated = cart.filter((prod) => prod.id !== itemId)
    setCart(cartUpdated)
  }
  const clearCart = () =>{
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addItem, totalAmount, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )

};