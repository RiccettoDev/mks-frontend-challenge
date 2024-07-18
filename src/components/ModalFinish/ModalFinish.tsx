import * as Styled from "./styles";
import { useCart } from "@/context/CartContext/CartContext";

export default function ModalFinish() {
  const { closeModal } = useCart();

  return (
    <>
      <Styled.Backdrop onClick={closeModal} />
      <Styled.ContainerModal>
        Obrigado pela sua compra!
      </Styled.ContainerModal>
    </>
  );
}
