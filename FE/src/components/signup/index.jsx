import { useState } from "react";
import $ from "jquery";
import useSignupModalStore from "../../store/signupModal";
import * as Styled from "../../styles/common";
import * as AuthStyled from "../../styles/auth";

const Signup = () => {
  const { signupModal } = useSignupModalStore();

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ checkPassword, setCheckPassword ] = useState('');

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
      success: (res) => console.log("회원가입 성공", res),
      error: (err) => console.error("회원가입 실패", err)
    });
  };

  return (
    <>
      <AuthStyled.Container>
        <Styled.Header> 회원가입 </Styled.Header>
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
            <AuthStyled.Input
              type="password"
              placeholder="비밀번호 확인"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
              required
            />
          </AuthStyled.InputContainer>
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