import { styled } from "styled-components";
import { COLORS } from "../../consts/COLORS";

export const Container = styled.div`
  width: 100%;
  height: 405px;
  margin-top: 20px;
  padding: 0px 0 80px 0;
  border-radius: 1px;
`;

export const Titulo = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  color: ${COLORS.BLACK};
`;

export const ItemsContainer = styled.div`
  width: 100%;
  height: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
