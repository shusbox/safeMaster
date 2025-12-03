import { useLocation, Link } from "react-router-dom";
import * as Styled from "../../styles/common";
import * as FinishStyled from "../../styles/finish";

const FinishQuiz = () => {
  const { state } = useLocation();

  return (
    <FinishStyled.Container>
      <Styled.Header> 퀴즈 완료! </Styled.Header>
      <p> 점수: {state.count} </p>
      <Link to="/signin"> <Styled.Button> 메인 화면 </Styled.Button> </Link>
      <Link to="/rank"> <Styled.Button> 랭킹 보기 </Styled.Button> </Link>
    </FinishStyled.Container>
  );
};

export default FinishQuiz;