import * as QuizStyles from "../styles/quiz";

const Number = ({ number }) => {
  return (
    <QuizStyles.Number>
      <QuizStyles.NumberText> {number} </QuizStyles.NumberText>
    </QuizStyles.Number>
  );
};

const Response = ({ number, response }) => {
  return (
    <QuizStyles.Response>
      <Number number={number} />
      <QuizStyles.ResponseText> {response} </QuizStyles.ResponseText>
    </QuizStyles.Response>
  );
};

const QuizCard = ({ id, title }) => {
  return (
    <QuizStyles.Card>
      <QuizStyles.TitleWrapper>
        <QuizStyles.Id> Quiz {id} </QuizStyles.Id>
        <QuizStyles.Title> {title} </QuizStyles.Title>
      </QuizStyles.TitleWrapper>
      <QuizStyles.ResponseWrapper>
        <Response number={"1"} response={"열원 근처에 인화성 물질을 두지 않는다."} />
        <Response number={"2"} response={"가열 장치나 알코올램프를 사용할 때 선생님의 지시에 따른다."} />
        <Response number={"3"} response={"전열기는 전원을 끈 후에도 잔열이 남아있으므로 주의한다."} />
      </QuizStyles.ResponseWrapper>
    </QuizStyles.Card>
  );
};

export default QuizCard;