
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
    var selectedLength = window.prompt("Please select a password length between 8 and 128 characters.");
    var passwordLength = parseInt(selectedLength);
        if (passwordLength <= 7) {
            window.alert("That password is too short. Please try again.");
            generatePassword(); }
        else if (passwordLength >= 129) {
            window.alert("That password is too long. Please try again.");
        generatePassword(); }
        else {
            window.alert("Great! Your password will be " + passwordLength + " characters in length.");
        }
        var specCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "<", ";", ">", "?", "~", "`"];
        var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var userChoicePw = [];

    // walks user through options and concatenates selected alphabets into new array: "userChoicePw"
    function concatSelectedArrays () {
        var specCharSelect = window.confirm("If you would like your password to contain special characters, select OK.\nIf not, select Cancel.")
            if (specCharSelect === true) {
                userChoicePw = userChoicePw.concat(specCharArray);
                window.alert("Your password will contain special characters.");
            }
        var numSelect = window.confirm("If you would like your password to contain numbers, select OK.\nIf not, select Cancel.")
        if (numSelect === true) {
            userChoicePw = userChoicePw.concat(numArray);
            window.alert("Your password will contain numbers.");
        }
        var uppercaseSelect = window.confirm("If you would like your password to contain uppercase letters, select OK.\nIf not, select Cancel.")
        if (uppercaseSelect === true) {
            userChoicePw = userChoicePw.concat(uppercaseArray);
            window.alert("Your password will contain uppercase letters.");
        }
        var lowercaseSelect = window.confirm("If you would like your password to contain lowercase letters, select OK.\nIf not, select Cancel.")
        if (lowercaseSelect === true) {
            userChoicePw = userChoicePw.concat(lowercaseArray);
            window.alert("Your password will contain uppercase letters.");
        }
    }
        // is there a way to loop this program if user doesn't make a selection? Or close the generator? 
    concatSelectedArrays()
    // remove these console logs later on
    console.log(userChoicePw);
    console.log(userChoicePw.length);

    // shuffles the userChoicePw array
    function randomizePassword () {
        var userSelArrayLen = userChoicePw.length;
        for (var i = userSelArrayLen - 1; i > 0; i--) {
            var swappedInt = Math.ceil(Math.random() * (i + 1));
            var tempHolder = userChoicePw[i];
            userChoicePw[i] = userChoicePw [swappedInt];
            userChoicePw[swappedInt] = tempHolder;
        }
    }
    randomizePassword();
    // remove this console log later on
    console.log(userChoicePw);

    // pull the passwordlength amount of symbols from the new userChoice Pw array
    // then print that to the screen in the 
}


    // pull from each selected array to create the new array (selected password)
    // display the new password
    // look for more edge cases (such as non-numerical entries in the initial prompt- can convert strings to a number?)

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
// return password