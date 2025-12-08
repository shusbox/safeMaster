import { useState } from "react";
import $ from "jquery";
import useUserStore from "../../store/user";
import useSigninModalStore from "../../store/signinModal";
import useSignupModalStore from "../../store/signupModal";
import * as Styeld from "../../styles/common";
import * as AuthStyled from "../../styles/auth";

const Login = () => {
  const { setUsernameStore } = useUserStore();
  const { signinModal } = useSigninModalStore();
  const { signupModal } = useSignupModalStore();

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const onClickLogin = (e) => {
    console.log(username);
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:5000/signin',
      data: {
        username,
        password,
      },
      contentType: 'application/x-www-form-urlencoded',
      success: (res) => {
        console.log("로그인 성공", res);
        setUsernameStore(username);

        if (res.success && res.route) {
          window.location.href = `http://127.0.0.1:5173${res.route}`;
          
        } else {
          alert(res.message);
        }
      },
      error: (err) => console.error("로그인 실패", err)
    });
  };

  return (
    <>
      <AuthStyled.Container>
        <Styeld.Header> 로그인 </Styeld.Header>
        <AuthStyled.Form>
          <AuthStyled.InputContainer>
            <AuthStyled.Input
              placeholder="아이디"
              value={username}
              onChange={(e) => {setUsername(e.target.value); console.log(username);}}
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
            <AuthStyled.CancelButton onClick={() => { signinModal(); signupModal(); }}> 회원가입 </AuthStyled.CancelButton>
            <AuthStyled.SubmitButton onClick={onClickLogin}> 로그인 </AuthStyled.SubmitButton>
          </AuthStyled.ButtonContainer>
        </AuthStyled.Form>
      </AuthStyled.Container>
      <AuthStyled.Backdrop onClick={() => { signinModal(); }} />
    </>
  );
};

export default Login;