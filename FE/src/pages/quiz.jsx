import QuizCard from "../components/quizCard";
import Progress from "../components/progress";

const QuizPage = () => {
  return (
    <>
      <Progress />
      <QuizCard id={"1"} title={"열원을 다룰 때"} />
    </>
  );
};

export default QuizPage;