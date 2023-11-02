import { BotaoAdicionar } from "./styles";

const ListItems = ({ handleOpen }) => {
  return (
    <>
      <BotaoAdicionar onClick={handleOpen}>
        + Adicionar novo item
      </BotaoAdicionar>
    </>
  );
};

export default ListItems;
