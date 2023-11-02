import Image from "next/image";
import { useEffect } from "react";
import { Carousel, Container } from "./styles";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { getCarousel } from "../../store/modules/products/actions";

const CarouselComponent = () => {
  const { carouselData } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarousel());
  }, []);

  return (
    <Container>
      <Swiper
        loop
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        autoplay
      >
        {carouselData?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img
              key={idx}
              src={`https://uploadthing.com/f/${item.url}`}
              alt="banner"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CarouselComponent;
