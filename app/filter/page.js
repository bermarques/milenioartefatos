"use client";

import { useDispatch, useSelector } from "react-redux";
import { Container, Content, PaginationContainer, SideFilter } from "./styles";
import { useEffect, useState } from "react";
import { getProducts } from "../store/modules/products/actions";
import ItemCard from "./ItemCard";
import { Checkbox, Form, Pagination } from "antd";
import { useSearchParams } from "next/navigation";
import LoadingScreen from "./Loading";

const FilterProductsPage = () => {
  const { products, totalProducts, loadingProducts } = useSelector(
    (state) => state.products
  );
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    upholstery: false,
    purses: false,
    visualCommunication: false,
    decoration: false,
    tapestry: false,
    awning: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(page, undefined, category, filters));
  }, [page, category, filters]);

  return (
    <Container>
      <SideFilter>
        <Checkbox
          onChange={(e) =>
            setFilters({ ...filters, upholstery: e.target.checked })
          }
          checked={filters.upholstery}
        >
          Estofados
        </Checkbox>
        <Checkbox
          onChange={(e) => setFilters({ ...filters, purses: e.target.checked })}
          checked={filters.purses}
        >
          Bolsas
        </Checkbox>
        <Checkbox
          onChange={(e) =>
            setFilters({ ...filters, visualCommunication: e.target.checked })
          }
          checked={filters.visualCommunication}
        >
          Comunicação Visual
        </Checkbox>
        <Checkbox
          onChange={(e) =>
            setFilters({ ...filters, decoration: e.target.checked })
          }
          checked={filters.decoration}
        >
          Decoração
        </Checkbox>
        <Checkbox
          onChange={(e) =>
            setFilters({ ...filters, tapestry: e.target.checked })
          }
          checked={filters.tapestry}
        >
          Tapeçaria
        </Checkbox>
        <Checkbox
          onChange={(e) => setFilters({ ...filters, awning: e.target.checked })}
          checked={filters.awning}
        >
          Toldo
        </Checkbox>
      </SideFilter>
      <Content>
        {loadingProducts ? (
          <LoadingScreen />
        ) : (
          products &&
          products.map((item, idx) => <ItemCard key={idx} product={item} />)
        )}
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
