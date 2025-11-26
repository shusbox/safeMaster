import * as MainStyled from "../styles/main";
import Login from "../components/login/index";
import useLoginModalStore from "../store/loginModal";

const LoginModal = () => {
  const { loginIsVisible, loginModal } = useLoginModalStore();

  return (
    <>
      {loginIsVisible && <Login />}
      <button onClick={loginModal}> 시작하기 </button>
    </>
  );
};

const Main = () => {
  return (
    <MainStyled.Main>
      <h1> 안전 마스터 </h1>
      <LoginModal />
    </MainStyled.Main>
  );
};

export default Main;