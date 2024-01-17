import "./App.css";
import Board from "./components/Board/Board";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Board />
        <KeyBoard />
      </div>
    </>
  );
}

export default App;
