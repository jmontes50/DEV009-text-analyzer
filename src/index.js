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
  liCharacters.innerText = `Caracteres ${getCharacterCount(text)}`;
  liCharactersNoSpaces.innerText = `Caracteres sin espacios ${getCharacterCountExcludingSpaces(text)}`;
  liWords.innerText = `Palabras ${getWordCount(text)}`;
  liNumbers.innerText = `Números ${getNumberCount(text)}`;
  liSumNumbers.innerText = `Suma números ${getNumberSum(text)}`;
  liAverageLength.innerText = `Promedio longitud ${getAverageWordLength(text)}`;
};

const resetTextArea = () => {
  textArea.value = "";
  updateResults({ target: { value: "" } });
};

textArea.addEventListener("keyup", updateResults);
btnReset.addEventListener("click", resetTextArea);
