import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    -webkit-animation: spin 1s linear infinite;
    -moz-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
