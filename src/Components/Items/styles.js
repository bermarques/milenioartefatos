import { styled } from "styled-components";
import { COLORS } from "../../consts/COLORS";

export const Container = styled.div`
  width: 100%;
  height: 405px;
  margin: 20px 0;
`;

export const Titulo = styled.h2`
  font-size: 30px;
  margin-bottom: 35px;
  text-align: center;
  color: ${COLORS.BLACK};
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
