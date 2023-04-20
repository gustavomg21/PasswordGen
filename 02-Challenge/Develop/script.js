// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt user for password criteria
  var length = parseInt(prompt("Choose between 8 and 128 characthers"));

  var lowercase = confirm("Do you want to include lowercase characters?");
  var uppercase = confirm("Do you want to include uppercase characters?");
  var number = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");

  // Define character sets to include in password
  var lowerList = "abcdefghijklmnopqrstuvwxyz";
  var upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberList = "0123456789";
  var specialList = "!@#$%^&*()[]{}|\/?";

  var requested = "";
  if (lowercase) {
    requested += lowerList;
  }
  if (uppercase) {
    requested += upperList;
  }
  if (number) {
    requested += numberList;
  }
  if (special) {
    requested += specialList;
  }
  console.log(requested);
  
  // Generate password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * requested.length);
    password += requested[randomIndex];
  }
  
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  confirm("This is your password: \n"+ password)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

