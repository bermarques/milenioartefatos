import { styled } from "styled-components";
import { COLORS } from "../../../../consts/COLORS";
import NextLink from "next/link";

export const Container = styled.div`
  width: ${(props) => `${props.searchWidth || 0}px`};
  padding: 10px;
  animation: 400ms;

  display: flex;
  align-items: center;
  gap: 18px;
  &:hover {
    cursor: pointer;
    border-radius: 8px;
    background: ${COLORS.backgroundHover};
  }
`;

export const Link = styled(NextLink)`
  color: inherit;
  &:hover {
    color: inherit;
  }
`;
