import CarouselComponent from "./Components/Carousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Header />
      <CarouselComponent />
      <Footer />
    </Container>
  );
}

export default App;
