import styled from "styled-components";
import PropTypes from "prop-types";
import { AppContext } from "../../App";
import { useContext } from "react";

const KeysBoard = styled.div`
  width: 100px;
  height: 70px;
  margin: 5px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: grey;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  transition: width 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function Key({ keyValue }) {
  const { onSolectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSolectLetter(keyValue);
    }
  };

  return (
    <KeysBoard onClick={selectLetter} value={keyValue}>
      {keyValue}
    </KeysBoard>
  );
}

Key.propTypes = {
  keyValue: PropTypes.string.isRequired,
};

export default Key;
