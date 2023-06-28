import analyzer from "./analyzer.js";

const {
  getWordCount,
  getCharacterCount,
  getCharacterCountExcludingSpaces,
  getAverageWordLength,
  getNumberCount,
  getNumberSum,
} = analyzer;

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const liCharacters = document.querySelector("ul li:nth-child(1)");
const liCharactersNoSpaces = document.querySelector("ul li:nth-child(2)");
const liWords = document.querySelector("ul li:nth-child(3)");
const liNumbers = document.querySelector("ul li:nth-child(4)");
const liSumNumbers = document.querySelector("ul li:nth-child(5)");
const liAverageLength = document.querySelector("ul li:nth-child(6)");
const textArea = document.querySelector("textarea");
const btnReset = document.getElementById("reset-button");

const updateResults = (e) => {
  const text = e.target.value;
  liCharacters.textContent = `Caracteres ${getCharacterCount(text)}`;
  liCharactersNoSpaces.textContent = `Caracteres sin espacios ${getCharacterCountExcludingSpaces(text)}`;
  liWords.textContent = `Palabras ${getWordCount(text)}`;
  liNumbers.textContent = `Números ${getNumberCount(text)}`;
  liSumNumbers.textContent = `Suma números ${getNumberSum(text)}`;
  liAverageLength.textContent = `Promedio longitud ${getAverageWordLength(text)}`;
};

const resetTextArea = () => {
  textArea.value = "";
  updateResults({ target: { value: "" } });
};

textArea.addEventListener("keyup", updateResults);
btnReset.addEventListener("click", resetTextArea);
