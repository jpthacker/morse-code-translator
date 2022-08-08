// OBJECT VERSION

// export const morseCodeAlphabet = [
//   { A: ".-" },
//   { B: "-..." },
//   { C: "-.-." },
//   { D: "-.." },
//   { E: "." },
//   { F: "..-." },
//   { G: "--." },
//   { H: "...." },
//   { I: ".." },
//   { J: ".---" },
//   { K: "-.-" },
//   { L: ".-.." },
//   { M: "--" },
//   { N: "-." },
//   { O: "---" },
//   { P: ".--." },
//   { Q: "--.-" },
//   { R: ".-." },
//   { S: "..." },
//   { T: "-" },
//   { U: "..-" },
//   { V: "...-" },
//   { W: ".--" },
//   { X: "-..-" },
//   { Y: "-.--" },
//   { Z: "--.." },
//   { 0: "-----" },
//   { 1: ".----" },
//   { 2: "..---" },
//   { 3: "...--" },
//   { 4: "....-" },
//   { 5: "....." },
//   { 6: "-...." },
//   { 7: "--..." },
//   { 8: "---.." },
//   { 9: "----." },
//   { ".": ".-.-.-" },
//   { ",": "--..--" },
//   { "?": "..--.." },
//   { "'": ".----." },
//   { "!": "-.-.--" },
//   { "/": "-..-." },
//   { "(": "-.--." },
//   { ")": "-.--.-" },
//   { "&": ".-..." },
//   { ":": "---..." },
//   { ";": "-.-.-." },
//   { "=": "-...-" },
//   { "+": ".-.-." },
//   { "-": "-....-" },
//   { _: "..--.-" },
//   { $: "...-..-" },
//   { "@": ".--.-." },
//   { "¿": "..-.-" },
//   { "¡": "--...-" },
//   { " ": " " },
// ];

// const englishAlphabet = [];
// const morseCodeAlphabet = [];

// const mixedAlphabetStr =
//   "A .- B -... C -.-. D -.. E . F ..-. G --. H .... I .. J .--- K -.- L .-.. M -- N -. O --- P .--. Q --.- R .-. S ... T - U ..- V ...- W .-- X -..- Y -.-- Z --.. 0 ----- 1 .---- 2 ..--- 3 ...-- 4 ....- 5 ..... 6 -.... 7 --... 8 ---.. 9 ----. . .-.-.- , --..-- ? ..--.. ' .----. ! -.-.-- / -..-. ( -.--. ) -.--.- & .-... : ---... ; -.-.-. = -...- + .-.-. - -....- _ ..--.- $ ...-..- @ .--.-. ¿ ..-.- ¡ --...-";

// let mixedAlphabetArr = [];
// const seperateString = (string) => {
//   mixedAlphabetArr = string.split(" ");
// };

// seperateString(mixedAlphabetStr);
// console.table(mixedAlphabetArr);

// const objectifyArray = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       const morseCodeObject = {};
//       morseCodeObject[array[i]] = array[i + 1];
//       morseCodeAlphabet.push(morseCodeObject);
//     }
//   }
//   const morseCodeObject = {};
//   morseCodeObject[" "] = " ";
//   morseCodeAlphabet.push(morseCodeObject);
// };

// objectifyArray(mixedAlphabetArr);

// console.log(morseCodeAlphabet);

// ARRAYS VERSION

export const englishAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  ",",
  "?",
  "'",
  "!",
  "/",
  "(",
  ")",
  "&",
  ":",
  ";",
  "=",
  "+",
  "-",
  "_",
  "$",
  "@",
  "¿",
  "¡",
  " ",
];
export const morseCodeAlphabet = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
  "-----",
  ".----",
  "..---",
  "...--",
  "....-",
  ".....",
  "-....",
  "--...",
  "---..",
  "----.",
  ".-.-.-",
  "--..--",
  "..--..",
  ".----.",
  "-.-.--",
  "-..-.",
  "-.--.",
  "-.--.-",
  ".-...",
  "---...",
  "-.-.-.",
  "-...-",
  ".-.-.",
  "-....-",
  "..--.-",
  "...-..-",
  ".--.-.",
  "..-.-",
  "--...-",
  " ",
];

// const mixedAlphabetStr =
//   "A .- B -... C -.-. D -.. E . F ..-. G --. H .... I .. J .--- K -.- L .-.. M -- N -. O --- P .--. Q --.- R .-. S ... T - U ..- V ...- W .-- X -..- Y -.-- Z --.. 0 ----- 1 .---- 2 ..--- 3 ...-- 4 ....- 5 ..... 6 -.... 7 --... 8 ---.. 9 ----. . .-.-.- , --..-- ? ..--.. ' .----. ! -.-.-- / -..-. ( -.--. ) -.--.- & .-... : ---... ; -.-.-. = -...- + .-.-. - -....- _ ..--.- $ ...-..- @ .--.-. ¿ ..-.- ¡ --...-";

// let mixedAlphabetArr = [];
// const seperateString = (string) => {
//   mixedAlphabetArr = string.split(" ");
// };

// seperateString(mixedAlphabetStr);
// console.table(mixedAlphabetArr);

// const splitAlphabetArray = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       englishAlphabet.push(array[i]);
//     } else {
//       morseCodeAlphabet.push(array[i]);
//     }
//   }
//   morseCodeAlphabet.push(" ");
//   englishAlphabet.push(" ");
// };

// splitAlphabetArray(mixedAlphabetArr);

// console.log(morseCodeAlphabet);
// console.log(englishAlphabet);
