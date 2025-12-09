import * as QuizStyled from "../../styles/quiz";

export const Correct = () => {
  return (
    <>
      <QuizStyled.AnswerBackdrop />
      <QuizStyled.AnswerContainer>
        <QuizStyled.Correct> O </QuizStyled.Correct>
        <QuizStyled.AnswerDescriptionContainer>
          <QuizStyled.AnswerDescription> 정답입니다! </QuizStyled.AnswerDescription>
        </QuizStyled.AnswerDescriptionContainer>
      </QuizStyled.AnswerContainer>
    </>
  );
};

export const Wrong = ({ correct, answer }) => {
  return (
    <>
      <QuizStyled.AnswerBackdrop />
      <QuizStyled.AnswerContainer>
        <QuizStyled.Wrong> X </QuizStyled.Wrong>
        <QuizStyled.AnswerDescriptionContainer>
          <QuizStyled.AnswerDescription> 정답: {correct} </QuizStyled.AnswerDescription>
          <QuizStyled.AnswerDescription> {answer} </QuizStyled.AnswerDescription>
        </QuizStyled.AnswerDescriptionContainer>
      </QuizStyled.AnswerContainer>
    </>
  );
};