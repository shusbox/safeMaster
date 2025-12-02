import { Link } from "react-router-dom";

const SelectQuiz = () => {
  return (
    <>    
      <h1> 퀴즈를 선택하세요 </h1>
      <Link to="/quiz/sciencelab">
        <div> 과학실 안전수칙 </div>
      </Link>
    </>
  );
};

export default SelectQuiz;