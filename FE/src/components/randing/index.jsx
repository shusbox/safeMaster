import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as RandingStyled from "../../styles/randing";

const Randing = ({ title }) => {
  const navigate = useNavigate();
  const [ time, setTime ] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev < 1) {
          navigate(`/quiz/${title}`);
          return 0;
        } return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <RandingStyled.Container>
      <RandingStyled.Title> {title} </RandingStyled.Title>
      <RandingStyled.Time> {time}초 뒤 시작합니다... </RandingStyled.Time>
    </RandingStyled.Container>
  );
};

export default Randing;