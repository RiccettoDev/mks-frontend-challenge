import React from "react";
import * as Styled from "./styles";
import Product from "@/pages/api/typeResponse";
import { useCart } from "@/context/CartContext/CartContext";

interface CardProps {
  product: Product;
  showLink?: boolean;
}

export default function Card({ product }: CardProps) {
  const { addToCart } = useCart();

  const productWithQuantity = {
    ...product,
    quantity: 1
  };

  return (
    <Styled.Main>
      <Styled.Information>
        <img
          src={product.photo}
          alt={product.name}
          style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <Styled.SubInformation>
          <h2>{product.name}</h2>
          <div>
            <h2>R${Math.round(product.price)}</h2>
          </div>
        </Styled.SubInformation>

        <h4>{product.description}</h4>
      </Styled.Information>
      <div>
        <Styled.Buy onClick={() => addToCart(productWithQuantity)}>
          COMPRAR
        </Styled.Buy>
      </div>
    </Styled.Main>
  );
};
