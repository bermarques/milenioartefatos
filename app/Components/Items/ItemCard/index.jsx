import { Container, Descricao, VerDetalhes } from "./styles";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Item = ({ descricao, img, id }) => {
  const { push } = useRouter();
  const handleDetails = () => {
    push(`/detalhes/${id}`);
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
