import styled from "styled-components";
import Key from "./Key";

const KeyBoardContainer = styled.div`
  max-width: 767px;
  height: 300px;
  margin-top: 34px;
  display: flex;
  flex-direction: column;
`;
const LineKeyBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
`;

function KeyBoard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <KeyBoardContainer>
      <LineKeyBoard>
        {keys1.map((key, index) => {
          return <Key key={index} keyValue={key} />;
        })}
      </LineKeyBoard>
      <LineKeyBoard>
        {keys2.map((key, index) => {
          return <Key key={index} keyValue={key} />;
        })}
      </LineKeyBoard>

      <LineKeyBoard>
        <Key keyValue={"DELETE"} />

        {keys3.map((key, index) => {
          return <Key key={index} keyValue={key} />;
        })}
        <Key keyValue={"ENTER"} />
      </LineKeyBoard>
    </KeyBoardContainer>
  );
}

export default KeyBoard;
