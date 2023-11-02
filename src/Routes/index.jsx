import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/home";
import Header from "../Components/Header";
import { Container } from "./styles";
import Footer from "../Components/Footer";
import Details from "../Pages/details";
import Admin from "../Pages/admin";

const MyRoutes = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.includes("admin");
  return (
    <>
      <Container>
        {!isAdminPage && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes" element={<Details />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        {!isAdminPage && <Footer />}
      </Container>
    </>
  );
};

export default MyRoutes;
