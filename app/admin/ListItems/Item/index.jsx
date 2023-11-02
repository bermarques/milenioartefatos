import { Card, Typography } from "antd";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import { Actions, ButtonContainer, Container, Info } from "./styles";
import DeleteItem from "../DeleteModal";

const Item = ({ product }) => {
  const handleDelete = () => {
    DeleteItem.open(product);
  };

  return (
    <Card bodyStyle={{ padding: 12 }}>
      <Container>
        <Info>
          <img
            src={`https://uploadthing.com/f/${product.image}`}
            width={50}
            height={50}
          />
          <Typography>{product.name}</Typography>
        </Info>
        <Actions>
          <ButtonContainer>
            <AiOutlineEdit size={25} />
          </ButtonContainer>
          <ButtonContainer onClick={handleDelete}>
            <AiOutlineClose size={25} color="red" />
          </ButtonContainer>
        </Actions>
      </Container>
    </Card>
  );
};

export default Item;
