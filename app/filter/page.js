"use client";

import { useDispatch, useSelector } from "react-redux";
import { Container, Content, PaginationContainer, SideFilter } from "./styles";
import { useEffect, useState } from "react";
import { getProducts } from "../store/modules/products/actions";
import ItemCard from "./ItemCard";
import { Pagination } from "antd";
import { useSearchParams } from "next/navigation";

const FilterProductsPage = () => {
  const { products, totalProducts, loadingProducts } = useSelector(
    (state) => state.products
  );
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(page, undefined, category));
  }, [page]);

  return (
    <Container>
      <SideFilter />
      <Content>
        {products &&
          products.map((item, idx) => <ItemCard key={idx} product={item} />)}
        <PaginationContainer>
          {!loadingProducts && (
            <Pagination
              defaultCurrent={1}
              current={page}
              pageSize={10}
              total={totalProducts || 1}
              onChange={(number) => setPage(number)}
            />
          )}
        </PaginationContainer>
      </Content>
    </Container>
  );
};

export default FilterProductsPage;
