
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
    console.log("At line 20 = " +  passwordLength);
    console.log("At line 21 = " + selectedLength);
    console.log("At line 22 = " + typeof selectedLength);
    console.log("At line 23 = " + typeof passwordLength);
    if (passwordLength <= 7 ) {
        window.alert("That password is too short. Please try again.");
        generatePassword(); }
    else if (passwordLength >= 129 ) {
        window.alert("That password is too long. Please try again.");
        generatePassword(); }
    else if (passwordLength > 7 && passwordLength < 129) {
        window.alert("Great! Your password will be " + passwordLength + " characters in length.");
    }
    else {
        window.alert("You have not selected a valid numerical password length. Please try again.");
        generatePassword();
    }
        
    var specCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "<", ";", ">", "?", "~", "`"];
    var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var userChoicePw = [];
    console.log(userChoicePw);

    // walks user through options and concatenates selected alphabets into new array: "userChoicePw"
    function concatSelectedArrays () {
        var specCharSelect = window.confirm("If you would like your password to contain special characters, select OK.\nIf not, select Cancel.")
            if (specCharSelect === true) {
            // I should check to see if I need to set this to true, it should work without
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
        if (userChoicePw.length === 0) {
            window.alert("You have not made a selection for your password. Please try again.");
            }
        }
    
    concatSelectedArrays();
        // issue!!! The program loops if you start without making a password selection. How to get it to check that there's no user password choices made without looping twice...? 

    // remove these console logs later on
    console.log("At line 77 " + userChoicePw);
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

    userChoicePw = userChoicePw.splice(0, passwordLength);
    // remove this console log later on
    console.log(userChoicePw);
    userChoicePw = userChoicePw.join("");
    userChoicePw = userChoicePw.toString();
    
    return userChoicePw;
}