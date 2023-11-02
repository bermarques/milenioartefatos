import { styled } from "styled-components";

export const Content = styled.div`
  padding: 30px;
`;

export const HalfContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const NameContainer = styled.div`
  width: 100%;
`;
export const ValueContainer = styled.div`
  width: 30%;
`;

export const ButtonContainer = styled.div`
  text-align: right;
  margin-top: 20px;
`;

export const UploadContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  .dynamic-delete-button {
    position: absolute;
    float: right;
    top: 4px;
    right: -38px;
    margin: 0 8px;
    color: #999;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .dynamic-delete-button:hover {
    color: #777;
  }

  .dynamic-delete-button[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
