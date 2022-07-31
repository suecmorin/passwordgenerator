// Assignment code here
//define variables

var lowercaseletters="abcdefghijklmnopqrstuvwxyz";
var uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbrchoice="0123456789";
var specialchoice="!@#$%^&*()-+=";

var userChoice = window.prompt("Would you like recommendations for password selection? Enter Y or N");
userChoice = userChoice.toUpperCase();
if (!userChoice) {
     return;
} else if  (userChoice === "N") {
    return;
} else  (userChoice === "Y") {
    window.alert("Passwords should be at least 8 characters, contain uppercase letters, lowercase letters, numbers and special characters (!@#$%^&*");
}

function generatePassword() {
    var passwordLength = window.prompt("Please enter password length (8-128 characters");
        if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
            window.alert("Your entry was invalid. Please try again.")
        return passwordLength;
     }
    
    var lower = window.prompt("Password should include lowercase letters? Enter Y or N");
        lower = lower.toUpperCase();
        if (!lower) {
    return;
        } else if (lower === "Y") {
        var lowerYes = 1;
    }

    var upper = window.prompt("Password should include uppercase letters? Enter Y or N");
        upper = upper.toUpperCase();
        if (!upper) {
        return;
        } else if (upper === "Y") {
        var upperYes = 1;
        }

    var numbr = window.prompt("Password should include numbers? Enter Y or N");
        numbr = numbr.toUpperCase();
        if (!numbr) {
        return;
        } else if (numbr === "Y") {
        var numbrYes = 1;
        }

    var special = window.prompt("Password should include special characters? Enter Y or N");
        special = special.toUpperCase();
        if (!special) {
        return;
        } else if (special === "Y") {
        var specialYes = 1;
    }

    if (lower ==="N") && (upper === "N") && (numbr === "N") && (special === "N") {
        window.alert("You must choose at least one character type");
        return;
    }

    if [(lowerYes = 1) && (upperYes =  1) && (numbrYes = 1) && (specialYes = 1)] {
        passwordRange = lowercaseletters.concat(uppercaseletters, numbrchoice, specialchoice);
    } else if [(lowerYes = 1) && (upperYes =  1) && (numbrYes = 1) && (specialYes = 0)] { 
         passwordRange = lowercaseletters.concat(uppercaseletters, numbrchoice); 
    } else if [(lowerYes = 1) && (upperYes =  1) && (numbrYes = 0) && (specialYes = 0)];
         passwordRange = lowercaseletters.concat(uppercaseletters); 
    { else  passwordRange = lowercaseletters;        
    }

    for (var = i; i <= passwordLength; i ++) {
        var password = Math.floor(Math.random() * passwordRange.length);
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);