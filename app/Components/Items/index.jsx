import { Carousel } from "antd";
import Item from "./ItemCard";
import { Container, ItemsContainer, Titulo } from "./styles";
import { COLORS } from "../../consts/COLORS";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const Items = ({ titulo, items, backgrounded }) => {
  return (
    <Container
    // style={backgrounded ? { background: COLORS.SOFT_GREEN_TWO } : null}
    >
      <Titulo>{titulo}</Titulo>
      <ItemsContainer>
        <Swiper
          loop
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1221: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {items?.map((data, idx) => (
            <SwiperSlide key={idx}>
              <Item
                descricao={data.titulo}
                preco={data.precoEmCentavos}
                img={data.img}
                key={idx}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ItemsContainer>
    </Container>
  );
};

export default Items;
