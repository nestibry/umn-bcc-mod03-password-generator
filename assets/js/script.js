// Assignment Code
var generateBtn = document.querySelector("#generate");



/* ------------------------------------------------------------------- */

// Global variables
var numChar;  // Password Length



function userPrompts() {
    numChar = prompt(`Password Length: Choose a length of at least 8 characters and no more than 128 characters...`);
    if (numChar == null){
        numChar = "numChar is null";
        return;
    }
    console.log(numChar);

}




function generatePassword() {

    userPrompts();

    return numChar;
}






/* ------------------------------------------------------------------- */



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
