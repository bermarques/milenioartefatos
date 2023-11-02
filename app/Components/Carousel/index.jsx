import Image from "next/image";
import { Carousel, Container } from "./styles";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselComponent = () => {
  return (
    <Container>
      <Swiper
        loop
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        autoplay
      >
        <SwiperSlide>
          <img src="/BANNER1.png" alt="banner" height={336} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BANNER2.png" alt="banner" height={336} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BANNER3.png" alt="banner" height={336} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/BANNER4.png" alt="banner" height={336} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default CarouselComponent;
