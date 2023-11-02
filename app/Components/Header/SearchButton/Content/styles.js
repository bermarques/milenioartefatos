import { styled } from "styled-components";
import { COLORS } from "../../../../consts/COLORS";
import NextLink from "next/link";

export const Container = styled.div`
  width: 350px;
  padding: 10px;
  animation: 400ms;

  display: flex;
  align-items: center;
  gap: 18px;
  &:hover {
    cursor: pointer;
    background: ${COLORS.backgroundHover};
  }
`;

export const Link = styled(NextLink)`
  color: inherit;
  &:hover {
    color: inherit;
  }
`;
