import styled from "styled-components";
import Letter from "./Letter";

const BoardContainer = styled.div`
  width: 450px;
  height: 550px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

function Board() {
 
  return (
    <BoardContainer>
      <RowContainer>
        <Letter letterPosition={0} attempValue={0} />
        <Letter letterPosition={1} attempValue={0} />
        <Letter letterPosition={2} attempValue={0} />
        <Letter letterPosition={3} attempValue={0} />
        <Letter letterPosition={4} attempValue={0} />
      </RowContainer>
      <RowContainer>
        <Letter letterPosition={0} attempValue={1} />
        <Letter letterPosition={1} attempValue={1} />
        <Letter letterPosition={2} attempValue={1} />
        <Letter letterPosition={3} attempValue={1} />
        <Letter letterPosition={4} attempValue={1} />
      </RowContainer>
      <RowContainer>
        <Letter letterPosition={0} attempValue={2} />
        <Letter letterPosition={1} attempValue={2} />
        <Letter letterPosition={2} attempValue={2} />
        <Letter letterPosition={3} attempValue={2} />
        <Letter letterPosition={4} attempValue={2} />
      </RowContainer>
      <RowContainer>
        <Letter letterPosition={0} attempValue={3} />
        <Letter letterPosition={1} attempValue={3} />
        <Letter letterPosition={2} attempValue={3} />
        <Letter letterPosition={3} attempValue={3} />
        <Letter letterPosition={4} attempValue={3} />
      </RowContainer>
      <RowContainer>
        <Letter letterPosition={0} attempValue={4} />
        <Letter letterPosition={1} attempValue={4} />
        <Letter letterPosition={2} attempValue={4} />
        <Letter letterPosition={3} attempValue={4} />
        <Letter letterPosition={4} attempValue={4} />
      </RowContainer>
      <RowContainer>
        <Letter letterPosition={0} attempValue={5} />
        <Letter letterPosition={1} attempValue={5} />
        <Letter letterPosition={2} attempValue={5} />
        <Letter letterPosition={3} attempValue={5} />
        <Letter letterPosition={4} attempValue={5} />
      </RowContainer>
    </BoardContainer>
  );
}

export default Board;
