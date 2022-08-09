import { morseCodeAlphabet } from "./alphabet";

import * as classes from "./main";
classes.EngToMorseCodeTranslator;

describe("English to morse code translator tests", () => {
  describe("Default translator", () => {
    const sampleTranslator = new classes.EngToMorseCodeTranslator(
      morseCodeAlphabet
    );
    test("Should be able to translate english to morse code", () => {
      expect(sampleTranslator.translateEngToMorseCode("working")).toBe(
        ".-- --- .-. -.- .. -. --."
      );
      expect(sampleTranslator.translateEngToMorseCode("Hello")).toBe(
        ".... . .-.. .-.. ---"
      );
    });

    test("Should be able to handle lower and upper case entries", () => {
      expect(sampleTranslator.translateEngToMorseCode("JackThacker")).toBe(
        ".--- .- -.-. -.- - .... .- -.-. -.- . .-."
      );
      expect(sampleTranslator.translateEngToMorseCode("WORKING")).toBe(
        ".-- --- .-. -.- .. -. --."
      );
    });

    test("Should be able to handle punctuation", () => {
      expect(sampleTranslator.translateEngToMorseCode(":! ")).toBe(
        "---... -.-.-- /"
      );
    });

    test("Should return a string", () => {
      expect(sampleTranslator.translateEngToMorseCode("123")).toBe(
        ".---- ..--- ...--"
      );
    });

    test("Should format the translation so that it is easy to understand", () => {
      expect(sampleTranslator.translateEngToMorseCode("This is working")).toBe(
        "- .... .. ... / .. ... / .-- --- .-. -.- .. -. --."
      );
      expect(sampleTranslator.translateEngToMorseCode("as easy as 123!")).toBe(
        ".- ... / . .- ... -.-- / .- ... / .---- ..--- ...-- -.-.--"
      );
    });

    test("Should be able to handle non string entries", () => {
      expect(sampleTranslator.translateEngToMorseCode(6)).toBe("-....");
      expect(sampleTranslator.translateEngToMorseCode(567432)).toBe(
        "..... -.... --... ....- ...-- ..---"
      );
    });
  });
});
