import * as Styled from "./styles"
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <Styled.Header>
      <div>
        <Styled.Title>MKS</Styled.Title>
        <Styled.Subtitle>sistemas</Styled.Subtitle>
      </div>
      <div>
        <Styled.ButtonBuy>
          <FaShoppingCart color="black" size={'28px'} />
          <Styled.TitleNumber>0</Styled.TitleNumber>
        </Styled.ButtonBuy>
      </div>
    </Styled.Header>
  )
}