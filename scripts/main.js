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

  getTranslationHTML(event, textarea) {
    textarea.innerHTML = this.translateEngToMorseCode(event.target.value);
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

  getTextBoxLastItem(event) {
    const textBoxArr = event.target.value.split(" ");
    const cleanedTextBoxArr = textBoxArr.filter((item) => {
      return item !== mcToEngTranslator.joinStr;
    });
    return cleanedTextBoxArr[cleanedTextBoxArr.length - 1];
  }

  getNewTranslationHTML(event, textarea) {
    if (this.translateMorseCodeToEng(this.getTextBoxLastItem(event)) === "#") {
      textarea.innerHTML = "#";
    } else {
      super.getTranslationHTML(event, textarea);
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
  engToMCTranslator.getTranslationHTML(event, textBoxMorseCode);
});

// Event listener for translating morse code to eng (displays '#' if single piece of code in sequence is untranslatable)
textBoxMorseCode.addEventListener("input", (event) => {
  mcToEngTranslator.getNewTranslationHTML(event, textBoxEnglish);
});

// Solve: only listens to one text area at a time. Once other is activated both stop.
