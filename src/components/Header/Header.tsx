import React from 'react';
import * as Styled from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '@/context/CartContext/CartContext';

export default function Header() {
  const { cartItems, toggleMenu } = useCart();

  return (
    <Styled.Header>
      <div>
        <Styled.Title>MKS</Styled.Title>
        <Styled.Subtitle>sistemas</Styled.Subtitle>
      </div>
      <div>
        <Styled.ButtonBuy onClick={toggleMenu}>
          <FaShoppingCart color="black" size={'28px'} />
          <Styled.TitleNumber>{cartItems.length}</Styled.TitleNumber>
        </Styled.ButtonBuy>
      </div>
    </Styled.Header>
  );
};
