import * as RankStyled from "../../styles/rank";

const Item = ({ number, username, score }) => {
  return (
    <RankStyled.Item>
      <RankStyled.ItemContent>
        <RankStyled.ItemNumber> {number} </RankStyled.ItemNumber>
        <RankStyled.ItemUsername> {username} </RankStyled.ItemUsername>
      </RankStyled.ItemContent>
      <RankStyled.ItemScore> {score} </RankStyled.ItemScore>
    </RankStyled.Item>
  );
};

export default Item;