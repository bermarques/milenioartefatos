import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Container, Link } from "./styles";

const Content = () => {
  const { searchbarProducts, loadingSearchbarProducts } = useSelector(
    (state) => state.products
  );

  return (
    <>
      {loadingSearchbarProducts ? (
        <Container>Carregando...</Container>
      ) : searchbarProducts.length ? (
        searchbarProducts.map((item, idx) => (
          <Link key={idx} href={`/detalhes/${item.id}`}>
            <Container key={idx}>
              <img
                width={25}
                height={25}
                src={`https://uploadthing.com/f/${item.image}`}
              />
              {item?.name}
            </Container>
          </Link>
        ))
      ) : (
        "Nenhum produto encontrado"
      )}
    </>
  );
};

export default Content;
