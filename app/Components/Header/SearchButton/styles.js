import { Input } from "antd";
import { styled } from "styled-components";
import { COLORS } from "../../../consts/COLORS";

export const Container = styled.div`
  .ant-input,
  .ant-btn-default {
    border-color: ${COLORS.GREEN} !important;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);

    &:hover,
    &:active,
    &:focus {
      border-color: ${COLORS.GREEN} !important;
    }
  }
  .ant-btn-icon,
  .ant-btn {
    color: ${COLORS.GREEN} !important;
  }
`;

export const SearchInput = styled(Input.Search)``;
