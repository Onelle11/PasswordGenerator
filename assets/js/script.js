var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "~!@#$%^&*()_+,./";

var passwordCharacters = " ";

function generatePassword() {
    var length = parseInt(window.prompt(" Type the length ofthe password with 8 characters and not more than 128 "));
    var pw = confirm(" Do you want lowercase, uppercase, numbers, and special characters in your password? ");
    var output = " ";

    if (length < 8) {
        alert(" The length entered is less than 8 ");
        return " error ";
    }

    if (length > 128) {
        alert(" The length entered is more than 128 ");
        return " error ";
    }

    // confirm LC,UC,N,SC

    if (confirm(" Use lowercase ") == true ) {
        passwordCharacters += lowerCase;
    }

    if (confirm(" Use uppercase ") == true ) {
        passwordCharacters += upperCase;
    }

    if (confirm(" Use numbers ") == true ) {
        passwordCharacters += numbers;
    }

    if (confirm(" Use special characters ") == true ) {
        passwordCharacters += specialCharacters;
    }

    if (passwordCharacters.length == 0) {
        return "error";
    }

    //output
    for ( var i = 0; i < length; i++ ) {
        output += passwordCharacters[Math.floor(passwordCharacters.length * Math.random())];
    }

    return output

}

//

var generateBtn = document.querySelector("#generate");

// write PW function

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// event listener
generateBtn.addEventListener('click', writePassword);

