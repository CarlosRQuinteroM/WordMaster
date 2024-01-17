/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";

const LetterComtainer = styled.div`
  flex: 33%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: ${({ dynamicId }) =>
    dynamicId === "winner"
      ? "#528d4e"
      : dynamicId === "almost"
      ? "#b49f39"
      : dynamicId === "none"
      ? "#838383"
      : ""};
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

function Letter({ letterPosition, attempValue }) {
  const { board, winword, currentAttemp } = useContext(AppContext);
  const letter = board[attempValue][letterPosition];

  const correct = winword[letterPosition] === letter;
  const almost = !correct && letter !== "" && winword.includes(letter);
  const none = !correct && !almost;

  const dyId =
    currentAttemp.attempt > attempValue &&
    (correct ? "winner" : almost ? "almost" : none ? "none" : "");

  return <LetterComtainer dynamicId={dyId}>{letter}</LetterComtainer>;
}

export default Letter;