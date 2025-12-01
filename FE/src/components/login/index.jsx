import { useState } from "react";
import $ from "jquery";
import * as AuthStyled from "../../styles/auth";
import useLoginModalStore from "../../store/loginModal";
import useSignupModalStore from "../../store/signupModal";

const Login = () => {
  const { loginModal } = useLoginModalStore();
  const { signupModal } = useSignupModalStore();

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const onClickLogin = () => {
    $.ajax({
      type: 'POST',
      url: '/signin',
      daga: {
        username: username,
        password: password
      }
    });
  };

  return (
    <>
      <AuthStyled.Login>
        <AuthStyled.Title> 로그인 </AuthStyled.Title>
        <AuthStyled.Form>
          <AuthStyled.InputContainer>
            <AuthStyled.Input
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <AuthStyled.Input
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </AuthStyled.InputContainer>
          <AuthStyled.ButtonContainer>
            <AuthStyled.ButtonSignup> 회원가입 </AuthStyled.ButtonSignup>
            <AuthStyled.ButtonLogin onClick={onClickLogin}> 로그인 </AuthStyled.ButtonLogin>
          </AuthStyled.ButtonContainer>
        </AuthStyled.Form>
      </AuthStyled.Login>
      <AuthStyled.Backdrop onClick={() => { loginModal(); signupModal(); }} />
    </>
  );
};

export default Login;