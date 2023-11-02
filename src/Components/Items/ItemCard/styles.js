import { styled } from "styled-components";
import { COLORS } from "../../../consts/COLORS";

export const Container = styled.div`
  width: 218px;
  transition: 200ms;
  padding: 10px;
  border-radius: 2px;
  &:hover {
    box-shadow: 0 0 7px 2px #dcdcdc;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const Descricao = styled.p`
  margin-top: 0;
  margin-bottom: 50px;
  text-align: center;
`;

export const Valor = styled.p`
  font-size: 26px;
  color: ${COLORS.GREEN};
  text-align: center;
  font-weight: 600;
  margin-bottom: 0;
`;
