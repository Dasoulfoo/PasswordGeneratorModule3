// Assignment Code
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask for Input
  passwordLength = prompt(
    "How many characters would you like your password? Choose between 8 and 50"
  );
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Required value");
  } else if (passwordLength < 8 || passwordLength > 50) {
    passwordLength = prompt("Choose a number between 8 and 50");
    console.log("Password length " + passwordLength);
  } else {
    confirmLower = confirm("lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("special characters?");
    console.log("Special Character " + confirmSpecial);
  }

  // No answer then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("please choose criteria");
    // If true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  } else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  } else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  } else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  } else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  } else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  } else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  } else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  } else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  } else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  } else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  } else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  } else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  } else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  } else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  }

  // password length
  var passwordBlank = [];

  // random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices =
      userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
}
