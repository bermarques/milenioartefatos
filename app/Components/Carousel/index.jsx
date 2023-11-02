import Image from "next/image";
import { useEffect } from "react";
import { Carousel, Container } from "./styles";
import { Pagination, Autoplay, Virtual, Navigation } from "swiper/modules";
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
      {carouselData.length && (
        <Swiper
          loop
          slidesPerView={1}
          pagination={true}
          navigation
          autoplay={{
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Virtual, Navigation]}
        >
          {carouselData?.map((item, idx) => (
            <SwiperSlide key={idx} virtualIndex={idx}>
              <img key={idx} src={item.url} alt="banner" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default CarouselComponent;
