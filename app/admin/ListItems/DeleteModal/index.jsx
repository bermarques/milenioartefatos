import { Modal } from "antd";
import { Container, Text } from "./styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "app/store/modules/products/actions";

const DeleteItem = () => {
  const [visible, setVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();

  const { successDelete, loadingDelete } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  const open = (product) => {
    setVisible(true);
    setCurrentProduct(product);
  };

  const close = () => {
    setVisible(false);
    setCurrentProduct(null);
  };

  DeleteItem.open = open;
  DeleteItem.close = close;

  const handleDelete = () => {
    dispatch(deleteProduct(currentProduct));
  };

  useEffect(() => {
    successDelete && close();
  }, [successDelete]);

  return (
    <Modal
      open={visible}
      onCancel={close}
      okText="Excluir"
      onOk={handleDelete}
      cancelText="Cancelar"
      okButtonProps={{
        danger: true,
        loading: loadingDelete,
        disabled: loadingDelete,
      }}
    >
      <Container>
        <Text>
          Você tem certeza que deseja excluir o produto{" "}
          <strong>{currentProduct?.name}</strong>?
        </Text>
      </Container>
    </Modal>
  );
};

export default DeleteItem;
