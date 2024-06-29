import React from 'react';
import { IoCloseCircle } from "react-icons/io5";
import * as Styled from './styles';
import { useCart } from '@/context/CartContext/CartContext';

export default function Menu() {
  const { cartItems, closeMenu, removeFromCart, toggleModal, clearCart } = useCart();

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price as any) * parseFloat(item.quantity as any);
        return total + (isNaN(price) ? 0 : price);
      }, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    clearCart();
    toggleModal();
    closeMenu();
  };

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
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          cartItems.map(item => (
            <Styled.ProductCard key={item.id}>
              <Styled.ProductImage src={item.photo} alt={item.name} />
              <Styled.ProductDetails>
                <Styled.ProductName>{item.name}</Styled.ProductName>
                <Styled.ProductQuantity>Qtd: {item.quantity}x</Styled.ProductQuantity>
                <Styled.ProductPrice>R${item.price * item.quantity}</Styled.ProductPrice>
              </Styled.ProductDetails>
              <Styled.RemoveButton onClick={() => removeFromCart(item.id)}>
                Remover
              </Styled.RemoveButton>
            </Styled.ProductCard>
          ))
        )}
      </Styled.ContainerProducts>
      <Styled.ValorMenu>
        <Styled.Title>
          Total:
        </Styled.Title>
        <Styled.Title>
          R${calculateTotal()}
        </Styled.Title>
      </Styled.ValorMenu>
      <Styled.FooterMenu onClick={handleCheckout}> {/* Use handleCheckout no onClick */}
        <Styled.Title>
          Finalizar Compra
        </Styled.Title>
      </Styled.FooterMenu>
    </Styled.ContainerMenu>
  );
}
