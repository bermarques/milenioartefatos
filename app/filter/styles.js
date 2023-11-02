import { styled } from "styled-components";
import { COLORS } from "../consts/COLORS";

export const Container = styled.div`
  display: flex;
  gap: 30px;
`;
export const SideFilter = styled.div`
  box-sizing: border-box;
  padding: 12px 18px;
  background: ${COLORS.SOFT_GREEN_TWO};
  width: 262px;
  min-height: 100vh;

  .ant-checkbox-wrapper {
    width: 100%;
    margin: 6px 0;
  }

  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-inner {
    border-color: ${COLORS.GREEN};
  }

  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background: ${COLORS.SOFT_GREEN};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background: ${COLORS.GREEN};
    border-color: ${COLORS.GREEN};
  }
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
