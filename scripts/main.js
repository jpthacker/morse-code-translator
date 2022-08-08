import { morseCodeAlphabet } from "./alphabet.js";

// TRANSLATOR CLASS
// Should be able to take two library parameters and translater one into the other
// Should be able to take any libraries of equivalents
export class Translator {
  constructor(alphabetArr) {
    this.alphabetArr = alphabetArr;
  }

  translateFirstCharacter(character) {
    this.alphabetArr.forEach((equivalent) => {
      let output = "test";
      for (let key in equivalent) {
        if (key === character.toUpperCase()) {
          output = equivalent[key];
        }
      }
      return output;
    });
  }
}

const test = new Translator(morseCodeAlphabet);

console.log(test.translateFirstCharacter("a"));

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
