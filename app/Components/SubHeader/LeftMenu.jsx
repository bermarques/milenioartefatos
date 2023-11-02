import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode} disabledOverflow>
      <Menu.Item key="automotive">Automotivos</Menu.Item>
      <Menu.Item key="accessories">Acessórios</Menu.Item>
      <Menu.Item key="glues">Colas</Menu.Item>
      <Menu.Item key="canvas">Lonas</Menu.Item>
      <Menu.Item key="wallpapers">Papel de parede</Menu.Item>
      <Menu.Item key="plastics">Plásticos</Menu.Item>
      <Menu.Item key="fabrics">Tecidos</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
