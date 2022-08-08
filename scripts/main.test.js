import { Translator } from "./main";

describe("Translator tests", () => {
  describe("Default translator", () => {
    // const alphabetArr = [{ A: 1 }, { b: 2 }, { c: "3" }, { 6: 4 }, { ".": 0 }];
    const engAlphabet = ["a", "b", "c", "d", "e", "1", " "];
    const morseCodeAlphabet = ["1", "2", 3, "4", "5", "6", " "];
    const sampleTranslator = new Translator(engAlphabet, morseCodeAlphabet);
    test("Should be able to take an equivalent alphabet object and translate the key into the value", () => {
      expect(sampleTranslator.translateCharacter("a")).toBe("1");
    });

    test("Should be able to handle lower and upper case entries", () => {
      expect(sampleTranslator.translateCharacter("B")).toBe("2");
    });

    test("Should return a string", () => {
      expect(sampleTranslator.translateCharacter("c")).toBe("3");
    });

    test("Should be able to handle non string entries", () => {
      expect(sampleTranslator.translateCharacter(6)).toBe(
        "You must enter a single character as a string"
      );
    });
  });
});
