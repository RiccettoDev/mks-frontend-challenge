import { useState } from "react";
import * as Styled from "./styles"
import { FaShoppingCart } from "react-icons/fa";

interface HeaderProps {
  onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: HeaderProps) {
  return (
    <Styled.Header>
      <div>
        <Styled.Title>MKS</Styled.Title>
        <Styled.Subtitle>sistemas</Styled.Subtitle>
      </div>
      <div>
        <Styled.ButtonBuy onClick={onToggleMenu}>
          <FaShoppingCart color="black" size={'28px'} />
          <Styled.TitleNumber>0</Styled.TitleNumber>
        </Styled.ButtonBuy>
      </div>
    </Styled.Header>
  );
}
