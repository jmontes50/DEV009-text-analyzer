const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // console.log("words", text.split(" ").length);
    return text.split(" ").length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let textWithoutSpaces = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " " && text[i] !== "." && text[i] !== ",") {
        textWithoutSpaces += text[i];
      }
    }
    return textWithoutSpaces.length;
    // return text.replace(/[\s\.,]/g, "").length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    const cantWords = words.length;
    const sumLength = words.reduce((acc, word) => {
      return acc + word.length;
    }, 0);
    const average = sumLength / cantWords;
    return Math.round(average * 100) / 100;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // const numbers = text.match(/\d/g);
    // console.log({numbers});

    const words = text.split(" ");
    const arrNumbers = [];
    // let arrNumbers = "";
    for (let i = 0; i < words.length; i++) {
      const isNumber = parseFloat(words[i]);
      if (!isNaN(isNumber)) {
        arrNumbers.push(words[i]);
        // arrNumbers += words[i];
      }
    }
    /*
    const arrNumbers = words.filter((word) => {
      const isNumber = word * 1;
      return !isNaN(isNumber);
      // return !isNaN(word);
    });
    */
    return arrNumbers.length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    // const numbers = text.match(/\d/g);
    // return numbers ? numbers.reduce((acc, number) => {
    //   return acc + parseInt(number);
    // }, 0) : 0;
    const words = text.split(" ");
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
      const isNumber = parseFloat(words[i]);
      if (!isNaN(isNumber)) {
        sum += isNumber;
      }
    }
    return sum;
  },
};

export default analyzer;
