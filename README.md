# morse-code-translator

A web-based programme that converts English to Morse Code based on user input, made using HTML, CSS/SCSS, vanilla Javascript and an OOP approach. It includes two classes, an English -> Morse Code translator class and a Morse Code -> English translator class, which, when fed a library of equivalent alphabets, include all the information and methods necessary for translating between the two alphabets.

The translator is case insensitive, thus “sos” should produce same output as “SOS”: “••• −−− •••”. When translating Morse Code to English, the output is uppercased, thus “sos” converted to Morse Code and back to English should output “SOS”.

Further Developments:

Add option to change input language (i.e. French, Spanish, etc.)
Or enable the input to be in any lnaguage (i.e. include multiple languages in the alphabet library)

Technologies & Features:

JavaScript
OOP approach
Unit Tested using Jest
HTML5
CSS
Mobile first / responsive design
Git Version Control
Unit Testing:

I used Jest to test the alien class, extracting it into a separate js file, to check that the properties and methods on the class are working correctly.
Further Developments:

To add in a game introduction, informing user of how to play.
Refactor code to ensure the functions are more 'pure'.
