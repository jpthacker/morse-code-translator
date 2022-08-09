import * as alphabet from "./alphabet.js";
alphabet.morseCodeAlphabet;
alphabet.englishAlphabet;
alphabet.morseCodeAlphabetArr;

// ENGLISH TO MORSE CODE TRANSLATOR CLASS

// OBJECT-BASED VERSION
export class EngToMorseCodeTranslator {
  constructor(alphabetArr) {
    this.alphabetArr = alphabetArr;
  }

  translateEngToMorseCode(str) {
    // if (typeof str === "string") {
    let outputArr = [];
    const strArr = String(str).split("");
    strArr.forEach((character) => {
      this.alphabetArr.forEach((equivalent) => {
        for (let key in equivalent) {
          if (key.toUpperCase() === character.toUpperCase()) {
            outputArr.push(equivalent[key].toString());
          }
        }
      });
    });
    return outputArr.join(" ");
    // } else {
    //   return "You must enter a string";
    // }
  }
}

const test = new EngToMorseCodeTranslator(alphabet.morseCodeAlphabet);

console.log(test.translateEngToMorseCode(":! "));

// MORSE CODE TO ENGLISH TRANSLATOR CLASS

// OBJECT-BASED VERSION

export class MorseCodeToEngTranslator extends EngToMorseCodeTranslator {
  constructor(alphabetArr) {
    super(alphabetArr);
  }

  translateMorseCodeToEng() {}
}

// ARRAYS-BASED VERSION
// export class Translator {
//   constructor(firstAlphabetArr, secondAlphabetArr) {
//     this.firstAlphabetArr = firstAlphabetArr;
//     this.secondAlphabetArr = secondAlphabetArr;
//   }

//   translateCharacter(singleCharacterStr) {
//     if (
//       typeof singleCharacterStr === "string" ||
//       singleCharacterStr.length === 1
//     ) {
//       let output;
//       for (let i = 0; i < this.firstAlphabetArr.length; i++) {
//         if (
//           singleCharacterStr.toUpperCase() ===
//           this.firstAlphabetArr[i].toUpperCase()
//         ) {
//           output = this.secondAlphabetArr[i];
//         }
//       }
//       return output.toString();
//     } else {
//       return "You must enter a single character as a string";
//     }
//   }
// }

// const test = new Translator(
//   alphabet.englishAlphabet,
//   alphabet.morseCodeAlphabetArr
// );

// console.log(test.translateCharacter("a"));

// MORSE CODE TRANSLATOR OBJECTS
// Objects should be able to handle the translations either way (two objects - one for each direction of translation)

// DOM INTERATION
// Should be able to determine the content of two forms using event listeners and the two objects' methods
