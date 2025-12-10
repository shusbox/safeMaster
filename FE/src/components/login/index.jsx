import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import useUserStore from "../../store/user";
import useSigninModalStore from "../../store/signinModal";
import useSignupModalStore from "../../store/signupModal";
import * as Styeld from "../../styles/common";
import * as AuthStyled from "../../styles/auth";

const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const { setUsernameStore } = useUserStore();
  const { signinModal } = useSigninModalStore();
  const { signupModal } = useSignupModalStore();

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ failed, setFailed ] = useState(false);

  const onClickLogin = (e) => {
    if (e) e.preventDefault();
    console.log(username);

    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:5000/signin',
      data: {
        username,
        password,
      },
      contentType: 'application/x-www-form-urlencoded',
      error: (err) => console.error("로그인 실패", err)
    }).done(() => {
      setUsernameStore(username);
      navigate("/signin");
    }).fail(() => {
      usernameRef.current.focus();
      setUsername('');
      setPassword('');
      setFailed(true);
    });
  };

  const handleKeyDown = (e) => {
    if (failed) setFailed(false);

    if (e.key === 'Enter') {
      e.preventDefault();
      
      if (e.target.id === "username") {
        passwordRef.current.focus();
      } else if (e.target.id === "password") {
        onClickLogin();
      }
    }
  };

  return (
    <>
      <AuthStyled.Container>
        <Styeld.Header> 로그인 </Styeld.Header>
        <AuthStyled.Form>
          <AuthStyled.InputContainer>
            <AuthStyled.Input
              ref={usernameRef}
              id="username"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              required
            />
            <AuthStyled.Input
              ref={passwordRef}
              id="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              required
            />
          </AuthStyled.InputContainer>
          {failed && <AuthStyled.Failed> 아이디 혹은 비밀번호를 확인하세요. </AuthStyled.Failed>}
          <AuthStyled.ButtonContainer>
            <AuthStyled.CancelButton onClick={() => { signinModal(); signupModal(); }}> 
              회원가입 
            </AuthStyled.CancelButton>
            <AuthStyled.SubmitButton onClick={onClickLogin}> 
              로그인 
            </AuthStyled.SubmitButton>
          </AuthStyled.ButtonContainer>
        </AuthStyled.Form>
      </AuthStyled.Container>
      <AuthStyled.Backdrop onClick={() => { signinModal(); }} />
    </>
  );
};

export default Login;