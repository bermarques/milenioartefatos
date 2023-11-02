import { Container, Descricao, VerDetalhes } from "./styles";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Item = ({ descricao, img, id }) => {
  const { push } = useRouter();
  const handleDetails = () => {
    push(`/detalhes?id=${id}`);
  };

  return (
    <Container>
      <img
        width={218}
        height={218}
        alt="Imagem"
        src={`https://milenioartefatos.com.br/api/images/${img}`}
        loading="lazy"
      />
      <Descricao title={descricao}>{descricao}</Descricao>
      <VerDetalhes onClick={handleDetails}>Ver detalhes</VerDetalhes>
    </Container>
  );
};

export default Item;
