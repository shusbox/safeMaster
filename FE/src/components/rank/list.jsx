import $ from "jquery";
import { useState, useEffect } from "react";
import * as RankStyled from "../../styles/rank";
import Item from "./item";

const List = () => {
  const [ list, setList ] = useState([]);
  const [ fail, setFail ] = useState(false);

  useEffect(() => {
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:5000/signin',
    }).done((result) => {
      setList(result);
    }).fail((result) => {
      console.log(result);
      setFail(true);
    })
  }, []);

  return (
    <RankStyled.ListContainer>
      {list.map((item, index) => {
        <Item key={index} number={index + 1} username={item.username} score={item.score} />
      })}
      {fail && <p> 랭킹을 불러오지 못했습니다. </p> }
    </RankStyled.ListContainer>
  );
};

export default List;