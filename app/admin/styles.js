import { styled } from "styled-components";

export default {
  card: { margin: "40px 20px 20px", padding: "20px 50px", width: 500 },
};
export const Container = styled.div`
  width: 100%;
  padding: 10%;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
