import { styled } from "styled-components";
import { COLORS } from "../../consts/COLORS";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  .whatsapp {
    color: ${COLORS.GREEN};
    font-weight: 500;
  }
`;
export const SubItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
`;

export const Atendimento = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
`;

export const Partners = styled.div`
  max-width: 300px;
  margin: 0 20px;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
`;
export const Actions = styled.div`
  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;

export const CenterSpacer = styled.div`
  width: 20%;
`;
export const SideSpacer = styled.div`
  width: 40%;
`;
