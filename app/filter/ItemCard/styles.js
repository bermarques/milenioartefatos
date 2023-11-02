import { styled } from "styled-components";
import { Button } from "antd";
import { COLORS } from "../../consts/COLORS";

export const Container = styled.div`
  width: 218px;
  transition: 200ms;
  margin: 20px;
  padding: 10px;
  border-radius: 2px;

  &:hover {
    box-shadow: 0 0 7px 2px #dcdcdc;
    /* cursor: pointer; */
  }
`;

export const Descricao = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: pre;
  overflow: hidden;
`;

export const VerDetalhes = styled(Button)`
  background: ${COLORS.GREEN};
  &:hover {
    color: #fff !important;
    box-shadow: none !important;
  }
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: 600;
  margin-bottom: 0;
`;
