import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 40%;
  height: 100vh;
  background-color: blue;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 5px black;
  overflow: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;

  @media (max-width: 768px) {
    padding: 1em;
  }
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

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 27px;
  font-weight: 700;
  line-height: 32.91px;
  text-align: left;
  color: white;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1em;
  overflow-y: auto;

  > p {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 32.91px;
    text-align: left;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.5em;
    gap: 5px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 0.5em;
    margin-bottom: 5px;
  }
`;

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
`;

export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProductName = styled.span`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ProductQuantity = styled.span`
  margin-top: 0.5em;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProductPrice = styled.span`
  margin-top: 0.5em;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5em;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.25em;
  }
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

  @media (max-width: 768px) {
    padding: 0.5em;
  }
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
  position: absolute;
  bottom: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.5em;
  }
`;
