import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  calculateTotal: () => {},
  calculateItemSubtotal: () => {},
  total: 0
});



const calculateItemSubtotal = (amount, price) => {
  const itemQuantity = parseInt(amount);
  const itemPrice = parseFloat(price);
  return itemQuantity * itemPrice;
};



export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = (cart) => {
    let totalAmount = 0;
    cart.forEach((item) => {
      const itemSubtotal = calculateItemSubtotal(item.price, item.amount);
      totalAmount += itemSubtotal;
    });
    return totalAmount;
  };
  useEffect(() => {
    if (cart && cart.length > 0) {
      const totalAmount = calculateTotal(cart);
      setTotal(totalAmount);
    } else {
      setTotal(0); 
    }
  }, [cart]);
  
  
  
 
  const addItem = (item, amount) => {
    const isInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (isInCart) {
      console.log("Producto ya comprado: ", item);
    } else {
      setCart((prev) => [...prev, { ...item, amount }]);
    }
  };

  const totalAmount = cart.length;

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleRemove = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        totalAmount,
        removeItem,
        handleClearCart,
        handleRemove,
        calculateTotal,
        calculateItemSubtotal,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
