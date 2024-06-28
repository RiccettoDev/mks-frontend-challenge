import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 30%;
  height: 100vh;
  background-color: blue;
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 5px black; /* Sombra ao redor do card */
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

export const HeaderClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: white;
  border-radius: 50%;
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
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ValorMenu = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  bottom: 15%;
  position: absolute;
  z-index: 1;
`;

export const FooterMenu = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;