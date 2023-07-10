import Card from "./Card";
import styled from "styled-components";

const BoardWrap = styled.div`
  padding: 12px 0;
  border-radius: 8px;
  background-color: #f3f3f3;
`;

const Title = styled.h2`
  padding: 4px 16px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 12px 0;
  transition: background-color .3s ease;
`;

const Form = styled.form`
  width: calc(100% - 24px);
  margin: 6px auto 0;

  input {
    width: 100%;
    border: none;
    padding: 16px 12px;
    border-radius: 8px;
    background-color: #f3f3f3;
    border: 2px solid #ddd;
    font-size: 15px;

    &::placeholder {
      color: #999;
    }
  }
`;

function Board() {
  return (
    <BoardWrap>
      <Title>⏰ To Do</Title>
      <CardList>
        <Card />
        <Card />
      </CardList>
      <Form>
        <input
          type="text"
          placeholder="+ add a task"
        />
      </Form>
    </BoardWrap>
  );
}

export default Board;
