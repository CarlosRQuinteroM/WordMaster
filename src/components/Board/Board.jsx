import styled from "styled-components";
import PropTypes from "prop-types";
import Letter from "./Letter";
import { createBoard } from "../../words";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

function Board({ numRows, wordLength }) {
  const board = createBoard(numRows, wordLength);
  return (
    <BoardContainer>
      {board.map((row, rowIndex) => (
        <RowContainer key={rowIndex}>
          {row.map((_, colIndex) => (
            <Letter
              key={colIndex}
              letterPosition={colIndex}
              attempValue={rowIndex}
            />
          ))}
        </RowContainer>
      ))}
    </BoardContainer>
  );
}

Board.propTypes = {
  numRows: PropTypes.number.isRequired,
  wordLength: PropTypes.number.isRequired,
};

export default Board;
