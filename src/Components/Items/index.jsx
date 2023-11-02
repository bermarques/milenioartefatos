import { Carousel } from "antd";
import Item from "./ItemCard";
import { Container, ItemsContainer, Titulo } from "./styles";

const Items = ({ titulo, items }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <ItemsContainer>
        <Carousel {...settings}>
          {items?.map((data) => (
            <Item
              descricao={data.titulo}
              preco={data.precoEmCentavos}
              img={data.img}
            />
          ))}
        </Carousel>
      </ItemsContainer>
    </Container>
  );
};

export default Items;
