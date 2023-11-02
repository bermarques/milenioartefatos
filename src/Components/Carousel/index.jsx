import { Carousel } from "./styles";
import BANNER1 from "../../assets/BANNER1.png";
import BANNER2 from "../../assets/BANNER2.png";
import BANNER3 from "../../assets/BANNER3.png";
import BANNER4 from "../../assets/BANNER4.png";

const CarouselComponent = () => {
  return (
    <Carousel autoplay>
      <img src={BANNER1} alt="banner" height={336} />
      <img src={BANNER2} alt="banner" height={336} />
      <img src={BANNER3} alt="banner" height={336} />
      <img src={BANNER4} alt="banner" height={336} />
    </Carousel>
  );
};

export default CarouselComponent;
