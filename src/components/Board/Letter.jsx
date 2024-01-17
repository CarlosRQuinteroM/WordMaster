/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";

const LetterComtainer = styled.div`
  flex: 33%;
  width: 60px;
  height: 60px;
  border: 2px solid
    ${({ backgroundgame }) =>
      backgroundgame === "" ? "#dee1e9" : "transparent"};
  border-radius: 5px;
  background-color: ${({ backgroundgame }) => backgroundgame};
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: ${({ backgroundgame }) =>
    backgroundgame !== "" ? "#fff" : "#393e4c"};
  font-family: Arial, Helvetica, sans-serif;
`;

function Letter({ letterPosition, attempValue }) {
  const { board, winword, currentAttemp } = useContext(AppContext);
  const letter = board[attempValue][letterPosition];

  const correct = winword[letterPosition] === letter;
  const almost = !correct && letter !== "" && winword.includes(letter);
  const none = !correct && !almost;

  let backgroundColor = "";

  if (currentAttemp.attempt > attempValue) {
    if (correct) {
      backgroundColor = "#79b851";
    } else if (almost) {
      backgroundColor = "#f3c237";
    } else if (none) {
      backgroundColor = "#a4aec4";
    } else {
      backgroundColor = "#fbfcff";
    }
  }
  return (
    <LetterComtainer backgroundgame={backgroundColor}>{letter}</LetterComtainer>
  );
}

export default Letter;
