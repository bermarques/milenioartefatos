import { Input } from "antd";
import { styled } from "styled-components";
import { COLORS } from "../../../consts/COLORS";

export const Container = styled.div`
  .ant-input,
  .ant-btn-default {
    &:hover,
    &:active,
    &:focus {
      border-color: ${COLORS.GREEN} !important;
    }
  }

  .ant-btn-icon:hover,
  .ant-btn:hover {
    color: ${COLORS.GREEN} !important;
  }
`;

export const SearchInput = styled(Input.Search)``;
