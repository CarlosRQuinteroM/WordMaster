import { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { AppContext } from "../../App";

const LetterComtainer = styled.div`
  flex: 33%;
  width: 65px;
  height: 65px;
  border: 3px solid
    ${({ backgroundgame }) =>
      backgroundgame === "" ? "#dee1e9" : "transparent"};
  border-radius: 6px;
  background-color: ${({ backgroundgame }) =>
    backgroundgame !== "" ? backgroundgame : "#fbfcff"};
  margin-left: 5px;
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

  // useEffect(() => {
  //   if (letter !== "") {
  //     setKeyStatus((prev)=> [...prev, letter]);
  //   }
  // }, [currentAttemp.attempt]);

  let backgroundColor = "";

  if (currentAttemp.attempt > attempValue) {
    if (correct) {
      backgroundColor = "#79b851";
    } else if (almost) {
      backgroundColor = "#f3c237";
    } else if (none) {
      backgroundColor = "#a4aec4";
    }
  }
  return (
    <LetterComtainer backgroundgame={backgroundColor}>{letter}</LetterComtainer>
  );
}
Letter.propTypes = {
  letterPosition: PropTypes.number.isRequired,
  attempValue: PropTypes.number.isRequired,
};
export default Letter;
