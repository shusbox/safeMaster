import { Link } from "react-router-dom";
import List from "./list";
import * as Styled from "../../styles/common";
import * as RankStyled from "../../styles/rank";

const Rank = () => {
  return (
    <RankStyled.Container>
      <RankStyled.HeaderWrapper>
        <Styled.Header> 랭킹 </Styled.Header>
        <Link to="/signin"> <Styled.Button> 메인 </Styled.Button> </Link>
      </RankStyled.HeaderWrapper>
      <List />
    </RankStyled.Container>
  );
};

export default Rank;