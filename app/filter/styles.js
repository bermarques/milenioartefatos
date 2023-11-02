import { styled } from "styled-components";
import { COLORS } from "../consts/COLORS";

export const Container = styled.div`
  display: flex;
  gap: 30px;
`;
export const SideFilter = styled.div`
  background: ${COLORS.SOFT_GREEN_TWO};
  width: 262px;
  min-height: 100vh;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 18px;

  .ant-pagination-item-active,
  .ant-pagination-item-active a {
    transition: 200ms;
    color: ${COLORS.GREEN} !important;
    border-color: ${COLORS.GREEN};
    &:hover {
      border-color: ${COLORS.SOFT_GREEN};
    }
  }
`;
