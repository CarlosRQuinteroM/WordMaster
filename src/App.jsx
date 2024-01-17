import { createContext, useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import Header from "./components/Header/Header";
import { boardDefault } from "./words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttemp, setCurrentAttemp] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [winword, setWinword] = useState("");
  const [numColumns, setNumColumns] = useState(5);

  const winnerWord = async () => {
    try {
      const response = await fetch(
        `https://random-word-api.herokuapp.com/word?length=${numColumns}`
      );
      const data = await response.json();

      setWinword(data[0].toUpperCase());
    } catch (error) {
      console.error("Error al obtener la palabra aleatoria", error);
    }
  };

  useEffect(() => {
    winnerWord();
  }, [numColumns]);

  const onEnter = () => {
    if (currentAttemp.letterPosition !== numColumns) return;
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
    if (currentAttemp.letterPosition > numColumns - 1) return;
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
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currentAttemp,
            winword,
            numColumns,
            setNumColumns,
            setCurrentAttemp,
            onSolectLetter,
            onDelete,
            onEnter,
          }}
        >
          <Header />
          <Board numRows={6} numColumns={numColumns} />
          <KeyBoard />
          {winword}
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
