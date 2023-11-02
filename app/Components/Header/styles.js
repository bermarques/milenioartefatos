import { styled } from "styled-components";
import { COLORS } from "../../consts/COLORS";

export const Container = styled.div`
  display: flex;
  margin-top: 12px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const LogoContainer = styled.div`
  margin: 0 auto;
  cursor: pointer;
`;
export const Actions = styled.div`
  padding: 11px;
  margin-left: 40px;
  width: 90%;

  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;
