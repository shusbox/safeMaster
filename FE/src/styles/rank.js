import styled from "@emotion/styled";
import { theme } from "./theme";

export const Container = styled.div`
  width: 60%;
  min-width: 320px;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;
`;

export const Item = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  border-radius: 8px;
  background-color: ${theme.colors.bgPrimary};
  box-sizing: border-box;
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ItemNumber = styled.p`
  margin: 0;
  padding: 4px;
  width: 20px;
  height: 20px;
  font-size: 16px;
  text-align: center;
  border-radius: 9999px;
  background-color: ${theme.colors.bgSecondary}
`;

export const ItemUsername = styled.p`
  margin: 0;
`;

export const ItemScore = styled.p`
  margin: 0;
`;