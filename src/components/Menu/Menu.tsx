import { IoCloseCircle } from "react-icons/io5";
import * as Styled from './styles'

interface MenuProps {
  onClose: () => void;
}

export default function Menu({ onClose }: MenuProps) {
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
        <Styled.HeaderClose onClick={onClose}>
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
}
