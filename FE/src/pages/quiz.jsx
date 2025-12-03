import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserStore from "../store/user";
import Progress from "../components/progress";
import { question } from "../question";
import * as QuizStyled from "../styles/quiz"

const QuizPage = () => {
  const navigate = useNavigate();
  const { username } = useUserStore();
  const [ count, setCount ] = useState(0);
  const [ quizNumber, setQuizNumber ] = useState(0);

  const CheckHandle = (answer) => {
    const isCorrect = answer === question[quizNumber].correct;
    const isLast = quizNumber >= question.length - 1;

    if (isLast) {
      const finalScore = isCorrect ? count + 1 : count;

      $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:5000/result',
        data: {
          username,
          finalScore,
        },
        contentType: 'application/x-www-form-urlencoded',
        success: (res) => console.log("결과 제출 성공", res),
        error: (err) => console.error("결과 제출 실패", err)
      });

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