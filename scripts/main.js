import * as alphabet from "./alphabet.js";

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
        this.alphabetArr.forEach((alphabet) => {
          Object.entries(alphabet).forEach(([key, val]) => {
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

  getTranslationHTML(value) {
    const toTranslate = value;
    console.log(toTranslate);
    return this.translateEngToMorseCode(toTranslate);
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
    this.alphabetArr = this.alphabetArr.map((alphabet) => {
      const swapKeysAndValues = (obj) => {
        const swapped = Object.entries(obj).map(([key, val]) => [val, key]);
        return Object.fromEntries(swapped);
      };
      return swapKeysAndValues(alphabet);
    });
  }

  translateMorseCodeToEng(str) {
    const output = super.translateEngToMorseCode(str);
    if (output === "") {
      return "#";
    } else {
      return output;
    }
  }

  getTextBoxLastItem(value) {
    const textBoxArr = value.split(" ");
    const cleanedTextBoxArr = textBoxArr.filter((item) => {
      return item !== this.joinStr;
    });
    return cleanedTextBoxArr[cleanedTextBoxArr.length - 1];
  }

  getTranslationHTML(value) {
    if (this.translateMorseCodeToEng(this.getTextBoxLastItem(value)) === "#") {
      return "Please enter valid morse code. Seperate characters with a ' ' and use '/' to represent spaces between words.";
    } else {
      const toTranslate = value;
      console.log(toTranslate);
      return this.translateEngToMorseCode(toTranslate);
    }
  }
}

// MORSE CODE / ENG TRANSLATOR OBJECTS
const engToMCTranslator = new EngToMorseCodeTranslator(
  alphabet.morseCodeAlphabet
);

const mcToEngTranslator = new MorseCodeToEngTranslator(
  alphabet.morseCodeAlphabet
);
// Swap alphabets so that for second object key = morse code and val = eng
mcToEngTranslator.swapAlphabet();

// DOM INTERATION
// HTML elements
const textBoxEnglish = document.querySelector(".translator__input--eng");
const textBoxMorseCode = document.querySelector(
  ".translator__input--morse-code"
);

// Event listener for translating eng to morse code
textBoxEnglish.addEventListener("input", (event) => {
  textBoxMorseCode.value = "";
  textBoxMorseCode.value += engToMCTranslator.getTranslationHTML(
    event.target.value
  );
  console.log("Fired1");
});

// Event listener for translating morse code to eng (displays message if morse code character is untranslatable)
textBoxMorseCode.addEventListener("input", (event) => {
  textBoxEnglish.value = "";
  textBoxEnglish.value += mcToEngTranslator.getTranslationHTML(
    event.target.value
  );
  console.log("Fired2");
});

// Solve: only listens to one text area at a time. Once other is activated both stop.
// To do: seperate classes and DOM elements into different files
