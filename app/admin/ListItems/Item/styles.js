import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Actions = styled.div`
  display: flex;
  gap: 6px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 8px;
  transition: 500ms;
  &:hover {
    background: #00000010;
    cursor: pointer;
  }
`;
