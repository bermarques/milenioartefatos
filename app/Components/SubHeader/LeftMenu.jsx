import React from "react";
import { Menu } from "antd";
import { EnumCategory } from "../../utils/enums";
import { useRouter } from "next/navigation";

const LeftMenu = ({ mode }) => {
  const { push } = useRouter();

  const handleClick = (category) => {
    push(`/filter?category=${category}`);
  };

  return (
    <Menu mode={mode} disabledOverflow>
      <Menu.Item
        key="automotive"
        onClick={() => handleClick(EnumCategory.automotive)}
      >
        Automotivos
      </Menu.Item>
      <Menu.Item
        key="accessories"
        onClick={() => handleClick(EnumCategory.accessories)}
      >
        Acessórios
      </Menu.Item>
      <Menu.Item key="glues" onClick={() => handleClick(EnumCategory.glues)}>
        Colas
      </Menu.Item>
      <Menu.Item key="canvas" onClick={() => handleClick(EnumCategory.canvas)}>
        Lonas
      </Menu.Item>
      <Menu.Item
        key="wallpapers"
        onClick={() => handleClick(EnumCategory.wallpapers)}
      >
        Papel de parede
      </Menu.Item>
      <Menu.Item
        key="plastics"
        onClick={() => handleClick(EnumCategory.plastic)}
      >
        Plásticos
      </Menu.Item>
      <Menu.Item
        key="fabrics"
        onClick={() => handleClick(EnumCategory.fabrics)}
      >
        Tecidos
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
