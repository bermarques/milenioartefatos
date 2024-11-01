import Item from "./ItemCard";
import { Container, ItemsContainer, Titulo } from "./styles";
import { useRouter } from "next/navigation";
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
          centeredSlides={false}
          navigation={true}
          autoplay
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            900: {
              slidesPerView: 3,
            },
            1221: {
              slidesPerView: 4,
            },
          }}
        >
          {items?.map((data, idx) => (
            <SwiperSlide key={idx}>
              <Item
                descricao={data.name}
                img={data.image}
                key={idx}
                id={data.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ItemsContainer>
    </Container>
  );
};

export default Items;
