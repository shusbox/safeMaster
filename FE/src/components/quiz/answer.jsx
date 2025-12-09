import * as QuizStyled from "../../styles/quiz";

export const Correct = () => {
  return (
    <>
      <QuizStyled.AnswerBackdrop />
      <QuizStyled.AnswerContainer>
        <QuizStyled.Correct> O </QuizStyled.Correct>
        <QuizStyled.AnswerDescription> 정답입니다! </QuizStyled.AnswerDescription>
      </QuizStyled.AnswerContainer>
    </>
  );
};

export const Wrong = () => {
  return (
    <>
      <QuizStyled.AnswerBackdrop />
      <QuizStyled.AnswerContainer>
        <QuizStyled.Wrong> X </QuizStyled.Wrong>
        <QuizStyled.AnswerDescription> 오답입니다. </QuizStyled.AnswerDescription>
      </QuizStyled.AnswerContainer>
    </>
  );
};