import styled from "@emotion/styled";
import { theme } from "./theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 40px;
`;

export const Time = styled.p`
  margin: 0;
  font-size: 20px;
`;