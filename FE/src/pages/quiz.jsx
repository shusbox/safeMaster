import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { question } from "../question";
import * as QuizStyled from "../styles/quiz"
import Progress from "../components/progress";

const QuizPage = () => {
  const navigate = useNavigate();
  const [ count, setCount ] = useState(0);
  const [ quizNumber, setQuizNumber ] = useState(0);

  const CheckHandle = (answer) => {
    const isCorrect = answer === question[quizNumber].correct;
    const isLast = quizNumber >= question.length - 1;

    if (isLast) {
      console.log(count);
      const finalScore = isCorrect ? count + 1 : count;
      navigate("/finish", { state: { count: finalScore }});
    } else {
      if (isCorrect) setCount(count + 1);
      setQuizNumber(quizNumber + 1);
    }
  };

  const Number = ({ number }) => {
    return (
      <QuizStyled.Number>
        <QuizStyled.NumberText> {number} </QuizStyled.NumberText>
      </QuizStyled.Number>
    );
  };

  const Response = ({ number, response }) => {
    return (
      <QuizStyled.Response onClick={() => {CheckHandle(number)} }>
        <Number number={number} />
        <QuizStyled.ResponseText> {response} </QuizStyled.ResponseText>
      </QuizStyled.Response>
    );
  };

  return (
    <>
      <Progress />
      <QuizStyled.Card>
        <QuizStyled.TitleWrapper>
          <QuizStyled.Id> Quiz {question[quizNumber].id} </QuizStyled.Id>
          <QuizStyled.Title> {question[quizNumber].title} </QuizStyled.Title>
        </QuizStyled.TitleWrapper>
        <QuizStyled.ResponseWrapper>
          {question[quizNumber].question.map((item, index) => {
            return <Response key={index} number={item.question_id} response={item.question} />
          })}
        </QuizStyled.ResponseWrapper>
      </QuizStyled.Card>
    </>
  );
};

export default QuizPage;