import { useContext } from "react";
import { AppContext } from "../../App";

function GameFinish() {
  const { finishGame, winWord } = useContext(AppContext);
  return (
    <div>
      <h2>
        {finishGame.guessedWord
          ? "Winner Winner chikend Dinner"
          : "Loser Loser No Dinner"}
      </h2>
      <h3>{winWord}</h3>
    </div>
  );
}

export default GameFinish;
