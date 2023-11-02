import CarouselComponent from "./Components/Carousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Items from "./Components/Items";
import { ITEMS } from "./consts/MOCKED_DATA";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Header />
      <CarouselComponent />
      <Items
        titulo="Tecidos"
        items={ITEMS.filter((item) => item.tags.includes("tecidos"))}
      />
      <Items
        titulo="Automotivos"
        items={ITEMS.filter((item) => item.tags.includes("automotivos"))}
      />
      <Footer />
    </Container>
  );
}

export default App;
