import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Header from "../Components/Header";
import { Container } from "./styles";
import Footer from "../Components/Footer";
import Details from "../Pages/details";

const MyRoutes = () => {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes" element={<Details />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default MyRoutes;
