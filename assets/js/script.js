// Assignment Code
var generateBtn = document.querySelector("#generate");



/* ------------------------------------------------------------------- */

// Global variables
var newPassword;
var passwordLength;  // Password Length




function lengthPrompt() {
    var numChar = prompt(`Password Length: Choose a length of at least 8 characters and no more than 128 characters...`);
    console.log(`Password Length: ${numChar}  Type: ${typeof numChar}`);
    return numChar;
}


function userPrompts() {

    // Choose Password Length
    passwordLength = lengthPrompt();

    // Case: User clicks cancel
    if (passwordLength === null){
        do {
            var confirmAbort = confirm("Exit Password Generator?");
            if (confirmAbort){
                // Aborts to default screen with "Your Secure Password"
                return null;
            }
            passwordLength = lengthPrompt();
        }
        while(passwordLength === null);
    }

    // Case: Check that the value is a number
    passwordLength *= 1; //converts to a number
    console.log(`Converted to: ${passwordLength}  type: ${typeof passwordLength}`);
    if(!passwordLength){
        console.log("User did not enter a number. Aborting Password Generator...")
        return null;
    }


    // return passwordLength;


}



function generatePassword() {

    userPrompts();



    // // Choose Password Length
    // passwordLength = lengthPrompt();

    // // Case: User clicks cancel
    // if (passwordLength === null){
    //     do {
    //         var confirmAbort = confirm("Exit Password Generator?");
    //         if (confirmAbort){
    //             // Aborts to default screen with "Your Secure Password"
    //             return null;
    //         }
    //         passwordLength = lengthPrompt();
    //     }
    //     while(passwordLength === null);
    // }

    // // Case: Check that the value is a number
    // passwordLength *= 1; //converts to a number
    // console.log(`Converted to: ${passwordLength}  type: ${typeof passwordLength}`);
    // if(!passwordLength){
    //     console.log("User did not enter a number. Aborting Password Generator...")
    //     return null;
    // }


    return passwordLength;
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
