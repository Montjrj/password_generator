// Assignment Code
var generateBtn = document.querySelector("#generateBtn");
var input;
var includeNumbers = document.querySelector("#includeNumbers");
var includeSymbols = document.querySelector("#includeSymbols");
var includeUppercase = document.querySelector("#includeUppercase");
var includeLowercase = document.querySelector("#includeLowercase"); 


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

var lengthInput; 
var includeUppercase;
var includeLowercase;
var includeSymbols; 
var includeNumbers;


  // Prompt the user for password length
  do {
    input = prompt('Please enter your desired password length (between 8 and 128 characters):');
    lengthInput = parseInt(input);

    if (isNaN(lengthInput)) {
      alert('Invalid input. Please enter a valid number.');
    } else if (lengthInput < 8 || lengthInput > 128) {
      alert('Invalid password length. Please enter a number between 8 and 128');
    }
  } while (isNaN(lengthInput) || lengthInput < 8 || lengthInput > 128);

  // Ask whether to include uppercase letters (Y for Yes, N for No)
  do {
    input = prompt('Would you like to include uppercase letters? (Enter Y for Yes or N for No)').toUpperCase();
    includeUppercase = input === 'Y';

    if (!includeUppercase && input !== 'N') {
      alert('Invalid input. Please enter Y for Yes or N for No.');
    }
  } while (input !== 'Y' && input !== 'N');

  // Ask whether to include lowercase letters (Y for Yes, N for No)
  do {
    input = prompt('Would you like to include lowercase letters? (Enter Y for Yes or N for No)').toLowerCase();
    includeLowercase = input === 'y';

    if (!includeLowercase && input !== 'n') {
      alert('Invalid input. Please enter Y for yes or N for NO.');
    }
  } while (input !== 'y' && input !== 'n');

  // Ask whether to include numbers (Y for Yes, N for No)
  do {
    input = prompt('Would you like to include numbers? (Enter Y for Yes or N for No)').toLowerCase();
    includeNumbers = input === 'y';

    if (!includeNumbers && input !== 'n') {
      alert('Invalid input. Please enter Y for yes or N for NO.');
    }
  } while (input !== 'y' && input !== 'n');

  // Ask whether to include symbols (Y for Yes, N for No)
  do {
    input = prompt('Would you like to include symbols? (Enter Y for Yes or N for No)').toLowerCase();
    includeSymbols = input === 'y';

    if (!includeSymbols && input !== 'n') {
      alert('Invalid input. Please enter Y for yes or N for NO.');
    }
  } while (input !== 'y' && input !== 'n');


  var password = generatePassword(lengthInput, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // Function to generate a password based on the criteria
function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  
   // Define character sets for each type of character
   const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
   const numberChars = '0123456789';
   const symbolChars = '!@#$%^&*()_-+=<>?';
 
   // Create an empty string to store the characters that can be used for the password
   let validChars = '';
 
   // Initialize the generated password as an empty string
   let password = '';
 
   // Add character sets to the validChars string based on user criteria
   if (includeUppercase) {
     validChars += uppercaseChars;
   }
   if (includeLowercase) {
     validChars += lowercaseChars;
   }
   if (includeNumbers) {
     validChars += numberChars;
   }
   if (includeSymbols) {
     validChars += symbolChars;
   }
 
   // Check if at least one character type is selected
   if (validChars === '') {
     alert('Please select at least one character type.');
     return '';
   }
 
   // Generate the password by randomly selecting characters from validChars
   for (let i = 0; i < length; i++) {
     const randomIndex = Math.floor(Math.random() * validChars.length);
     password += validChars.charAt(randomIndex);
   }
 
   return password;
  
  }

}
