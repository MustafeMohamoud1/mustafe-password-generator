// Assignment code here
var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCaseLetter = "abcdefghijklmonpqrstuvwxyz".split("");
var specialCharacters = "!@£$%^&*()?".split("");
var numbers = "0123456789".split("");

console.log(upperCaseLetter);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordOptions = [];

  var finalPassword = [];

  var passwordLength = prompt("How long would you like your password to be?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick a number between 8-129");
    return null;
  }

  var upperCase = confirm("Would you like uppercase letters");

  var lowerCase = confirm("Would you like lowercase letters");

  var numeric = confirm("Would you like numeric characters");

  var symbols = confirm("Would you like special characters");

  if (upperCase === true) {
    passwordOptions = passwordOptions.concat(upperCaseLetter);
  }

  if (lowerCase === true) {
    passwordOptions = passwordOptions.concat(lowerCaseLetter);
  }

  if (numeric === true) {
    passwordOptions = passwordOptions.concat(numbers);
  }

  if (symbols === true) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  }

  for (let index = 0; index < passwordLength; index++) {
    var random = Math.floor(Math.random() * passwordOptions.length);
    finalPassword.push(passwordOptions[random]);
    console.log(finalPassword);
  }

  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
