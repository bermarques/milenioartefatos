import { COLORS } from "../../consts/COLORS";
import { styled } from "styled-components";

export default {
  paragrafo: {
    margin: 0,
  },
};

export const Container = styled.div`
  margin-top: 120px;
  width: 100%;
  height: 248px;
  background: ${COLORS.GREEN};
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
    height: 350px;
    padding-bottom: 50px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const OutrasLojas = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  position: relative;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const Loja = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
`;
export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  position: relative;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Titulo = styled.h4`
  margin: 0;
  font-size: 14px;
  color: ${COLORS.BLACK};
`;
export const Descricao = styled.p`
  margin: 0;
  font-size: 14px;
  color: #fff;
`;
