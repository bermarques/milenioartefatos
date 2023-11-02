import { useDispatch, useSelector } from "react-redux";
import { BotaoAdicionar, ListContainer, PaginationContainer } from "./styles";
import Item from "./Item";
import DeleteItem from "./DeleteModal";
import ItemSkeleton from "./Skeletons/ItemSkeleton";
import { getProducts } from "../../store/modules/products/actions";
import { useEffect, useState } from "react";
import { Pagination } from "antd";

const ListItems = ({ handleOpen, selectedKey }) => {
  const { products, loadingProducts, totalProducts } = useSelector(
    (state) => state.products
  );
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(1, 10, selectedKey));
    setPage(1);
  }, [selectedKey]);

  useEffect(() => {
    dispatch(getProducts(page, 10, selectedKey));
  }, [page]);

  return (
    <>
      <ListContainer>
        {loadingProducts ? (
          <ItemSkeleton />
        ) : (
          products?.map((product, idx) => <Item product={product} key={idx} />)
        )}
      </ListContainer>
      {!loadingProducts && (
        <PaginationContainer>
          <Pagination
            defaultCurrent={1}
            current={page}
            pageSize={10}
            total={totalProducts || 1}
            onChange={(number) => setPage(number)}
          />
        </PaginationContainer>
      )}
      <BotaoAdicionar onClick={handleOpen}>
        + Adicionar novo item
      </BotaoAdicionar>
      <DeleteItem />
    </>
  );
};

export default ListItems;
