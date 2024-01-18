import React, { createContext, useState, useEffect, useCallback } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import Header from "./components/Header/Header";
import { createBoard, getRandomWord, isValidWord } from "./words";
import { Modal } from "@mui/material";
import StatusWordModal from "./components/Modals/StatusWordModal";
import { INVALID_WORD, ERROR, WINNER, LOSER } from "./utils";
import GameFinish from "./components/GameFinish/GameFinish";

export const AppContext = createContext();

function App() {
  const [wordLength, setWordLength] = useState(5);
  const [board, setBoard] = useState(() => createBoard(6, wordLength));
  const [currentAttemp, setCurrentAttemp] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [winword, setWinword] = useState("");

  const [keyStatus, setKeyStatus] = useState([]);
  const [finishGame, setFinishGame] = useState({
    finishGame: false,
    guessedWord: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState(board);
  // Restart Game
  const [restartGame, setRestartGame] = useState(false);

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
          console.log(error);
        }
      }

      if (!validWord) {
        alert(
          "Could not find a valid word after several attempts, try letter."
        );
      }
      setWinword(newWord);
    };
    winnerWord();

    if (restartGame) {
      setRestartGame(false);
      setBoard(() => createBoard(6, wordLength));
      setCurrentAttemp({ attempt: 0, letterPosition: 0 });
      setWinword("");
      setKeyStatus([]);
      setFinishGame({ finishGame: false, guessedWord: false });
      setIsOpen(false);
      setModalStatus("");
    }
  }, [wordLength, restartGame]);

  const onEnter = useCallback(async () => {
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
        setIsOpen(true);
        setModalStatus(INVALID_WORD);
      }
    } catch (error) {
      setIsOpen(true);
      setModalStatus(ERROR);
    }
    // "Winner"
    if (wordToCheck.toUpperCase() === winword.toUpperCase()) {
      setIsOpen(true);
      setFinishGame({ finishGame: true, guessedWord: true });
      setModalStatus(WINNER);
      return;
    }

    if (currentAttemp.attempt === 5) {
      setIsOpen(true);
      setFinishGame({ finishGame: true, guessedWord: false });
      setModalStatus(LOSER);
      return;
    }
  }, [
    board,
    currentAttemp.attempt,
    currentAttemp.letterPosition,
    winword,
    wordLength,
  ]);

  const onDelete = useCallback(() => {
    if (currentAttemp.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttemp.attempt][currentAttemp.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttemp({
      ...currentAttemp,
      letterPosition: currentAttemp.letterPosition - 1,
    });
  }, [board, currentAttemp, setBoard, setCurrentAttemp]);

  const onSolectLetter = useCallback(
    (keyValue) => {
      if (currentAttemp.letterPosition > wordLength - 1) return;
      const newBoard = [...board];
      newBoard[currentAttemp.attempt][currentAttemp.letterPosition] = keyValue;
      setBoard(newBoard);
      setCurrentAttemp({
        ...currentAttemp,
        letterPosition: currentAttemp.letterPosition + 1,
      });
      // tu lógica
    },
    [board, currentAttemp, setBoard, setCurrentAttemp, wordLength]
  );
  //Utiliza React.memo para memorizar componentes funcionales y evitar que se vuelvan a renderizar innecesariamente.
  const MemoizedBoard = React.memo(Board);
  const MemoizedKeyBoard = React.memo(KeyBoard);

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
            setRestartGame,
          }}
        >
          <Header />
          <MemoizedBoard numRows={6} wordLength={wordLength} />
          {finishGame.finishGame ? <GameFinish /> : <MemoizedKeyBoard />}
          <h1>{winword}</h1>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <StatusWordModal status={modalStatus.toString()}></StatusWordModal>
          </Modal>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
