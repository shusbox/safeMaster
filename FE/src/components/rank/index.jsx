import { Link } from "react-router-dom";
import * as Styled from "../../styles/common";

const Rank = () => {
  return (
    <>
      <h1> 적당한 백엔드 </h1>
      <Link to="/signin"> <Styled.Button> 메인 </Styled.Button> </Link>
    </>
  );
};

export default Rank;