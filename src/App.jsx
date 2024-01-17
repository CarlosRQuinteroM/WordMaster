import { createContext, useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import Navbar from "./components/NavBar/NavBar";
import { boardDefault } from "./words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttemp, setCurrentAttemp] = useState({
    attempt: 0,
    letterPosition: 0,
  });

  const [winword, setWinword] = useState("");

  const winnerWord = async () => {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?length=5"
      );
      const data = await response.json();

      setWinword(data[0].toUpperCase());
    } catch (error) {
      console.error("Error al obtener la palabra aleatoria", error);
    }
  };

  useEffect(() => {
    winnerWord();
  }, []);

  const onEnter = () => {
    if (currentAttemp.letterPosition !== 5) return;
    setCurrentAttemp({
      attempt: currentAttemp.attempt + 1,
      letterPosition: 0,
    });
  };
  const onDelete = () => {
    if (currentAttemp.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttemp.attempt][currentAttemp.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttemp({
      ...currentAttemp,
      letterPosition: currentAttemp.letterPosition - 1,
    });
  };
  const onSolectLetter = (keyValue) => {
    if (currentAttemp.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttemp.attempt][currentAttemp.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttemp({
      ...currentAttemp,
      letterPosition: currentAttemp.letterPosition + 1,
    });
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currentAttemp,
            winword,
            setCurrentAttemp,
            onSolectLetter,
            onDelete,
            onEnter,
          }}
        >
          <Board />
          <KeyBoard />
          {winword}
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;