// Assignment Code
var generateBtn = document.querySelector("#generate");



/* ------------------------------------------------------------------- */

// Global variables
var newPassword;
var numChar;  // Password Length



function userPrompts() {
    numChar = prompt(`Password Length: Choose a length of at least 8 characters and no more than 128 characters...`);

    console.log(numChar + " " + typeof numChar);

    if (numChar === null){
        do {
            var confirmAbort = confirm("Exit Password Generator?");
            if (confirmAbort){
                return numChar = "Joe Six-pack";
            }
            numChar = prompt(`Password Length: Choose a length of at least 8 characters and no more than 128 characters...`);
        }
        while(numChar === null);
    }



    // if (numChar == null){
    //     numChar = "numChar is null";
    //     return;
    // }
    //do
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
