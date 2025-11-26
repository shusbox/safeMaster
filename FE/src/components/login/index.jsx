import * as AuthStyled from "../../styles/auth";
import { useModalStore } from "../../store/modal";

const Login = () => {
  const { modal } = useModalStore();

  return (
    <>
      <AuthStyled.Login>
        <AuthStyled.Title> 로그인 </AuthStyled.Title>
        <AuthStyled.Form>
          <AuthStyled.InputContainer>
            <AuthStyled.Input placeholder="아이디" />
            <AuthStyled.Input placeholder="비밀번호" />
          </AuthStyled.InputContainer>
          <AuthStyled.ButtonContainer>
            <AuthStyled.ButtonSignup> 회원가입 </AuthStyled.ButtonSignup>
            <AuthStyled.ButtonLogin> 로그인 </AuthStyled.ButtonLogin>
          </AuthStyled.ButtonContainer>
        </AuthStyled.Form>
      </AuthStyled.Login>
      <AuthStyled.Backdrop onClick={modal} />
    </>
  );
};

export default Login;