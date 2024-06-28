import React from 'react';
import { IoCloseCircle } from "react-icons/io5";
import * as Styled from './styles';
import { useCart } from '@/context/CartContext/CartContext';

export default function Menu() {
  const { closeMenu } = useCart();

  return (
    <Styled.ContainerMenu>
      <Styled.HeaderMenu>
        <Styled.HeaderName>
          <Styled.Title>
            Carrinho
          </Styled.Title>
          <Styled.Title>
            de compras
          </Styled.Title>
        </Styled.HeaderName>
        <Styled.HeaderClose onClick={closeMenu}>
          <IoCloseCircle style={{
            width: '100%',
            height: '100%',
          }} />
        </Styled.HeaderClose>
      </Styled.HeaderMenu>
      <Styled.ContainerProducts>
        teste
      </Styled.ContainerProducts>
      <Styled.ValorMenu>
        <Styled.Title>
          Total:
        </Styled.Title>
        <Styled.Title>
          R$798
        </Styled.Title>
      </Styled.ValorMenu>
      <Styled.FooterMenu>
        <Styled.Title>
          Finalizar Compra
        </Styled.Title>
      </Styled.FooterMenu>
    </Styled.ContainerMenu>
  );
};
