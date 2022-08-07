export const morseCodeAlphabet = [
  { A: ".-" },
  { B: "-..." },
  { C: "-.-." },
  { D: "-.." },
  { E: "." },
  { F: "..-." },
  { G: "--." },
  { H: "...." },
  { I: ".." },
  { J: ".---" },
  { K: "-.-" },
  { L: ".-.." },
  { M: "--" },
  { N: "-." },
  { O: "---" },
  { P: ".--." },
  { Q: "--.-" },
  { R: ".-." },
  { S: "..." },
  { T: "-" },
  { U: "..-" },
  { V: "...-" },
  { W: ".--" },
  { X: "-..-" },
  { Y: "-.--" },
  { Z: "--.." },
  { 0: "-----" },
  { 1: ".----" },
  { 2: "..---" },
  { 3: "...--" },
  { 4: "....-" },
  { 5: "....." },
  { 6: "-...." },
  { 7: "--..." },
  { 8: "---.." },
  { 9: "----." },
  { ".": ".-.-.-" },
  { ",": "--..--" },
  { "?": "..--.." },
  { "'": ".----." },
  { "!": "-.-.--" },
  { "/": "-..-." },
  { "(": "-.--." },
  { ")": "-.--.-" },
  { "&": ".-..." },
  { ":": "---..." },
  { ";": "-.-.-." },
  { "=": "-...-" },
  { "+": ".-.-." },
  { "-": "-....-" },
  { _: "..--.-" },
  { $: "...-..-" },
  { "@": ".--.-." },
  { "¿": "..-.-" },
  { "¡": "--...-" },
  { " ": " " },
];

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
