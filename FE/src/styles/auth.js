import styled from "@emotion/styled";
import { theme } from "./theme";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: ${theme.colors.bgDisabled};
  z-index: -10;
`;

export const Container = styled.div`
  padding: 40px;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.bgPrimary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  width: auto;
  padding: 12px;
  font-size: 16px;
  font-family: Sandoll Hoyoyo2;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.bgTertiary};

  &::placeholder {
    color: ${theme.colors.textSecondary};
    font-size: 16px;
    font-family: Sandoll Hoyoyo2;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CancelButton = styled.button`
  padding: 8px;
  width: 100%;
  font-size: 16px;
  font-family: Sandoll Hoyoyo2;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.natural};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.naturalHover};
  }
`;

export const SubmitButton = styled.button`
  padding: 8px;
  width: 100%;
  color: ${theme.colors.textDisabled};
  font-size: 16px;
  font-family: Sandoll Hoyoyo2;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;