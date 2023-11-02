import { Carousel } from "antd";
import Item from "./ItemCard";
import { Container, ItemsContainer, Titulo } from "./styles";
import { COLORS } from "../../consts/COLORS";

const Items = ({ titulo, items, backgrounded }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <Container
    // style={backgrounded ? { background: COLORS.SOFT_GREEN_TWO } : null}
    >
      <Titulo>{titulo}</Titulo>
      <ItemsContainer>
        <Carousel {...settings}>
          {items?.map((data, idx) => (
            <Item
              descricao={data.titulo}
              preco={data.precoEmCentavos}
              img={data.img}
              key={idx}
            />
          ))}
        </Carousel>
      </ItemsContainer>
    </Container>
  );
};

export default Items;
