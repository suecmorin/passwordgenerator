// Assignment code here
//define variables
var password = "";                                  //initialize global variable that will pass info to index.html
var lowercaseletters="abcdefghijklmnopqrstuvwxyz";  //initialize component strings for building password string
var uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbrchoice="0123456789";
var specialchoice="!@#$%^&*()-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input in the html
function writePassword() {              //writePassword function executes generatePassword function then passes variable passwordText to index.html to appear on screen as id=#password
  var password = generatePassword();   //use function generatePassword to get parameters and compute password
  var passwordText = document.querySelector("#password");  //pass the new password back to html

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //when user presses "Generate Password" button on the screen, writePassword function (line 13) executes

    

function generatePassword() {                          //function called on line 14. End result of executing this function is variable "password"
    var passwordLength = "";
    var passwordLength = prompt("Please enter password length (8-128 characters)");  //prompt box appears to collect password parameters from user
        if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
          alert("Your entry was invalid. Please try again.");
         } 
         passwordLength = Math.floor(Number(passwordLength));

        var passwordInclusions = "";                                         //initialize local variable 
        var lower = confirm("Password should include lowercase letters?");  //confirm prompt forces user to press 'ok' or 'cancel'
        var upper = confirm("Password should include uppercase letters?");
        var numbr = confirm("Password should include numbers?");
        var special = confirm("Password should include special characters?");

        if ((lower == false) && (upper == false) && (numbr == false) && (special == false)) {  //if user answered 'cancel' to all confirms, print an error message
            alert("You must choose at least one character type");
        }

        if (lower == true) {                                                //if user presses ok, ...
            passwordInclusions += lowercaseletters;                         //add component string to big string that will be used to generate password
        }
        if (upper == true) {
            passwordInclusions += uppercaseletters;
          }
        if (upper == true) {
            passwordInclusions += numbrchoice;
          }
        if (special === true) {
         passwordInclusions += specialchoice;
        }

console.log(passwordInclusions)
console.log(passwordLength)

        passwordInclusionsLength = passwordInclusions.length;     //set variable to the length of the array of possible password components
console.log(passwordInclusionsLength)

    for (var i = 0; i <= passwordLength; i ++) {   //calculate the password and store the result in variable passwordText referenced on line 20
        var passwordText = passwordInclusions.charAt(Math.floor(Math.random() * passwordInclusionsLength)); //use charAt because the array contains characters (strings) and numbers
    }
}
