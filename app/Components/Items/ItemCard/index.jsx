import { Container, Descricao, VerDetalhes } from "./styles";

const Item = ({ descricao, preco, img }) => {
  return (
    <Container>
      <img width={218} height={218} alt="Imagem" src={img} />
      <Descricao>{descricao}</Descricao>
      <VerDetalhes>Ver detalhes</VerDetalhes>
    </Container>
  );
};

export default Item;
