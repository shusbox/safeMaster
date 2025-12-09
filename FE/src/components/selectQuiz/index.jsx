import { Link } from "react-router-dom";
import * as SelectQuizStyled from "../../styles/selectQuiz";

const Select = () => {
  return (
    <SelectQuizStyled.Container>
      <h1> 퀴즈를 선택하세요 </h1>
      <Link to="/quiz/randing/sciencelab">
        <SelectQuizStyled.Option> 과학실 안전수칙 </SelectQuizStyled.Option>
      </Link>
    </SelectQuizStyled.Container>
  );
};

export default Select;