import { useLocation, Link } from "react-router-dom";
import * as Styled from "../../styles/common";
import * as ResultStyled from "../../styles/result";

const Result = () => {
  const { state } = useLocation();

  return (
    <ResultStyled.Container>
      <ResultStyled.Content>
        <Styled.Body> 퀴즈 완료! </Styled.Body>
        <Styled.Header> 점수: {state.count} </Styled.Header>
      </ResultStyled.Content>
      <ResultStyled.ButtonContainer>
        <Link to="/signin"> <Styled.Button> 메인 화면 </Styled.Button> </Link>
        <Link to="/rank"> <Styled.Button> 랭킹 보기 </Styled.Button> </Link>
      </ResultStyled.ButtonContainer>
    </ResultStyled.Container>
  );
};

export default Result;