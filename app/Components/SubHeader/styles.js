import { styled } from "styled-components";
import { COLORS } from "../../consts/COLORS";
import { Button as antdButton } from "antd";

export const Container = styled.div`
  width: 100%;
  margin: 18px 0;
  background: ${COLORS.GREEN};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .ant-menu-item-selected::after,
  .ant-menu-item:hover::after {
    transition: none !important;
    border: none !important;
    border-color: transparent !important;
  }
  .ant-menu-item-selected,
  li {
    color: #fff !important;
  }
  .ant-menu-item:hover {
    background: #0c7d31 !important;
  }
  .ant-menu-item,
  .ant-menu-item:hover {
    top: 0 !important;
  }
  .navbar,
  .ant-menu {
    background: ${COLORS.GREEN};
    border-bottom: none;
  }
  .ant-menu {
    padding: 0;
  }

  .navbar {
    position: sticky;
    &:hover {
      border: none;
    }
  }

  .nav-header {
    background-color: white;
    border-bottom: 0;
    padding: 0;
  }

  .logo {
    width: 200px;
    float: left;
  }

  .logo a {
    display: inline-block;
    font-size: 20px;
    text-transform: capitalize;
  }

  .navbar-menu {
    width: 100%;
    float: left;
  }
  .navbar-menu .ant-layout-header {
    padding: 0 20px;
  }

  .navbar-menu .ant-menu-horizontal {
    border-bottom: 0;
  }

  .navbar-menu .ant-menu-item {
    padding-bottom: 0px;
  }

  .navbar-menu .leftMenu {
    float: left;
  }

  .menuButton {
    float: right;
    height: 32px;
    padding: 6px;
    margin-top: 14px;
    display: none;
    background: none;
    margin-right: 10px;
  }

  .ant-drawer-body {
    padding: 0;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
  .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu {
    display: inline-block;
    width: 100%;
  }

  .ant-drawer-body .ant-menu-horizontal {
    border-bottom: none;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom-color: transparent;
  }

  @media (max-width: 767px) {
    display: block;
    background: transparent;
    .menuButton {
      display: block;
      margin-right: 10px;
    }

    .leftMenu,
    .rightMenu {
      display: none;
    }

    .ant-drawer-title > .brand-font {
      margin-bottom: 0;
    }
  }
`;

export const Button = styled(antdButton)`
  border-radius: 0;

  span {
    color: #fff;
  }
`;
