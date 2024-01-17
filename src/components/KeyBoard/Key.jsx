import styled from "styled-components";
import PropTypes from "prop-types";
import { AppContext } from "../../App";
import { useContext } from "react";

const KeysBoard = styled.div`
  width: 70px;
  height: 70px;
  align-items: center;
  background-color: #dce1ed;
  color: #414a5e !important;
  border: 2px solid transparent;
  border-radius: 4px;
  color: inherit;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex: 1 1;
  font-size: 17px;
  font-weight: 700;
  justify-content: center;
  margin: 3px;
  min-height: 46px;
  padding: 3px;
  text-decoration: inherit;
  text-transform: capitalize;

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
