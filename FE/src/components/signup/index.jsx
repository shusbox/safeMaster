import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import useSignupModalStore from "../../store/signupModal";
import * as Styled from "../../styles/common";
import * as AuthStyled from "../../styles/auth";

const Signup = () => {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const checkpasswordRef = useRef();

  const { signupModal } = useSignupModalStore();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ checkPassword, setCheckPassword ] = useState('');
  
  const [ failed, setFailed ] = useState();

  const onClickSignup = (e) => {
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:5000/signup',
      data: {
        username,
        password
      },
      contentType: 'application/x-www-form-urlencoded',
    }).done(() => {
      navigate("/");
    }).fail(() => {
      setFailed(true);
    })
  };

  const handleKeyDown = (e) => {
    if (failed) setFailed(ture);

    if (e.key === 'Enter') {
      e.preventDefault();

      if (e.target.id === "username") passwordRef.current.focus();
      if (e.target.id === "password") checkpasswordRef.current.focus();
    }
  }

  return (
    <>
      <AuthStyled.Container>
        <Styled.Header> 회원가입 </Styled.Header>
        <AuthStyled.Form>
          <AuthStyled.InputContainer>
            <AuthStyled.Input
              ref={usernameRef}
              id="username"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <AuthStyled.Input
              ref={passwordRef}
              id="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <AuthStyled.Input
              ref={checkpasswordRef}
              id="checkpassword"
              type="password"
              placeholder="비밀번호 확인"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
              required
            />
          </AuthStyled.InputContainer>
          {failed && <AuthStyled.Failed> 회원가입에 실패하였습니다. </AuthStyled.Failed>}
          <AuthStyled.ButtonContainer>
            <AuthStyled.CancelButton onClick={signupModal}> 뒤로 </AuthStyled.CancelButton>
            <AuthStyled.SubmitButton onClick={onClickSignup}> 회원가입 </AuthStyled.SubmitButton>
          </AuthStyled.ButtonContainer>
        </AuthStyled.Form>
      </AuthStyled.Container>
      <AuthStyled.Backdrop onClick={() => { signupModal(); }} />
    </>
  );
};

export default Signup;