"use client";

import { Layout, Menu } from "antd";
import { Container } from "./styles";
import Sider from "antd/es/layout/Sider";
import ListItems from "./ListItems";
import CreateItemModal from "./CreateItemModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/modules/products/actions";
import { UploadButton } from "../utils/uploadthing";
import sessionStorage from "redux-persist/es/storage/session";
import LoginPage from "./loginPage";
import { verifyToken } from "../utils/token";
import api from "../services/api";
import { EnumCategory } from "../utils/enums";

const Admin = () => {
  const { token } = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");

  const { successCreateProducts } = useSelector((state) => state.products);

  const handleOpen = () => {
    CreateItemModal.open?.("CREATE", undefined, selectedKey);
  };

  useEffect(() => {
    if (verifyToken(token)) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  useEffect(() => {
    successCreateProducts && CreateItemModal.close?.();
  }, [successCreateProducts]);

  return (
    <Layout hasSider>
      {!isLoggedIn ? (
        <LoginPage />
      ) : (
        <>
          <Sider breakpoint="lg" collapsedWidth="0">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[selectedKey]}
              onSelect={({ key }) => setSelectedKey(key)}
              items={[
                { name: "Automotivo", value: EnumCategory.automotive },
                { name: "Acessórios", value: EnumCategory.accessories },
                { name: "Colas", value: EnumCategory.glues },
                { name: "Lonas", value: EnumCategory.canvas },
                { name: "Papel de Parede", value: EnumCategory.wallpapers },
                { name: "Plástico", value: EnumCategory.plastic },
                { name: "Tecidos", value: EnumCategory.fabrics },
              ].map((item) => ({
                key: String(item.value),
                label: item.name,
              }))}
            />
          </Sider>
          <Container>
            <ListItems handleOpen={handleOpen} selectedKey={selectedKey} />
            <CreateItemModal />
          </Container>
        </>
      )}
    </Layout>
  );
};

export default Admin;
