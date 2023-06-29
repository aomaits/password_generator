
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var selectedLength = window.prompt("Choose a password length between 8 and 128 characters");
    var passwordLength = parseInt(selectedLength);
        if (passwordLength <= 7) {
            window.alert("That password is too short. Please try again.");
            generatePassword(); }
        else if (passwordLength >= 129) {
            window.alert("That password is too long. Please try again.");
        generatePassword(); }
        else {
            return;
        }

}
    
    var passwordCharacters = 0
    
    // selectedLength variable needs to be counted by the password generator
    

// objective - series of prompts when button is pressed, user selects which criteria they want included(lowercase, uppercase, numeric, and/or special characters), generates password between 8 and 128 characters, If none are selected need to loop back and prompt again! Password should then show up on the page

// function generatePassword() {
//   prompt how many characters (between 8 and 128)
//   var for charcters

//   What types of charctyers
//   make an array for each: special, number, upper, lower
//   window.confirm

//   Use answers to make password
//   vars that include all possible charcters
//   seperate vars for each type, arrays
//   example var upperLetters = ["A", "B", "C"]

//   take all true arrays and concat into new array -loop
//   choose random chars from arr based on user input
//   var push into new array
// var password = turn array into string .toString()

// return password;