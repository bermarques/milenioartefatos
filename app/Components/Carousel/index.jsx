import Image from "next/image";
import { Carousel } from "./styles";

const CarouselComponent = () => {
  return (
    <Carousel autoplay>
      <img src="/BANNER1.png" alt="banner" height={336} />
      <img src="/BANNER2.png" alt="banner" height={336} />
      <img src="/BANNER3.png" alt="banner" height={336} />
      <img src="/BANNER4.png" alt="banner" height={336} />
    </Carousel>
  );
};

export default CarouselComponent;
