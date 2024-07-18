import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  photo: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  isMenuVisible: boolean;
  toggleModal: () => void;
  closeModal: () => void;
  isModalVisible: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === productId);
      if (item && item.quantity > 1) {
        return prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter(item => item.id !== productId);
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const toggleModal = () => {
    setIsModalVisible(prev => !prev);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        toggleMenu,
        closeMenu,
        isMenuVisible,
        toggleModal,
        closeModal,
        isModalVisible
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
