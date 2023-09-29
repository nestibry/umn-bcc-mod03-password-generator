// Assignment Code
var generateBtn = document.querySelector("#generate");



/* ------------------------------------------------------------------- */

// Global variables
var newPassword;
var passwordLength;




function lengthPrompt() {
    
    // Choose Password Length
    var numChar = prompt(`Password Length: Choose a length of at least 8 characters and no more than 128 characters...`);
    console.log(`Password Length: ${numChar}  Type: ${typeof numChar}`);

    // Case: User clicks cancel
    if (numChar === null){
        do {
            var confirmAbort = confirm("Exit Password Generator?");
            if (confirmAbort){
                // Aborts to default screen with "Your Secure Password"
                console.log("User selected to abort Password Generator...")
                return null;
            }
            numChar = prompt(`Password Length: Choose a length of at least 8 characters and no more than 128 characters...`);
            console.log(`Password Length: ${numChar}  Type: ${typeof numChar}`);
        }
        while(numChar === null);
    }

    // Case: Check that the value is a number
    numChar *= 1;   // converts to a number
    console.log(`Converted to: ${numChar}  type: ${typeof numChar}`);
    if(!numChar){
        // Aborts to default screen with "Your Secure Password"
        console.log("User did not enter a number. Aborting Password Generator...")
        return null;
    }

    return numChar;
}


function userPrompts() {

    newPassword = lengthPrompt();

}



function generatePassword() {

    userPrompts();

    return newPassword;
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
