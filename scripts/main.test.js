import * as classes from "./main";
classes.Translator;
classes.englishToMorseCodeTranslator;

describe("Translator tests", () => {
  describe("Default translator", () => {
    const alphabetArr = [{ A: 1 }, { b: 2 }, { c: "3" }, { 6: 4 }, { ".": 0 }];
    // const engAlphabet = ["a", "b", "c", "d", "e", "1", " "];
    // const morseCodeAlphabet = ["1", "2", 3, "4", "5", "6", " "];
    const sampleTranslator = new classes.Translator(alphabetArr);
    test("Should be able to take an equivalent alphabet object and translate the key into the value", () => {
      expect(sampleTranslator.translateCharacter("abc")).toBe("123");
    });

    test("Should be able to handle lower and upper case entries", () => {
      expect(sampleTranslator.translateCharacter("B")).toBe("2");
    });

    test("Should return a string", () => {
      expect(sampleTranslator.translateCharacter("c")).toBe("3");
    });

    test("Should be able to handle non string entries", () => {
      expect(sampleTranslator.translateCharacter(6)).toBe(
        "You must enter a string"
      );
    });
  });

  // describe("English to Morse Code Translator", () => {
  //   const engToMC = new classes.englishToMorseCodeTranslator(
  //     ["A", "B", "C", "D", "E", "F", " "],
  //     [".-", "-...", "-.-.", "-..", ".", "..-.", " "]
  //   );
  //   test("Should be able to handle the two libraries required to translate from Eng to MC", () => {
  //     expect(engToMC.translateMorseCode("a")).toBe(".- ");
  //     expect(engToMC.translateMorseCode("f")).toBe("..-. ");
  //   });

  //   test("Should format the translation so that it is easy to understand", () => {});
  // });
});
