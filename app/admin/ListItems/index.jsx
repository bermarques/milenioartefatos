import { useSelector } from "react-redux";
import { BotaoAdicionar, ListContainer } from "./styles";
import Item from "./Item";
import DeleteItem from "./DeleteModal";
import ItemSkeleton from "./Skeletons/ItemSkeleton";

const ListItems = ({ handleOpen }) => {
  const { products, loadingProducts } = useSelector((state) => state.products);

  return (
    <>
      <ListContainer>
        {loadingProducts ? (
          <ItemSkeleton />
        ) : (
          products?.map((product, idx) => <Item product={product} key={idx} />)
        )}
      </ListContainer>
      <BotaoAdicionar onClick={handleOpen}>
        + Adicionar novo item
      </BotaoAdicionar>
      <DeleteItem />
    </>
  );
};

export default ListItems;
