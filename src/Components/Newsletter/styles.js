import { Button, Input, Modal as antdModal } from "antd";
import { styled } from "styled-components";
import { COLORS } from "../../consts/COLORS";

export const Modal = styled(antdModal)``;

export const Container = styled.div`
  display: flex;
`;
export const ImageContainer = styled.div`
  overflow: hidden;
  width: 500px;
  height: 500px;
  border-radius: 4px;
`;
export const Content = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 40px 60px 0 60px;
`;

export const Titulo = styled.h1`
  font-size: 36px;
`;

export const Descricao = styled.p`
  font-size: 22px;
`;

export const InputEmail = styled(Input)`
  height: 36px;
  font-size: 18px;
`;

export const BotaoCadastrar = styled(Button)`
  font-size: 18px;
  height: 36px;
  background: ${COLORS.GREEN};
  margin: 28px 0;
  width: 100%;
  &:hover {
    background: #0d752e !important;
  }
`;

export const AvisoSpam = styled.p`
  font-weight: 400;
  font-size: 18px;
  opacity: 20%;
  margin-top: -6px;
`;
