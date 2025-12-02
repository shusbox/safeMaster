import * as MainStyled from "../styles/main";
import Login from "../components/login/index";
import Signup from "../components/signup/index";
import useLoginModalStore from "../store/loginModal";
import useSignupModalStore from "../store/signupModal";

const LoginModal = () => {
  const { loginIsVisible, loginModal } = useLoginModalStore();

  return (
    <>
      {loginIsVisible && <Login />}
      <button onClick={loginModal}> 로그인하기 </button>
    </>
  );
};

const SignupModal = () => {
  const { signupIsVisible } = useSignupModalStore();

  return (
    <>
      {signupIsVisible && <Signup />}
    </>
  );
};

const Main = () => {
  return (
    <MainStyled.Main>
      <h1> 안전 마스터 </h1>
      <LoginModal />
      <SignupModal />
    </MainStyled.Main>
  );
};

export default Main;