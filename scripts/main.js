import * as alphabet from "./alphabet.js";
alphabet.morseCodeAlphabet;
alphabet.englishAlphabet;
alphabet.morseCodeAlphabetArr;

// ENGLISH TO MORSE CODE TRANSLATOR CLASS
export class EngToMorseCodeTranslator {
  constructor(alphabetArr) {
    this.alphabetArr = alphabetArr;
    this.splitStr = "";
    this.joinStr = " ";
  }

  translateEngToMorseCode(str) {
    if (typeof str === "string" || typeof str === "number") {
      let outputArr = [];
      const strArr = String(str).split(this.splitStr);
      strArr.forEach((character) => {
        this.alphabetArr.forEach((equivalent) => {
          Object.entries(equivalent).forEach(([key, val]) => {
            if (key.toUpperCase() === character.toUpperCase()) {
              outputArr.push(val.toString());
            }
          });
        });
      });
      return outputArr.join(this.joinStr);
    } else {
      return "You must enter a string or a number";
    }
  }
}

// MORSE CODE TO ENGLISH TRANSLATOR CLASS
export class MorseCodeToEngTranslator extends EngToMorseCodeTranslator {
  constructor(alphabetArr) {
    super(alphabetArr);
    this.splitStr = " ";
    this.joinStr = "";
  }

  swapAlphabet() {
    this.alphabetArr = this.alphabetArr.map((equivalent) => {
      const swapKeysAndValues = (obj) => {
        const swapped = Object.entries(obj).map(([key, val]) => [val, key]);
        return Object.fromEntries(swapped);
      };
      return swapKeysAndValues(equivalent);
    });
  }

  translateMorseCodeToEng(str) {
    const output = super.translateEngToMorseCode(str);
    // if (output === "") {
    //   return "#";
    // } else {
    //   return output;
    // }
    return output;
  }
}

// MORSE CODE / ENG TRANSLATOR OBJECTS
const engToMCTranslator = new EngToMorseCodeTranslator(
  alphabet.morseCodeAlphabet
);

const MCToEngTranslator = new MorseCodeToEngTranslator(
  alphabet.morseCodeAlphabet
);

// DOM INTERATION
// Should be able to determine the content of two forms using event listeners and the two objects' methods
const textBoxEnglish = document.querySelector(".translator__input--eng");
const textBoxMorseCode = document.querySelector(
  ".translator__input--morse-code"
);

textBoxEnglish.addEventListener("keyup", (event) => {
  textBoxMorseCode.innerText = engToMCTranslator.translateEngToMorseCode(
    event.target.value
  );
});

textBoxMorseCode.addEventListener("keyup", (event) => {
  MCToEngTranslator.swapAlphabet();
  textBoxEnglish.innerText += MCToEngTranslator.translateMorseCodeToEng(
    event.target.value
  );
});
