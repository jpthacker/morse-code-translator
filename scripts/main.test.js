import { morseCodeAlphabet } from "./alphabet";

import * as classes from "./main";
classes.MorseCodeTranslator;

describe("English to morse code translator tests", () => {
  describe("Default translator", () => {
    const sampleTranslator = new classes.MorseCodeTranslator(morseCodeAlphabet);
    test("Should be able to translate english to morse code", () => {
      expect(sampleTranslator.translateCharacter("working")).toBe(
        ".-- --- .-. -.- .. -. --."
      );
      expect(sampleTranslator.translateCharacter("Hello")).toBe(
        ".... . .-.. .-.. ---"
      );
    });

    test("Should be able to handle lower and upper case entries", () => {
      expect(sampleTranslator.translateCharacter("JackThacker")).toBe(
        ".--- .- -.-. -.- - .... .- -.-. -.- . .-."
      );
      expect(sampleTranslator.translateCharacter("WORKING")).toBe(
        ".-- --- .-. -.- .. -. --."
      );
    });

    test("Should be able to handle punctuation", () => {
      expect(sampleTranslator.translateCharacter(":! ")).toBe(
        "---... -.-.-- /"
      );
    });

    test("Should return a string", () => {
      expect(sampleTranslator.translateCharacter("123")).toBe(
        ".---- ..--- ...--"
      );
    });

    test("Should format the translation so that it is easy to understand", () => {
      expect(sampleTranslator.translateCharacter("This is working")).toBe(
        "- .... .. ... / .. ... / .-- --- .-. -.- .. -. --."
      );
      expect(sampleTranslator.translateCharacter("as easy as 123!")).toBe(
        ".- ... / . .- ... -.-- / .- ... / .---- ..--- ...-- -.-.--"
      );
    });

    test("Should be able to handle non string entries", () => {
      expect(sampleTranslator.translateCharacter(6)).toBe(
        "You must enter a string"
      );
    });
  });
});
