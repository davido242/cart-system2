import { createContext, useState, useEffect } from 'react';

export const cartContext = createContext();

export const CartProvider = ({ childre }) => {
  const [cartItems, setCartItems] = useState([])
}