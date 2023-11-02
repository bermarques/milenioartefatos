import { Container, Descricao, Valor } from "./styles";

const Item = ({ descricao, preco, img }) => {
  const formatter = (preco) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco / 100);

  return (
    <Container>
      <img width={218} height={218} alt="Imagem" src={img} />
      <Descricao>{descricao}</Descricao>
      <Valor>{formatter(preco)}</Valor>
    </Container>
  );
};

export default Item;
