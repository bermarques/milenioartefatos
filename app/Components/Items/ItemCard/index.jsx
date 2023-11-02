import { Container, Descricao, VerDetalhes } from "./styles";
import Image from "next/image";

const Item = ({ descricao, img }) => {
  const handleDetails = () => {
    push(`/detalhes/${product.id}`);
  };

  return (
    <Container>
      <Image
        width={218}
        height={218}
        alt="Imagem"
        src={`https://uploadthing.com/f/${img}`}
      />
      <Descricao title={descricao}>{descricao}</Descricao>
      <VerDetalhes onClick={handleDetails}>Ver detalhes</VerDetalhes>
    </Container>
  );
};

export default Item;
