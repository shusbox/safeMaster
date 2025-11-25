import styled from "@emotion/styled";

export const Card = styled.div`
  padding: 80px 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const Id = styled.p`
  margin: 0px;
  padding: 8px 12px;
  color: #ff669c;
  font-size: 20px;
  border-radius: 9999px;
  background-color: #FFFFFF;
`;

export const Title = styled.h1`
  margin: 0px;
  font-size: 36px;
`;

export const ResponseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Response = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background-color: #FFFFFF;
  cursor: pointer;

  &:hover {
    background-color: #ff8db5ff;
    box-shadow: 0 4px 0 #c35e80ff;
    transform: translateY(-4px);
  }
`;

export const ResponseText = styled.p`
  margin: 0;
  font-size: 22px;
`;

export const Number = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background-color: #ffe6ee;
`;

export const NumberText = styled.p`
  margin: 0;
  font-size: 18px;
`;