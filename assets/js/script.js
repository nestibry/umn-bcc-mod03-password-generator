// Assignment Code
var generateBtn = document.querySelector("#generate");



/* ------------------------------------------------------------------- */

// Global variables
// var newPassword;
// var passwordLength;




function lengthPrompt() {
    
    // Choose number of characters for password length
    var numChar = prompt(`Password Length: Choose a length of at least 8 characters and no more than 128 characters...`);
    console.log(`Password Length: ${numChar}  Type: ${typeof numChar}`);

    // Case: User clicks cancel --> Return to userPrompts() with null value --> User can either click 'OK' to exit password generator OR 'Cancel' to re-prompt the lengthPrompt()
    if (numChar === null) {
        return null;
    }

    // Case: Check that the value is a number AND within range [8:128] -- Re-prompt user to enter password length
    numChar *= 1;   // converts to a number
    console.log(`Converted to: ${numChar}  type: ${typeof numChar}`);

    if(!numChar){
        
        console.log("User did not enter a number. Re-prompting user to enter password length...")
        numChar = lengthPrompt();

    } else if (numChar < 8 || numChar > 128) {
        
        console.log("User did not enter a number between 8 and 128. Re-prompting user to enter password length...")
        numChar = lengthPrompt();

    }

    return numChar;
}


function userPrompts() {
    // Important: need to re-evaluate what gets returned.

    var numChar = lengthPrompt(); 

    // Case: User clicks cancel during lengthPrompt() --> 
        // lengthPrompt() returns null --> 
        // Confirm Exit Password Generator --> 
        // User can either click 'OK' to exit password generator OR 'Cancel' to re-prompt the lengthPrompt()
    if (numChar === null){
        do {
            var confirmAbort = confirm("Exit Password Generator?");
            if (confirmAbort){
                // Aborts to default screen with "Your Secure Password" --> returns null for the 'numChar'
                console.log("User selected to abort Password Generator. Returning to the default browser...")
                return null;
            }
            numChar = lengthPrompt();
        }
        while(numChar === null);
    }

    var includeLowercase = confirm(`Include 'lowercase' characters? \n    Yes  :=  OK\n    No  :=  Cancel`);
    console.log(`Include lowercase: ${includeLowercase}  Type: ${typeof includeLowercase}`);

    var includeUppercase = confirm(`Include 'UPPERCASE' characters? \n    Yes  :=  OK\n    No  :=  Cancel`);
    console.log(`Include UPPERCASE: ${includeUppercase}  Type: ${typeof includeUppercase}`);

    var includeSpecChar = confirm(`Include 'Special Characters' characters? \n( e.g., ! " # $ % & ' ) \n    Yes  :=  OK\n    No  :=  Cancel`);
    console.log(`Include Special Characters: ${includeSpecChar}  Type: ${typeof includeSpecChar}`);

    var confirmParams = confirm(`Confirm password parameters: \n   Include lowercase:   ${includeLowercase} \n   Include UPPERCASE: ${includeUppercase} \n   Include Special Characters:    ${includeSpecChar}`)
    console.log(`Confirm Parameters: ${confirmParams}  Type: ${typeof includeSpecChar}`);

    // Case: User clicks cancel to confirm parameters prompt --> Return to default browser
    if (confirmParams === false) {
        console.log("User selected to cancel to confirm parameters. Returning to the default browser...")
        return null;
    }

    return numChar;
    // Important: need to re-evaluate what gets returned.
}



function generatePassword() {

    var newPassword = userPrompts();
    // Important: Need to add in something later if the passwordLength is null that the generation process needs to be aborted

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
