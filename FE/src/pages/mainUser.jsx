import { Link } from "react-router-dom";
import * as Styled from "../styles/common";
import * as MainStyled from "../styles/main";

const MainUser = () => {
  return (
    <MainStyled.Container>
      <Styled.Header> 안전 마스터 </Styled.Header>
      <MainStyled.ButtonContainer>
        <Link to="/quiz"> <Styled.Button> 시작하기 </Styled.Button> </Link>
        <Link to="/rank"> <Styled.Button> 랭킹 보기 </Styled.Button> </Link>
      </MainStyled.ButtonContainer>
    </MainStyled.Container>
  );
};

export default MainUser;