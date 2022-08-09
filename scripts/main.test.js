import { morseCodeAlphabet } from "./alphabet";

import * as classes from "./main";
classes.EngToMorseCodeTranslator;

describe("Morse code translator tests", () => {
  describe("English to morse code translator", () => {
    const engToMCTranslator = new classes.EngToMorseCodeTranslator(
      morseCodeAlphabet
    );
    test("Should be able to translate english to morse code", () => {
      expect(engToMCTranslator.translateEngToMorseCode("working")).toBe(
        ".-- --- .-. -.- .. -. --."
      );
      expect(engToMCTranslator.translateEngToMorseCode("Hello")).toBe(
        ".... . .-.. .-.. ---"
      );
    });

    test("Should be able to handle lower and upper case entries", () => {
      expect(engToMCTranslator.translateEngToMorseCode("JackThacker")).toBe(
        ".--- .- -.-. -.- - .... .- -.-. -.- . .-."
      );
      expect(engToMCTranslator.translateEngToMorseCode("WORKING")).toBe(
        ".-- --- .-. -.- .. -. --."
      );
    });

    test("Should be able to handle punctuation", () => {
      expect(engToMCTranslator.translateEngToMorseCode(":! ")).toBe(
        "---... -.-.-- /"
      );
    });

    test("Should return a string", () => {
      expect(engToMCTranslator.translateEngToMorseCode("123")).toBe(
        ".---- ..--- ...--"
      );
    });

    test("Should format the translation so that it is easy to understand", () => {
      expect(engToMCTranslator.translateEngToMorseCode("This is working")).toBe(
        "- .... .. ... / .. ... / .-- --- .-. -.- .. -. --."
      );
      expect(engToMCTranslator.translateEngToMorseCode("as easy as 123!")).toBe(
        ".- ... / . .- ... -.-- / .- ... / .---- ..--- ...-- -.-.--"
      );
    });

    test("Should be able to handle non string entries", () => {
      expect(engToMCTranslator.translateEngToMorseCode(6)).toBe("-....");
      expect(engToMCTranslator.translateEngToMorseCode(567432)).toBe(
        "..... -.... --... ....- ...-- ..---"
      );
    });
  });

  describe("Morse code to english translator", () => {
    const mcToEngTranslator = new classes.MorseCodeToEngTranslator(
      morseCodeAlphabet
    );
    mcToEngTranslator.swapAlphabet();
    test("Should be able to translate morse code to english", () => {
      expect(mcToEngTranslator.translateMorseCodeToEng("... --- ...")).toBe(
        "SOS"
      );
      expect(
        mcToEngTranslator.translateMorseCodeToEng(
          "- .... .. ... / .. ... / .-- --- .-. -.- .. -. --."
        )
      ).toBe("THIS IS WORKING");
    });
    test("Should return '#' if input doesn't match morse code symbol", () => {
      expect(
        mcToEngTranslator.translateMorseCodeToEng("--..--..--..--..--..")
      ).toBe("#");
    });
  });
});
