import { styled } from "styled-components";
import { COLORS } from "../../consts/COLORS";

export const Container = styled.div`
  width: 100%;
  img {
    object-fit: contain;
    width: 100%;
    max-height: 336px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${COLORS.GREEN};
  }
`;
