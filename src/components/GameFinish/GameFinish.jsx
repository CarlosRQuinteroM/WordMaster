import { useContext } from "react";
import { AppContext } from "../../App";
import styled from "styled-components";

const RestartButton = styled.button`
  background-color: #45a049;
  color: white;
  font-size: 16px;
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d2ac6a;
  }
`;

function GameFinish() {
  const { setRestartGame } = useContext(AppContext);
  return (
    <div>
      <RestartButton onClick={() => setRestartGame(true)}>
        Reiniciar Juego
      </RestartButton>
    </div>
  );
}

export default GameFinish;
