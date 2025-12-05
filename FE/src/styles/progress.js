import styled from "@emotion/styled";
import { theme } from "./theme";

export const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: ${theme.colors.bgTertiary};
  border-radius: 5px;
  position: relative;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background: ${theme.colors.primary};
  transition: 0.2s;
`;