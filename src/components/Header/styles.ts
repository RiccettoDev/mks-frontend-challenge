import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: blue;
  padding: 0 65px;

  > div {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 10px;
    color: white;
  }

  @media (max-width: 768px) {
    height: 70px;
    padding: 0 20px;

    > div {
      margin: 0;
      gap: 5px;
    }
  }
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 300;
  line-height: 19px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ButtonBuy = styled.button`
  background-color: white;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80px;
    height: 40px;
    padding: 15px;
  }
`;

export const TitleNumber = styled.div`
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
  color: black;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
