"use client";

import { Layout, Menu } from "antd";
import { Container } from "./styles";
import Sider from "antd/es/layout/Sider";
import ListItems from "./ListItems";
import CreateItemModal from "./CreateItemModal";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/modules/products/actions";
import { UploadButton } from "../utils/uploadthing";
const Admin = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setAddModalVisible(false);
  };

  const handleOpen = () => {
    setAddModalVisible(true);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            "Automotivos",
            "Colas",
            "Lonas",
            "Papel de parede",
            "Tecidos",
          ].map((name, index) => ({
            key: String(index + 1),
            label: name,
          }))}
        />
      </Sider>
      <Container>
        <ListItems handleOpen={handleOpen} />
        <CreateItemModal visible={addModalVisible} handleClose={handleClose} />
      </Container>
    </Layout>
  );
};

export default Admin;
