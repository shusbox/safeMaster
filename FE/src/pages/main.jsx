import * as MainStyled from "../styles/main";
import Login from "../components/login/index";
import { useModalStore } from "../store/modal";

const LoginModal = () => {
  const { isVisible, modal } = useModalStore();

  return (
    <>
      {isVisible && <Login />}
      <button onClick={modal}> 시작하기 </button>
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