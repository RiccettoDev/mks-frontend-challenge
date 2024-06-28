import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: blue;

  > div {
    margin-left: 65px;
    margin-right: 75px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 10px;
    color: white;
  }
`

export const Title = styled.div`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
`;

export const Subtitle = styled.div`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 300;
  line-height: 19px;
  text-align: left;
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
`;

export const TitleNumber = styled.div`
  font-family: Montserrat;
  font-size: 25px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
  color: black;
`;