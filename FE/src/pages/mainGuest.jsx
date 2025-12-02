import * as Styled from "../styles/common";
import * as MainStyled from "../styles/main";
import Login from "../components/login/index";
import Signup from "../components/signup/index";
import useSigninModalStore from "../store/signinModal";
import useSignupModalStore from "../store/signupModal";

const SigninModal = () => {
  const { signinIsVisible, signinModal } = useSigninModalStore();

  return (
    <>
      {signinIsVisible && <Login />}
      <Styled.Button onClick={signinModal}> 로그인하기 </Styled.Button>
    </>
  );
};

const SignupModal = () => {
  const { signupIsVisible } = useSignupModalStore();
  return signupIsVisible && <Signup />;
};

const MainGuest = () => {
  return (
    <MainStyled.Container>
      <h1> 안전 마스터 </h1>
      <SigninModal />
      <SignupModal />
    </MainStyled.Container>
  );
};

export default MainGuest;