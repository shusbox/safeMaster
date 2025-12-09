import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useUserStore from "../../../store/user";
import Progress from "../../progress/index";
import { question } from "../../../question";
import { Correct, Wrong } from "../answer";
import * as QuizStyled from "../../../styles/quiz"

const Quiz = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const navigate = useNavigate();
  const { usernameStore } = useUserStore();
  const [ count, setCount ] = useState(0);
  const [ quizNumber, setQuizNumber ] = useState(0);
  const [ correct, setCorrect ] = useState(false);
  const [ wrong, setWrong ] = useState(false);
  const [ correctAnswer, setCorrectAnswer ] = useState(0);
  const [ answer, setAnswer ] = useState("");
  const progress = (quizNumber / question.length) * 100;

  const CheckHandle = async (answer) => {
    const isCorrect = answer === question[quizNumber].correct;
    const isLast = quizNumber >= question.length - 1;
    setCorrectAnswer(question[quizNumber].correct);
    setAnswer(question[quizNumber].answer);

    if (isCorrect) {
      setCorrect(true);
      await wait(2000);
      setCorrect(false)
      setCount((prev) => prev + 1)
    } else {
      setWrong(true);
      await wait(2000);
      setWrong(false);
    }
    
    setQuizNumber((prev) => prev + 1);

    if (isLast) {
      const finalScore = isCorrect ? count + 1 : count;

      $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:5000/result',
        data: {
          usernameStore,
          finalScore,
        },
        contentType: 'application/x-www-form-urlencoded',
        success: (res) => console.log("결과 제출 성공", res),
        error: (err) => console.error("결과 제출 실패", err)
      });

      navigate("/result", { state: { count: finalScore }});
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
      {correct && <Correct answer={answer} />}
      {wrong && <Wrong correct={correctAnswer} answer={answer} />}
      <Progress progress={progress} />
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

export default Quiz;