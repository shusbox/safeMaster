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

  const onClickLogin = (e) => {
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'http://localhost:5000/signin',
      data: {
        username,
        password
      },
      success: (res) => console.log("로그인 성공", res),
      error: (err) => console.error("로그인 실패", err)
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
              required
            />
            <AuthStyled.Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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