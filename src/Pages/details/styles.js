import { styled } from "styled-components";
import { COLORS } from "../../consts/COLORS";
import { Button as antdButton } from "antd";

export const Container = styled.div`
  margin-top: 50px;
`;

export const ItemDetail = styled.div`
  display: flex;
  gap: 22px;
  height: 610px;
`;

export const ItemInfo = styled.div`
  box-shadow: 0 0 7px 2px #dcdcdc;
  padding: 0 18px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: ${COLORS.GREEN};
`;

export const Status = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;
export const CardDescriptionContainer = styled.div`
  margin: 100px 0;
`;
export const GreenContainer = styled.span`
  color: ${COLORS.GREEN};
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const Button = styled(antdButton)`
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  background: ${COLORS.GREEN};
  margin: 28px 0;
  text-align: center;
  padding: 0 30px;
  &:hover {
    background: #0d752e !important;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 75px;
  padding: 24px 18px;
  width: 100%;
  background: ${COLORS.SOFT_GREEN_TWO};
`;

export const DescriptionTitle = styled.h3`
  margin: 0;
  color: ${COLORS.GREEN};
  font-size: 30px;
  font-weight: 400;
`;
