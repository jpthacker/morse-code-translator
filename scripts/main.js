import * as alphabet from "./alphabet.js";
alphabet.englishAlphabet;
alphabet.morseCodeAlphabet;

// TRANSLATOR CLASS
// Should be able to take two library parameters and translater one into the other
// Should be able to take any libraries of equivalents

// OBJECT VERSION
// export class Translator {
//   constructor(alphabetArr) {
//     this.alphabetArr = alphabetArr;
//   }

//   translateCharacter(singleCharacterStr) {
//     if (typeof singleCharacterStr === "string") {
//       let output;
//       this.alphabetArr.forEach((equivalent) => {
//         for (let key in equivalent) {
//           if (key.toUpperCase() === singleCharacterStr.toUpperCase()) {
//             output = equivalent[key].toString();
//           }
//         }
//       });
//       return output;
//     } else {
//       return "You must enter a string";
//     }
//   }
// }

// const test = new Translator(morseCodeAlphabet);

// console.log(test.translateCharacter("a"));

// ARRAYS VERSION
export class Translator {
  constructor(firstAlphabetArr, secondAlphabetArr) {
    this.firstAlphabetArr = firstAlphabetArr;
    this.secondAlphabetArr = secondAlphabetArr;
  }

  translateCharacter(singleCharacterStr) {
    if (
      typeof singleCharacterStr === "string" ||
      singleCharacterStr.length === 1
    ) {
      let output;
      for (let i = 0; i < this.firstAlphabetArr.length; i++) {
        if (
          singleCharacterStr.toUpperCase() ===
          this.firstAlphabetArr[i].toUpperCase()
        ) {
          output = this.secondAlphabetArr[i];
        }
      }
      return output.toString();
    } else {
      return "You must enter a single character as a string";
    }
  }
}

const test = new Translator(
  alphabet.englishAlphabet,
  alphabet.morseCodeAlphabet
);

console.log(test.translateCharacter("a"));

// MORSE CODE TO ENGLISH CLASS
// Should be able to handle the two libraries required to translate from MC to Eng
// Should format the translation so that it is easy to understand

// ENGLISH TO MORSE CODE CLASS
// Should be able to handle the two libraries required to translate from Eng to MC
// Should format the translation so that it is easy to understand

// MORSE CODE TRANSLATOR OBJECTS
// Objects should be able to handle the translations either way (two objects - one for each direction of translation)

// DOM INTERATION
// Should be able to determine the content of two forms using event listeners and the two objects' methods
