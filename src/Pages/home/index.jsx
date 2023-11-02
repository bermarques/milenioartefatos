import CarouselComponent from "../../Components/Carousel";
import Items from "../../Components/Items";
import Assinatura from "../../Components/Newsletter";
import { ITEMS } from "../../consts/MOCKED_DATA";

const Home = () => {
  return (
    <>
      {/* <Assinatura /> */}
      <CarouselComponent />
      <Items
        titulo="Tecidos"
        items={ITEMS.filter((item) => item.tags.includes("tecidos"))}
      />
      <Items
        titulo="Automotivos"
        items={ITEMS.filter((item) => item.tags.includes("automotivos"))}
      />
    </>
  );
};

export default Home;
