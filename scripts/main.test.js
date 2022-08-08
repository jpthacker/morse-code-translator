import { Translator } from "./main";

describe("Translator tests", () => {
  describe("Default translator", () => {
    const alphabetArr = [{ a: 1 }, { b: 2 }, { c: "3" }, { ".": 0 }];
    const sampleTranslator = new Translator(alphabetArr);
    test("Should be able to take an equivalent alphabet object and translate the key into the value", () => {
      expect(sampleTranslator.translateFirstCharacter("a")).toBe("1");
    });
  });
});
