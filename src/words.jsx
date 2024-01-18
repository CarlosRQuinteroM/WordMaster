export function createBoard(rows, columns) {
  const board = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push("");
    }
    board.push(row);
  }

  return board;
}
export const getRandomWord = async (length) => {
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

export const isValidWord = async (word) => {
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
