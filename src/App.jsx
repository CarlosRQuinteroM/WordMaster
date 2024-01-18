import { createContext, useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import Header from "./components/Header/Header";
import { boardDefault } from "./words";
import GameFinish from "./components/GameFinish/GameFinish";

export const AppContext = createContext();

const getRandomWord = async (length) => {
  try {
    const response = await fetch(
      `https://random-word-api.herokuapp.com/word?length=${length}&lang=en`
    );
    const data = await response.json();
    return data[0].toUpperCase();
  } catch (error) {
    console.error("Error al obtener la palabra aleatoria", error);
    throw error;
  }
};

const isValidWord = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    return response.ok && data.length > 0;
  } catch (error) {
    console.error("Error al verificar la palabra", error);
    throw error;
  }
};

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttemp, setCurrentAttemp] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [winword, setWinword] = useState("");
  const [wordLength, setWordLength] = useState(5);
  const [keyStatus, setKeyStatus] = useState([]);
  const [finishGame, setFinishGame] = useState({
    finishGame: false,
    guessedWord: false,
  });

  useEffect(() => {
    const winnerWord = async () => {
      let validWord = false;
      let newWord = "";
      let attempts = 0;
      const maxAttempts = 10;

      while (!validWord && attempts < maxAttempts) {
        try {
          newWord = await getRandomWord(wordLength);
          validWord = await isValidWord(newWord);
          attempts++;
        } catch (error) {
          alert(error);
        }
      }

      if (!validWord) {
        alert("Could not find a valid word after several attempts");
        console.error("Could not find a valid word after several attempts");
      }

      setWinword(newWord);
    };

    winnerWord();
  }, [wordLength]);

  const onEnter = async () => {
    if (currentAttemp.letterPosition !== wordLength) return;
    const wordToCheck = board[currentAttemp.attempt].join("").toLowerCase();

    try {
      const isValid = await isValidWord(wordToCheck);
      if (isValid) {
        setCurrentAttemp({
          attempt: currentAttemp.attempt + 1,
          letterPosition: 0,
        });
      } else {
        alert(`La palabra "${wordToCheck}" no es válida`);
      }
    } catch (error) {
      alert("Error al verificar la palabra", error);
    }
    console.log("wordToCheck:", wordToCheck);
    console.log("winword:", winword);

    if (wordToCheck.toUpperCase() === winword.toUpperCase()) {
      console.log("winner");
      setFinishGame({ finishGame: true, guessedWord: true });
      return;
    }
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
  //wordLength

  const onSolectLetter = (keyValue) => {
    if (currentAttemp.letterPosition > wordLength - 1) return;
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
            wordLength,
            setWordLength,
            setCurrentAttemp,
            onSolectLetter,
            onDelete,
            onEnter,
            keyStatus,
            setKeyStatus,
            finishGame,
            setFinishGame,
          }}
        >
          <Header />
          <Board numRows={6} wordLength={wordLength} />
          {finishGame.finishGame ? <GameFinish /> : <KeyBoard />}
          <h1>{winword}</h1>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
