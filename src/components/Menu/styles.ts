// styles.ts
import styled from 'styled-components';

export const ContainerMenu = styled.div`
  width: 30%;
  height: 100vh;
  background-color: blue;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 5px black; /* Sombra ao redor do menu */
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
`;

export const HeaderName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 27px;
  font-weight: 700;
  line-height: 32.91px;
  text-align: left;
  color: white;
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1em;
  overflow-y: auto; /* Para scroll se houver muitos itens */
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;

export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.span`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

export const ProductQuantity = styled.span`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
`;

export const ValorMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: blue;
  border-top: 1px solid #ccc;
  position: absolute;
  bottom: 12%;
`;

export const FooterMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  text-align: center;
  background-color: black;
  color: white;
  padding: 2em;
  bottom: 0;
  position: absolute;
  z-index: 1;
  cursor: pointer;
`;
