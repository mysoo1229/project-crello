import Board from "./Components/Board";
import Header from "./Components/Header";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 20px;
  padding: 30px 20px;
  align-items: start;
`;

function App() {
  return (
    <>
      <Container>
        <Header />
        <Contents>
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </Contents>
      </Container>
    </>
  );
}

export default App;
