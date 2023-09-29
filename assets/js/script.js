// Assignment Code
var generateBtn = document.querySelector("#generate");



/* ------------------------------------------------------------------- */

// Global variables
var newPassword;
var numChar;  // Password Length



// function userPrompts() {
// }




function generatePassword() {

    // Choose Password Length
    numChar = prompt(`Password Length: Choose a length of at least 8 characters and no more than 128 characters...`);
    numChar *= 1; //convert to a number
    console.log(`User chose password length: ${numChar}  type: ${typeof numChar}`);

    // Case: User clicks cancel
    if (numChar === null){
        do {
            var confirmAbort = confirm("Exit Password Generator?");
            if (confirmAbort){
                // Aborts to default screen with "Your Secure Password"
                return null;
            }
            numChar = prompt(`Password Length: Choose a length of at least 8 characters and no more than 128 characters...`);
            console.log(`User chose password length: ${numChar}  type: ${typeof numChar}`);
        }
        while(numChar === null);
    }

    // Check 


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
