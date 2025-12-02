import { Link } from "react-router-dom";
import * as Styled from "../styles/common";
import * as MainStyled from "../styles/main";

const MainUser = () => {
  return (
    <MainStyled.Container>
      <h1> 안전 마스터 </h1>
      <Link to="/quiz"> <Styled.Button> 시작하기 </Styled.Button> </Link>
    </MainStyled.Container>
  );
};

export default MainUser;