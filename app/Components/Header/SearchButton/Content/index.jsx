import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Container, Link } from "./styles";
import Image from "next/image";

const Content = ({ search, searchWidth }) => {
  const { searchbarProducts, loadingSearchbarProducts } = useSelector(
    (state) => state.products
  );

  if (search?.length < 3) return undefined;

  return (
    <>
      {loadingSearchbarProducts ? (
        <Container searchWidth={searchWidth}>Carregando...</Container>
      ) : searchbarProducts.length ? (
        searchbarProducts.map((item, idx) => (
          <Link key={idx} href={`/detalhes/[id]`} as={`/detalhes/${item.id}`}>
            <Container key={idx} searchWidth={searchWidth}>
              <img
                width={25}
                height={25}
                src={`https://uploadthing.com/f/${item.image}`}
                alt="imagem"
                loading="lazy"
              />
              {item?.name}
            </Container>
          </Link>
        ))
      ) : (
        <Container searchWidth={searchWidth}>
          Nenhum produto encontrado
        </Container>
      )}
    </>
  );
};

export default Content;
