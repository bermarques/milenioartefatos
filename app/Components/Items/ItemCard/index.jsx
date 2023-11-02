import { Container, Descricao, VerDetalhes } from "./styles";
import Image from "next/image";

const Item = ({ descricao, img }) => {
  return (
    <Container>
      <Image
        width={218}
        height={218}
        alt="Imagem"
        src={`https://uploadthing.com/f/${img}`}
      />
      <Descricao>{descricao}</Descricao>
      <VerDetalhes>Ver detalhes</VerDetalhes>
    </Container>
  );
};

export default Item;
