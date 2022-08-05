// Assignment code here
//define variables
var password = "";                                  //initialize global variable that will pass info to index.html
var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";  //initialize component strings for building password string
var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbrchoice = "0123456789";
var specialchoice = "!@#$%^&*()-+=";

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



function generatePassword() {                          //function called on line 14. End result of executing this function is value for variable "password"
  var passwordLength = 0;
  var passwordLength = prompt("Please enter password length (8-128 characters)");  //prompt box appears to collect password parameters from user
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("Your entry was invalid. Please try again.");
  }

  var passwordInclusions = "";                                         //initialize local variable 
  var lower = confirm("Password should include lowercase letters?");  //confirm prompt forces user to press 'ok' or 'cancel'
  var upper = confirm("Password should include uppercase letters?");
  var numbr = confirm("Password should include numbers?");
  var special = confirm("Password should include special characters?");

  if ((!lower) && (!upper) && (!numbr) && (!special)) {  //if user answered 'cancel' to all confirms, print an error message
    alert("You must choose at least one character type");
  }

  if (lower) {                                                //if user presses ok, ...
    passwordInclusions += lowercaseletters;                         //add component string to big string that will be used to generate password, like concatting arrays
  }
  if (upper) {
    passwordInclusions += uppercaseletters;
  }
  if (numbr) {
    passwordInclusions += numbrchoice;
  }
  if (special) {
    passwordInclusions += specialchoice;
  }

  passwordInclusionsLength = passwordInclusions.length;     //set variable to the length of the array of possible password components

  for (var i = 0; i <= passwordLength; i++) {   
    var randomindex = Math.floor(Math.random() * passwordInclusionsLength); //set up a variable to hold 
    password += passwordInclusions[randomindex]; //add items from passwordInclusions to variable password based on index set up on previous line
  }
  return password;
}
