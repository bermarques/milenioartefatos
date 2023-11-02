import { Container, Descricao, VerDetalhes } from "./styles";
import { useRouter } from "next/navigation";

const Item = ({ product }) => {
  const handleDetails = () => {
    push(`/detalhes?id=${product.id}`);
  };

  const { push } = useRouter();
  return (
    <Container>
      <img
        width={218}
        height={218}
        alt="Imagem"
        src={`https://milenioartefatos.com.br/api/images/${product?.image}`}
      />
      <Descricao>{product?.name}</Descricao>
      <VerDetalhes onClick={handleDetails}>Ver detalhes</VerDetalhes>
    </Container>
  );
};

export default Item;
