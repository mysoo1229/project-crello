import styled from "styled-components";

const CardWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
  padding: 16px 12px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, .02);

  p {
    font-size: 15px;
    line-height: 18px;
  }

  button {
    position: relative;
    width: 18px;
    height: 18px;
    margin-left: auto;
    border-radius: 8px;
    background: #e2e2e2;

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 4px;
      left: 8px;
      width: 2px;
      height: 10px;
      background: #fff;
    }

    &::after {
      transform: rotate(45deg);
    }

    &::before {
      transform: rotate(-45deg);
    }
  }
`;

function Card() {
  return (
    <CardWrap>
      <p>This is a task.</p>
      <button aria-label="delete"></button>
    </CardWrap>
  );
}

export default Card;
