import styled from "@emotion/styled";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #00000047;
  z-index: -10;
`;

export const Login = styled.div`
  padding: 40px;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: #FFFFFF;
`;

export const Title = styled.h1`
  margin: 0;
  cursor: default;
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
  border-radius: 4px;
  background-color: #f7f6f6ff;
  cursor: default;

  &::placeholder {
    color: #898687ff;
    font-size: 16px;
    font-family: Sandoll Hoyoyo2;
  }

  &:focus {
    border: 1px solid #ff669c;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ButtonSignup = styled.button`
  padding: 8px;
  width: 100%;
  font-size: 16px;
  font-family: Sandoll Hoyoyo2;
  border: none;
  border-radius: 4px;
  background-color: #f3f3f3ff;
  cursor: pointer;

  &:hover {
    background-color: #e1e1e1ff;
  }
`;

export const ButtonLogin = styled.button`
  padding: 8px;
  width: 100%;
  color: #FFFFFF;
  font-size: 16px;
  font-family: Sandoll Hoyoyo2;
  border: none;
  border-radius: 4px;
  background-color: #ff669c;
  cursor: pointer;

  &:hover {
    background-color: #e25e8cff
  }
`;