// Assignment Code
let generateBtn = document.querySelector("#generate");
let settingsBtn = document.querySelector("#settings");
let settingsList = document.querySelector(".settings");
let textInput = document.querySelector("#pass-length");
let checkboxInput = document.querySelectorAll(".checkbox");
let passStatus = document.querySelector("#pass-length-status");
let charTypeStatus = document.querySelector("#char-type-status");
let lowercaseBox = document.querySelector("#lowercase");
let uppercaseBox = document.querySelector("#uppercase");
let numericBox = document.querySelector("#numeric");
let specialBox = document.querySelector("#special");
var passwordText = document.querySelector("#password");
let settingsOpen = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

function settingsToggle() {
  settingsOpen = !settingsOpen;
  passwordText.value = " ";
  generateBtn.disabled = true;
  passStatus.textContent = "❌";
  charTypeStatus.textContent = "❌";
  if (settingsOpen) {
    settingsBtn.textContent = "Close Settings";
    settingsList.setAttribute("style", "display: flex;");
    // Reset form inputs
    textInput.value = " ";
    checkboxInput.forEach(i => {
      i.checked = false;
    });
  } else {
    settingsBtn.textContent = "Open Settings";
    settingsList.setAttribute("style", "display: none;");
  }
}

function checkInput() {
  let passValid = false;
  let charValid = false;
  passStatus.textContent = "❌";
  charTypeStatus.textContent = "❌";
  if (textInput.value >= 8 && textInput.value <= 128) {
    passValid = true;
    passStatus.textContent = "✔️";
  }
  checkboxInput.forEach(i => {
    if (i.checked === true) {
      charValid = true;
      charTypeStatus.textContent = "✔️";
    }
  });

  if (passValid && charValid === true) {
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
}

function generatePassword() {
  let chars = addChars();
  let password = "";
  for (let i = 0; i < textInput.value; i++) {
    let random = Math.floor(Math.random() * chars.length);
    password += chars[random];
  }
  return password;
}

function addChars() {
  let passChars = "";
  chars = {
    "lowercase": "abcdefghijklmnopqrstuvwxyz",
    "uppercase":"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "numeric": "0123456789",
    "special": "!~`!#$%^&*+=-[]';,/{}|:<>?</>",
  }
  checkboxInput.forEach(i => {
    if (i.checked === true) {
      passChars += chars[`${i.id}`];
    }
  });
  return passChars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
settingsBtn.addEventListener("click", settingsToggle);
settingsList.addEventListener("input", checkInput);