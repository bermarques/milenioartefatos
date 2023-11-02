import { styled } from "styled-components";
import { COLORS } from "../../consts/COLORS";
import { Button as antdButton } from "antd";

export const Container = styled.div`
  height: 44px;
  width: 100%;
  margin: 18px 0;
  background: ${COLORS.GREEN};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled(antdButton)`
  height: 44px;
  border-radius: 0;

  span {
    color: #fff;
  }
`;
