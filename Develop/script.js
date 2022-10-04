// Assignment Code
let generateBtn = document.querySelector("#generate");
let settingsBtn = document.querySelector("#settings");
let settingsList = document.querySelector(".settings-list")
let settingsOpen = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function settingsToggle() {
  settingsOpen = !settingsOpen;
  if (settingsOpen) {
    settingsBtn.textContent = "Close Settings";
    settingsList.setAttribute("style", "display: contents;")
  } else {
    settingsBtn.textContent = "Open Settings";
    settingsList.setAttribute("style", "display: none;")
  }
}

function checkInput() {
  let textInput = document.getElementById("#pass-length");
  console.log(textInput);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
settingsBtn.addEventListener("click", settingsToggle);
settingsList.addEventListener("Inputs", checkInput);