import styled from "@emotion/styled";
import { theme } from "./theme";


export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Option = styled.button`
  padding: 20px;
  width: 100%;
  font-size: 18px;
  font-family: Sandoll Hoyoyo2;
  text-align: center;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.bgPrimary};
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.shadow.primary};
    transform: ${theme.transform.float};
  }
`;