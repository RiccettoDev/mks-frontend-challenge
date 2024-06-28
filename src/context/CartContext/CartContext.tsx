import React, { createContext, useContext, useState, ReactNode } from 'react';
import Product from "@/pages/api/typeResponse";

interface CartContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  isMenuVisible: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, isMenuVisible, toggleMenu, closeMenu }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
