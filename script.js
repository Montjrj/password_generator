// Assignment Code
// var generateBtn = document.querySelector("#generate");
var generateBtn = document.querySelector("#generateBtn"); 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




//function to display prompts for password criteria 
function getPasswordCriteria(){

  const criteria ={
    length:parseInt(prompt('Enter the desired password length (between 8 and 128 characters):')),
    uppercase: confirm(' Would you like to include uppercase letters ?'),
    lowercase: confirm(' Would you like to include lowercase letters ?'),
    numbers: confirm(' Would you like to include numbers? '),
    symbols: confirm('Would you like to include symbols ?')
  }; 

   // Validate the input
   if (
    isNaN(criteria.length) ||
    criteria.length < 8 ||
    criteria.length > 128 ||
    (!criteria.uppercase && !criteria.lowercase && !criteria.numbers && !criteria.symbols)
  ) {
    alert('Invalid criteria. Please enter valid criteria for generating a password.');
    return null; // Return null to indicate invalid criteria
  }

  return criteria;
}

// Example usage:
const passwordCriteria = getPasswordCriteria();

if (passwordCriteria) {
  // The user provided valid criteria, you can proceed with password generation
  console.log('Password criteria:', passwordCriteria);
} else {
  console.log('Invalid criteria provided. Password generation aborted.');
}
