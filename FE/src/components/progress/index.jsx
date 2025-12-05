import * as ProgressStyled from "../../styles/progress";

const Progress = ({ progress }) => {
  return (
    <ProgressStyled.ProgressContainer>
      <ProgressStyled.ProgressBar style={{ width: `${progress}%` }} />
    </ProgressStyled.ProgressContainer>
  );
};

export default Progress;