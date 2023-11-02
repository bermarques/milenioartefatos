import Item from "./ItemCard";
import { Container, ItemsContainer, Titulo } from "./styles";

const Items = ({ titulo, items }) => {
  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <ItemsContainer>
        {items?.map((data) => (
          <Item
            descricao={data.titulo}
            preco={data.precoEmCentavos}
            img={data.img}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default Items;
