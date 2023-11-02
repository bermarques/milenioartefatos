import React from "react";
import { Menu } from "antd";
import { EnumCategory } from "../../utils/enums";
import { useRouter } from "next/navigation";
import { BiCar, BiPackage } from "react-icons/bi";
import { GiWool, GiRolledCloth } from "react-icons/gi";
import { TbWallpaper, TbBrandBitbucket } from "react-icons/tb";
import { MdOutlineCurtainsClosed, MdContentCopy } from "react-icons/md";

const LeftMenu = ({ mode }) => {
  const { push } = useRouter();

  const handleClick = (category) => {
    push(`/filter?category=${category}`);
  };

  return (
    <Menu mode={mode} disabledOverflow>
      <Menu.Item key="home" onClick={() => push("/")}>
        Home
      </Menu.Item>
      <Menu.Item
        key="automotive"
        onClick={() => handleClick(EnumCategory.automotive)}
      >
        <BiCar size={20} />
        Automotivos
      </Menu.Item>
      <Menu.Item
        key="accessories"
        onClick={() => handleClick(EnumCategory.accessories)}
      >
        <GiWool size={20} />
        Acessórios
      </Menu.Item>
      <Menu.Item key="glues" onClick={() => handleClick(EnumCategory.glues)}>
        <TbBrandBitbucket size={20} />
        Colas
      </Menu.Item>
      <Menu.Item key="canvas" onClick={() => handleClick(EnumCategory.canvas)}>
        <MdOutlineCurtainsClosed size={20} />
        Lonas
      </Menu.Item>
      <Menu.Item
        key="wallpapers"
        onClick={() => handleClick(EnumCategory.wallpapers)}
      >
        <TbWallpaper size={20} />
        Papel de parede
      </Menu.Item>
      <Menu.Item
        key="plastics"
        onClick={() => handleClick(EnumCategory.plastic)}
      >
        <BiPackage size={20} />
        Plásticos
      </Menu.Item>
      <Menu.Item
        key="fabrics"
        onClick={() => handleClick(EnumCategory.fabrics)}
      >
        <MdContentCopy size={20} />
        Tecidos
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
