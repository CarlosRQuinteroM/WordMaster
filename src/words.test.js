/* eslint-disable no-undef */
const { DICTIONARY_API } = require("./utils");
const { createBoard, getRandomWord, isValidWord } = require("./words");

describe("createBoard", () => {


  test("creates a board with the specified rows and columns", () => {
    const rows = 3;
    const columns = 4;
    const board = createBoard(rows, columns);

    expect(board).toHaveLength(rows);
    board.forEach((row) => {
      expect(row).toHaveLength(columns);
      expect(row.every((cell) => cell === "")).toBe(true);
    });
  });
});

describe("getRandomWord", () => {
  test("returns a random word of the specified length in uppercase", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(["hello"]),
      })
    );
    const length = 5;
    const word = await getRandomWord(length);
    console.log;

    expect(word).toHaveLength(length);
    expect(word).toEqual(word.toUpperCase());
    
    fetch.mockClear();
  });
});

describe("isValidWord", () => {
  test("calls the dictionary API to check if word is valid", async () => {
    const validWord = "hello";
    const invalidWord = "xyzzyx";

    global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    })
  );

    await isValidWord(validWord);
    await isValidWord(invalidWord);

    expect(fetch).toHaveBeenNthCalledWith(1, `${DICTIONARY_API}${validWord}`)
    expect(fetch).toHaveBeenNthCalledWith(2, `${DICTIONARY_API}${invalidWord}`)
    expect(fetch).toHaveBeenCalledTimes(2)
  });
});
